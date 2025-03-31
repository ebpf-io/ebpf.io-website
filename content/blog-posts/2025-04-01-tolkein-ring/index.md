---
path: '/blog/support-for-tolkien-ring'
date: '2025-04-01T10:00:00.000Z'
title: 'eBPF Announces Support for Tolkien Ring'
description: 'eBPF revives Tolkien Ring, proving even ancient networks can be rebuilt better'
ogImage: tolkien-ebee.png
toc: false
categories:
  - Community
---

![A bee with a ring... for now](tolkien-ebee.png)

Author: Bill Mulligan - Isovalent

Before WiFi there was Ethernet. Before Ethernet there was [Token Ring](https://en.wikipedia.org/wiki/Token_Ring). And before Token Ring there was Tolkien Ring. Before Tolkien Ring, the packets wandered without purpose, lost to the void.

Now support for Tolkien Ring is coming to eBPF. Since its humble beginnings as a packet processor, eBPF has expanded to become a general purpose runtime enabling developers to extend and rebuild whole swaths of the kernel better from low overhead observability to granular security, optimized scheduling, and continuous profiling. eBPF is now returning to its roots with its most ambitious project yet, native support for the original networking protocol Tolkien Ring.

For those unfamiliar, Tolkien Ring is the oldest networking protocol, established in the Days of Númenor, when the world was young and packets were not yet buried under layers of abstraction. It was the first fully decentralized, peer-to-peer network where messages were passed by whispers on the wind, encoded in runes, and secured by the strength of oaths. But as time passed, its wisdom was lost, replaced by lesser protocols constrained by mere physical wires and fleeting radio waves, forgotten by all but the wisest maintainers. Now, thanks to eBPF, this ancient technology is being restored to its former glory.

“eBPF already transformed networking at Meta twice, first with [Katran](https://engineering.fb.com/2018/05/22/open-source/open-sourcing-katran-a-scalable-network-load-balancer/) processing millions of packets of cat pictures per second then again with [netkit making container networking](https://fosdem.org/2025/schedule/event/fosdem-2025-4045-an-introduction-to-netkit-the-bpf-programmable-network-device/) with isolation from orcs as fast as host networking.” said Alexei Starovoitov eBPF co-founder and co-maintainer. “We’ve also seen eBPF expand into networking use cases we never imagined like HTTP parsing in the kernel or a [Layer 2 switch in Kubernetes for VMs](https://github.com/kube-vm-project/eSwitch), but bringing back Tolkien Ring was a challenge unlike any other. Half the documentation was in Elvish and the other half was a subdialect of Dwarvish last recorded in the times of Moria’s First Age maintainers. Adapting Tolkien Ring to modern infrastructure required pushing eBPF to its limits, but in the end, it was the only technology capable of binding them all.”

Integrating Tolkien Ring into the kernel came with a few surprises. For example, Tolkien Ring does not retransmit packets, it simply ensures they arrive precisely when they are meant to. Packet loss is not a possibility but a matter of destiny, and unlike conventional cryptographic handshakes, Tolkien Ring’s security model is built on binding oaths, which once sworn, cannot be revoked. eBPF maintainers also had to fight hard against the Tolkien Ring Wraiths: the Nine were once features, but time and corruption had turned them into CI flakes. Happily, all fell back into order after a few additional patches, which saved everybody a trip to Mount Doom.

The verifier also required substantial updates. While it was already capable of checking programs for unsafe memory access, ensuring programs run to completion and do not crash or otherwise harm the system, and allowing only privileged users to load eBPF programs, the verifier also had to account for the unique nature of Tolkien Ring itself. eBPF may be [Turing complete](https://isovalent.com/blog/post/ebpf-yes-its-turing-complete/), but Tolkien Ring demanded something even stricter, Fate complete. Mutable state is forbidden, once a value is set, it can never be changed, for the past cannot be rewritten. Tolkien Ring also does not “retry” packets, if a message failed to arrive, it was simply never meant to be. The verifier had to enforce this logic, rejecting any program that attempted to interfere with the will of the network.

Beyond the existing loader libraries for languages like Go, Rust, and Java, new ones had to be written for the ancient tongues Elvish, Dwarvish, and even the Black Speech of Mordor. Parsing rune encoded eBPF instructions proved particularly challenging, as some scripts changed meaning depending on the phase of the moon. The JIT compiler also had to be extended to translate these arcane instructions into efficient machine code while preserving their original intent. Miscompiling a single rune could turn a simple forwarding program into a summoning ritual! Luckily, as one of the fastest-moving subsystems of the kernel, the eBPF community proved up to the challenge.

“This project is a testament to the power and flexibility of eBPF not just to build the future, but to rebuild the past, better than before,” said Thomas Graf, Chair of the eBPF Foundation and VP Isovalent at Cisco. “We’re seeing a shift across the industry as people look for alternatives to legacy platforms, and eBPF is proving to be the perfect tool for modernizing old systems without being constrained by their original limitations. Whether it’s replacing outdated networking and orchestration stacks or resurrecting protocols once thought lost to time, eBPF allows us to innovate while still honoring and leveraging the foundations of the past.”

Of course, simply restoring Tolkien Ring wasn’t enough. It had to be optimized for modern workloads. Traditional implementations relied on hand-etched routing tables, often inscribed in stone or passed down through oral tradition, making updates slow and error-prone. With eBPF, these routing decisions can now be dynamically updated in real time, adapting to changing network conditions while maintaining the protocol’s original intent. Early benchmarks show a 300% increase in message throughput, though some wizards argue this is merely the will of the Valar.

As always, the eBPF community remains committed to pushing the boundaries of what’s possible whether in the modern cloud native era or the forgotten networks of the First Age. Because eBPF is One bee to rebuild Tux, one JIT to run them, one verifier to judge them all, and in the kernel bind them.

Where to learn more about eBPF:

[eBPF Documentary](https://www.youtube.com/watch?v=Wb_vD3XZYOA)

[Learning eBPF eBook](https://cilium.isovalent.com/hubfs/Learning-eBPF%20-%20Full%20book.pdf)

[What is eBPF?](https://ebpf.io/what-is-ebpf/)

[eBPF Landscape](https://ebpf.io/applications/)

[eBPF Foundation](https://ebpf.foundation/)
