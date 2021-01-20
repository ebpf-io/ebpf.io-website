---
path: "/news/ebpf-updates-2021-01"
date: "2021-01-22T10:00:00.000Z"
title: "eBPF Updates #3: Atomics Operations, Socket Options Retrieval, Syscall Tracing Benchmarks, eBPF in the Supply Chain"
tags:
  - _
categories:
  - Update
---

{{preview}}

With the festive season, it would seem that eBPF blogging has cooled down a
little, and we have fewer items to report this time. But eBPF is getting
traction everywhere, so we can be confident that more material will be
available for the months to come. Let's wager that 2021 will be full of new
features, tutorials, deep dives, commercial news, and good surprises in
general. In the meantime, here are all the latest news. Welcome to the third
issue of the eBPF Updates, and Happy New Year!

{{/preview}}

With the festive season, it would seem that eBPF blogging has cooled down a
little, and we have fewer items to report this time. But eBPF is getting
traction everywhere, so we can be confident that more material will be
available for the months to come. Let's wager that 2021 will be full of new
features, tutorials, deep dives, commercial news, and good surprises in
general. In the meantime, here are all the latest news. Welcome to the third
issue of the eBPF Updates, and Happy New Year!

## New Resources

### Impact on the Industry

Let's start with some news from companies working on and with eBPF.

