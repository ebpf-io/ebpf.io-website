---
path: "/news/ebpf-updates-2020-12"
date: "2020-12-18T10:00:00.000Z"
title: "eBPF Updates #2: eBPF with Zig, libbpf-bootstrap, Rust Linker, BTF in Kernel Modules, Cgroup-Based Memory Accounting"
tags:
  - _
categories:
  - Update
---

{{preview}}

Welcome to the second issue of the _eBPF Updates_! This time we have
interesting resources about how to write eBPF programs with Zig, or with Rust,
or on how to manage them with libbpf. On the kernel side, modules now support
BTF, and improvements to memory accounting for eBPF should help to solve the
limitations of rlimit. Did this just sound incomprehensible to you? Do not
fear, we also have some gentle introductions to eBPF in the list. This issue
also introduces a “Did You Know” section, and this time the focus is on CO-RE.
Read, learn, trace, and filter!

{{/preview}}

## Foreword

Welcome to the second issue of the _eBPF Updates_! This time we have
interesting resources about how to write eBPF programs with Zig, or with Rust,
or on how to manage them with libbpf. On the kernel side, modules now support
BTF, and improvements to memory accounting for eBPF should help to solve the
limitations of rlimit. Did this just sound incomprehensible to you? Do not
fear, we also have some gentle introductions to eBPF in the list. This issue
also introduces a “Did You Know” section, and this time the focus is on CO-RE.
Read, learn, trace, and filter!

## Important News

