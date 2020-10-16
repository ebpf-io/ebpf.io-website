import Helmet from "react-helmet";
import Layout from "../layouts";
import React from "react";

import "../stylesheets/index.scss";

const pageMetaTitle = 'eBPF Projects Directory'
const pageMetaDescription = 'A directory of eBPF-based open source projects'

const YouMaintain = () => (
  <ul className="projects-requirements-list">
    <li>
      If you are maintaining one of the listed projects and would like to adjust
      the content. Get in touch on{" "}
      <a href="/slack">Slack</a> or open a pull request
      directly.
    </li>
  </ul>
);

const HowToList = () => (
  <ol className="projects-how-to-list">
    <li>
      Make sure that the project is meeting the requirements to be listed. See
      below.
    </li>
    <li>
      Open a <a href="https://github.com/cilium/ebpf.io">pull request</a> and
      provide the required information. Use one of the already listed projects
      as a template.
    </li>
    <li>
      The pull request will be reviewed by the community and merged by one of
      the maintainers. If you have any questions, feel free to ask on{" "}
      <a href="/slack">Slack</a>.
    </li>
  </ol>
);

const RequirementsList = () => (
  <ul className="projects-requirements-list">
    <li>
      The project must be open source. All source code must be licensed under an
      open source license. Any documentation must be licensed under an open
      license.
    </li>
    <li>
      The project must be using eBPF as its underlying core technology, in other
      words, a project would lose its purpose if the eBPF parts are removed.
    </li>
    <li>
      In order to be listed as a major project as opposed to an emerging
      project, the project must have more than 50 contributors, it must be
      activey maintained, and it must be used in production-like environments
      with a significant amount of users.
    </li>
    <li>
      The project must be open to collaboration and have a governance model
      following open-source best-practices.
    </li>
  </ul>
);

