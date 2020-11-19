---
path: "/news/ebpf-updates-intro"
date: "2020-11-19T10:00:00.000Z"
title: "eBPF Updates #1"
categories:
  - Update
---

{{preview}}

Curious people, eBPF aficionados, kernel hackers, welcome! The eBPF Updates aim
to be a regular publication providing news on the latest resources and
developments in the eBPF world. This report is the first of the series. We will
focus on the latest news over October and November 2020. From new tutorials to
academic research and kernel discussions, everyone should find a good read or
two!

{{/preview}}

## Foreword

Curious people, eBPF aficionados, kernel hackers, welcome! The eBPF Updates aim
to be a regular publication providing news on the latest resources and
developments in the eBPF world. This report is the first of the series,
although it is in fact a reviving of the former
[BPF Updates](https://cilium.io/blog/tags/bpf-updates) that once came out on
Cilium's blog.

We will not attempt to close the gap with the former series, the eBPF community
has been way too active. We will instead focus on the latest news over October,
November 2020, there is plenty to list. From new tutorials to academic research
and kernel discussions, everyone should find a good read or two!

## Important News

* The **<https://ebpf.io/>** website, hosting this post, launched this summer. It
  is a gateway to the eBPF world. Browse and learn about the basics, the use
  cases, the existing projects, get started or dive deeper into eBPF. If you
  landed on the current page without browsing the rest of the website, remember
  to plan a visit!

* The **eBPF Summit**, first of its kind, took place at the end of October 2020.
  The agenda and the links to the video are available on
  [the page of the Summit](https://ebpf.io/summit-2020/).
  There are also recaps available for
  [day 1](https://cilium.io/blog/2020/10/28/ebpf-summit-day-1) and
  [day 2](https://cilium.io/blog/2020/10/29/ebpf-summit-day-2).
  The bee mascot, representing all use cases for eBPF, was baptized during the
  Summit: Please meet **eBee**!

  ![eBee, the eBPF mascot](logo.png)

* [**Isovalent**](https://www.isovalent.com/), the company behind
  [Cilium](https://cilium.io/), home of eBPF co-maintainer Daniel Borkmann, and
  one of the biggest users of and contributors to eBPF, **announced its $29M
  Series A financing round backed by Andreessen Horowitz, Google, and Cisco**.
  Here are
  the [announcement from the Cilium community](https://cilium.io/blog/2020/11/10/ebpf-future-of-networking/),
  the [TechCrunch interview](https://techcrunch.com/2020/11/10/with-29m-in-funding-isovalent-launches-its-cloud-native-networking-and-security-platform-based-on-ebpf-and-cilium/),
  or the [post on a16z's blog](https://a16z.com/2020/11/10/investing-in-isovalent/).

* The same day, **Cilium** itself **released
  [version 1.9](https://cilium.io/blog/2020/11/10/cilium-19)** of its software.
  The prominent new features include Maglev load-balancing, deny policies,
  support for virtual or baremetal machines, OpenShift support, mutual TLS
  (mTLS) automation for Hubble, a bandwidth manager, and eBPF node-local
  redirect policies. It also brings a number of datapath optimizations, and
  many other improvements.

## New Resources

### Blog Posts, Presentations

* [_How eBPF Turns Linux into a Programmable Kernel_](https://thenewstack.io/how-ebpf-turns-linux-into-a-programmable-kernel/),
  from Joab Jackson.  
  This is a high-level introduction to eBPF and to the role it plays in the
  Linux ecosystem, based after talks from KubeCon and DockerCon.

* [_BPF, XDP, Packet Filters and UDP_](https://fly.io/blog/bpf-xdp-packet-filters-and-udp/),
  from Thomas Ptacek.  
  This post is another introduction to eBPF and XDP, from a very different
  angle. It provides historical context and “more than you wanted to know” on
  packet filters lineage, before concluding with some programming advice.

* [_Inspecting python tools using eBPF_](https://devopsspiral.com/articles/linux/bcc-tools/),
  from Michał Wcisło.  
  To trace Python-based programs such as Ansible, this tutorial introduces a
  number of tools from the bcc project.

* [_BPF ring buffer_](https://nakryiko.com/posts/bpf-ringbuf/),
  from Andrii Nakryiko.  
  eBPF programs have been able to use the perf buffer to stream data to user
  space for some time. A new structure, the BPF ring buffer, addresses some
  shortcomings of the perf buffer (memory overhead, data ordering, wasted work
  and extra data copying) and provides increased performance. Andrii, who
  implemented this new buffer, describes its concepts, its advantages and its
  usage in this article.

* [_BPF Tales, or Why Did I Recompile the Kernel to Average Some Numbers?_](https://web.archive.org/web/20201119174631/https://s3.amazonaws.com/v2-s3-prod-accelevents/8d6e1098-b444-4a4c-80dc-9c16a790858f_OSSEUpresentation.pdf),
  from Giulia Frascaria.  
  eBPF programs often aggregate data in the kernel before sending metrics to
  user space, to help users trace programs. In this work, eBPF runs instead at
  the boundary between compute and storage nodes in a datacenter, to apply
  filter-reduce operations on the data to transfer, and to overcome the gap
  between storage hardware and network bandwidths. This work was also the
  object of
  [a lightning talk](https://www.youtube.com/watch?v=jw8tEPP6jwQ&t=7492s)
  during the eBPF Summit.

* [_Full body HTTP request/responses tracing using eBPF_](https://blog.pixielabs.ai/ebpf-http-tracing/),
  from Zain Asgar.  
  This is the second part of a series of posts explaining how to trace
  applications with eBPF, and this one focuses on extracting the body of HTTP
  traffic with programs attached to kprobes and uprobes.

* [_Fuzzing for eBPF JIT bugs in the Linux kernel_](https://scannell.me/fuzzing-for-ebpf-jit-bugs-in-the-linux-kernel/),
  from Simon Scannell.  
  Fuzzing tools are very helpful to discover bugs in software, and the eBPF
  subsystem is no exception. This write-up details the architecture and the
  generator used to build such a fuzzer, and explains how it let to the
  discovery of a kernel vulnerability. The kernel has been patched since then.

* [_BPF binaries: BTF, CO-RE, and the future of BPF perf tools_](http://www.brendangregg.com/blog/2020-11-04/bpf-co-re-btf-libbpf.html),
  from Brendan Gregg.  
  Without entering too much into the technical details, Brendan exposes the
  principles of BTF (BPF Type Format) and CO-RE (Compile-Once, Run-Everywhere),
  which are two eBPF features enabling a far greater portability for eBPF
  programs between different kernels. Beyond the increased stability for
  tracing programs, these features are becoming essential in a growing number
  of use cases.

* [_What is eBPF and How Does it Work?_](https://gravitational.com/blog/what-is-ebpf/),
  from Virag Mody.  
  Part technical introduction, part tutorial, this article explains how eBPF
  works and how to leverage some of the bcc tools to monitor SSH sessions.

* [_eBPF: Put the Kubernetes Data Plane in the Kernel_](https://thenewstack.io/ebpf-put-the-kubernetes-data-plane-in-the-kernel/),
  from Joab Jackson.  
  Built on talks from the eBPF Summit, this post presents the motivations for
  implementing the Kubernetes dataplane with eBPF. Performance and scalability,
  network policies and observability are the most prominent gains.

* [_eBPF - The Future of Networking & Security_](https://cilium.io/blog/2020/11/10/ebpf-future-of-networking/),
  from Thomas Graf.  
  A summary of the recent evolution of networking: SDN, containers and
  Kubernetes, and the rise of eBPF. Cilium is emphasized as the ideal solution
  to bring eBPF-based networking, observability, and security to the
  cloud-native environments.

### Academic Research

* [_Specification and verification in the field: Applying formal methods to BPF just-in-time compilers in the Linux kernel_](https://unsat.cs.washington.edu/papers/nelson-jitterbug.pdf),
  from Luke Nelson _et al._  
  Using a framework call Jitterbug, the authors have applied formal methods to
  the eBPF Just-In-Time (JIT) compilers in the kernel. They developed a new JIT
  compiler for 32-bit RISC-V, and found a number of bugs and optimizations in
  other JIT compilers, which made their way into the Linux kernel.

* [_hXDP: Efficient Software Packet Processing on FPGA NICs_](https://arxiv.org/pdf/2010.14145.pdf),
  from Marco Spaziani Brunella _et al._  
  hXDP is an eBPF hardware offload implementation for FPGA-based NICs. Through
  hardware functions, some additional compiler work, and custom optimizations,
  it achieves great performance, while leaving some space on the device for
  additional applications. You may also be interested in
  [this analysis](https://pchaigno.github.io/ebpf/2020/11/04/hxdp-efficient-software-packet-processing-on-fpga-nics.html)
  of the paper, by Paul Chaignon.

* [_A Black-box Monitoring Approach to Measure Microservices Runtime Performance_](https://dl.acm.org/doi/10.1145/3418899),
  from Rolando Brondolin _et al._  
  This article presents the research works done with
  [DEEP-mon](https://github.com/necst/DEEP-mon), an eBPF-based monitoring tool
  to measure power consumption and performance of Docker containers.

* [_xBGP: When You Can't Wait for the IETF and Vendors_](https://pluginized-protocols.org/xbgp/2020/11/05/xbgp-paper.html),
  from Thomas Wirtgen _et al._  
  xBGP is a vendor-neutral API exposing the key data structures and functions
  for a BGP implementation, and where eBPF programs are used as plugins to add
  new BGP features. To demonstrate the feasibility, the authors implemented
  this API for the FRRouting and BIRD routing software suites.

### Software Projects

* [bpfbox](https://github.com/willfindlay/bpfbox) is a policy enforcement
  engine confining process access to sensitive system resources. It leverages
  the ability of the recent kernels to
  [attach eBPF programs to LSM (Linux Security Module) hooks](https://www.kernel.org/doc/html/latest/bpf/bpf_lsm.html).

* [ebpfbench](https://github.com/DataDog/ebpfbench) is a Go framework to
  profile eBPF programs.

* [ebpfpub](https://github.com/trailofbits/ebpfpub) is a generic tracing
  library for kernel and user space functions, relying on eBPF.

* [Swoll](https://github.com/criticalstack/swoll) relies on eBPF to monitor
  low-level kernel activity like system calls, in the context of a Kubernetes
  cluster.

### Sandbox and Experiments

* [Liz Rice's _Beginner's Guide to eBPF_](https://github.com/lizrice/ebpf-beginners)
  is a simple “Hello World” eBPF program demonstrated during conferences and
  designed to help newcomers familiarize themselves with eBPF.

* [greeter-bpf](https://github.com/fujita/greeter-bpf) is an implementation of
  a gRPC GreeterServer in eBPF “just for fun”, but actually for benchmarks,
  too.

* [rbperf](https://github.com/facebookexperimental/rbperf/) is an
  experimental eBPF-based Ruby Profiler.

## The Kernel Side

Andrii Nakryiko has been nominated as the third eBPF maintainer to help out on
the eBPF tooling side, congratulations!
([link](https://lore.kernel.org/bpf/CAEf4BzYnFFgJhvRW6oSa+xCZs0oPH26W7hLofyhk5_v6ip25NQ@mail.gmail.com/t/#u))

Here are some highlights from the first
[pull request for the bpf-next tree](https://lore.kernel.org/bpf/20201114020819.29584-1-daniel@iogearbox.net/t/#u)
for the 5.11 cycle:

- Extend BTF infrastructure in the kernel to support loading and validation of
  “split BTF objects”. This is a prerequisite for generating BTF for kernel
  modules.
  (Andrii Nakryiko,
  [link](https://lore.kernel.org/bpf/20201105043402.2530976-1-andrii@kernel.org/t/#u))

- Support pointers beyond packet end (`ctx->data_end`) to recognize LLVM
  generated patterns on inlined branch conditions and avoid rejecting some
  valid programs.
  (Alexei Starovoitov.
  [link](https://lore.kernel.org/bpf/20201111031213.25109-1-alexei.starovoitov@gmail.com/t/#u))

- Implement a new map type `BPF_MAP_TYPE_TASK_STORAGE`, providing local storage
  for `task_struct` for the eBPF LSM. This also result in the addition of three
  new eBPF helpers: `bpf_task_storage_get()`, `bpf_task_storage_delete()`, and
  `bpf_get_current_task_btf()`.
  (KP Singh,
  [link](https://lore.kernel.org/bpf/20201106103747.2780972-1-kpsingh@chromium.org/t/#u))

- Enable `FENTRY`/`FEXIT`/`RAW_TP` tracing programs to use the infrastructure
  (map and helpers) for per-socket local storage.
  (Martin KaFai Lau,
  [link](https://lore.kernel.org/bpf/20201112211255.2585961-1-kafai@fb.com/t/#u))

- Add XDP bulk APIs that introduce a defer/flush mechanism to optimize the
  `XDP_REDIRECT path`.
  (Lorenzo Bianconi,
  [link](https://lore.kernel.org/bpf/cover.1605267335.git.lorenzo@kernel.org/t/#u))

- Lift the key size limit for hash tables to accept keys larger than
  `MAX_BPF_STACK` (512 bytes). This improves some use cases where hash table
  keys are values from other per-CPU maps, for example to implement allow/deny
  lists for file paths.
  (Florian Lehner,
  [link](https://lore.kernel.org/bpf/20201029201442.596690-1-dev@der-flo.net/t/#u))

- Fix cross and out-of-tree builds of bpftool and runqslower. This helps build
  these tools for different target architectures on the same source tree.
  (Jean-Philippe Brucker,
  [link](https://lore.kernel.org/bpf/20201110164310.2600671-1-jean-philippe@linaro.org/t/#u))

### Libbpf

There is an effort in progress to update iproute2 to have it use libbpf instead
of its own code to handle eBPF programs. Libbpf has more exhaustive and more
up-to-date support for loading and managing eBPF objects (programs, but also
BTF descriptions), and tools such as tc would benefit from it. However, there
are disagreements on the best way to ship the library, as summarized in
[a LWN article](https://lwn.net/SubscriberLink/836911/75dbe3f4e921ee3c/).

Libbpf v0.2
[came out](https://lore.kernel.org/bpf/CAEf4BzZZAm_jFtPwmrxowVgmUQn-TJMpGBtVOtVepSsxe8S19w@mail.gmail.com/t/#u)
a few weeks ago.

### A New Patchwork

In other news, development for the Linux networking (netdev) and eBPF
subsystems moved their Patchwork instance (for patch tracking) from Ozlabs to a
new “[Netdev + BPF](https://patchwork.kernel.org/project/netdevbpf/list/)”
instance managed by the kernel community. The advantages obtained in the
process include:

- Automatic patch delegation into the `netdev` and `bpf` buckets, based on the
  subject lines of the emails.
- Automatic bot replies to the mailing list when patches have been applied to
  the source trees.
- CI integration for netdev and eBPF, with basic sanity checks.
- Patchwork to link to the
  [eBPF CI pipeline](https://github.com/kernel-patches/bpf/pulls) in the
  future.

## Credits

eBPF Updates are brought to you by the [Cilium project](https://cilium.io).
This report was produced by Quentin Monnet
(Isovalent), with significant contributions from Daniel Borkmann. Thanks to
Cilium engineering team for input and reviews.

If you would like to submit contributions for the next report, please submit
them via the `#ebpf-news` channel on the [eBPF Slack](https://ebpf.io/slack/).
