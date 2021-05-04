---
path: "/blog/ebpf-updates-2021-05"
date: "2021-05-04T10:00:00.000Z"
title: "eBPF Updates #5: CNCF Proposals, Kinvolk Acquired, eCHO, the Cost of Tail Calls, Systemd Features, Reverse Debugging, Static Linking"
toc: true
tags:
  - _
categories:
  - Update
---

{{preview}}

Spring is back in the Northern Hemisphere, and with it all kinds of features
are blooming for eBPF. Kernel 5.12 is out and version 5.13 is on track to
bring new exciting functionalities. At the same time, new projects hatch and
companies are enjoying renewed activity. Several eBPF-related projects applied
to join or upgrade their status in the bosom of CNCF. After some delay, no
doubt caused by winter hibernation, welcome to the fifth issue of the eBPF
Updates!

{{/preview}}

Spring is back in the Northern Hemisphere, and with it all kinds of features
are blooming for eBPF. Kernel 5.12 is out, and version 5.13 is on track to
bring new exciting functionalities. At the same time, new projects hatch and
companies are enjoying renewed activity. Several eBPF-related projects applied
to join or upgrade their status in the bosom of CNCF. After some delay, no
doubt caused by winter hibernation, welcome to the fifth issue of the eBPF
Updates!

## Important News