const ProjectDescriptions = () => (
  <div className="project-descriptions">
    <div className="projects-title">Major Projects</div>

    <div className="project-box">
      <a name="bcc" />
      <div className="project-major-title">bcc</div>
      <div className="project-minor-title">
        Toolkit and library for efficient BPF-based kernel tracing
      </div>
      <div className="project-body">
        <a
          href="https://github.com/iovisor/bcc"
          target="_blank"
          className="project-logo"
        >
          <img src={require("../assets/projects-logos/bcc.png")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://github.com/iovisor/bcc" target="_blank">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
            BCC is a toolkit for creating efficient kernel tracing and
            manipulation programs built upon eBPF, and includes several useful
            command-line tools and examples. BCC eases writing of eBPF programs
            for kernel instrumentation in C, includes a wrapper around LLVM, and
            front-ends in Python and Lua. It also provides a high-level library
            for direct integration into applications.
          </p>
        </div>
      </div>
    </div>

    <div className="project-box">
      <a name="bpftrace" />
      <div className="project-major-title">bpftrace</div>
      <div className="project-minor-title">
        High-level tracing language for Linux eBPF
      </div>

      <div className="project-body">
        <a
          href="https://github.com/iovisor/bpftrace"
          target="_blank"
          className="project-logo"
        >
          <img src={require("../assets/projects-logos/bpftrace-logo.jpeg")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://bpftrace.org/" target="_blank">
              <b>Website</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/iovisor/bpftrace" target="_blank">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
            bpftrace is a high-level tracing language for Linux eBPF. Its
            language is inspired by awk and C, and predecessor tracers such as
            DTrace and SystemTap. bpftrace uses LLVM as a backend to compile
            scripts to eBPF bytecode and makes use of BCC as a library for
            interacting with the Linux eBPF subsystem as well as existing Linux
            tracing capabilities and attachment points.
          </p>
        </div>
      </div>
    </div>

    <div className="project-box">
      <a name="cilium" />
      <div className="project-major-title">Cilium</div>
      <div className="project-minor-title">
        eBPF-based Networking, Security, and Observability
      </div>
      <div className="project-body">
        <a
          className="project-logo"
          target="_blank"
          href="https://github.com/cilium/cilium"
        >
          <img src={require("../assets/cilium-no-text.png")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://cilium.io">
              <b>Website</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/cilium/cilium">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
            Cilium is an open source project that provides eBPF-powered
            networking, security and observability. It has been specifically
            designed from the ground up to bring the advantages of eBPF to the
            world of Kubernetes and to address the new scalability, security and
            visibility requirements of container workloads.
          </p>
        </div>
      </div>
    </div>

    <div className="project-box">
      <a name="falco" />
      <div className="project-major-title">Falco</div>
      <div className="project-minor-title">Cloud Native Runtime Security</div>
      <div className="project-body">
        <a
          className="project-logo"
          target="_blank"
          href="https://github.com/falcosecurity/falco"
        >
          <img src={require("../assets/projects-logos/falco.png")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://falco.org/">
              <b>Website</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/falcosecurity/falco">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
            Falco is a behavioral activity monitor designed to detect anomalous
            activity in applications. Falco audits a system at the Linux kernel
            layer with the help of eBPF. It enriches gathered data with other
            input streams such as container runtime metrics and Kubernetes
            metrics, and allows to continuously monitor and detect container,
            application, host, and network activity.
          </p>
        </div>
      </div>
    </div>
    <div className="project-box">
      <a name="katran" />
      <div className="project-major-title">Katran</div>
      <div className="project-minor-title">
        A high performance layer 4 load balancer
      </div>
      <div className="project-body">
        <a
          className="project-logo"
          target="_blank"
          href="https://github.com/facebookincubator/katran"
        >
          <img src={require("../assets/projects-logos/katran.png")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://engineering.fb.com/open-source/open-sourcing-katran-a-scalable-network-load-balancer/">
              <b>Website</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/facebookincubator/katran">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
            Katran is a C++ library and eBPF program to build a high-performance
            layer 4 load balancing forwarding plane. Katran leverages the XDP
            infrastructure from the Linux kernel to provide an in-kernel
            facility for fast packet processing. Its performance scales linearly
            with the number of NIC's receive queues and it uses RSS friendly
            encapsulation for forwarding to L7 load balancers.
          </p>
        </div>
      </div>
    </div>

    <div className="projects-title">Core Infrastructure</div>

    <div className="project-box">
      <a name="kernel" />
      <div className="project-major-title">Linux Kernel</div>
      <div className="project-minor-title">eBPF Runtime</div>
      <div className="project-body">
        <a
          className="project-logo"
          target="_blank"
          href="https://www.kernel.org/"
        >
          <img src={require("../assets/projects-logos/linux.png")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://www.kernel.org">
              <b>Website</b>
            </a>{" "}
            |{" "}
            <a href="https://git.kernel.org/?q=BPF+Group">
              <b>Git Trees</b>
            </a>{" "}
            |{" "}
            <a href="https://lore.kernel.org/bpf/">
              <b>Mailing List</b>
            </a>{" "}
            |{" "}
            <a href="https://patchwork.ozlabs.org/project/netdev/list/?series=&submitter=&state=&q=&archive=&delegate=77147">
              <b>Patches</b>
            </a>{" "}
            |{" "}
            <a href="https://www.kernel.org/doc/html/latest/bpf/">
              <b>Docs</b>
            </a>{" "}
          </p>
          <p>
            The Linux kernel contains the eBPF runtime required to run eBPF
            programs. It implements the bpf(2) system call for interacting with
            programs, maps, BTF and various attachment points where eBPF
            programs can be executed from. The kernel contains a eBPF verifier
            in order to check programs for safety and a JIT compiler to
            translate programs to native machine code. User space tooling such
            as bpftool and libbpf are also maintained as part of the upstream
            kernel.
          </p>
        </div>
      </div>
    </div>

    <div className="project-box">
      <a name="llvm" />
      <div className="project-major-title">LLVM Compiler</div>
      <div className="project-minor-title">eBPF Backend</div>
      <div className="project-body">
        <a className="project-logo" target="_blank" href="https://llvm.org/">
          <img src={require("../assets/projects-logos/llvm2.png")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://llvm.org/">
              <b>Website</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/llvm/llvm-project/">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
            The LLVM compiler infrastructure contains the eBPF backend required
            to translate programs written in a C-like syntax to eBPF
            instructions. LLVM generates eBPF ELF files which contain program
            code, map descriptions, relocation information and BTF meta data.
            These ELF files contain all necessary information for eBPF loaders
            such as libbpf to prepare and load programs into the Linux kernel.
            The LLVM project also contains additional developer tools such as an
            eBPF object file disassembler.
          </p>
        </div>
      </div>
    </div>

    <div className="projects-title">eBPF Libraries</div>

    <div className="project-box">
      <a name="golang" />
      <div className="project-body">
        <div className="project-logo">
          <img src={require("../assets/projects-logos/golang.png")} />
        </div>
        <div className="project-description">
          <p>
            <a href="https://github.com/cilium/ebpf">
              <b>ebpf</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/iovisor/gobpf">
              <b>gobpf</b>
            </a>{" "}
          </p>
          <p>
            <a href="https://github.com/cilium/ebpf">eBPF</a> is designed as a
            pure Go library that provides utilities for loading, compiling, and
            debugging eBPF programs. It has minimal external dependencies and is
            intended to be used in long running processes. The{" "}
            <a href="https://github.com/iovisor/gobpf">gobpf</a> is a CGo-based
            library which provides Go bindings for the BCC framework as well as
            low-level routines to load and use eBPF programs from ELF files.
          </p>
        </div>
      </div>
    </div>

    <div className="project-box">
      <a name="cpp" />
      <div className="project-body">
        <div className="project-logo">
          <img src={require("../assets/projects-logos/cpp.png")} />
        </div>
        <div className="project-description">
          <p>
            <a href="https://github.com/libbpf/libbpf">
              <b>libbpf</b>
            </a>{" "}
          </p>
          <p>
            libbpf is a C/C++ based library which is maintained as part of the
            upstream Linux kernel. It contains an eBPF loader which takes over
            processing LLVM generated eBPF ELF files for loading into the
            kernel.{" "}
            <a href="https://facebookmicrosites.github.io/bpf/blog/2020/02/20/bcc-to-libbpf-howto-guide.html">
              libbpf
            </a>{" "}
            received a major boost in capabilities and sophistication and closed
            many existing gaps with BCC as a library. It also supports important
            features not available in BCC such as global variables and BPF
            skeletons.
          </p>
        </div>
      </div>
    </div>

    <div className="project-box">
      <a name="rust" />
      <div className="project-body">
        <div className="project-logo">
          <img src={require("../assets/projects-logos/rust.png")} />
        </div>
        <div className="project-description">
          <p>
            <a href="https://github.com/libbpf/libbpf-rs">
              <b>libbpf-rs</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/redsift/redbpf">
              <b>redbpf</b>
            </a>{" "}
          </p>
          <p>
            <a href="https://github.com/libbpf/libbpf-rs">libbpf-rs</a> is a
            safe, idiomatic, and opinionated wrapper API around libbpf written
            in Rust. libbpf-rs, together with libbpf-cargo (libbpf cargo plugin)
            allows to write 'compile once run everywhere' (CO-RE) eBPF programs.{" "}
            <a href="https://github.com/redsift/redbpf">redbpf</a> is a Rust
            eBPF toolchain that contains a collection of Rust libraries to work
            with eBPF programs.
          </p>
        </div>
      </div>
    </div>

    <div className="projects-title">Emerging Projects</div>

    <div className="project-box">
      <a name="hubble" />
      <div className="project-major-title">Hubble</div>
      <div className="project-minor-title">
        Network, Service &amp; Security Observability for Kubernetes using eBPF
      </div>
      <div className="project-body">
        <a
          className="project-logo"
          target="_blank"
          href="https://github.com/cilium/hubble"
        >
          <img src={require("../assets/hubble-no-text.png")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://cilium.io/">
              <b>Website</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/cilium/hubble">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
            Hubble is a fully distributed networking and security observability
            platform for cloud native workloads. It is built on top of Cilium
            and eBPF to enable deep visibility into the communication and
            behavior of services as well as the networking infrastructure in a
            completely transparent manner.
          </p>
        </div>
      </div>
    </div>

    <div className="project-box">
      <a name="kubectl-trace" />
      <div className="project-major-title">kubectl trace</div>
      <div className="project-minor-title">
        Schedule bpftrace programs on your Kubernetes cluster
      </div>
      <div className="project-body">
        <a
          className="project-logo"
          target="_blank"
          href="https://github.com/iovisor/kubectl-trace"
        >
          <img src={require("../assets/projects-logos/kubectl_trace2.png")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://github.com/iovisor/kubectl-trace">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
            kubectl-trace is a kubectl plugin that allows for scheduling the
            execution of bpftrace(8) programs in Kubernetes clusters.
            kubectl-trace does not require installation of any components
            directly onto a Kubernetes cluster in order to execute bpftrace
            programs. When pointed to a cluster, it schedules a temporary job
            called trace-runner that executes bpftrace.
          </p>
        </div>
      </div>
    </div>

    <div className="project-box">
      <a name="ply" />
      <div className="project-major-title">ply</div>
      <div className="project-minor-title">A dynamic tracer for Linux</div>
      <div className="project-body">
        <a
          className="project-logo"
          target="_blank"
          href="https://github.com/iovisor/ply"
        >
          <img src={require("../assets/projects-logos/ply.png")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://wkz.github.io/ply/">
              <b>Website</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/iovisor/ply">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
            ply is a dynamic tracer for Linux which is built upon eBPF. It has
            been designed with embedded systems in mind, is written in C and all
            that ply needs to run is libc and a modern Linux kernel with eBPF
            support, meaning, it does not depend on LLVM for its program
            generation. It has a C-like syntax for writing scripts and is
            heavily inspired by awk(1) and dtrace(1).
          </p>
        </div>
      </div>
    </div>

    <div className="project-box">
      <a name="tracee" />
      <div className="project-major-title">Tracee</div>
      <div className="project-minor-title">Dynamic Security Event Tracing</div>
      <div className="project-body">
        <a
          className="project-logo"
          target="_blank"
          href="https://github.com/aquasecurity/tracee"
        >
          <img src={require("../assets/projects-logos/tracee.png")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://github.com/aquasecurity/tracee">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
          Tracee uses eBPF technology to detect and filter operating system events, helping you expose security insights, detect suspicious behavior, and capture forensic indicators. 
          </p>
        </div>
      </div>
    </div>

  </div>
);

const Page = () => (
  <Layout>
    <div className="page-wrapper page-projects">
      <Helmet
        title={pageMetaTitle}

        meta={[
          {name: "keywords", content: "ebpf, bpf, projects, directory, open source"},
          {name: "type", property: "og:type", content: "website"},
          {name: "url", property: "og:url", content: "https://ebpf.io/contribute/"},
          {name: "title", property: "og:title", content: pageMetaTitle},
          {name: "description", property: "og:description", content: pageMetaDescription},
          {name: "image", property: "og:image", content: 'https://ebpf.io' + require("../assets/ogimage.png")},
          {name: "twitter:card", content: "summary_large_image"},
          {name: "twitter:url", content: "https://ebpf.io/projects/"},
          {name: "twitter:title", content: pageMetaTitle},
          {name: "twitter:description", content: pageMetaDescription},
          {name: "twitter:image", content: 'https://ebpf.io' + require("../assets/ogimage.png")},
        ]}
      />
      <ProjectDescriptions />
      <div className="projects-title">FAQ</div>
      <h3>Add your project</h3>
      <HowToList />
      <h3>Are you maintaining a listed project?</h3>
      <YouMaintain />
      <h3>Requirements for a project to be listed</h3>
      <RequirementsList />
    </div>
  </Layout>
);

export default Page;