<!--2020-12-20-->
* Microsoft is working on an eBPF-based monitoring tool for Linux:
<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">We&#39;re working on eBPF-based Sysmon for Linux that has same filtering and output schema (where applicable) as Sysmon For Windows. Shooting for a preview in February. <a href="https://t.co/l0BTkVXac1">pic.twitter.com/l0BTkVXac1</a></p>&mdash; Mark Russinovich (@markrussinovich) <a href="https://twitter.com/markrussinovich/status/1340737856201879552?ref_src=twsrc%5Etfw">December 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<!--2021-01-11-->
* [_Isovalent Looks to Transform Container Networking With eBPF_](https://containerjournal.com/topics/container-networking/isovalent-container-networking-in-2021-using-ebpf/),
  from Mike Vizard.  
  This brief, high-level post focuses on the transformations that eBPF brings
  to container networking and, incidentally, how it led to the creation of
  Cilium and Isovalent. The author foresees important changes for cloud-native
  environments in terms of networking, security, and observability.

<!--2021-01-12-->
* [Kubernetes Podcast - _Episode #133: Cilium, with Thomas Graf_](https://kubernetespodcast.com/episode/133-cilium/),
  from Craig Box and Adam Glick.  
  Interviewed by Craig and Adam, Thomas Graf recounts the advent of eBPF, and
  how it introduced a new paradigm for network processing at a time when the
  other firewalling solutions would derive their behavior from hardware and
  would fail to scale. The episode goes on with explanations on how Cilium and
  Hubble were built on top of eBPF to provide network policies and monitoring
  for clusters. More advanced questions on the relationship with Envoy, or on a
  possible support for eBPF on Windows, follow. “Twenty-two years on, do you
  think you finally fixed networking?” Future will tell.

<!--2021-01-18-->
* Optimyze.cloud [announced in a tweet](https://twitter.com/OptimyzeCloud/status/1351203905850519557)
  that they are working on a “_Full-system lightweight continuous profiling for
  Linux Kernel, C/C++, Rust, Golang, Python, JVM, PHP (with Ruby and Node
  planned for the future)_”, apparently based on eBPF.

<!--2021-01-18-->
* [_Securing Containerized Environments with eBPF_](https://www.tag-cyber.com/advisory/articles/securing-containerized-environments-with-ebpf),
  from Adam LeWinter.  
  Following the transition from physical hardware to virtual machines, most
  workflows are now moving to containers. In this context, new challenges in
  terms of visibility and security arise, Adam explains. Cilium leverages eBPF
  to provide network routing and observability. It combines metadata from
  layers 3 and 4 with layer 7 parameters such as the HTTP method, bringing
  “_visibility and enforcement based on a service, pod, or container
  identity_”.

### Introductory Resources

<!--2020-11-25-->
* [_BPF: The future of configs_](https://blog.habets.se/2020/11/BPF-the-future-of-configs.html),
  from Thomas Habets.  
  While many presentations focus on introducing eBPF's technical aspects, this
  post takes a step back and describes why eBPF is “_such a big deal_”. For
  network packet processing in particular, older frameworks (ipfwadm, ipchains,
  iptables, nftables) are all about configuration, about feeding data for the
  tables. By contrast, eBPF is about code and programming. This brings up
  numerous possible use cases: packet routing, filesystem access control,
  customization of TCP parameters, and more. This is a good read to help
  understand what is at stake with eBPF.

<!--2020-12-11-->
* [_Linux Networking - eBPF, XDP, DPDK, VPP - What does all that mean?_](https://media.ccc.de/v/vnog-4-linux-networking-ebpf-xdp-dpdk-vp),
  from Andree Toonk.  
  Definitely oriented towards networking, this video introduces several of the
  frameworks that have been used in the domain of fast networking over the last
  years. The presentation is organized as a “journey”, that the presenter
  experienced: From the quest for a fast traffic generator, that brought in
  DPDK, to VPP and ultimately to eBPF and XDP, where you get fast packet
  processing capabilities while keeping at hand all the features and goodness
  from the Linux kernel. Andree also covers this topic
  [on his blog](https://toonk.io/tag/networking/index.html).

<!--2020-12-19-->
* [_File Integrity Monitoring using eBPF_](https://www.devseccon.com/file-integrity-monitoring-using-ebpf-secadvent-day-19/),
  from Sylvain Baubeau.  
  After a brief introduction to eBPF, this post explains how it can improve
  features such as _File Integrity Monitoring_ as implemented in the Datadog
  Agent. Several challenges came up, such as portability across kernel
  versions, monitoring of all hard links pointing to a given file, or
  performance overhead. eBPF addresses most of them, and provides performance
  and over overall improvements to the feature.

<!--2021-01-19-->
* [_Introduction to eBPF_](https://oswalt.dev/2021/01/introduction-to-ebpf/),
  from Matt Oswalt.  
  This high-level introduction—technical details are left out for follow-up
  posts—explains what eBPF is, how it augments the Linux operating system, and
  why people care about it. The technology permits fast updates of the kernel's
  behavior, without the need to wait for patches to go upstream, or without
  even the need to reboot a system. It brings flexibility, because you can
  compile your program on-the-fly, and include just the features you need.
  Every technologist, the post claims, should be aware of eBPF and the changes
  that come with it, because it will soon be part of the “supply chain”. Just
  like the first link of this section, read this post if you are getting
  started with eBPF and want to understand the stakes.

### Deep Dives

<!--2020-12-23-->
* [Cilium documentation on _The Kubernetes Networking Guide_](https://k8s.networkop.co.uk/cni/cilium/),
  from Michael Kashin.  
  _The Kubernetes Networking Guide_ aims at providing “_an overview of various
  Kubernetes networking components, with a focus on exactly how they implement
  the required functionality_”. The newly added Cilium's overview is
  interesting in that it explains how Cilium deploys and uses eBPF programs and
  maps, and how to manipulate and inspect them. The document also details how
  to track a packet at the different stages of its processing in the datapath.
  This is a recommended read if you want a glimpse of advanced networking with
  eBPF.

<!--2020-12-24-->
* [_How to Trace Linux System Calls in Production with Minimal Impact on Performance_](https://pingcap.com/blog/how-to-trace-linux-system-calls-in-production-with-minimal-impact-on-performance),
  from Wenbo Zhang.  
  The answer to the question in the title, as you can imagine, is eBPF. The
  post explains that strace is good to inspect system calls, but not usable in
  practice in production environments due to its overhead. Instead, the perf
  tool, relying on eBPF for some features, is much better suited. In
  environments with containers using cgroup v2, the eBPF-based tool traceloop
  comes handy. A benchmark of the different profilers mentioned in the post is
  provided in the last section.

### Software Projects

* ipftrace2, a tool to track packets inside the Linux kernel,
  [got a new v0.1.0 release](https://github.com/YutaroHayakawa/ipftrace2/releases/tag/v0.1.0),
  bringing new features such as support for writing extension module with C
  thanks to CO-RE, thus improving programmability and portability.

### Software: Sandbox and Experiments

* [tc-skeleton](https://github.com/florianl/tc-skeleton) is a simple example
  project to demonstrate how to load eBPF programs with
  [go-tc](https://github.com/florianl/go-tc), a work in progress version of tc
  (the Linux tool for traffic control) written in Go.

* [lnetd-host-encap](https://github.com/cpmarvin/lnetd-ctl/tree/main/host-encap)
  is an experiment where an eBPF program encapsulate packets with MPLS headers.

## The Kernel Side

Below are some highlights for the first
[pull request for the bpf-next tree](https://lore.kernel.org/bpf/20210116012922.17823-1-daniel@iogearbox.net/t/#u)
for the 5.12 cycle:

* Add atomic operations to eBPF. To that end, extend the eBPF instruction set
  with a new `BPF_ATOMIC` mode modifier for the operation codes. Atomics come
  along with support for the x86-64 eBPF JIT (support for other JITs is left to
  developers more familiar with their architectures). Here is a summary of the
  new instructions:
  * `atomic[64]_[fetch_]add`
  * `atomic[64]_[fetch_]and`
  * `atomic[64]_[fetch_]or`
  * `atomic[64]_xchg`
  * `atomic[64]_cmpxchg`

  The motivation was to generate globally-unique cookies in eBPF programs, but
  these atomic operations are likely to prove useful to a number of other
  applications.
  (Brendan Jackman,
  [link](https://lore.kernel.org/bpf/20210114181751.768687-1-jackmanb@google.com/t/#u))

* Support for kernel module global variables (`__ksym` externs) in eBPF
  programs. This is a follow-up improvement on the recent support for BTF for
  kernel modules, to have BTF-powered raw tracepoints or tracing hooks
  available for modules.
  (Andrii Nakryiko,
  [link](https://lore.kernel.org/bpf/20210112075520.4103414-1-andrii@kernel.org/t/#u))

* Generalize eBPF stackmap's [build-id](https://perf.wiki.kernel.org/index.php/Tutorial#Binary_identification_with_build-id)
  retrieval and add support to have build-ids stored in mmap2 event for perf
  (This event generates an extended executable mmap record that contains enough
  additional information to uniquely identify shared mappings, see
  [`perf_event_open` man page](https://www.man7.org/linux/man-pages/man2/perf_event_open.2.html)).
  (Jiri Olsa,
  [link](https://lore.kernel.org/bpf/20210114134044.1418404-1-jolsa@kernel.org/t/#u))

* Support retrieval of more `SOL_SOCKET` level options from `sock_addr` eBPF
  programs, to fill the gap between the list of options that `bpf_setsockopt()`
  can set and those that `bpf_getsockopt()` could retrieve. The concerned
  options are:
  * `SO_MARK`
  * `SO_PRIORITY`
  * `SO_BINDTOIFINDEX` (also new for `bpf_setsockopt()`)

  (Daniel Borkmann,
  [link](https://lore.kernel.org/bpf/cba44439b801e5ddc1170e5be787f4dc93a2d7f9.1610406333.git.daniel@iogearbox.net/t/#u))

* Improve out-of-tree cross-building for eBPF selftests. Although this adds no
  new feature, it feels interesting to report because it should enable wider
  automated testing on ARM architectures. Selftests are, of course, an
  essential part of the eBPF ecosystem.
  (Jean-Philippe Brucker,
  [link](https://lore.kernel.org/bpf/20210113163319.1516382-1-jean-philippe@linaro.org/t/#u))

## Did You Know?: eBPF Virtual Filesystem

eBPF objects, such as a program or a map, reside in kernel memory until they
are no longer needed. Internally, the kernel uses reference counters to keep
track of the number of “handles” pointing to such objects. When the number of
references comes down to zero, the program or the map is destroyed. The
references to a program would typically be a hook where the user has attached
the program (such as a tc filter or a kernel probe), or file descriptors that
were returned from the kernel when loading the program with the `bpf()` system
call. Similarly, references to an eBPF map can be held by eBPF programs using
the map or by a user program that retrieved a file descriptor.

As a consequence, if a process loaded an eBPF program without attaching it, the
program will be destroyed when the process exits and its file descriptors are
closed. There are ways to share file descriptors between processes, but to make
it easier to reference eBPF objects between user applications, or simply to
make them persistent at a time when they have no reference in the kernel (such
as a detached program or an unused map), another mechanism has been created:
the eBPF virtual filesystem.

The eBPF virtual (or _pseudo_) filesystem, often called bpffs, is traditionally
mounted at `/sys/fs/bpf`, but any alternative mount point can work. It is
possible to pin objects to this virtual filesystem, which is rendered as file
paths. Calling the `bpf()` system call with its `BPF_OBJ_PIN` subcommand pins
an object. Then, using the `BPF_OBJ_GET` subcommand on a bpffs path retrieves a
file descriptor to this pinned object. Removing a pinned path simply involves a
call to `unlink()`, just like for regular paths. Pinned paths (and the eBPF
objects they reference) are not persistent after reboot.

Note that the use of periods (`.`) in pinned paths is restricted. The glyph has
long been unused, but a recent feature introduced it to mark paths to specific
eBPF iterators that the system can preload, `maps.debug` and `progs.debug` (but
let's keep this for another time). You can have any other character allowed in
UNIX names. Yes, `/sys/fs/bpf/🐝` is a valid path.

Here is a concrete example. We create an eBPF map with bpftool. Because no
program uses the map yet, the only reference created is a file descriptor,
which is closed when bpftool exits. To avoid losing the map at this stage,
bpftool takes a path name and will use it to pin the map.

```
# bpftool map create /sys/fs/bpf/🍯 type array key 4 value 32 entries 8 name honeypot
# bpftool --bpffs map show pinned /sys/fs/bpf/🍯
42: array  name foo  flags 0x0
        key 4B  value 32B  max_entries 8  memlock 4096B
        pinned /sys/fs/bpf/🍯
```

We can then reuse this map when loading a program:

```
# bpftool prog load bee.o /sys/fs/bpf/🐝 map name honeypot pinned /sys/fs/bpf/🍯
```

Of course, you do not _have to_ use emojis. More information on the virtual
eBPF filesystem is available (although somewhat scattered) in the
[_BPF and XDP Reference Guide_](https://docs.cilium.io/en/latest/bpf/#object-pinning).
A post called [_Lifetime of BPF objects_](https://facebookmicrosites.github.io/bpf/blog/2018/08/31/object-lifetime.html),
from Alexei Starovoitov, is an excellent resource to learn more about how eBPF
objects are managed in the kernel. More information on bpftool usage is
available from [the dedicated man pages](https://www.mankier.com/8/bpftool).

Note that there are a few other eBPF objects (BTF, links, iterators) and that
some of them are not handled exactly in the same manner. There are also other
ways to reference programs and maps, such as references in program array maps
or maps of maps.

## Community

The enthusiasm about eBPF is strong:

<!--2020-12-19-->
<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">The more I dig into eBPF the more it feels like there&#39;s a platform shift coming to parts of the market. The tone is reminiscent of early discussions around LXC and Docker. Exciting to watch and see what happens next!</p>&mdash; Alex Salazar (@TheMostlyGreat) <a href="https://twitter.com/TheMostlyGreat/status/1340361763112497152?ref_src=twsrc%5Etfw">December 19, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<!--2021-01-22-->
<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">eBPF has to be one of the most fun things I’ve tinkered with in a while. The possibilities are really exciting! <a href="https://twitter.com/hashtag/infosec?src=hash&amp;ref_src=twsrc%5Etfw">#infosec</a> <a href="https://twitter.com/hashtag/informationsecurity?src=hash&amp;ref_src=twsrc%5Etfw">#informationsecurity</a> <a href="https://twitter.com/hashtag/linux?src=hash&amp;ref_src=twsrc%5Etfw">#linux</a> <a href="https://twitter.com/hashtag/blueteam?src=hash&amp;ref_src=twsrc%5Etfw">#blueteam</a></p>&mdash; Deathzone707 (@dunn707) <a href="https://twitter.com/dunn707/status/1352434717983817729?ref_src=twsrc%5Etfw">January 22, 2021</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Below is a thread asking how to improve eBPF usability:

<!--2020-12-27-->
<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">What would make eBPF more accessible/usable to you? 👇</p>&mdash; Jaana Dogan ヤナ ドガン (@rakyll) <a href="https://twitter.com/rakyll/status/1343072598901420034?ref_src=twsrc%5Etfw">December 27, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

In [its annual predictions for the year to come](https://lwn.net/Articles/840632),
LWN.net foresees that eBPF should be used in an increasing number of products
and services in 2021, although at the cost of implementing functionalities
separately from the kernel.

And we should apparently expect
[several eBPF-related talks](https://twitter.com/IanColdwater/status/1348399768272138242)
at the next KubeCon, for which the agenda has not been published yet.

## Credits

eBPF Updates are brought to you by the [Cilium project](https://cilium.io).
This report was produced by Quentin Monnet (Isovalent).
Thanks to Cilium engineering team for input and reviews.

If you would like to submit contributions for the next report, please submit
them via **the `#ebpf-news` channel on [eBPF Slack](https://ebpf.io/slack/)**.