<!--2021-04-12-->
* [Cilium applies to become a CNCF project](https://github.com/cncf/toc/pull/637).  
  The Cilium Community has sent a proposal to move the project into the CNCF
  (_Cloud Native Computing Foundation_) at the Incubation level. If the
  proposal is accepted, there should be very little change to development
  models or governance, already fully open and following open-source best
  practice. From proposal overview, a number of users looking to build large
  projects on Cilium have requested a donation to a foundation, to get the final
  piece of insurance on the commitment to open source. The CNCF was naturally
  considered, as the
  core focus of Cilium is to provide networking and security for cloud-native
  environments and its goals align well with those of the Foundation.

  At the same time, the project is finalizing its version 1.10, for which it
  just tagged a
  [release candidate](https://github.com/cilium/cilium/releases/tag/v1.10.0-rc1).

<!--2021-02-24-->
* [_Sysdig contributes Falco's kernel module, eBPF probe, and libraries to the CNCF_](https://sysdig.com/blog/sysdig-contributes-falco-kernel-ebpf-cncf/).  
  This contribution is a commitment provide and keep those components as open
  source. The kernel module and eBPF probe component are roughly equivalent,
  and implement a system call capture framework in the Linux kernel, used by
  Sysdig and Falco. The libraries sit on top of them, and “enrich” the
  information collected by the probes to turn it into meaningful data. All
  components become the property of the Cloud Native Computing Foundation. Some
  have been relicensed, although this does not seem to be the case of the eBPF
  probes. From a technical point of view, this means that the contributors
  worked on decoupling those from the Sysdig code base, making them easier to
  reuse in other projects.

  Nearly at the same time, the maintainers of the Falco submitted a proposal
  for [CNCF graduation](https://github.com/cncf/toc/pull/641), which would
  represent a marker of health and maturity for the project. And Sysdig, the
  company behind Falco,
  [raised a $188 million Series F](https://news.crunchbase.com/news/sysdigs-valuation-hits-1-19b-after-188m-series-f/)
  at a $1.19 billion valuation.

<!--2021-04-29-->
* [_Microsoft acquires Kinvolk_](https://kinvolk.io/blog/2021/04/microsoft-acquires-kinvolk/).  
  Launched in 2015, Kinvolk has been working on open source projects such as
  the Flatcar Container Linux distribution, Lokomotive, or Inspektor Gadget.
  The latter is a suite of eBPF-based tools for debugging and inspecting
  Kubernetes clusters, and the company has been actively contributing to the
  eBPF ecosystem (see for example the posts from Mauricio Vásquez Bernal
  referenced later in this document). The company is joining the Azure team,
  congratulations and best of luck for the future!

<!--2021-04-06-->
* [_LPC 2021 Networking and BPF Track CFP_](https://lore.kernel.org/bpf/6d225920-9ecc-ef24-2bf8-848ca86c7fb0@iogearbox.net),
  <span style="white-space: nowrap;">on the development mailing list for eBPF.</span>  
  Just like the previous editions, the next Linux Plumbers Conference will have
  a _Networking and BPF_ track. The call for participation is open until the
  **13th of August**. The conference itself was initially due to take place in
  Dublin, Ireland, from the 27th to the 29th of September 2021, but the
  organizers
  [recently announced](https://www.linuxplumbersconf.org/blog/2021/index.php/2021/04/30/linux-plumbers-goes-fully-virtual/)
  that it will be a fully virtual event instead.

<!--2021-02-24-->
* [_libbpf: the road to v1.0_](https://lore.kernel.org/bpf/CAEf4BzZ+jJs7-HtjVLzcevmGf78PHxEsrk66FwKvy6FCsiU=nQ@mail.gmail.com/),
  <span style="white-space: nowrap;">from Andrii Nakryiko.</span>  
  From a very basic library wrapping around the `bpf()` system call, libbpf has
  become the reference for handling eBPF objects and has grown to support all
  the recent features available in the kernel. This came with a number of
  issues or inconsistencies from an API perspective. In an effort to address
  those, Andrii defines a roadmap for the release 1.0 of the library. The
  announcement email also contains a link to a
  [file on Google Docs](https://docs.google.com/document/d/1UyjTZuPFWiPFyKk1tV5an11_iaRuec6U-ZESZ54nNTY/edit)
  to contribute and discuss ideas for this milestone.

* [_eCHO - eBPF & Cilium Office Hours_](https://github.com/isovalent/echo).  
  This is a new series of livestream episodes about, you guessed it, eBPF and
  Cilium. The first three episodes have aired already:

  * [Episode 1: Intro to Cilium](https://youtu.be/80OYrzS1dCA)
  * [Episode 2: Intro to Hubble](https://youtu.be/hD2iJUyIXQw)
  * [Episode 3: Wireguard](https://youtu.be/-awkPi3D60E)

  You can suggest topics for discussions on
  [the GitHub tracker](https://github.com/isovalent/eCHO/issues). A new episode
  streams every Friday, make sure you attend the next one!

## New Resources

### Introductory Material

<!--2021-03-16-->
* [_eBPF and Kubernetes - What's the Deal?_](https://www.youtube.com/watch?v=ZyT4JB0Ugk8) (video),
  <span style="white-space: nowrap;">from Dawid Ziółkowski.</span>  
  eBPF can greatly improve networking for environment running with Kubernetes.
  After providing some elements of historical context, this presentation
  exposes the limitations imposed by the use of iptables. It
  introduces eBPF and Cilium, and explains how to leverage these tools to
  improve routing, observability, and network policies in clusters.

<!--2021-03-04-->
* [_Getting Started with eBPF and Go_](https://networkop.co.uk/post/2021-03-ebpf-intro/),
  <span style="white-space: nowrap;">from Michael Kashin.</span>  
  Have you tried working with Go and eBPF, and are you getting confused by the
  multiple libraries offering to help manage the programs and the maps?
  Libbpfgo, goebpf, gobpf, cilium/ebpf are several possibilities. The first
  three wrap around different components, whereas cilium/ebpf has a
  pure Go implementation. This post aims
  at disambiguate those distinct libraries, and explains how to write, manage,
  and ship a simple program with the cilium/ebpf library. The program,
  [xdp-xconnect](https://github.com/networkop/xdp-xconnect), cross-connects
  different Linux interfaces and redirects packets with XDP.

<!--Keep below the other eBPF/GO-->
<!--2021-03-18-->
* [_Getting started with bpf and libbpfgo_](https://www.grant.pizza/blog/libbpf-beginners-part-one/),
  <span style="white-space: nowrap;">from Grant Seltzer.</span>  
  Another approach to writing a simple program and managing it in user space
  with Go, this time with the libbpfgo library which wraps around libbpf, and
  with an example oriented towards tracing.

### In the Industry

<!--2021-03-15-->
* [_Liz Rice: Following the ‘Superpower’ Promise of eBPF_](https://thenewstack.io/liz-rice-following-the-superpower-promise-of-ebpf/)
  <span style="white-space: nowrap;">from Liz Rice.</span>  
  The chair of the CNCF's Technical Oversight Committee recently joined
  Isovalent to work on Cilium, described as “the most widely deployed eBPF
  project in production”. She comes back on the reason that led her to this
  decision, and explains in what sense “eBPF is another transformational
  technology”, like Docker has been.

<!--2021-02-24-->
* [_fledge.io brings eBPF to multi-cloud and edge_](https://www.fledge.io/2021/02/24/fledge-io-brings-ebpf-to-multi-cloud-and-edge/)
  <span style="white-space: nowrap;">from Pramodh Mallipatna.</span>  
  The solution proposes to help define, deploy, and manage geo-distributed
  applications that span multi-cloud and edge environments. It now uses eBPF
  programs to monitor the local CPU, disk, and network resources, as well as to
  gather and present richer application information in real time.

<!--2021-02-25-->
* [_Linux Kernel insights with eBPF_](https://community.netdata.cloud/t/linux-kernel-insights-with-ebpf/992?hss_channel=tw-734637019306033152),
  <span style="white-space: nowrap;">from Manos Saratsis.</span>  
  Netdata is already using eBPF to some extent, but has more plans to leverage
  the technology and provide a variety of charts to visualize metrics on all
  components of a system. This post is a roadmap announcement of the features
  to come, to inform the community as well as to gather some feedback. Netdata
  version 1.30.0,
  [released a few weeks later](https://www.netdata.cloud/blog/release-1-30-0/),
  seems to contain some of these changes.

<!--2021-03-->
* [eBPF Integration for Pyroscope](https://pyroscope.io/docs/ebpf/).  
  Pyroscope, an open source continuous profiling platform, has got some
  integration with eBPF to provide efficient CPU profiling of the applications
  and the system itself.

<!--2021-04-12-->
* [_Using eBPF and immudb to audit executed commands on a Linux server_](https://www.codenotary.com/blog/ebpf-linux-immudb/).  
  CodeNotary explains how to load an eBPF program with bpftrace to attach on
  uretprobes to capture shell commands, and to insert the collected data
  tamper-proof in immudb, the open source immutable database solution developed
  by the company.

<!--2021-04-23-->
* [_New Relic : What Is eBPF and Why Does It Matter for Observability?_](https://www.marketscreener.com/quote/stock/NEW-RELIC-INC-19157128/news/New-Relic-nbsp-What-Is-eBPF-and-Why-Does-It-Matter-for-Observability-33050648/).  
  This introduction to eBPF includes a basic overview of its functioning,
  advantages, and limitations, as well as an overview of the main tools based
  on eBPF. New Relic concludes by presenting how
  Pixie, its open source observability platform for Kubernetes, leverages eBPF
  to extract richer information.

<!--2021-05-04-->
* [_Gathering insights on Kubernetes applications, services, and network traffic with Pixie_](https://aws.amazon.com/blogs/opensource/gathering-insights-on-kubernetes-applications-services-and-network-traffic-with-pixie/).  
  Directly related to the previous item, Pixie is also the object of a new
  partnership between New Relic and AWS, and even applied to join the CNCF.

### Deep Dives

<!--2021-03-04-->
* [*BPF meets io_uring*](https://lwn.net/Articles/847951/),
  <span style="white-space: nowrap;">from Jonathan Corbet.</span>  
  This article from LWN.net comments an RFC submitted to
  [the io-uring mailing list](https://lore.kernel.org/io-uring/cover.1613563964.git.asml.silence@gmail.com/t/#u)
  and proposing to add a new hook and eBPF program type,
  `BPF_PROG_TYPE_IOURING`, to run in the io\_uring context. With some
  extra efforts, it could lead to making decisions based on the outcome of
  previous operations in the ring, such as submitting other I/O operations or
  processing the next file in a list.

<!--2021-04-13-->
* [_Comparing SystemTap and bpftrace_](https://lwn.net/Articles/852112/),
  <span style="white-space: nowrap;">from Emanuele Rocca.</span>  
  SystemTap and bpftrace are tools to dynamically instrument the kernel or
  user applications on Linux. While bpftrace uses eBPF programs, SystemTap is
  older and compiles its scripts into kernel modules. This post from LWN.net
  exposes the differences between the two tools in terms of installation
  procedure, program structure, and features. As one could expect, using kernel
  modules is ultimately more powerful, but eBPF makes for a faster and
  easier-to-use tracing tool.

<!--2021-04-22-->
* [_Toward signed BPF programs_](https://lwn.net/SubscriberLink/853489/2916fbd97c95c700/),
  <span style="white-space: nowrap;">from Jonathan Corbet.</span>  
  Another LWN.net article, this time on a recent proposal sent by Alexei
  Starovoitov in order to introduce support for signed eBPF programs, so that
  the system would only accept authorized eBPF programs. The mechanism is
  compared with the one in place for kernel modules, but signing eBPF programs
  is more complex (due to the relocations and map creations). The
  proposal currently under review solves this with a new program type, which
  allows a special eBPF program to run `bpf()` and `close()` system calls to
  load other eBPF programs from within the kernel. The work is still in
  progress.

<!--2021-03-11-->
* [_What is vmlinux.h?_](https://www.grant.pizza/blog/vmlinux-header/),
  <span style="white-space: nowrap;">from Grant Seltzer.</span>  
  The vmlinux.h header is generated automatically and contains BTF information
  about the kernel itself. Modern eBPF programs may use this information to
  access to a number of features,
  [CO-RE](https://ebpf.io/blog/ebpf-updates-2020-12#did-you-know-co-re) being
  one of them.

<!--2021-02-18/20-->
* [DevConf.CZ 2021](https://www.devconf.info/cz/) ([Schedule](https://devconfcz2021.sched.com/))
  hosted several talks related to eBPF, some of which are summarized below.
  Sadly I could not find the videos _and_ slides for all presentations.
    * [_eBPF Iterators_](https://devconfcz2021.sched.com/event/gmK5/ebpf-iterators)
      ([slides](https://static.sched.com/hosted_files/devconfcz2021/60/bpf-iterators.pdf)),
      <span style="white-space: nowrap;">from Jiri Olsa.</span>  
      This is possibly the only document on eBPF iterators we have at the
      moment. Those iterators are hooked on various objects in the kernel (for
      example, among many others: tasks, eBPF programs or maps, active TCP
      connections). Pinned to the eBPF virtual file system, they can be dumped
      (simply with `cat`) to iterate over the selected objects and process
      information to print about them. This is very similar to what procfs
      already offers, although more flexible. It is even possible to preload
      and attach some iterators at boot time, so that listing eBPF programs and
      maps is available at all times. BCC tools, bpftrace, bpftool, and perf
      all have support for iterators (at various degrees of progress).
    * [_Capturing network traffic in an eXpress Data Path_](https://devconfcz2021.sched.com/event/gmNT/capturing-network-traffic-in-an-express-data-path)
      ([slides](https://static.sched.com/hosted_files/devconfcz2021/ab/Capturing-network-traffic-in-an-eXpress-Data-Path.pdf)),
      <span style="white-space: nowrap;">from Eelco Chaudron.</span>  
      How to inspect network packet with an XDP program attached to the
      interface, when only the `XDP_PASS` return code will pass packets to the
      stack and lead them to a path where tcpdump can see them? To answer this
      question, xdpdump was developed. It relies on the _fentry_ and _fexit_
      hooks that eBPF programs can use to attach to the entry and the exit of
      functions, including other eBPF programs, and inspects the packets before
      and after they are processed by the XDP program. The tool provides a
      command-line interface, and also led to improvements of the PcapNG
      capture format. WireShark v3.4.0 and newer can already benefit from those
      changes, with new filters to show packets for which the XDP program
      returned a specific action code or packets coming from a specific
      interface queue.
    * [_Always present type information thanks to BPF: BTF_](https://devconfcz2021.sched.com/event/gmLF/always-present-type-information-thanks-to-bpf-btf),
      ([video](https://www.youtube.com/watch?v=fX6_xHldTjU&list=PLU1vS0speL2YQ9WXMnY-glVErAIsTsSAl&index=16),
      [slides](http://vger.kernel.org/~acme/bpf/devconf.cz-2021-Always-present-type-information-thanks-to-BPF-BTF/)),
      <span style="white-space: nowrap;">from Arnaldo Melo.</span>  
      Recent eBPF features increasingly use BTF (_BPF Type Information_, a
      format for storing debug information). But BTF is generic enough to be
      used by other applications as well. This presentation focuses on BTF and
      on the kind of kernel information it can help retrieve. Pahole, a tool
      used to examine data structure layouts encoded in
      debugging information formats, is central in this talk. Not only do we
      use it to produce BTF information from the kernel, but it also has
      extensive support for BTF and is able to extract information for a number
      of use cases, from pretty-printing type information to extracting
      relevant tokens for kernel live patching.

<!--2021-03-22-->
* [_The Cost of BPF Tail Calls_](https://pchaigno.github.io/ebpf/2021/03/22/cost-bpf-tail-calls.html),
  <span style="white-space: nowrap;">from Paul Chaignon.</span>  
  In order to better understand the overhead related to tail calls in eBPF
  programs (long jumps from one program to another, with no coming back), Paul
  ran extensive tests spanning multiple kernel versions, with and without
  retpolines. This led to a few discoveries: version 5.5 of the Linux kernel
  performed sensibly better than the previous versions, but 5.10
  reintroduced some overhead. The post, nearly a scientific report, contains
  more details on the methodology and results.

<!--2021-02-25-->
* [_Exploring a New Detection Evasion Technique on Linux_](https://codemuch.tech/2021/02/25/exploring-linux-evasion/),
  <span style="white-space: nowrap;">from Alan Cao.</span>  
  One of the use case for application monitoring with eBPF is to ensure the
  security of the system and to detect any mischievous process. Over the years,
  some malwares have been found to implement countermeasures to evade
  detection, and behave differently depending on whether they are under
  observation or not. Can this be applied to eBPF monitoring? Yes, explains
  this post. eBPF events can be logged to systemd, and if a process is able to
  access these logs, it can check whether an eBPF program has been loaded at
  the same time as itself, which would likely indicate a tentative to monitor.
  Limitations and possible mitigations are included in the post.

<!--2021-04-01-->
* [_Examining Problematic Memory in C/C++ Applications with BPF, perf, and Memcheck_](https://doordash.engineering/2021/04/01/examining-problematic-memory-with-bpf-perf-and-memcheck/),
  <span style="white-space: nowrap;">from Filip Busic.</span>  
  This long post goes way beyond what one usually finds in introductions and
  tutorials. It explains how to simply trace memory leaks in applications with
  Memcheck, and then turns to perf and eBPF. But the author also strives to
  provide all the technical background to understand what is going on: Stack
  unwinding and how to do it, Linux's memory model, tracing event sources,
  introduction to perf and eBPF, installation steps, are as many sections to
  read and to learn from. At last, a variety of example use cases, often
  involving flame graphs, show how to help troubleshoot memory issues.

<!--2021-04-09-->
* [_Extending systemd Security Features with eBPF_](https://kinvolk.io/blog/2021/04/extending-systemd-security-features-with-ebpf/),
  <span style="white-space: nowrap;">from Mauricio Vásquez Bernal.</span>  
  Two new systemd properties implemented through eBPF programs are in
  development, leveraging the oncoming support for eBPF programs written in C
  (rather than bytecode only) for systemd.

  The first one restricts the file system types that processes in a systemd
  unit can access. Setting `RestrictFileSystems=ext4`, for example, will
  prevent the processes to interact with the tmpfs, thanks to a program
  attached to the eBPF LSM (_Linux Security Module_) and running on all
  attempts to open files. The program checks for the presence of the magic
  number associated to the file system in a dedicated eBPF map.

  The second property, `RestrictNetworkInterfaces`, attaches a program to the
  cgroup hooks for sending and receiving packets and blocks any attempt that is
  not associated to one of the authorized interfaces listed in the dedicated
  eBPF map.

<!--2021-04-22-->
* [_Using eBPF in Flatcar Container Linux_](https://kinvolk.io/blog/2021/04/using-ebpf-in-flatcar-container-linux/),
  <span style="white-space: nowrap;">from Mauricio Vásquez Bernal.</span>  
  Some specific kernel options must be enabled at compilation to enable all of
  the eBPF features. This post describes a few of them, all enabled in the
  Flatcar Container Linux distribution. It includes an overview of what
  `CONFIG_IKHEADERS`, `CONFIG_DEBUG_INFO_BTF`, and `CONFIG_BPF_LSM` mean and
  what features they activate.

<!--2021-04-27-->
* [_Reverse debugging at scale_](https://engineering.fb.com/2021/04/27/developer-tools/reverse-debugging/),
  <span style="white-space: nowrap;">from Walter Erquinigo, David Carrillo-Cisneros, and Alston Tang.</span>  
  These engineers from Facebook explain how they deployed a solution to record
  CPU activity on their (many) servers, to be able to extract information when
  a process crashes. The data is stored in a circular buffer, to be analyzed
  later with the LLDB debugger after an incident. One issue was to find a way
  to quickly notify the collector when a process crashes, to avoid having too
  much useful data overwritten in the circular buffer between the crash and the
  extraction. The best solution they found was to use an eBPF program attached
  to a kprobe to trigger the copy.

<!--2020-11-04-->
* [_BPF binaries: BTF, CO-RE, and the future of BPF perf tools_](http://www.brendangregg.com/blog/2020-11-04/bpf-co-re-btf-libbpf.html),
  <span style="white-space: nowrap;">from Brendan Gregg.</span>  
  _Catching up: This post is from November 2020, which does not really
  correspond to the time frame otherwise covered in this issue, but I missed it
  at the time and it feels important._  
  After a brief overview of BTF and CO-RE, the post covers the next steps for
  existing eBPF-based tracing tools. In particular, it announces that the
  Python bindings used with the BCC tools should be considered as deprecated,
  and that libbpf should be preferred instead to build and manage these
  programs. This does _not_ mean that BCC itself is deprecated: the project is
  simply transitioning to libbpf-based tools and abandoning the Python wrappers
  in newer tracing utilities.

### Academic Works

* [_BMC: Accelerating Memcached using Safe In-kernel Caching and Pre-stack Processing_](https://www.usenix.org/conference/nsdi21/presentation/ghigoff)
  ([PDF](https://www.usenix.org/system/files/nsdi21-ghigoff.pdf)),
  <span style="white-space: nowrap;">from Yoann Ghigoff _et al._</span>  
  Published at NSDI '21 (USENIX), this paper introduces BMC, the _BPF Memcached
  Cache_, a first-level in-kernel cache relying on XDP to accelerate Memcached.
  It improves the response time, by avoiding costly traversals of the network
  stack. The authors provide extensive evaluation of the mechanism and compare
  it to an improved version of Memcached. Paul Chaignon also wrote
  [a dedicated review of that article](https://pchaigno.github.io/ebpf/2021/04/12/bmc-accelerating-memcached-using-bpf-and-xdp.html),
  rightly concluding that “it's exciting to see BPF applied to application
  protocols”.

### Software Projects

* The Cilium community is proud to
  [take part in this year's Google Summer of Code](https://summerofcode.withgoogle.com/organizations/4940468447608832/).
  The application period is now closed and accepted projects will be announced
  on May 17th.

* The Go library
  [cilium/ebpf v0.5.0](https://github.com/cilium/ebpf/releases/tag/v0.5.0) is
  out, and adds support for attaching programs to kprobes, kretprobes, or
  tracepoints out of the box.

* [ipftrace2 v0.3.0](https://github.com/YutaroHayakawa/ipftrace2/releases/tag/v0.3.0)
  was released and now relies on the new static linker from libbpf. A few weeks
  earlier, the tool had revived the support for tracing the journey of network
  packets in kernel module functions, thanks to BTF for modules.

### Software Demos and Experiments

* CrowdStrike released [BPFMon](https://github.com/CrowdStrike/bpfmon-example),
  a proof-of-concept utility to map updates in an eBPF map. This is part of a
  study on how to detect attackers who would tamper with some configuration
  options, for example, passed through maps to eBPF programs.

* [Conntracker](https://github.com/rafaeldtinoco/conntracker) is “a firewall
  sniffer”. It analyzes in real time the flow going through Linux's tables
  (netfilter or nf\_tables), and provides output to understand, debug and
  optimize firewall rules. It can use eBPF to trace TCP and UDP flows and their
  associated processes.

* [EBPFCat](https://github.com/tecki/ebpfcat) is an Python implementation of a
  primary device for [EtherCAT](https://en.wikipedia.org/wiki/EtherCAT),
  relying on XDP programs to process the packets with very low latency. The
  project contains a Python-based generator to produce eBPF code on-the-fly!

* The [sonde-rs](https://github.com/wasmerio/sonde-rs) library provides a way
  to compile USDT (_Userland Statically Defined Tracing_) probes into Rust
  applications, so that they can be traced with any tools supporting those probes,
  including for example BCC tools or bpftrace.

* [eBPFSnitch](https://github.com/harporoeder/ebpfsnitch) is an experimental
  application-level firewall for Linux, based on eBPF and NFQUEUE. At this
  time, it filters all outgoing flows, but filtering incoming connections is
  under work. It aims at providing a good integration with containerized
  applications.

* Project [Kube-Knark](https://github.com/chen-keinan/kube-knark) uses the pcap
  capture format and eBPF programs to monitor calls to the Kubernetes API and
  changes to the configuration files for the primary node, so as to help
  detect rogue applications that would attempt to change that configuration.

* [QEMU-CSD](https://github.com/Dantali0n/qemu-csd) is “full stack prototype to
  execute BPF programs as if they are running on a Zoned Namespace (ZNS) SSD
  Computational Storage Device (CSD). The entire prototype can be run from
  userspace by utilizing existing technologies such as SPDK and uBPF”, the
  latter being a user space implementation of an eBPF runtime.

## The Kernel Side

Kernel 5.12 was released on the 25th of April, and with it a
[number of features](https://kernelnewbies.org/Linux_5.12#Tracing.2C_perf_and_BPF)
discussed in the previous issues made their way into the latest stable version
of Linux.

As for the 5.13 release, the time frame covered by this post covers all its
development cycle. There were five pull requests from the bpf-next tree, sent
on
[March 10th](https://lore.kernel.org/bpf/20210310015401.14607-1-alexei.starovoitov@gmail.com/),
[March 25th](https://lore.kernel.org/bpf/20210325040508.92541-1-alexei.starovoitov@gmail.com/),
[April 1st](https://lore.kernel.org/bpf/20210401233121.65221-1-alexei.starovoitov@gmail.com/),
[April 24th](https://lore.kernel.org/bpf/20210424022459.16039-1-alexei.starovoitov@gmail.com/), and
[April 27th](https://lore.kernel.org/bpf/20210427233740.22238-1-daniel@iogearbox.net/).
As usual, the list below only contains a few highlights—Follow the links above
to see the full list of changes involved in those pull requests. Here, we broke
down the changes into categories.

### Core

* Support **calling kernel functions from eBPF programs**. This feature has
  some similarities with eBPF helper functions, which are compiled as part of
  the kernel and can be called from eBPF programs. But instead of writing
  dedicated functions, this is about calling pre-existing function from the
  kernel. This does not apply to _any_ function: a list of allowed functions is
  maintained in the kernel for each eBPF program type.

  A crucial difference with eBPF helpers is that kernel functions that can be
  called are _not_ bounded to a fixed ABI contract. This means that they remain
  free to evolve, even if this breaks existing eBPF programs. BTF is what
  makes this possible.

  The motivation behind this set is to reuse some code portions from the
  kernel, in particular for those eBPF programs that override specific kernel
  operations (`BPF_PROG_TYPE_STRUCT_OPS`), like TCP congestion control. Several
  related functions are
  [marked as allowed](https://lore.kernel.org/bpf/20210325015124.1543397-1-kafai@fb.com/t/#mbe914ced14b35921b471345b58905f962baf1905)
  for eBPF programs overriding TCP congestion control.
  <span style="white-space: nowrap;">(Martin KaFai Lau,
  [link](https://lore.kernel.org/bpf/20210325015124.1543397-1-kafai@fb.com/t/#u))</span>

### XDP

* Make the `bpf_redirect_map()` helper faster by turning it internally into a
  map operation, to access it immediately instead of traversing a
  switch-statement to select the relevant function for the current map type.
  This, with another improvement on the `xdp_do_redirect()` kernel function,
  led to an improvement of up to 8% in performance.
  <span style="white-space: nowrap;">(Björn Töpel,
  [link](https://lore.kernel.org/bpf/20210308112907.559576-1-bjorn.topel@gmail.com/t/#u))</span>

* For all drivers implementing XDP, move the drop error path for `XDP_REDIRECT`
  to devmap. This should help implement better queue overflow handling, and
  represents a step towards the addition of an XDP hook on the transmit queue.
  <span style="white-space: nowrap;">(Lorenzo Bianconi,
  [link](https://lore.kernel.org/bpf/ed670de24f951cfd77590decf0229a0ad7fd12f6.1615201152.git.lorenzo@kernel.org/t/#u))</span>

* Improve AF\_XDP selftests and program loading. AF\_XDP sockets need a XDP
  program to filter the packets to redirect to user space. But when multiple
  AF\_XDP sockets (“xdpsock” instances) are running on a single interface and
  one of them is terminated, the XDP program would be automatically unloaded,
  thus rendering the other sockets unable to operate. Besides improving the
  selftests, this PR addresses the issue by making libbpf use eBPF “links” to
  properly reference the XDP programs and make them persistent.
  <span style="white-space: nowrap;">(Maciej Fijalkowski,
  [link](https://lore.kernel.org/bpf/20210329224316.17793-1-maciej.fijalkowski@intel.com/t/#u))</span>

* Convert “cpumap” (for redirecting packets to specific CPUs with XDP) to use
  `netif_receive_skb_list()`, which allows to receive a bulk of socket buffers,
  thus improving i-cache usage. This results in a performance improvement of
  about 15% on a test with the `xdp_redirect_cpu` kernel sample program.
  <span style="white-space: nowrap;">(Lorenzo Bianconi,
  [link](https://lore.kernel.org/bpf/c729f83e5d7482d9329e0f165bdbe5adcefd1510.1619169700.git.lorenzo@kernel.org/t/))</span>

### eBPF Helper functions

* Add a new helper function **`bpf_for_each_map_elem()`** to iterate and run a
  callback eBPF function with a given context on all elements of a map. This
  requires BTF information, and targets arrays, hash maps, LRU hash maps, and
  their per-CPU derivatives.
  <span style="white-space: nowrap;">(Yonghong Song,
  [link](https://lore.kernel.org/bpf/20210225073309.4119708-1-yhs@fb.com/t/#u))</span>

* Implement a new **`bpf_snprintf()`** helper, with a behavior close to the classic
  `snprintf()` function. The signature differs a little:

  ```c
  bpf_snprintf(char *str, u32 str_size, const char *fmt, u64 *data, u32 data_len)`
  ```

  Format specifiers `%s` or `%p` are available, among others. The validation of
  the format string is performed by the verifier.
  <span style="white-space: nowrap;">(Florent Revest,
  [link](https://lore.kernel.org/bpf/20210419155243.1632274-1-revest@chromium.org/t/#u))</span>

### Miscellaneous

* Add support for floating point types (float and double) in BTF. The objective
  is to help load programs with BTF information on the s390 architecture.
  <span style="white-space: nowrap;">(Ilya Leoshkevich,
  [link](https://lore.kernel.org/bpf/20210226202256.116518-1-iii@linux.ibm.com/t/#u))</span>

* **Document the various sub-commands for the `bpf()` system call** (map
  operations, program load, object pinning, and so on). This documentation is
  added to
  [the UAPI header file](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/include/uapi/linux/bpf.h?id=f89271f09f589b8e9f98a9d3373d4868d3e668a5#n96),
  just like the documentation of the eBPF helpers. From there it can be
  parsed and turn into friendlier formats, and should eventually be available
  from
  [the kernel's API guide](https://www.kernel.org/doc/html/latest/driver-api/index.html)
  once version 5.13 is out.
  <span style="white-space: nowrap;">(Joe Stringer,
  [link](https://lore.kernel.org/bpf/20210302171947.2268128-1-joe@cilium.io/t/#u))</span>

* Add support for the `BPF_PROG_TEST_RUN` subcommand to programs of type
  `BPF_PROG_TYPE_SK_LOOKUP`, to be able to “test-run” them and evaluate their
  performance. This recent program type helps selecting a socket for new TCP or
  UDP flows and overcomes some of the `bind()` limitations in specific use
  cases.
  <span style="white-space: nowrap;">(Lorenz Bauer,
  [link](https://lore.kernel.org/bpf/20210303101816.36774-1-lmb@cloudflare.com/t/#u))</span>

* Enable task-local storage for tracing programs (only LSM programs could
  access it so far).
  <span style="white-space: nowrap;">(Song Liu,
  [link](https://lore.kernel.org/bpf/20210225234319.336131-1-songliubraving@fb.com/t/#u))</span>

* Add UDP support to socket maps (“sockmaps”). Only TCP was supported so far.
  The use case that motivated the change is the need for an efficient solution
  to proxy connections over AF\_UNIX sockets for thousands of services
  connected to a daemon, after they have been moved into a VM.
  <span style="white-space: nowrap;">(Cong Wang,
  [link](https://lore.kernel.org/bpf/20210331023237.41094-1-xiyou.wangcong@gmail.com/t/#u))</span>

* Extend batch map operations (lookup, update, delete) to LPM (_Longest Prefix
  Match_) maps.
  <span style="white-space: nowrap;">(Pedro Tammela,
  [link](https://lore.kernel.org/bpf/20210323025058.315763-1-pctammela@gmail.com/t/#u))</span>

* Extend batch map operations (lookup, update, delete) to per-CPU array maps.
  <span style="white-space: nowrap;">(Pedro Tammela,
  [link](https://lore.kernel.org/bpf/20210424214510.806627-1-pctammela@mojatatu.com/t/#u))</span>

* Allow to detach and re-attach to eBPF links trampolines associated to
  programs of certain types (for tracing or from the eBPF LSM in particular).
  It makes it possible to reattach such programs after detaching them from
  their hook, as long as they remain loaded in the kernel.
  <span style="white-space: nowrap;">(Jiri Olsa,
  [link](https://lore.kernel.org/bpf/20210414195147.1624932-1-jolsa@kernel.org/t/#u))</span>

### Tools

* Update libbpf to support **static linking** of multiple ELF files containing
  eBPF bytecode. This is a huge step forwards for building modular programs.
  The new linker added to libbpf supports extern resolution of global symbols,
  which means that global variables, eBPF sub-programs (functions), and maps
  defined with (or without) BTF information can all be compiled individually
  into multiple, separate object files, and then assembled by libbpf into a
  single object file. One can achieve this by calling dedicated functions from
  the library, or with the new bpftool command
  `bpftool gen object <output-file> <input_file>...`.
  A few follow-up issues are still under work.
  <span style="white-space: nowrap;">(Andrii Nakryiko,
  [link (static linker)](https://lore.kernel.org/bpf/20210318194036.3521577-1-andrii@kernel.org/t/#u),
  [link (extern resolution)](https://lore.kernel.org/bpf/20210423181348.1801389-1-andrii@kernel.org/t/#u))</span>

## Community

We are happy to host more and more people interested in the technology on the
eBPF Community Slack!

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">The <a href="https://twitter.com/hashtag/ebpf?src=hash&amp;ref_src=twsrc%5Etfw">#ebpf</a> slack channel is growing like crazy, we passed 2.3K people. Lots of cool stuff being built and shared. Lurking and see what others are building might be one of the best ways to get started learning about eBPF.<a href="https://t.co/Geqq9QU9AZ">https://t.co/Geqq9QU9AZ</a></p>&mdash; Thomas Graf (@tgraf__) <a href="https://twitter.com/tgraf__/status/1367415164346204163?ref_src=twsrc%5Etfw">March 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

eBPF experience is improving by the day.

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">can’t believe an eBPF thing “just worked” the first time i ran it; the future is amazing</p>&mdash; 𓃭𓇋𓊃𓄿𓁐 (@mycoliza) <a href="https://twitter.com/mycoliza/status/1371923318777937924?ref_src=twsrc%5Etfw">March 16, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">Wow eBPF.<br><br>It&#39;s been 10 years since I stopped doing kernel work. Every time I peek in, of course I find new things, but usually along the lines of what I know is happening in the industry. This is the first time I&#39;ve been kind of shocked. In a good way.</p>&mdash; jlbec (@jlbec) <a href="https://twitter.com/jlbec/status/1376655839218438145?ref_src=twsrc%5Etfw">March 29, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

This leads to critical gains.

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">Massive <a href="https://twitter.com/hashtag/DDoS?src=hash&amp;ref_src=twsrc%5Etfw">#DDoS</a> with 650Gbps of volumetric UDP, 0 impact to the clients network. <a href="https://twitter.com/hashtag/ebpf?src=hash&amp;ref_src=twsrc%5Etfw">#ebpf</a> <a href="https://twitter.com/hashtag/xdp?src=hash&amp;ref_src=twsrc%5Etfw">#xdp</a> <a href="https://t.co/IgPC2zu1fs">pic.twitter.com/IgPC2zu1fs</a></p>&mdash; Path Network (@path_network) <a href="https://twitter.com/path_network/status/1364777077304676354?ref_src=twsrc%5Etfw">February 25, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

... And we're just getting started!

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">eBPF is going to eat the world.</p>&mdash; Jaana Dogan ヤナ ドガン (@rakyll) <a href="https://twitter.com/rakyll/status/1372593155120402433?ref_src=twsrc%5Etfw">March 18, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Credits

eBPF Updates are brought to you by the [Cilium project](https://cilium.io).
This report was produced by Quentin Monnet (Isovalent).
Thanks to Cilium engineering team (Paul Chaignon in particular) for input and reviews.
And many thanks to all the contributors to the eBPF community and ecosystem,
who generated the contents listed in this post!

If you would like to submit contributions for the next report, please submit
them via **the `#ebpf-news` channel on [eBPF Slack](https://ebpf.io/slack/)**.
