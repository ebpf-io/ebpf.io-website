import Helmet from "react-helmet";
import cn from "classnames";
import { Link } from "gatsby";
import Layout from "../layouts";
import React, { useState } from "react";
import { TitleWithAnchor } from "../common/TitleWithAnchor";

import "../stylesheets/index.scss";

const pageMetaTitle = "eBPF Applications Landscape";
const pageMetaDescription =
  "A directory of eBPF-based open source applications";

const Hero = () => {
  const types = [
    { name: "Applications", url: "/applications" },
    { name: "Infrastructure", url: "/infrastructure" },
  ];
  const [active, setActive] = useState(types[0].name);

  return (
    <div className="projects-hero">
      <img src={require("../assets/hero-bg.svg")} alt="" aria-hidden />
      <h1>Applications</h1>
      <div className="projects-buttons">
        {types.map(({ name, url }, index) => {
          const isActive = active === name;
          return (
            <Link
              className={cn(
                "projects-button",
                isActive ? "active-button" : "null"
              )}
              key={index}
              to={url}
              onClick={() => setActive(name)}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const YouMaintain = () => (
  <ul className="projects-requirements-list">
    <li>
      If you are maintaining one of the listed projects and would like to adjust
      the content. Get in touch on <a href="/slack">Slack</a> or open a pull
      request directly.
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

const EmergingRequirementsList = () => (
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
      The project must be open to collaboration and have a governance model
      following open-source best-practices.
    </li>
  </ul>
);

const MajorRequirementsList = () => (
  <ul className="projects-requirements-list">
    <li>The project must have more than 50 contributors.</li>
    <li>The project must be actively maintained.</li>
    <li>
      The project must be used in production-like environments with a
      significant amount of users. Since this information may not be easily
      discoverable from a link to the project, such information should be
      included in the pull request description.
    </li>
  </ul>
);

const ProjectDescriptions = () => (
  <div className="project-descriptions">
    <TitleWithAnchor headerClassName="projects-title projects-common-title">
      Major
    </TitleWithAnchor>

    <div className="project-box">
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        bcc
      </TitleWithAnchor>
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
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        bpftrace
      </TitleWithAnchor>
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
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        Cilium
      </TitleWithAnchor>
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
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        Falco
      </TitleWithAnchor>
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
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        Katran
      </TitleWithAnchor>
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

    <TitleWithAnchor headerClassName="projects-title projects-common-title">
      Emerging
    </TitleWithAnchor>

    <div align="center">
      <p style={{ marginBottom: "20px" }}>
        The ordering of emerging applications is based on the number of Github
        stars (high to low), updated on a quaterly basis.
      </p>
    </div>

    <div className="project-box">
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        eCapture
      </TitleWithAnchor>
      <div className="project-minor-title">SSL/TLS capture tool using eBPF</div>
      <div className="project-body">
        <a
          className="project-logo"
          target="_blank"
          href="https://github.com/ehids/ecapture"
        >
          <img
            src={require("../assets/projects-logos/ecapture-logo.png")}
            alt="ehids/eCapture project"
          />
        </a>
        <div className="project-description">
          <p>
            <a href="https://github.com/ehids/ecapture" target="_blank">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
            eCapture is a tool that can capture plaintext without a CA
            certificate. It supports TLS encryption libraries such as
            openssl/gnutls/nspr etc. The userspace code is written in Go and
            uses cilium/ebpf. It can work on Linux Kernel 4.18 and later, and
            supports CO-RE features. At the same time, it also works without
            BTF.
          </p>
        </div>
      </div>
    </div>

    <div className="project-box">
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        Pixie
      </TitleWithAnchor>
      <div className="project-minor-title">
        Scriptable observability for Kubernetes
      </div>
      <div className="project-body">
        <a
          className="project-logo"
          target="_blank"
          href="https://github.com/pixie-io/pixie"
        >
          <img src={require("../assets/projects-logos/pixie.png")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://px.dev">
              <b>Website</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/pixie-io/pixie">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
            Pixie is an open source observability tool for Kubernetes
            applications. Pixie uses eBPF to automatically capture telemetry
            data without the need for manual instrumentation. Developers can use
            Pixie to view the high-level state of their cluster (service maps,
            cluster resources, application traffic) and also drill down into
            more detailed views (pod state, flame graphs, individual full body
            application requests).
          </p>
        </div>
      </div>
    </div>

    <div className="project-box">
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        Hubble
      </TitleWithAnchor>
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
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        Tracee
      </TitleWithAnchor>
      <div className="project-minor-title">
        Linux Runtime Security and Forensics using eBPF
      </div>
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
            Tracee uses eBPF technology to detect and filter operating system
            events, helping you expose security insights, detect suspicious
            behavior, and capture forensic indicators.
          </p>
        </div>
      </div>
    </div>

    <div className="project-box">
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        kubectl trace
      </TitleWithAnchor>
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
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        Tetragon
      </TitleWithAnchor>
      <div className="project-minor-title">
        eBPF-based Security Observability &amp; Runtime Enforcement
      </div>
      <div className="project-body">
        <a
          className="project-logo"
          target="_blank"
          href="https://github.com/cilium/tetragon"
        >
          <img src={require("../assets/projects-logos/tetragon.png")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://github.com/cilium/tetragon">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
            Tetragon provides eBPF-based transparent security observability
            combined with real-time runtime enforcement. The deep visibility is
            achieved without requiring application changes and is provided at
            low overhead thanks to smart Linux in-kernel filtering and
            aggregation logic built directly into the eBPF-based kernel-level
            collector. The embedded runtime enforcement layer is capable of
            performing access control on kernel functions, system calls and at
            other enforcement levels.
          </p>
        </div>
      </div>
    </div>

    <div className="project-box">
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        BumbleBee
      </TitleWithAnchor>
      <div className="project-minor-title">OCI compliant eBPF tooling</div>
      <div className="project-body">
        <a className="project-logo" target="_blank" href="https://bumblebee.io">
          <img src={require("../assets/projects-logos/bumblebee.png")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://github.com/solo-io/bumblebee">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
            BumbleBee simplifies building eBPF tools and allows you to package,
            distribute, and run eBPF programs using OCI images. It allows you to
            just focus on the eBPF portion of your code and BumbleBee automates
            away the boilerplate, including the userspace code.
          </p>
        </div>
      </div>
    </div>

    <div className="project-box">
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        ply
      </TitleWithAnchor>
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
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        KubeArmor
      </TitleWithAnchor>
      <div className="project-minor-title">
        Container-aware Runtime Security Enforcement System
      </div>
      <div className="project-body">
        <a
          className="project-logo"
          target="_blank"
          href="https://github.com/accuknox/KubeArmor"
        >
          <img src={require("../assets/projects-logos/kubearmor.png")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://kubearmor.com">
              <b>Website</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/accuknox/KubeArmor">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
            KubeArmor is a container-aware runtime security enforcement system
            that restricts the behavior (such as process execution, file access,
            networking operation, and resource utilization) of containers at the
            system level, using LSMs and eBPF.
          </p>
        </div>
      </div>
    </div>

    <div className="project-box">
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        L3AF
      </TitleWithAnchor>
      <div className="project-minor-title">
        Complete lifecycle management of eBPF programs
      </div>
      <div className="project-body">
        <a className="project-logo" target="_blank" href="https://l3af.io">
          <img src={require("../assets/projects-logos/l3af.svg")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://l3af.io">
              <b>Website</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/l3af-project">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
            L3AF is a platform to launch and manage eBPF programs in distributed
            environments. L3AF empowers users to compose multiple eBPF programs
            together to solve unique problems in different environments. Using
            the APIs provided by L3AF, these eBPF programs can be reconfigured,
            updated, inspected, and reordered on-the-fly. L3AF also provides
            configurable metrics for the eBPF programs it has launched.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Page = () => (
  <Layout>
    <div className="page-projects">
      <Helmet
        title={pageMetaTitle}
        meta={[
          {
            name: "keywords",
            content: "ebpf, bpf, landscape, directory, open source",
          },
          { name: "type", property: "og:type", content: "website" },
          {
            name: "url",
            property: "og:url",
            content: "https://ebpf.io/contribute/",
          },
          { name: "title", property: "og:title", content: pageMetaTitle },
          {
            name: "description",
            property: "og:description",
            content: pageMetaDescription,
          },
          {
            name: "image",
            property: "og:image",
            content: "https://ebpf.io" + require("../assets/ogimage.png"),
          },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:url", content: "https://ebpf.io/projects/" },
          { name: "twitter:title", content: pageMetaTitle },
          { name: "twitter:description", content: pageMetaDescription },
          {
            name: "twitter:image",
            content: "https://ebpf.io" + require("../assets/ogimage.png"),
          },
        ]}
      />
      <Hero />
      <div className="project-content-wrapper">
        <ProjectDescriptions />
        <TitleWithAnchor headerClassName="projects-title projects-common-title">
          Frequently Asked Questions
        </TitleWithAnchor>
        <h3>Add your project</h3>
        <HowToList />
        <h3>Are you maintaining a listed project?</h3>
        <YouMaintain />
        <h3>Requirements for a project to be listed</h3>
        <p>
          Projects can be listed on this page as "Major" or "Emerging". The
          requirements for being listed as "Emerging" are:
        </p>
        <EmergingRequirementsList />
        <p>
          In order to be listed as a "Major" project, a project must meet all of
          the requirements above, plus:
        </p>
        <MajorRequirementsList />
      </div>
    </div>
  </Layout>
);

export default Page;
