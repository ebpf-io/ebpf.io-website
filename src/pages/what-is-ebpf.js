import React from "react";

import "../stylesheets/index.scss";

const windowGlobal = typeof window !== "undefined" && window;

const Reference = ({ slides, video, link, name, description }) => (
  <li>
    <a href={link}>{name}</a>
    {(video || slides) && <span> (</span>}
    {video && <a href={video}>Video</a>}
    {slides && <a href={slides}>Slides</a>}
    {(video || slides) && <span>)</span>}
    <br />
    {description}
  </li>
);

function getTocId(element) {
  return element.id
    ? element.id
    : element.textContent
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^a-z0-9\-]/g, "");
}

class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toc: [],
    };
  }

  componentDidMount() {
    const toc = [];
    this.refs.content.querySelectorAll("h2, h3").forEach((h) => {
      h.id = getTocId(h);
      toc.push(h);
    });
    this.setState({ toc });
  }

  render() {
    const tocId = windowGlobal ? window.location.hash.slice(1) : null;

    return (
      <React.Fragment>
        <ul className="toc">
          {this.state.toc.map((item) => {
            const level = +item.tagName[1] - 2;
            const style = { paddingLeft: `${20 * level}px` };
            let className = "toc-item";
            if (tocId === item.id) {
              className += " active";
            }
            return (
              <li className={className} style={style}>
                <a href={`#${item.id}`}>{item.textContent}</a>
              </li>
            );
          })}
        </ul>
        <div className="what-is-ebpf-description" ref="content">
          <h1>eBPF Documentation</h1>
          <h2>What is eBPF?</h2>
          <p>
            The Linux kernel has always been an ideal place to implement
            monitoring/observability, networking, and security. Unfortunately
            this was often impractical as it required changing kernel source
            code or loading kernel modules, and resulted in layers of
            abstractions stacked on top of each other. eBPF is a revolutionary
            technology that can run sandboxed programs in the Linux kernel
            without changing kernel source code or loading kernel modules. By
            making the Linux kernel programmable, infrastructure software can
            leverage existing layers, making them more intelligent and
            feature-rich without continuing to add additional layers of
            complexity to the system.
          </p>
          <p>
            eBPF has resulted in the development of a completely new generation
            of tooling in areas such as networking, security, application
            profiling/tracing and performance troubleshooting that no longer
            rely on existing kernel functionality but instead actively reprogram
            runtime behavior without compromising execution efficiency or
            safety.
          </p>

          <h3>What is eBPF.io?</h3>
          <p>
            eBPF.io is a place for everybody to learn and collaborate on the
            topic of eBPF. eBPF is an open community and everybody can
            particpate and share. Whether you want to read a first introduction
            to eBPF, find further reading material or make your first steps to
            becoming contributors to major eBPF projects, eBPF.io will help you
            along the way.
          </p>
          <h2>Introduction to eBPF</h2>
          <p>
            The following chapters are a quick introduction into eBPF. If you
            would like to learn more about eBPF, see the{" "}
            <a href="https://cilium.readthedocs.io/en/stable/bpf/">
              eBPF &amp; XDP Reference Guide
            </a>
            . Whether you are a developer looking to build an eBPF program, or
            interested in leveraging a solution that uses eBPF, it is useful to
            understand the basic concepts and architecture.
          </p>

          <h3>Hook Overview</h3>
          <p>
            eBPF programs are event-driven and are run when the kernel or an
            application passes a certain hook point. Pre-defined hooks include
            system calls, function entry/exit, kernel tracepoints, network
            events, and several others.
          </p>
          <img src={require("../assets/syscall_hook.png")} />
          <p>
            If a predefined hook does not exist for a particular need, it is
            possible to create a kernel probe (kprobe) or user probe (uprobe) to
            attach eBPF programs almost anywhere in kernel or user applications.
          </p>
          <img src={require("../assets/hook_overview.png")} />

          <h3>How are eBPF programs written?</h3>
          <p>
            In a lot of scenarios, eBPF is not used directly but indirectly via
            projects like <a href="/project#cilium">Cilium</a>,{" "}
            <a href="/projects#bcc">bcc</a>, or{" "}
            <a href="/projects#bpftrace">bpftrace</a> which provide an
            abstraction on top of eBPF and do not require to write programs
            directly but instead offer the ability to specify intent-based
            definitions which are then implemented with eBPF.
          </p>
          <img src={require("../assets/clang.png")} />
          <p>
            If no higher-level abstraction exists, programs need to be written
            directly. The Linux kernel expects eBPF programs to be loaded in the
            form of bytecode. While it is of course possible to write bytecode
            directly, the more common development practice is to leverage a
            compiler suite like <a href="https://llvm.org/">LLVM</a> to compile
            pseudo-C code into eBPF bytecode.
          </p>

          <h3>Loader & Verification Architecture</h3>
          <p>
            When the desired hook has been identified, the eBPF program can be
            loaded into the Linux kernel using the bpf system call. This is
            typically done using one of the available eBPF libraries. The next
            section provides an introduction into the available development
            toolchains.
          </p>
          <img src={require("../assets/loader.png")} />
          <p>
            As the program is loaded into the Linux kernel, it passes through
            two steps before being attached to the requested hook:
          </p>

          <h3>Verification</h3>
          <p>
            The verification step ensures that the eBPF program is safe to run.
            It validates that the program meets several conditions, for example:
          </p>
          <ul>
            <li>
              The process loading the eBPF program holds the required
              capabilities (privileges). Unless unprivileged eBPF is enabled,
              only privileged processes can load eBPF programs.
            </li>
            <li>The program does not crash or otherwise harm the system.</li>
            <li>
              The program always runs to completion (i.e. the program does not
              sit in a loop forever, holding up further processing).
            </li>
          </ul>

          <h3>JIT Compilation</h3>
          <p>
            The Just-in-Time (JIT) compilation step translates the generic
            bytecode of the program into the machine specific instruction set to
            optimize execution speed of the program. This makes eBPF programs run
            as efficiently as natively compiled kernel code or as code loaded as
            a kernel module.
          </p>

          <h3>Maps</h3>
          <p>
            A vital aspect of eBPF programs is the ability to share collected
            information and to store state. For this purpose, eBPF programs can
            leverage the concept of eBPF maps to store and retrieve data in a
            wide set of data structures. eBPF maps can be accessed from eBPF
            programs as well as from applications in user space via a system
            call.
          </p>
          <img src={require("../assets/map_architecture.png")} />

          <p>
            The following is an incomplete list of supported map types to given
            an understanding of the diversity in data structures. For various
            map types, both a shared and a per-CPU variation is available.
          </p>

          <ul>
            <li>Hash tables, Arrays</li>
            <li>LRU (Least Recently Used)</li>
            <li>Ring Buffer</li>
            <li>Stack Trace</li>
            <li>LPM (Longest Prefix match)</li>
            <li>...</li>
          </ul>

          <h3>Helper Calls</h3>
          <p>
            eBPF programs cannot call into arbitrary kernel functions. Allowing
            this would bind eBPF programs to particular kernel versions and
            would complicate compatibility of programs. Instead, eBPF programs
            can make function calls into helper functions, a well-known and
            stable API offered by the kernel.
          </p>
          <img src={require("../assets/helper.png")} />

          <p>
            The set of available helper calls is constantly evolving. Examples
            of available helper calls:
          </p>
          <ul>
            <li>Generate random numbers</li>
            <li>Get current time & date</li>
            <li>eBPF map access</li>
            <li>Get process/cgroup context</li>
            <li>Manipulate network packets and forwarding logic</li>
          </ul>

          <h3>Tail &amp; Function Calls</h3>
          <p>
            eBPF programs are composable with the concept of tail and function
            calls. Function calls allow defining and calling functions within
            an eBPF program. Tail calls can call and execute another eBPF
            program and replace the execution context, similar to how the
            execve() system call operates for regular processes.
          </p>
          <img src={require("../assets/tailcall.png")} />

          <h3>eBPF Safety</h3>
          <p>
            <i>With great power there must also come great responsibility.</i>
          </p>

          <p>
            eBPF is an incredibly powerful technology and now runs at the heart
            of many critical software infrastructure components. During the
            development of eBPF, the safety of eBPF was the most crucial aspect
            when eBPF was considered for inclusion into the Linux kernel. eBPF
            safety is ensured through several layers:
          </p>

          <h4>Required Privileges</h4>
          <p>
            Unless unprivileged eBPF is enabled, all processes that intend to
            load eBPF programs into the Linux kernel must be running in
            privileged mode (root) or require the capability CAP_BPF. This means
            that untrusted programs cannot load eBPF programs.
          </p>

          <p>
            If unprivileged eBPF is enabled, unprivileged processes can load
            certain eBPF programs subject to a reduced functionality set and
            with limited access to the kernel.
          </p>

          <h4>Verifier</h4>
          <p>
            If a process is allowed to load an eBPF program, all programs still
            pass through the eBPF verifier. The eBPF verifier ensures the safety
            of the program itself. This means, for example:
          </p>

          <ul>
            <li>
              Programs are validated to ensure they always run to completion,
              e.g. an eBPF program may never block or sit in a loop forever.
              eBPF programs may contain so called bounded loops but the program
              is only accepted if the verifier can ensure that the loop contains
              an exit condition which is guaranteed to become true.
            </li>
            <li>
              Programs may not use any uninitialized variables or access memory
              out of bounds.
            </li>
            <li>
              Programs must fit within the size requirements of the system. It
              is not possible to load arbitrarily large eBPF programs.
            </li>
            <li>
              Program must have a finite complexity. The verifier will evaluate
              all possible execution paths and must be capable of completing the
              analysis within the limits of the configured upper complexity
              limit.
            </li>
          </ul>

          <h4>Hardening</h4>
          <p>
            Upon successful completion of the verification, the eBPF program
            runs through a hardening process according to whether the program is
            loaded from a privileged or unprivileged process. This step
            includes:
          </p>

          <ul>
            <li>
              <b>Program execution protection:</b> The kernel memory holding an
              eBPF program is protected and made read-only. If for any reason,
              whether it is a kernel bug or malicious manipulation, the eBPF
              program is attempted to be modified, the kernel will crash instead
              of allowing it to continue executing the corrupted/manipulated
              program.
            </li>
            <li>
              <b>Mitigation against Spectre:</b> Under speculation CPUs may
              mispredict branches and leave observable side effects that could
              be extracted through a side channel. To name a few examples: eBPF
              programs mask memory access in order redirect access under
              transient instructions to controlled areas, the verifier also
              follows program paths accessible only under speculative execution
              and the JIT compiler emits Retpolines in case tail calls cannot be
              converted to direct calls.
            </li>
            <li>
              <b>Constant blinding:</b> All constants in the code are blinded to
              prevent JIT spraying attacks. This prevents attackers from
              injecting executable code as constants which in the presence of
              another kernel bug, could allow an attacker to jump into the
              memory section of the eBPF program to execute code.
            </li>
          </ul>

          <h4>Abstracted Runtime Context</h4>
          <p>
            eBPF programs cannot access arbitrary kernel memory directly. Access
            to data and data structures that lie outside of the context of the
            program must be accessed via eBPF helpers. This guarantees
            consistent data access and makes any such access subject to the
            privileges of the eBPF program, e.g. an eBPF program running is
            allowed to modify the data of certain data structures if the
            modification can be guaranteed to be safe. An eBPF program cannot
            randomly modify data structures in the kernel.
          </p>

          <a name="why_ebpf" />
          <h2>Why eBPF?</h2>

          <h3>The Power of Programmability</h3>
          <p>
            Let’s start with an analogy. Do you remember GeoCities? 20 years
            ago, web pages used to be almost exclusively written in static
            markup language (HTML). A web page was basically a document with an
            application (browser) able to display it. Looking at web pages
            today, web pages have become full-blown applications and web-based
            technology has replaced a vast majority of applications written in
            languages requiring compilation. What enabled this evolution?
          </p>
          <img src={require("../assets/geocities.png")} />

          <p>
            The short-answer is programmability with the introduction of
            JavaScript. It unlocked a massive revolution resulting in browsers
            to evolve into almost independent operating systems.
          </p>

          <p>
            Why did the evolution happen? Programmers were no longer as bound to
            users running particular browser versions. Instead of convincing
            standards bodies that a new HTML tag was needed, the availability of
            the necessary building blocks decoupled the pace of innovation of
            the underlying browser from the application running on top. This is
            of course a bit oversimplified as HTML did evolve over time and
            contributed to the success but the evolution of HTML itself would
            not have been sufficient.
          </p>

          <p>
            Before taking this example and applying it to eBPF, let's look at a
            couple of key aspects that were vital in the introduction of
            JavaScript:
          </p>

          <ul>
            <li>
              <b>Safety:</b> Untrusted code runs in the browser of the user.
              This was solved by sandboxing JavaScript programs and abstracting
              access to browser data.
            </li>
            <li>
              <b>Continuous Delivery:</b> Evolution of program logic must be
              possible without requiring to constantly ship new browser
              versions. This was solved by providing the right low-level
              building blocks sufficient to build arbitrary logic.
            </li>
            <li>
              <b>Performance:</b> Programmability must be provided with minimal
              overhead. This was solved with the introduction of a Just-in-Time
              (JIT) compiler.
            </li>
          </ul>

          <p>
            For all of the above, exact counter parts can be found in eBPF for
            the same reason.
          </p>

          <h3>eBPF's impact on the Linux Kernel</h3>
          <p>
            Now let’s return to eBPF. In order to understand the programmability
            impact of eBPF on the Linux kernel, it helps to have a high-level
            understanding of the architecture of the Linux kernel and how it
            interacts with applications and the hardware.
          </p>

          <img src={require("../assets/kernel_arch.png")} />

          <p>
            The main purpose of the Linux kernel is to abstract the hardware or
            virtual hardware and provide a consistent API (system calls)
            allowing for applications to run and share the resources. In order
            to achieve this, a wide set of subsystems and layers are maintained
            to distribute these responsibilities. Each subsystem typically
            allows for some level of configuration to account for different
            needs of users. If a desired behavior cannot be configured, a kernel
            change is required, historically, leaving two options:
          </p>

          <table>
            <tr>
              <th width="50%">Native Support</th>
              <th width="50%">Kernel Module</th>
            </tr>
            <tr>
              <td>
                <ol>
                  <tr>
                    <li>
                      Change kernel source code and convince the Linux kernel
                      community that the change is required.
                    </li>
                    <li>
                      Wait several years for the new kernel version to become a
                      commodity.
                    </li>
                  </tr>
                </ol>
              </td>
              <td>
                <ol>
                  <tr>
                    <li>Write a kernel module</li>
                    <li>
                      Fix it up regularly, as every kernel release may break it
                    </li>
                    <li>
                      Risk corrupting your Linux kernel due to lack of security
                      boundaries
                    </li>
                  </tr>
                </ol>
              </td>
            </tr>
          </table>

          <p>
            With eBPF, a new option is available that allows for reprogramming
            the behavior of the Linux kernel without requiring changes to kernel
            source code or loading a kernel module. In many ways, this is very
            similar to how JavaScript and other scripting languages unlocked the
            evolution of systems which had become difficult or expensive to
            change.
          </p>

          <a name="toolchains" />
          <h2>Development Toolchains</h2>
          <p>
            Several development toolchains exist to assist in the development
            and management of eBPF programs. All of them address different needs
            of users:
          </p>

          <h4>bcc</h4>
          <p>
            BCC is a framework that enables users to write python programs with
            eBPF programs embedded inside them. The framework is primarily
            targeted for use cases which involve application and system
            profiling/tracing where an eBPF program is used to collect
            statistics or generate events and a counterpart in user space
            collects the data and displays it in a human readable form. Running
            the python program will generate the eBPF bytecode and load it into
            the kernel.
          </p>
          <img src={require("../assets/bcc.png")} />

          <h4>bpftrace</h4>
          <p>
            bpftrace is a high-level tracing language for Linux eBPF and available
	    in recent Linux kernels (4.x). bpftrace uses LLVM as a backend to compile
	    scripts to eBPF bytecode and makes use of BCC for interacting with the
	    Linux eBPF subsystem as well as existing Linux tracing capabilities: kernel
            dynamic tracing (kprobes), user-level dynamic tracing (uprobes), and
            tracepoints. The bpftrace language is inspired by awk, C and predecessor
	    tracers such as DTrace and SystemTap.
          </p>
          <img src={require("../assets/bpftrace.png")} />

          <h4>eBPF Go Library</h4>
          <p>
            The eBPF Go library provides a generic eBPF library that decouples
            the process of getting to the eBPF bytecode and the loading and
            management of eBPF programs. eBPF programs are typically created by
            writing a higher level language and then use the clang/LLVM compiler
            to compile to eBPF bytecode.
          </p>
          <img src={require("../assets/go.png")} />

          <h4>libbpf C/C++ Library</h4>
          <p>
            The libbpf library is a C/C++-based generic eBPF library which helps
            to decouple the loading of eBPF object files generated from the
            clang/LLVM compiler into the kernel and generally abstracts
            interaction with the BPF system call by providing easy to use
            library APIs for applications.
          </p>
          <img src={require("../assets/libbpf.png")} />

          <h2>Further Reading</h2>
          <p>
            If you would like to learn more about eBPF, continue reading using
            the following additional materials:
          </p>

          <h3>Documentation</h3>
          <ul>
            <Reference
              link="https://cilium.readthedocs.io/en/stable/bpf/"
              name="BPF & XDP Reference Guide"
              description="Cilium Documentation, Aug 2020"
            />
            <Reference
              link="https://www.kernel.org/doc/html/latest/bpf/index.html"
              name="BPF Documentation"
              description="BPF Documentation in the Linux Kernel"
            />
            <Reference
              link="https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst"
              name="BPF Design Q&A"
              description="FAQ for kernel-related eBPF questions"
            />
          </ul>

          <h3>Tutorials</h3>
          <ul>
            <Reference
              link="http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html"
              name="Learn eBPF Tracing: Tutorial and Examples"
              description="Brendan Gregg's Blog, Jan 2019"
            />
            <Reference
              link="https://github.com/xdp-project/xdp-tutorial"
              name="XDP Hands-On Tutorials"
              description="Various authors, 2019"
            />
            <Reference
              link="https://facebookmicrosites.github.io/bpf/blog/"
              name="BCC, libbpf and BPF CO-RE Tutorials"
              description="Facebook's BPF Blog, 2020"
            />
          </ul>

          <h3>Talks</h3>
          <h4>Generic</h4>
          <ul>
            <Reference
              link="https://kccnceu20.sched.com/event/ZemQ/ebpf-and-kubernetes-little-helper-minions-for-scaling-microservices-daniel-borkmann-cilium"
              name="eBPF and Kubernetes: Little Helper Minions for Scaling Microservices"
              description="Daniel Borkmann, KubeCon EU, Aug 2020"
            />
            <Reference
              link="https://www.infoq.com/presentations/facebook-google-bpf-linux-kernel/"
              slides="https://docs.google.com/presentation/d/1AcB4x7JCWET0ysDr0gsX-EIdQSTyBtmi6OAW7bE0jm0"
              name="eBPF - Rethinking the Linux Kernel"
              description="Thomas Graf, QCon London, April 2020"
            />
            <Reference
              link="https://www.youtube.com/watch?v=U3PdyHlrG1o&t=7"
              slides="https://fosdem.org/2020/schedule/event/containers_bpf/attachments/slides/4122/export/events/attachments/containers_bpf/slides/4122/BPF_as_a_revolutionary_technology_for_the_container_landscape.pdf"
              name="BPF as a revolutionary technology for the container landscape"
              description="Daniel Borkmann, FOSDEM, Feb 2020"
            />
            <Reference
              link="https://www.youtube.com/watch?v=ZYBXZFKPS28"
              name="BPF at Facebook"
              description="Alexei Starovoitov, Performance Summit, Dec 2019"
            />
	    <Reference
              link="https://youtu.be/7pmXdG8-7WU?t=8"
              slides="https://www.slideshare.net/brendangregg/um2019-bpf-a-new-type-of-software"
              name="BPF: A New Type of Software"
              description="Brendan Gregg, Ubuntu Masters, Oct 2019"
            />
            <Reference
              link="https://www.youtube.com/watch?v=mFxs3VXABPU"
              name="The ubiquity but also the necessity of eBPF as a technology"
              description="David S. Miller, Kernel Recipes, Oct 2019"
            />
          </ul>
          <h4>Cilium</h4>
          <ul>
            <Reference
              link="https://www.youtube.com/watch?v=bIRwSIwNHC0"
              slides="https://docs.google.com/presentation/d/1cZJ-pcwB9WG88wzhDm2jxQY4Sh8adYg0-N3qWQ8593I/edit#slide=id.g7055f48ba8_0_0"
              name="Liberating Kubernetes from kube-proxy and iptables"
              description="Martynas Pumputis, KubeCon US 2019"
            />
            <Reference
              link="https://www.youtube.com/watch?v=Kmm8Hl57WDU"
              slides="https://static.sched.com/hosted_files/kccncna19/20/eBPF%20and%20the%20Cilium%20Datapath.pdf"
              name="Understanding and Troubleshooting the eBPF Datapath in Cilium"
              description="Nathan Sweet, KubeCon US 2019"
            />
            <Reference
              link="https://www.youtube.com/watch?v=gPvl2NDIWzY"
              slides="https://static.sched.com/hosted_files/kccnceu19/54/Chaos%20Testing%20with%20Envoy%2C%20Cilium%20and%20eBPF.pdf"
              name="Transparent Chaos Testing with Envoy, Cilium and BPF"
              description="Thomas Graf, KubeCon EU 2019"
            />
            <Reference
              link="https://www.youtube.com/watch?v=QmmId1QEE5k"
              slides="https://www.slideshare.net/ThomasGraf5/cilium-bringing-the-bpf-revolution-to-kubernetes-networking-and-security"
              name="Cilium - Bringing the BPF Revolution to Kubernetes Networking and Security"
              description="Thomas Graf, All Systems Go!, Berlin, Sep 2018"
            />
            <Reference
              link="https://www.youtube.com/watch?v=_Iq1xxNZOAo"
              slides="https://www.slideshare.net/InfoQ/how-to-make-linux-microserviceaware-with-cilium-and-ebpf"
              name="How to Make Linux Microservice-Aware with eBPF"
              description="Thomas Graf, QCon San Francisco, 2018"
            />
            <Reference
              link="https://www.youtube.com/watch?v=ER9eIXL2_14"
              name="Accelerating Envoy with the Linux Kernel"
              description="Thomas Graf, KubeCon EU 2018"
            />
            <Reference
              link="https://www.youtube.com/watch?v=ilKlmTDdFgk"
              slides="https://www.slideshare.net/ThomasGraf5/dockercon-2017-cilium-network-and-application-security-with-bpf-and-xdp"
              name="Cilium - Network and Application Security with BPF and XDP"
              description="Thomas Graf, DockerCon Austin, Apr 2017"
            />
          </ul>

          <h4>Hubble</h4>
	  <ul>
            <Reference
              link="https://static.sched.com/hosted_files/kccnceu20/1b/Aug19-Hubble-eBPF_Based_Observability_for_Kubernetes_Sebastian_Wicki.pdf"
              name="Hubble - eBPF Based Observability for Kubernetes"
              description="Sebastian Wicki, KubeCon EU, Aug 2020"
            />
	  </ul>

          <h3>Books</h3>
          <ul>
            <Reference
              link="http://www.brendangregg.com/systems-performance-2nd-edition-book.html"
              name="Systems Performance: Enterprise and the Cloud, 2nd Edition"
              description="Brendan Gregg, Addison-Wesley Professional Computing Series, 2020"
            />
            <Reference
              link="http://www.brendangregg.com/bpf-performance-tools-book.html"
              name="BPF Performance Tools"
              description="Brendan Gregg, Addison-Wesley Professional Computing Series, Dec 2019"
            />
            <Reference
              link="https://www.oreilly.com/library/view/linux-observability-with/9781492050193/"
              name="Linux Observability with BPF"
              description="David Calavera, Lorenzo Fontana, O'Reilly, Nov 2019"
            />
          </ul>

          <h3>Articles & Blogs</h3>
          <ul>
            <Reference
              link="https://lwn.net/Articles/790684/"
              name="BPF for security - and chaos - in Kubernetes"
              description="Sean Kerner, LWN, Jun 2019"
            />
            <Reference
              link="https://thenewstack.io/linux-technology-for-the-new-year-ebpf/"
              name="Linux Technology for the New Year: eBPF"
              description="Joab Jackson, Dec 2018"
            />
            <Reference
              link="https://lwn.net/Articles/740157/"
              name="A thorough introduction to eBPF"
              description="Matt Fleming, LWN, Dec 2017"
            />
            <Reference
              link="https://opensource.googleblog.com/2016/11/cilium-networking-and-security.html"
              name="Cilium, BPF and XDP"
              description="Google Open Source Blog, Nov 2016"
            />
            <Reference
              link="https://lwn.net/Kernel/Index/#Berkeley_Packet_Filter"
              name="Archive of various articles on BPF"
              description="LWN, since Apr 2011"
            />
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const Section = ({ icon, iconWidth, iconHeight, title, text, style }) => (
  <div className="what-is-ebpf-section" style={style}>
    <img
      src={icon}
      className="what-is-ebpf-section-icon"
      style={{ width: `${iconWidth}px`, height: `${iconHeight}px` }}
    />
    <div className="what-is-ebpf-section-title">{title}</div>
    <div className="what-is-ebpf-section-text">{text}</div>
  </div>
);

const Page = () => (
  <div className="page-wrapper page-what-is-ebpf">
    <Description />
  </div>
);

export default Page;
