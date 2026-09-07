---
date: '2026-09-07T17:00:00.000Z'
title: 'Cloudflare’s eBPF Replatforming Part 2: Filling Gaps in the Linux Ecosystem with eBPF'
description: 'The second instalment chronicling Cloudflare’s journey with eBPF, looking at why standard Linux networking APIs couldn’t support Cloudflare’s requirements, and what the team built to fill those gaps.'
path: "/blog/cloudflare-replatforming-2"
ogImage: ogimage2.png
categories:
  - Technology
---

By Cloudflare Engineering

> This series chronicles Cloudflare's eight-year journey with eBPF from a specialized DDoS tool to the programmable backbone of their global network. It covers everything from contributing to the Linux kernel and technical challenges to business ROI to advice and operational strategies for other companies adopting eBPF.
 
In [part 1](https://ebpf.io/blog/cloudflare-replatforming-1/), we covered why Cloudflare bet on eBPF as a platform rather than a collection of point solutions. In this post we'll get into the specifics: the places where standard Linux networking APIs simply couldn't support Cloudflare's requirements, and what the team built to fill those gaps.
 
Cloudflare runs some of the largest networks in the world. As hardware diversified, performance requirements grew, and edge services multiplied, the gaps in the Linux ecosystem were becoming apparent. eBPF provides Cloudflare with the capability to programmably extend the operating system kernel safely and efficiently, overcoming rigid limitations in standard Linux networking APIs that didn't age well and couldn't support our specific requirements around scale, visibility, and reliability.
 
eBPF delivers at least eleven major capability categories that would be impossible or significantly harder with traditional kernel mechanisms, custom kernel modules, or userspace approaches.
 
## Gap 1: Line-Rate DDoS Mitigation
 
Cloudflare [auto-mitigated a world record 3.8 Tbps DDoS attack](https://blog.cloudflare.com/how-cloudflare-auto-mitigated-world-record-3-8-tbps-ddos-attack/) with eBPF. Traditional approaches would have fallen short for multiple reasons:
 
- **iptables** operates much later in the stack (after sk_buff allocation). Production data showed that moving mitigation from iptables to XDP reduced CPU overhead by several times while handling significantly more attack traffic.
- **Kernel bypass (e.g., DPDK or proprietary solutions)** requires busy-polling a dedicated CPU and is hardware-specific. Our previous solution was incompatible with ARM servers and newer NICs. XDP runs always-on across multiple CPUs without busy polling and works on any NIC with driver support, eliminating vendor lock-in.
- **Generic iptables-to-XDP converters** (like bpfilter) only match on the standard 5-tuple via eBPF maps. Our DDoS mitigation rules require arbitrary packet matching, p0f signatures, DNS query inspection, and cross-header comparisons, where we can compile these rules directly to eBPF bytecode via a custom BPF-to-C compiler.
- **Custom kernel modules** risk kernel crashes and require recompilation on kernel upgrades. eBPF programs are verified for safety by the kernel. They can never crash, hang, or interfere with the kernel negatively.
eBPF's XDP (eXpress Data Path) hook runs packet-processing logic in the NIC driver layer — before the kernel networking stack even touches the packet. Cloudflare's l4drop system uses XDP eBPF to drop over 10 million packets per second on a single CPU, with only ~10% total CPU overhead during an 8 Mpps attack. The system replaced a previous kernel-bypass solution that was tied to a specific NIC vendor. ([L4Drop blog](https://blog.cloudflare.com/l4drop-xdp-ebpf-based-ddos-mitigations/), [How to drop 10M packets](https://blog.cloudflare.com/how-to-drop-10-million-packets/))
 
## Gap 2: XDP Traffic Was Invisible to Standard Tools
 
Our XDP-based DDoS mitigation (L4Drop) and load balancers drop or redirect packets at the earliest possible point, directly in the NIC driver. Standard tools like tcpdump hook into the networking stack after the packet has been processed by the network driver. Because eBPF/XDP programs run directly in the driver (before the OS allocates an sk_buff), packets dropped or redirected at this layer are invisible to standard debugging tools. This would make incident debugging impossible for the most critical mitigation layer.
 
We built [xdpcap](https://github.com/cloudflare/xdpcap), a packet capture tool that hooks directly into our XDP programs to expose this traffic to userspace. It provides:
 
- Capture of packets at each stage of the XDP pipeline (sampler → l4drop → l4lb), with tcpdump-compatible filter syntax
- Per-action packet counts (XDPDrop, XDPPass, XDPTx, XDPAborted) showing exactly how many packets were received vs. matched
- pcap output that can be piped to tcpdump or opened in Wireshark
- Offset-based filtering to match on original (pre-encapsulation) packets inside Unimog-encapsulated traffic
This gives engineers full visibility into dropped malicious traffic during active incidents, allowing verification that mitigations are working correctly and not dropping legitimate traffic. Without it, debugging packet-level issues in production would have been impossible.
 
## Gap 3: The BSD Socket API Couldn't Scale
 
Cloudflare operates services across millions of IPs and needs multiple services to share the same port on different address ranges, something the standard bind() API cannot do (you can bind to a specific IP or 0.0.0.0, nothing in between). Our Spectrum product also needs to listen on all 65,535 ports simultaneously. However, binding to 0.0.0.0 (wildcard) prevents binding specific IPs on the same port, while binding to individual IPs doesn't scale to thousands of addresses. Workarounds like TPROXY were complex, error-prone, and difficult to maintain at our scale.
 
Cloudflare contributed the sk_lookup eBPF hook to the Linux kernel and built Tubular on top of it, enabling programmable socket dispatch that routes incoming connections to the correct application based on arbitrary logic. ([Tubular blog](https://blog.cloudflare.com/tubular-fixing-the-socket-api-with-ebpf/))
 
What it replaced (and why those approaches were inadequate):
 
- **Binding to wildcard addresses** (0.0.0.0): Considered a security risk and discouraged. It also prevents multiple services from sharing a port due to conflicts.
- **SO_BINDTOPREFIX**: A custom kernel patch carried since 2017 that was not accepted upstream, causing ongoing maintenance and developer education burden.
- **Creating thousands of sockets**: Our DNS resolver was binding to tens of thousands of IPs due to DDoS constraints, which was impractical for performance and resource usage. Running 65,535 listen sockets was equally infeasible.
- **TPROXY**: Complex to set up, difficult to maintain, and makes TCP sockets vulnerable to SYN floods.
With eBPF socket dispatch, services still create sockets but it does not matter what address/port they bind to. The eBPF program consults an (IP, port)-to-service mapping and delivers packets accordingly. Mappings can be reprogrammed on the fly without forcing service restarts. This enables:
 
- Mix-and-match of any service on any IP/port, previously "very hard" due to Linux kernel limitations
- A/B service testing based on arbitrary packet criteria (source IP, TTL, ISP, geo, operating system from SYN packet)
- Downtime-free IP migration because the server itself need not be aware of an IP change
- Downtime-free reloads by slowly rolling out new releases without service interruption
## Gap 4: DDoS Rules Weren't Flexible
 
When building L4Drop, we evaluated the common industry approach of storing rules in eBPF maps (as used by several large-scale operators). It didn't work for us because:
 
- Our filters rely on arbitrary packet data matching and cross-header comparisons (a single p0f signature might check both IP and TCP options)
- The eBPF verifier disallows unbound loops, which combined with arbitrary matching, prevented iterating over rules in maps
- We wanted to reuse existing tcpdump/libpcap filter syntax
We built [cbpfc](https://github.com/cloudflare/cbpfc), a compiler that converts classic BPF (cBPF) syntax into eBPF or C for generating eBPF programs from complex DDoS rules that couldn't be expressed easily with maps alone. This lets us compile our existing filter rules into performant eBPF bytecode that passes the verifier.
 
## Gap 5: Software-Defined Stateful DDoS Protection (flowtrackd)
 
iptables conntrack requires bidirectional visibility and is not designed for asymmetric routing, like Direct Server Return. On the other hand, hardware DDoS appliances are inflexible, vendor-dependent, and deployed in limited scrubbing centers.
 
Cloudflare's software-defined eBPF approach runs in every data center (330+ cities globally), is instantly updatable, and not limited to one appliance's capabilities. Cloudflare's flowtrackd implements unidirectional TCP flow tracking as a state machine hooked into the network interface using eBPF. For Magic Transit customers (where Cloudflare only sees ingress traffic), it determines whether to forward or drop each TCP packet based on connection state, automatically mitigating ACK floods at 6+ Mpps with zero false positives. ([flowtrackd blog](https://blog.cloudflare.com/announcing-flowtrackd/))
 
## Gap 6: Programmable Packet Filtering
 
At Cloudflare's scale, having flexibility in the network to meet a myriad of customer use cases is as important as raw throughput. nftables provides a powerful declarative syntax but is limited to its built-in match types. It cannot look into arbitrary protocol payloads or implement complex custom parsing logic. Standard firewall tools also cannot easily perform complex logic such as inspecting packet payloads for application-layer signatures (e.g., SIP VoIP attacks) or using dynamic lists of millions of IPs efficiently.
 
eBPF gives the flexibility of writing C programs with the speed of in-kernel execution, enabling features like SIP protocol protection and advanced content matching. By embedding eBPF programs within nftables rules via the xt_bpf extension, Cloudflare's Magic Firewall can perform deep packet inspection, protocol validation, and arbitrary payload matching that nftables alone cannot express. ([Magic Firewall blog](https://blog.cloudflare.com/programmable-packet-filtering-with-magic-firewall/))
 
## Gap 7: Flexible Packet Encapsulation and Metadata for Internal Systems
 
For internal packet routing and encapsulation systems, eBPF allows evaluating packet eligibility and executing features at the correct position in the abstraction stack, all in one place.
 
With the traditional approach (packet marking at different netfilter hooks plus new encapsulation devices), every new feature required careful verification that nothing already existing would break. Moreover, communicating additional per-packet metadata to downstream systems required adding new encapsulation devices with different configurations, which became increasingly difficult to manage.
 
With eBPF, packets can be encapsulated with custom metadata fields, and the program itself can evaluate packet eligibility based on relevant customer configuration, without the decoupling of evaluation and execution that the traditional approach required.
 
## Gap 8: Zero-Downtime UDP Restarts Didn't Exist
 
Restarting UDP servers, particularly for stateful protocols like QUIC, without dropping packets is notoriously difficult. Standard kernel load balancing breaks flow stickiness when the number of sockets changes during a restart. No existing mechanism supported "working generations" to transition flows smoothly from old to new processes.
 
We built [udpgrm](https://github.com/cloudflare/udpgrm), a daemon that manages SO_REUSEPORT groups and eBPF maps to route packets for established flows to the correct process generation during upgrades. It creates a "working generation" of sockets and routes packets from existing flows to the old process while sending new flows to the new process, enabling true zero-downtime upgrades for UDP protocols. ([QUIC restarts, slow problems: udpgrm to the rescue](https://blog.cloudflare.com/quic-restarts-slow-problems-udpgrm-to-the-rescue/))
 
## Gap 9: Standard Metrics Hid the Truth
 
Linux kernel metrics (e.g., TcpExtListenDrops, TcpExtListenOverflows) are global counters with no per-application granularity. Standard counters can only calculate averages, which hide performance spikes — a disk running fine on average might have occasional read operations taking 500ms.
 
**Capabilities impossible with traditional observability:**
 
- **IO latency histograms**: Block IO request queuing and servicing visualized as traces. Standard tools like blktrace cannot feed into modern observability pipelines and are not practical for continuous production use.
- **Socket-level distributed tracing**: Probing kernel functions related to socket lifecycle (dial, write, read, close) and correlating kernel spans with userspace application traces. For example, attaching TCP retransmit tracing to nginx so that "if we see a trace for a request and there's an unexplained gap, there could be a kernel span telling us about a retransmit that explains it."
- **Process execution tracing**: Tracing execve() calls across command execution with full OpenTelemetry span output.
- **Per-cgroup, per-application metrics**: Tracking TCP/UDP ephemeral port requests broken down by address family, protocol, and cgroup is impossible with global /proc counters.
**Why traditional approaches fall short:**
 
- **node_exporter** only provides counters from /proc with no histograms, no per-app breakdown. Averages hide the "long tail" of latency issues that are mathematically impossible to see with standard counters.
- **blktrace** or **ftrace** are not practical for continuous production use because they are too heavy and not safely sandboxed.
- **Custom kernel modules** for metrics would risk stability and require maintenance across kernel versions.
We built [ebpf_exporter](https://github.com/cloudflare/ebpf_exporter) to generate high-resolution histograms (disk I/O latency, run queue delay) directly from the kernel with low overhead before exporting them to Prometheus and OpenTelemetry. ([ebpf_exporter blog](https://blog.cloudflare.com/introducing-ebpf_exporter/)) This visibility was simply impossible before and enables root-cause analysis of performance incidents that would be invisible with traditional tools. For example, run-queue latency histograms reveal when processes are waiting to run (CPU saturation) even if average CPU usage looks fine.
 
## Gap 10: Live Patching Security Vulnerabilities (LSM BPF)
 
When a security vulnerability is found in a kernel feature (e.g., the unshare syscall allowing privilege escalation), the traditional fix involves patching the kernel source and rebooting the server, which is a disruptive process.
 
Using the LSM (Linux Security Module) BPF hook, Cloudflare can inject a security policy that blocks or restricts specific syscalls dynamically. This acts as a "hot patch," securing the system immediately without waiting for upstream patches or restarting the machine.
 
## Gap 11: Production Reliability Was Non-Negotiable
 
For tools like [Tubular](https://github.com/cloudflare/tubular), we needed guarantees that off-the-shelf eBPF tooling couldn't provide, like unattended releases across thousands of machines, fail-safe deployments where failures leave the previous version running, and crash resiliency where userspace crashes don't impact packet flow.
 
We achieved this by persisting state in kernel BPF maps. When Tubular crashes, packets keep flowing and the kernel holds the state. We also needed mechanisms to enable or disable specific rules dynamically without reloading entire programs, which required custom ELF binary manipulation in our loaders.
 
## The Bottom Line
 
Cloudflare operates at a scale where generic solutions fall short. Rather than just building workarounds, we contributed improvements upstream, like the sk_lookup hook, and open-sourced tools like [ebpf_exporter](https://github.com/cloudflare/ebpf_exporter), [Tubular](https://github.com/cloudflare/tubular), and [xdpcap](https://github.com/cloudflare/xdpcap) for others facing similar challenges.
 
The gaps described here weren't just engineering inconveniences — solving them required deep kernel work, sustained organizational effort, and in several cases, contributions back to the Linux kernel itself. In part 3 we'll cover the hardest of those challenges and the technical achievements that came out of them.
