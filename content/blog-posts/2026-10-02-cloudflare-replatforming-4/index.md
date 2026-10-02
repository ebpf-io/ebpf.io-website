---
date: '2026-10-02T17:00:00.000Z'
title: 'Cloudflare’s eBPF Replatforming Part 4: Observability, Operations, and Reliability Improvements from eBPF'
description: 'The fourth instalment chronicling Cloudflare’s journey with eBPF, looking at how eBPF improved observability, incident response, and fleet security.'
path: "/blog/cloudflare-replatforming-4"
ogImage: ogimage4.png
categories:
  - Technology
---

By Cloudflare Engineering

> This series chronicles Cloudflare's eight-year journey with eBPF from a specialized DDoS tool to the programmable backbone of their global network. It covers everything from contributing to the Linux kernel and technical challenges to business ROI to advice and operational strategies for other companies adopting eBPF.

In [part 1](https://ebpf.io/blog/cloudflare-replatforming-1/), we covered why Cloudflare bet on eBPF as a platform rather than a collection of point solutions. In [part 2](https://ebpf.io/blog/cloudflare-replatforming-2/), we looked at the places where standard Linux networking APIs couldn't support Cloudflare's requirements, and what the team built to fill those gaps.

In [part 3](https://ebpf.io/blog/cloudflare-replatforming-3/), we covered the architectural shifts and upstreaming efforts required to build Cloudflare’s eBPF-based network data path. Once merged, moving the data path into the kernel alters the operational boundary. When dropping millions of packets directly in the driver via XDP before an sk_buff is even allocated, standard tools like tcpdump are rendered blind. Similarly, user-space counters often mask the micro-bursts of CFS throttling or I/O latency that degrade service reliability. This post details how Cloudflare leverages eBPF to fundamentally improve its operational posture. We will examine how observability had to be rebuilt from the ground up such as implementing custom XDP packet capture (xdpcap) and exporting high-resolution kernel histograms. More importantly, we will explore how these observability gains, combined with autonomous edge-local mitigation (l4drop) and BPF LSM hot-patching, translate directly into measurable reliability improvements and more resilient fleet operations.

## eBPF Observability Improvements in Practice

eBPF observability tools have been decisive in diagnosing and resolving incidents across packet corruption, latency spikes, packet drops, memory exhaustion, scheduling anomalies, and DDoS verification, including situations where traditional tools like top, tcpdump, and node_exporter provided no visibility at all.

### Debugging "Impossible" Packet Corruption (The flowtrackd Incident)

One of the most complex incidents occurred when flowtrackd, Cloudflare's TCP protection system service, began crashing due to packet corruption that occurred after the packet was received but before it was processed, a scenario that initially seemed impossible.

The issue was rare, hard to reproduce, and seemingly random. Engineers used BPF programs attached to ftrace and kprobes tracepoints to build a "flight recorder" that traced the lifecycle of individual packet descriptors through the kernel ring buffers without overwhelming the system. The trace revealed a race condition in the Linux kernel's veth driver: it was processing packets out of order, violating NAPI guarantees and causing the kernel to overwrite a memory buffer the application was still reading. The fix was a kernel patch merged upstream.

### Solving Mysterious VoIP Packet Drops with kfree_skb Tracing

Multiple customer escalations reported intermittent failures for SIP (VoIP) traffic transiting Magic Transit. The DoS team confirmed no mitigations were dropping fragments, and the issue appeared to be somewhere deep in the Linux network stack.

A bpftrace script hooked into the kfree_skb tracepoint, the kernel function called whenever a socket buffer is freed, revealed that the kernel was exhausting its IP fragmentation reassembly buffer due to fragment-flood attacks against customers. Existing Prometheus metrics confirmed a significant number of servers across multiple locations had hit the limit. The fix was to tune the buffer parameters and reduce fragment lifetime, reducing affected servers to near zero. tcpdump could see fragments arriving but had no way to determine why the kernel was dropping them. Only eBPF tracing of kfree_skb, with access to the drop reason and kernel stack trace, could pinpoint the exact code path responsible.

### Shifty Flows Detection: New Category of Incident Observability

Shifty flows, where ECMP or load-balancer hashing changes cause TCP connections to arrive at a different server mid-connection, were historically undetectable at scale. eBPF hooks now track TCP resets and dirty connection closures, emitting events via ringbuffer to a userspace daemon for cross-server correlation. Even at low sampling rates across the fleet, the system detects a meaningful volume of shifty flows continuously. This entire category of incident (broken TCP connections due to routing changes) was previously invisible, something teams at Cloudflare had been trying to solve for years.

### Granular Metrics and Kernel-Level Distributed Tracing (ebpf_exporter)

Traditional Linux metrics rely on counters, which only provide averages. Averages often mask "micro-spikes" that cause user pain. Cloudflare uses ebpf_exporter to collect high-resolution histograms directly from the kernel and, with OpenTelemetry tracing, enables root-cause analysis of performance incidents that would be invisible with traditional tools.

Run-queue latency histograms reveal when processes are waiting to run due to CPU saturation even if average CPU usage looks fine. For TCP retransmit tracing, kernel-level tracing can be attached to userspace services and correlated with application request traces: "If we see a trace for a request and there's an unexplained gap, there could be a kernel span telling us about a retransmit that explains it."

eBPF spans also show when CFS throttling interrupts application work (an ~80ms work period followed by ~20ms throttle) which is invisible to standard metrics over longer time horizons but surgically visible when inserted as spans into regular traces. Kernel tracing can be enabled only for specific zones or requests, making it practical for targeted incident investigation without fleet-wide overhead.

### Detecting "Invisible" Latency Spikes (SSD Replacement)

During a standard SSD replacement, average latency metrics looked acceptable. ebpf_exporter histograms visualized the I/O latency distribution as a heatmap and revealed a bi-modal latency profile: while most writes were fast, a significant number were taking 500ms to 1.0s. This was invisible to standard monitoring but was hurting cache performance. Finding these spikes allowed engineers to reject the hardware before it caused broader customer pain.

### Pinpointing OS Upgrade Failures

During a major operating system upgrade (Debian Jessie to Stretch), Cloudflare experienced a mysterious 5x spike in CPU load. Standard tools showed high CPU but didn't explain why. Using eBPF to trace kernel timer metrics, engineers saw that memory allocation functions were stalling for up to 12 seconds, pointing directly to memory allocation stalls caused by a systemd bug that had broken TCP segmentation offload.

### eBPF JIT Memory Exhaustion

Engineers discovered that certain servers had consumed nearly all of the kernel's BPF JIT memory limit, causing eBPF program loads to fail silently. No crash, no log, just programs failing to load. This affected multiple services that depend on eBPF, including security-critical features like seccomp.

The investigation used bpftrace to read a kernel-internal counter directly, revealing which servers were near the limit. The team then surveyed the fleet to map the scope of the issue.

Systematic triage using bpftool prog list identified the source of excessive BPF program memory consumption, and the team built an ebpf_exporter probe to export the metric to Prometheus, giving fleet-wide visibility into what had previously been an invisible kernel-internal counter.

## eBPF Security Improvements in Practice

While eBPF is most commonly associated with network data paths and deep observability, the eBPF Linux Security Module (LSM) hooks offer equally significant improvements for fleet security operations and XDP can quickly mitigate even the largest DDoS attacks. Protecting 20% of internet traffic is no easy task, but eBPF has given Cloudflare multiple improvements across incident response and security engineering.

### XDP l4drop: High-Throughput, Low-CPU DDoS Attack Mitigation

When an incident is detected, the speed and efficiency of mitigation directly determines blast radius.  In production, single servers using XDP drop over 8 million packets per second. During such attacks, even when incoming packet volume increased by 40x, overall CPU usage rose by just ~10%.

Across multiple production incidents, migrating DDoS mitigation from iptables to XDP-based l4drop has consistently demonstrated several times lower CPU overhead while handling significantly higher packet rates. In representative cases, l4drop dropped substantially more attack traffic while consuming a fraction of the CPU that iptables required for smaller attacks. This efficiency directly translates to incident impact: the less CPU consumed by mitigation, the more capacity remains for serving legitimate traffic.

### Edge-Local DDoS Detection (dosd): Orders of Magnitude Faster Than Centralized Systems

The most impactful incident response improvement is dosd, a masterless distributed L3/L4 (and later L7) DDoS detection system that runs on every edge metal. dosd feeds mitigation rules directly into the eBPF-based l4drop XDP pipeline on the same machine, eliminating the round-trip to a centralized data center.

Measurable speed improvements over the previous centralized system (Gatebot), include:

- Orders-of-magnitude faster sampling: Edge sampling occurs at a rate dramatically faster than in the legacy centralized system, enabling immediate detection and rule generation on the server that receives the attack.
- Seconds, not minutes: The centralized system required samples to be shipped to a core data center, processed, mitigations emitted, propagated back to the edge, and applied a process that could take tens of seconds or longer during large attacks. dosd detects attacks in a matter of seconds, consistently outperforming the centralized pipeline.
- Higher sensitivity: Because dosd analyzes traffic locally at a much higher sampling rate, it can detect smaller attacks that would fall below the centralized system's detection floor.
- Automated mitigation: The vast majority of L3/L4 DDoS attacks are now detected and mitigated locally without human intervention. Since expanding the system, dosd also mitigates the majority of Layer 7 attacks locally.
- Resilience improvement: dosd has no single point of failure. Each server independently contributes to PoP-wide threat analysis, meaning attack detection continues even if the core data center is unreachable.

### Debugging and Verifying Previously Invisible Packet Drops (xdpcap)

Standard tools like tcpdump hook into the networking stack after the packet has been processed by the network driver. Because eBPF/XDP programs run directly in the driver before the OS allocates an sk_buff, packets dropped or redirected at this layer are invisible to standard debugging tools. This would make incident debugging impossible for the most critical mitigation layer.

xdpcap is a custom packet capture tool that hooks directly into XDP programs via eBPF debug maps. It captures packets at each stage of the XDP pipeline (sampler > l4drop > l4lb) with tcpdump-compatible filter syntax, shows per-action packet counts (XDPDrop, XDPPass, XDPTx, XDPAborted), and produces pcap output that can be piped to tcpdump or opened in Wireshark. It also supports offset-based filtering to match on original (pre-encapsulation) packets inside Unimog-encapsulated traffic. This gives engineers full visibility into dropped malicious traffic during active incidents, allowing verification that mitigations are working correctly and not dropping legitimate traffic.

### Security Incident Prevention: eBPF LSM Hot-Patching

eBPF allows Cloudflare to respond to zero-day kernel vulnerabilities immediately without rebooting servers. eBPF LSM (Linux Security Module) programs act as dynamic kernel security policies that can be deployed fleet-wide without rebooting.

They can block specific syscall patterns that enable privilege escalation (for example, restricting unshare/clone with CLONE_NEWUSER), and additional eBPF LSM programs can protect the security policies themselves from being disabled. The overhead is negligible, only a small cycle penalty on the specific restricted syscalls. Kernel security vulnerabilities can be mitigated immediately without waiting for upstream patches or scheduling reboots. eBPF LSM behaves like dynamically-loaded kernel modules but with the safety guarantees of the eBPF verifier.

## Conclusion

As these post-mortems illustrate, the intersection of eBPF and deep kernel tracing fundamentally changes Linux operations, reliability, and security. Resolving "impossible" NAPI violations in the veth driver or uncovering IP fragmentation exhaustion via kfree_skb tracepoints demonstrates that eBPF is a critical tool for operations of large scale systems.

By moving telemetry directly into the kernel and handling threat mitigation autonomously at the edge, Cloudflare has significantly increased the overall reliability of the fleet while reducing CPU overhead. However, operating dynamic BPF tracing tools and BPF LSM security policies across a massive fleet introduces new operational complexities. In the fifth blog, we will examine the deployment mechanics of how Cloudflare manages the lifecycle of these eBPF objects, ensures safe fleet-wide distribution, and operationalizes eBPF at scale.
