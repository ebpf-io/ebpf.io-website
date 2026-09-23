---
date: '2026-09-23T17:00:00.000Z'
title: 'Cloudflare’s eBPF Replatforming Part 3: Technical Challenges Implementing eBPF'
description: 'The third instalment chronicling Cloudflare’s journey with eBPF, looking at technical challenges the team faced.'
path: "/blog/cloudflare-replatforming-3"
ogImage: ogimage3.png
categories:
  - Technology
---

By Cloudflare Engineering

> This series chronicles Cloudflare's eight-year journey with eBPF from a specialized DDoS tool to the programmable backbone of their global network. It covers everything from contributing to the Linux kernel and technical challenges to business ROI to advice and operational strategies for other companies adopting eBPF.

Building on standard Linux networking APIs only gets you so far, and pushing past those limits requires teams willing to dig deep and persist. From a grueling 13-month organizational odyssey to get our code merged into the mainline Linux kernel, to debugging "impossible" packet corruption in the trenches, this post details the steep setbacks, the dead ends, and ultimately, the five groundbreaking technical achievements that emerged on the other side.

## The Hardest Architectural Challenge: A 13-month Upstreaming Organizational Odyssey

The single longest and most organizationally challenging hurdle was [fixing the shortcoming of the BSD socket API](https://blog.cloudflare.com/tubular-fixing-the-socket-api-with-ebpf/) by getting the sk_lookup BPF program type merged into the mainline Linux kernel. What started as a straightforward idea to program the socket lookup turned into a 13-month journey.

Cloudflare needed to run services on millions of IPs across thousands of servers. Standard Linux sockets forced a choice between binding to every IP individually (creating millions of sockets, which kills performance) or binding to 0.0.0.0 (which prevents running multiple services on the same port with different IPs). We initially used workarounds like TPROXY to steer traffic, but this required elevated privileges and had subtle interactions with the network stack. We also maintained custom kernel patches for years (i.e., SO_BINDTOPREFIX, carried since 2017) that were not accepted upstream. As we worked to get our patches upstreamed, we faced multiple pushbacks from the community.

**Pushback One - Wrong approach:** The first RFC (RFCv1) was designed so the BPF program would modify the packet's 4-tuple to influence socket lookup. Kernel reviewers at Netconf 2019 rejected this, directing the team toward "map-based redirection", selecting a socket from a BPF map instead. The entire design had to be reworked for RFCv2.

**Pushback Two - SOCKMAP wasn't ready:** The team planned to use REUSEPORT_SOCKARRAY maps, but reviewers directed them to use SOCKMAP instead which at the time didn't support UDP sockets or listening TCP sockets at all. The team had to implement SOCKMAP support for UDP (4 patch versions, merged in Linux 5.7) before the actual sk_lookup work could proceed. This was an entire intermediate project that wasn't in the original plan.

**Pushback Three - New attachment model required:** While the team was busy with SOCKMAP, Linux 5.7 introduced bpf_link-based attachment, and BPF maintainers adopted a new policy: all new program types must use bpf_link. The infrastructure only supported cgroup and tracing programs, not network namespaces. The team had to implement bpf_link for network namespace attachment, with multi-program support for future-proofing.

**Pushback Four - API semantics evolved:** The socket selection mechanism changed from map-based selection to a two-step approach using bpf_sk_assign, plus integration with reuseport load-balancing and a new SK_DROP verdict code.

The effort comprised 10+ separate upstream patch series. Kernel work takes persistence. Having an idea and coding it up can be just the beginning. Real work starts when feedback from maintainers and reviewers comes in. This can lead to unforeseen work, which sometimes is big enough in scope to constitute an intermediate milestone. It can be disheartening, because even though you are making progress toward the finish line, the goal post somehow keeps moving.

The organizational challenge was sustaining this multi-person effort across more than a year, while the production systems that needed sk_lookup (Tubular, Spectrum integration, bind-to-prefix replacement) waited. The sk_lookup hook was eventually merged into Linux 5.9 and is now available to every Linux user. Cloudflare built [Tubular](https://github.com/cloudflare/tubular) on top of it: a control plane that allows binding services to arbitrary prefixes and changing IP assignments on the fly without restarting applications.

## The Hardest Debugging Challenge: "Impossible" Packet Corruption

The most technically demanding debugging incident involved [flowtrackd](https://blog.cloudflare.com/announcing-flowtrackd/), the TCP protection system. The system began crashing due to packet corruption that seemed theoretically impossible. Valid TCP packets were being truncated or corrupted after being received but before the application processed them.

The application would successfully parse a packet once, but a second parse of the same memory buffer moments later would panic because the data had changed. This suggested memory corruption, a compiler bug, or a kernel bug.

The issue was extremely rare, reproducing only once a day on a cluster of 10 virtual machines running constant load tests. Standard debugging tools were ineffective because the corruption happened at the driver level.

To identify the issue, the team used ftrace and kprobes to build a custom "flight recorder" inside the kernel. This traced the lifecycle of individual packet descriptors through the kernel's ring buffers.The trace data revealed a race condition in the Linux veth (virtual ethernet) driver. The driver was violating NAPI guarantees, allowing the kernel to "flush" (reuse) a memory buffer while the application was still reading it.

To resolve the issue, Cloudflare engineers patched the Linux kernel to ensure packet processing finished before the buffer was released. The patch was merged upstream.

## Five Technically Groundbreaking Achievements

There is no single "most impressive" achievement. Cloudflare has used eBPF to solve fundamentally different types of problems, from raw packet processing speed to architectural scalability to kernel API design. Five specific achievements stand out as technically groundbreaking for different reasons.

1. Contributing sk_lookup to the Mainline Linux Kernel and Building Tubular

The most architecturally significant achievement is the creation and upstream acceptance of the sk_lookup BPF program type (merged into Linux 5.9), which fundamentally extends the BSD socket API without modifying the kernel's socket lookup code directly. Cloudflare's Anycast architecture requires every server to listen on millions of IPs, something the standard bind() and listen() API, designed 30 years ago, could not scale to support.

The sk_lookup hook allows userspace to program the kernel's socket lookup logic. On top of it, Cloudflare built Tubular, a control plane that binds services (like HTTP or DNS) to millions of IPs or disjoint IP ranges on the fly without restarting applications. Tubular now dispatches traffic on every Cloudflare edge server.

2. "Soft-Unicast" — Solving IPv4 Address Exhaustion

Perhaps the most innovative architectural feat was [decoupling IP addresses from physical servers](https://blog.cloudflare.com/cloudflare-servers-dont-own-ips-anymore/). Cloudflare used eBPF to implement "Soft-unicast," which allows them to assign a single IPv4 address to a data center and slice it across multiple physical servers using port ranges.

Standard networking binds an IP to a single interface. Cloudflare's Unimog load balancer (XDP) inspects the port on incoming packets and dispatches them to the specific machine owning that port slice. This allows a single /32 IP address to be shared among dozens of physical servers, addressing the growing challenge of IPv4 address exhaustion and allowing the fleet to scale without requiring proportionally more IP addresses.

3. Dropping 8 Million Packets Per Second on Commodity Hardware

In terms of raw engineering performance, the l4drop system (XDP) is a standout achievement. It replaced a proprietary hardware-dependent solution with software that runs on standard Linux kernels. In production, a single server using l4drop [successfully dropped over 8 million packets per second during](https://blog.cloudflare.com/how-cloudflare-auto-mitigated-world-record-3-8-tbps-ddos-attack/) a volumetric attack. Even while incoming packet volume spiked by a factor of 40x, overall CPU usage increased by only ~10%, proving that commodity hardware plus eBPF could outperform specialized proprietary solutions.

4. udpgrm — Solving the Unsolvable: Zero-Downtime UDP Restarts

[udpgrm (UDP Graceful Restart Marshal) solves a problem](https://blog.cloudflare.com/quic-restarts-slow-problems-udpgrm-to-the-rescue/) that had been discussed for years across multiple failed attempts. The core difficulty is that UDP is stateless, so there's no equivalent of TCP's listen/accept handoff between old and new processes.

udpgrm hooks into six different BPF attach points simultaneously:

- BPF_CGROUP_INET4_BIND / BPF_CGROUP_INET6_BIND — to create per-socket state on bind
- BPF_CGROUP_GETSOCKOPT / BPF_CGROUP_SETSOCKOPT — to implement a custom socket API (UDP_GRM_WORK_GEN, UDP_GRM_SOCKET_GEN) entirely in eBPF, without kernel modifications
- BPF_CGROUP_UDP4_SENDMSG / BPF_CGROUP_UDP6_SENDMSG — to "affirm" flows (add them to the flow tracking table) on send
- Plus a SO_ATTACH_REUSEPORT_EBPF program that performs the actual socket selection

The system manages multiple "generations" of sockets (not just two), maintains a flow table for connection stickiness, and supports two dissection modes: generic flow-hash and QUIC-aware cookie-based routing (where a 3-byte cookie is embedded in the QUIC DCID to directly select the application socket without flow table lookups).

5. Kernel-to-Application Distributed Tracing via ebpf_exporter

The [distributed tracing integration in ebpf_exporter](https://github.com/cloudflare/ebpf_exporter/tree/master/tracing) represents a novel bridging of two worlds that traditionally have no connection: kernel-level packet processing and application-level request tracing.

Userspace applications like nginx contain USDT probes that pass OpenTelemetry trace and span IDs from the application into the kernel. eBPF programs attach to these uprobes and store the trace context in a BPF_MAP_TYPE_HASH keyed by socket pointer. When kernel events occur on traced sockets (TCP retransmits, CFS throttling, scheduler events), the BPF program creates spans using the stored trace context and pushes them via ringbuffer to userspace. ebpf_exporter decodes these events and emits them as OpenTelemetry spans to the local tracefwdr. The result is a single trace in Jaeger/Tempo that shows both nginx request processing and kernel TCP retransmits as correlated spans.

## Conclusion

Pushing the limits of the Linux kernel is no simple engineering feat. As these challenges demonstrate, replatforming a global network with eBPF requires more than just writing clever code. It demands deep technical resilience, persistence in the face of moving goalposts, and a commitment to collaborating with the broader open source community.

Whether it was navigating a 13-month upstreaming process for sk_lookup, decoupling physical servers from IPs to combat IPv4 exhaustion, or achieving the "unsolvable" zero-downtime UDP restart, these hard-fought engineering battles have fundamentally transformed our architecture. But technical achievements are only half the story. In part 4 we will look at how these investments have paid off in practice, through faster incident response, deeper observability, and an entirely new category of operational visibility.