The calls for participation (CFPs) for the devrooms for
[FOSDEM 2021](https://fosdem.org/2021/) (online event) are open. Some of the
devrooms have hosted multiple talks about eBPF over the last year. In
particular:
  * The SDN devroom ([CFP](https://mdr78.github.io/2020/12/01/fosdem-cfp.html))
    accepts submissions until the 20th of December 2020.
  * The Containers devroom
    ([CFP](https://discuss.linuxcontainers.org/t/fosdem-2021-containers-devroom-call-for-papers/9625))
    accepts submissions until the 22th of December 2020.

Recent start-up acquisitions highlight the growing adoption and the maturity of
eBPF:
* [Flowmill](https://www.flowmill.com/), offering a solution for network
  observability relying on eBPF,
  [has been acquired](https://techcrunch.com/2020/11/24/splunk-acquires-network-observability-service-flowmill/)
  by [Splunk](https://www.splunk.com/en_us/newsroom/press-releases/2020/splunk-to-acquire-network-performance-monitoring-leader-flowmill.html).
* [Pixie Labs](https://pixielabs.ai/), which uses eBPF for visibility in
  Kubernetes,
  [has been acquired](https://techcrunch.com/2020/12/10/new-relic-acquires-kubernetes-observability-platform-pixie-labs/)
  by [New Relic](https://blog.newrelic.com/product-news/pixie-developer-first-observability/).

Readers from Brazil may be interested in the [eBPF Brasil](https://ebpfbr.org/)
website, which aims at gathering, translating, and sharing knowledge about
eBPF.

## Community

eBPF was named as one of the 5 technologies to watch in 2021 by CNCF TOC chair
[Liz Rice](https://twitter.com/lizrice), and the eBPF community just keeps on
growing every day.

![](community.png)

## New Resources

### Blog Posts, Presentations

* [_The Top Reasons Why You Should Give eBPF a Chance_](https://blog.container-solutions.com/the-top-reasons-why-you-should-give-ebpf-a-chance),
  from Lucas Severo Alves.  
  Several factors are responsible for eBPF's success and should make readers
  consider learning about, or using, this technology. This post cites its
  powerful tracing capabilities, with the ability to attach to nearly any
  function in the kernel with little impact on performance. Another reason is
  that more and more companies, including large ones, are adopting eBPF; a
  detailed list follows. At last, eBPF makes it possible to quickly develop
  tools to instrument new parts of the kernel, without the need to go through a
  longer process to upstream new attach points.

* [_Making BPF easy with libbpf and Zig_](https://cmd.com/blog/making-bpf-easy-with-libbpf-and-zig/),
  from Matt Knight.  
  The [Zig](https://ziglang.org) programming language is used to create and
  handle a simple eBPF program in this tutorial, both for the user space loader
  and the eBPF program itself. The objective is mostly to understand how libbpf
  manipulates the ELF object containing a program in order to load it, but
  compiling from Zig, which aims at competing with C while offering some newer
  features, may open new perspectives. The code is available
  [on GitHub](https://github.com/mattnite/zig-bpf-intro).

* [Weight support for Cilium's eBPF-based Maglev load balancer implementation](https://github.com/cilium/cilium/pull/13943),
  from Fankaixi Li.  
  A new pull request by a software engineer at ByteDance (TikTok) popped up,
  adding weight support to the eBPF-based
  [Maglev implementation in Cilium](https://cilium.io/blog/2020/11/10/cilium-19#maglev).
  Maglev provides consistent hashing for high-availability scenarios, and
  balance packets to the same backends even if they arrive at different load
  balancing nodes. The feature adds the possibility to assign weights to favor
  some backends. It is still being discussed, but should land soon.

* [_Beyond the Buzzword: BPF’s Unexpected Role in Kubernetes_](https://kccncna20.sched.com/event/ekDR/beyond-the-buzzword-bpfs-unexpected-role-in-kubernetes-andrew-randall-alban-crequy-kinvolk),
  from Andrew Randall and Alban Crequy.  
  After a high-level overview of eBPF, this presentation depicts the landscape
  of the projects gravitating around this technology. The authors explain that
  there are many powerful tools based on eBPF, although none of them would
  cover Kubernetes clusters. As an answer to fill the gap, they introduce
  Inspektor Gadget, which reuses some elements from the bcc tools to provide a
  new set of monitoring gadgets for examining Pods. Note that the wording in
  the slides might be misleading: If there was no equivalent to bcc for tracing
  containers before Inspektor Gadget, there _are_ other tools targeting the
  platform, such as Cilium/Hubble for network and observability or BPFd for
  running bcc scripts in containers.

* [_TIL: eBPF is awesome_](https://filipnikolovski.com/posts/ebpf/),
  from Filip Nikolovski.  
  We all agree on this! This post is a gentle introduction to eBPF. A bit of
  history, some details on the core infrastructure and its components, and a
  simple “Hello, World!” example extracted from
  [the bcc tools](https://github.com/iovisor/bcc/blob/34cada17f798b8e00268d1ba4a4a8d765b948532/examples/tracing/hello_fields.py).
  A nice read if you just got started with eBPF.

* [_Building an Esoteric Filesystem Tracing Tool with eBPF_](https://suchakra.wordpress.com/2020/11/20/building-an-esoteric-filesystem-tracing-tool-with-ebpf/),
  from Suchakra Sharma.  
  This post has a focus on the read-ahead mechanism in the Linux kernel. After
  providing a refresher on how read-ahead works, Suchakra explains in details
  how eBPF can monitor the hit rate and efficiency of this mechanism. It turns
  out that the program used to do that already exists in two versions, one with
  a mix of C and Python proper to the bcc tools, and another one based on
  libbpf and the newer features brought by the library, like CO-RE (Compile
  Once, Run Everywhere). The last section details the benefits of the latter
  version and the motivations to port tools to libbpf.

* [_eXpress Data Path Kernel Objects for Real-Time Audio Streaming Optimization_](https://lac2020.sciencesconf.org/data/proceedings.pdf#section*.12) (PDF),
  from Christoph Kuhr and Alexander Carôt.  
  Focusing on audio packet processing, this work aims at facilitating the set
  up of a rehearsal environment for conducted orchestras via the Internet with
  up to sixty musicians. The system may be susceptible to latency issues when
  the different UDP streams must be processed and combined. The authors
  investigated the use of XDP for processing these UDP streams, aggregating
  them in the kernel and reporting only the final audio sample to the user
  application. The authors found that XDP was not ideal, because of its lack of
  floating-point operations and because it does not permit to retrieve hardware
  timestamps. They were also limited by the incompatibility between LLVM, used
  to compile the eBPF programs, and their build system, and could not
  experiment on one part of their frontend. And although XDP increased the
  performance, they realized that they could obtain similar speeds for their
  use case with an optimized handling of a generic raw socket. Still, the use
  case and experiment remain an interesting read.  
  Video of the presentation may be available in the future from
  [the page of the conference](https://lac2020.sciencesconf.org/), if it gets
  uploaded.

* [_Primer: How XDP and eBPF Speed Network Traffic via the Linux Kernel_](https://thenewstack.io/primer-how-xdp-and-ebpf-speed-network-traffic-via-the-linux-kernel/),
  from Jack Wallen.  
  There is a resolute focus on XDP in this article which describes how this
  eBPF hook can speed up network traffic on Linux. This is followed by a simple
  tutorial, where bcc is used to attach a XDP program and to track UDP packets
  sent to a given port.

* [_Building BPF applications with libbpf-boostrap_](https://nakryiko.com/posts/libbpf-bootstrap/),
  from Andrii Nakryiko.  
  You want to start developing an eBPF application, but you feel intimidated by
  libbpf's complexity or lack of documentation? You _must_ have a look at
  libbpf-bootstrap. This project builds simple application templates, on which
  you can directly build your software. Of the two available templates, the
  simplest one (`minimal`) manipulates an eBPF program that simply logs the PID
  of the process that calls it. The more advanced template (`bootstrap`) sets
  up an application with more advanced features like eBPF maps, read-only
  configuration variables, eBPF ring buffer, or CO-RE which needs a BTF (BPF
  Type Format) description of the kernel's internals. This means that using
  these features gets simple and immediate, all is set up for you in the
  template. This article goes into a thorough description of the mechanisms
  involved. This is a long read, but well worth it if you want to program
  applications working with eBPF.

* [_A first xBGP plugin_](https://pluginized-protocols.org/xbgp/2020/11/29/xbgp-hello.html),
  from Thomas Wirtgen.  
  As a follow-up from the link to the paper for xBGP in the previous issue of
  these _eBPF Updates_, this is the introduction of a first eBPF-based xBGP
  plugin. The idea is that, quoting the post, “_a network operator would like
  to ignore the BGP UPDATE messages that contain an unknown attribute. A
  practical example of this usage is when problems with the processing of BGP
  Path attribute 128 caused the failure of BGP sessions_”. All steps required
  for running this example are provided. The code is hosted on
  [GitHub](https://github.com/pluginized-protocols/xbgp_plugins.git), but there
  is also a
  [Dockerfile](https://github.com/pluginized-protocols/libxbgp/blob/master/misc/Dockerfile_xbgp)
  packaging all the required elements.

* [_Cilium & eBPF - From Device to Service-Centric Networking_](https://docs.google.com/presentation/d/1cB4rJcdxTolIIUy5IEcb9iiUJHlMNmyT7c5eYY9D5LU/edit?usp=sharing),
  from Thomas Graf.  
  In this presentation at the NAG (Network Architecture Geeks) Cafe in
  December, Thomas outlines how eBPF allows to build powerful service-centric
  networking models and how to evolve away from the old device-centric
  networking architecture to meet requirements of containers and cloud-native
  environments.

* [_Integrating an eBPF-based firewall into the TezEdge node with multipass validations_](https://medium.com/simplestaking/integrating-an-ebpf-based-firewall-into-the-tezedge-node-with-multipass-validations-769d4c6ccd93),
  from Juraj Selep.  
  TezEdge peer-to-peer nodes validate blocks for the decentralized
  [Tezos](https://en.wikipedia.org/wiki/Tezos) blockchain, providing smart
  contracts. Blockchain networks are subject to DDoS (Distributed Denial of
  Service) attacks, generally mitigated with a firewall. In the current case,
  XDP is used to implement it. The eBPF program checks that each connection
  starts with a valid and unique proof of work, making it expensive for an
  adversary to start many connections. This is further integrated with the
  “multipass validation” scheme that aims at detecting erroneous blocks as soon
  as possible. Note that the eBPF programs are written in Rust.

* [_Why We Switched from bcc-tools to libbpf-tools for BPF Performance Analysis_](https://en.pingcap.com/blog/why-we-switched-from-bcc-tools-to-libbpf-tools-for-bpf-performance-analysis),
  from Wenbo Zhang.  
  Another article on the benefits brought by CO-RE, for which libbpf provides
  good support. After comparing bcc-based and libbpf-based tracing tools in
  terms of features and memory footprint, the author provide a list of tools
  and invocation patterns they use to analyze I/O performance.

* [_How to mitigate Kubernetes CVE-2020-8554 with eBPF_](https://cilium.io/blog/2020/12/11/kube-proxy-free-cve-mitigation)
  from Jed Salazar.  
  [CVE-2020-8554](https://github.com/kubernetes/kubernetes/issues/97076)
  represents a MITM (Man-in-the-middle) attack in Kubernetes where the
  ExternalIP service feature can be used to attack a workload and redirect
  egress network traffic from a unsuspecting Pod to another destination. In
  this blog, Jed describes how Cilium is able to mitigate this attack with
  eBPF.

* [_Tips and Tricks for Writing Linux BPF Applications with libbpf_](https://pingcap.com/blog/tips-and-tricks-for-writing-linux-bpf-applications-with-libbpf),
  from Wenbo Zhang.  
  This is a collection of hints about libbpf, to make it easier to write
  applications or to get better performance. The article contains several hints
  related to the use of eBPF “skeletons” generated by bpftool, eBPF maps, eBPF
  global variables, or pointers dereferencing.

* [_BPF and Go: Modern forms of introspection in Linux_](https://medium.com/bumble-tech/bpf-and-go-modern-forms-of-introspection-in-linux-6b9802682223),
  from Marko Kevac.  
  This long read contains two parts. The first one is a good introduction, in
  terms of context and history, to eBPF. The second part focuses on the
  interactions between eBPF and Go. If it is not possible to write eBPF
  programs in Go at this date, several Go libraries are available to write user
  applications to manage eBPF objects in this language. As for observability,
  Go has some particularities that make it harder or impossible to get a thread
  id for goroutines or use uretprobes. But the article demonstrates that a
  large part of eBPF's tracing capabilities remain available for Go
  applications.

* [_Adding BPF target support to the Rust compiler_](https://confused.ai/posts/rust-bpf-target),
  from Alessandro Decina.  
  eBPF bytecode can be compiled from C with Clang/LLVM's backend. Other
  languages, and Rust in particular, use the same toolchain. Compiling Rust
  code into eBPF is not straightforward, but there are tricks to do it. This
  post provides details on the linking steps, where the issue lies, and
  introduces a new linker and two related compiler targets for rustc, to ease
  compilation from Rust to eBPF bytecode. Although the targets are not merged
  upstream yet, a command-line hack allows developers to use it with the stable
  versions of rustc and cargo already. The linker is available
  [on GitHub](https://github.com/alessandrod/bpf-linker).

* [_NRE Labs v1.3.0 - Kata Containers, Cilium, cRPD!_](https://nrelabs.io/2020/12/nre-labs-v1.3.0-kata-containers-cilium-crpd/),
  from Matt Oswalt.  
  [NRE Labs](https://nrelabs.io/about/) has released a blog post with updates
  on new technology brought in, and eBPF is among the highlights. They praise
  the Cilium project and the entire eBPF community, lauding “_the focus on
  simpler, safer, and more performant architectures that are made possible with
  BPF_”. The article details the motivations to switch to eBPF and Cilium, and
  observes that “_It works great_”.

### Software Projects

* The [Golang library](https://github.com/cilium/ebpf) from Cloudflare and
  Cilium for manipulating eBPF objects started tagging releases, and v0.3.0 was
  released end of November 2020.

### Sandbox and Experiments

* [_bpf: a Zig BPF library_](https://github.com/mattnite/bpf) aims at providing
  the same features as libbpf, but using the Zig programming language.

## The Kernel Side

* Support for libbpf in iproute2 landed.
  (Hangbin Liu,
  [link](https://lore.kernel.org/bpf/07bc85b3-3ae0-eaa5-e8a5-921dbd4a4e4f@gmail.com/t/#u))

* Amazon's ENA device got support for XDP redirect (`XDP_REDIRECT` action).
  (Shay Agroskin,
  [link](https://lore.kernel.org/netdev/1606344708-11100-1-git-send-email-akiyano@amazon.com/t/#u))

Here are some highlights from the second
[pull request for the bpf-next tree](https://lore.kernel.org/bpf/20201204021936.85653-1-alexei.starovoitov@gmail.com/)
for the 5.11 cycle:

* Support BTF in kernel modules, thus making BTF-powered raw tracepoints or
  tracing hooks (fentry/fexit/fmod_ret/LSM) available for modules. CO-RE also
  becomes available for programs attached to hooks in modules.
  (Andrii Nakryiko,
  [link](https://lore.kernel.org/netdev/20201203204634.1325171-1-andrii@kernel.org/t/#u))

* Add a new socket option `SO_PREFER_BUSY_POLL` to switch to a new “heavy
  traffic” busy-polling mode, to enforce the use of busy-polling even on heavy
  loaded NAPI contexts where it might otherwise be prevented. Also allow
  busy-polling to be performed on XDP sockets.
  (Björn Töpel,
  [link](https://lore.kernel.org/bpf/20201130185205.196029-1-bjorn.topel@gmail.com/t/#u))

* Add a new helper `bpf_ima_inode_hash()` to get the IMA (Integrity Measurement
  Architecture) hash of an inode, which can be useful when using eBPF in a LSM
  (Linux Security Module) for fingerprinting files. One example use case is to
  get and store fingerprints of executable files when they are executed, and to
  detect when they attempt to unlink themselves.
  (KP Singh,
  [link](https://lore.kernel.org/bpf/20201124151210.1081188-1-kpsingh@chromium.org/t/#u))

* Add a new helper `bpf_bprm_opts_set()` for use with eBPF in a LSM, to update
  certain bits of the `struct linux_binprm` for a process. The only accessible
  bit at the moment is the `secureexec` bit, which can (indirectly) disable the
  use of certain environment variables like `LD_PRELOAD` for the dynamic
  linker.
  (KP Singh,
  [link](https://lore.kernel.org/bpf/20201117232929.2156341-1-kpsingh@chromium.org/t/#u))

* Switch from memlock rlimit accounting to cgroup-based memory for the kernel
  memory used by eBPF objects. The rlimit had a number of downsides (refer to
  the cover letter linked below for details), and the cgroup-based accounting
  will be more flexible, while allowing a better control and offering easier
  way to retrieve the current amount of memory used. It should also reflect the
  actual memory consumption, while this is not necessarily the case with
  rlimit.
  (Roman Gushchin,
  [link](https://lore.kernel.org/bpf/20201201215900.3569844-1-guro@fb.com/t/#u))

* Allow `bpf_getsockopt()` and `bpf_setsockopt()` helpers from
  `BPF_CGROUP_INET4_BIND` and `BPF_CGROUP_INET6_BIND` attach hooks, so that the
  listener sockets attached to cgroups can pre-populate some options as needed.
  (Stanislav Fomichev,
  [link](https://lore.kernel.org/bpf/20201202172516.3483656-1-sdf@google.com/t/#u))

* Add a new helper `bpf_ktime_get_coarse_ns()` to get a timestamp using the
  `CLOCK_MONOTONIC_COARSE`, which is less accurate but more performant than
  `CLOCK_MONOTONIC` used by `bpf_ktime_get_ns()`.
  (Dmitrii Banshchikov,
  [link](https://lore.kernel.org/bpf/20201117184549.257280-1-me@ubique.spb.ru/t/#u))

This was followed by
[a third pull request](https://lore.kernel.org/bpf/20201214214316.20642-1-daniel@iogearbox.net/),
for the same tree and cycle, and for which you will find the highlights below:

* Expose `bpf_sk_storage_get()` and `bpf_sk_storage_delete()` helpers to
  iterator programs so that such an eBPF iterator can, for example, initialize
  or delete selected values from a socket local storage.
  (Florent Revest,
  [link](https://lore.kernel.org/bpf/20201204113609.1850150-3-revest@google.com/t/#u))

* Add AF\_XDP selftests based on veth devices, for both SKB and native modes,
  as part of the eBPF selftests suite.
  (Weqaar Janjua,
  [link](https://lore.kernel.org/bpf/20201207215333.11586-1-weqaar.a.janjua@intel.com/t/#u))

* Update libbpf function `bpf_program__set_attach_target()` so it supports
  finding BTF-based kernel attach targets (such as fentry, fexit, BTF-based
  tracepoints, etc.). Like for other hooks, the attach points can be passed
  through the ELF section name where the eBPF program is placed, with the
  `SEC()` macro.
  (Andrii Nakryiko,
  [link](https://lore.kernel.org/bpf/20201211215825.3646154-1-andrii@kernel.org/t/#u))

* Permit pointers on stack for helper calls in the verifier, if the user has
  sufficient permissions. This addresses an issue where the verifier would
  wrongly reject some programs.
  (Yonghong Song,
  [link](https://lore.kernel.org/bpf/20201210013348.943623-1-yhs@fb.com/t/#u))

* Add new libbpf API function to retrieve an eBPF ring buffer epoll file
  descriptor. This is to help with the migration from perf buffer to eBPF ring
  buffer.
  (Brendan Jackman,
  [link](https://lore.kernel.org/bpf/20201214113812.305274-1-jackmanb@google.com/t/#u))

Kernel 5.10 was released on the 13th of December, bringing a number of eBPF
novelties. eBPF iterators with preload at boot time, or sleepable eBPF
programs, among others. Here I am deferring to [the list on the
Kernelnewbies](https://kernelnewbies.org/Linux_5.10#Tracing.2C_perf_and_BPF)
website for the detailed set of additions.

## Did You Know?: CO-RE

CO-RE (_Compile Once, Run Everywhere_) is a mechanism used with eBPF to ensure
portability of the programs, mainly those intended for tracing. It addresses
the issue that arises when a given structure is modified between two kernel
versions. Tracing programs may attempt to access a field from a given structure
by reading at a specific offset in that structure. But if modifications occur
in a later version and introduce a change for the length of the structure, or
for the order of its member fields, then the program will not be compatible.

CO-RE solves this by relying on BTF objects (_BPF Type Format_). A BTF object
contains debug information about a program. This is in fact a simplified
version of the DWARF format, used for example by GDB. BTF objects are loaded
into the kernel, and they often hold information on eBPF bytecode, for example
to dump the C instructions from which the program was compiled. But BTF can
also describe other objects like the kernel itself. In that case, BTF can
provide, just before an eBPF program is loaded, the relevant information for
accessing the kernel structures. The required adjustments are performed as “ELF
relocation” steps, just before the bytecode is sent to the kernel.

The easiest way to use CO-RE is through libbpf. Note that because it needs the
BTF information for the kernel, CO-RE is only available if the
`CONFIG_DEBUG_INFO_BTF` option has been set when compiling the kernel. Recent
tooling (LLVM, libbpf) is also necessary.

If you want more information on this topic, Andrii Nakryiko explains everything
there is to know about CO-RE
[on his blog](https://nakryiko.com/posts/bpf-portability-and-co-re/).
The specification for BTF can be found in
[the kernel documentation](https://www.kernel.org/doc/html/latest/bpf/btf.html),
but you might also want to have a look at the
[`bpftool-btf` man page](https://www.mankier.com/8/bpftool-btf) if you are
curious to inspect BTF objects on your system.

## Credits

eBPF Updates are brought to you by the [Cilium project](https://cilium.io).
This report was produced by Quentin Monnet, with contributions from Kornilios
Kourtis, Tobias Klauser (all from Isovalent), and Suchakra Sharma (ShiftLeft).
Thanks to Cilium engineering team for input and reviews.

If you would like to submit contributions for the next report, please submit
them via **the `#ebpf-news` channel on [eBPF Slack](https://ebpf.io/slack/)**.
