import Helmet from "react-helmet";
import Layout from "../layouts";
import React from "react";
import { TitleWithAnchor } from "../common/TitleWithAnchor";

import "../stylesheets/index.scss";
import { FAQ } from "../common/projects/Faq";
import { ProjectCard } from "../common/projects/ProjectCard";
import { Hero } from "../common/projects/Hero";
import bccLogo from "../assets/projects-logos/bcc.svg";
import ciliumLogo from "../assets/projects-logos/cilium-with-text.svg";
import bpftraceLogo from '../assets/projects-logos/bpftrace.jpg';
import falcoLogo from '../assets/projects-logos/falco.svg';
import katranLogo from '../assets/projects-logos/katran.svg';
import ecaptureLogo from "../assets/projects-logos/ecapture.svg";
import pixieLogo from '../assets/projects-logos/pixie.svg';
import hubbleLogo from '../assets/projects-logos/hubble.svg';
import kubectlTraceLogo from '../assets/projects-logos/kubectl_trace.svg';
import traceeLogo from '../assets/projects-logos/tracee.svg';
import tetragonLogo from '../assets/projects-logos/tetragon.jpg';
import bumblebeeLogo from '../assets/projects-logos/bumblebee.svg';
import plyLogo from '../assets/projects-logos/ply.svg';
import kubeArmorLogo from '../assets/projects-logos/kubearmor.svg';
import l3afLogo from '../assets/projects-logos/l3af.svg'
import merbridgeLogo from '../assets/projects-logos/merbridge.svg';
import loxiLBLogo from "../assets/projects-logos/loxilb.png";
import pwruLogo from "../assets/projects-logos/pwru.png";

const pageMetaTitle = "eBPF Applications Landscape";
const pageMetaDescription =
  "A directory of eBPF-based open source applications";

const majorProjects = [
  {
    logoUrl: 'https://github.com/iovisor/bcc',
    name: 'bcc',
    logo: bccLogo,
    title: 'Toolkit and library for efficient BPF-based kernel tracing',
    description: `BCC is a toolkit for creating efficient kernel
    tracing and manipulation programs built upon eBPF, and includes
    several useful command-line tools and examples. BCC eases writing of
    eBPF programs for kernel instrumentation in C, includes a wrapper
    around LLVM, and front-ends in Python and Lua. It also provides a
    high-level library for direct integration into applications.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/iovisor/bcc'},
    ],
  },
  {
    logoUrl: 'https://github.com/cilium/cilium',
    name: 'Cilium',
    logo: ciliumLogo,
    title: 'eBPF-based Networking, Security, and Observability',
    description: `Cilium is an open source project that provides
    eBPF-powered networking, security and observability. It has been
    specifically designed from the ground up to bring the advantages of
    eBPF to the world of Kubernetes and to address the new scalability,
    security and visibility requirements of container workloads.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/cilium/cilium'},
      {label: 'Website', url: 'https://cilium.io'},
    ],
  },
  {
    logoUrl: 'https://github.com/iovisor/bpftrace',
    name: 'bpftrace',
    logo: bpftraceLogo,
    title: 'High-level tracing language for Linux eBPF',
    description: `bpftrace is a high-level tracing language for Linux eBPF. Its
    language is inspired by awk and C, and predecessor tracers such as
    DTrace and SystemTap. bpftrace uses LLVM as a backend to compile
    scripts to eBPF bytecode and makes use of BCC as a library for
    interacting with the Linux eBPF subsystem as well as existing Linux
    tracing capabilities and attachment points.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/iovisor/bpftrace'},
      {label: 'Website', url: 'https://bpftrace.org/'},
    ],
  },
  {
    logoUrl: 'https://github.com/falcosecurity/falco',
    name: 'Falco',
    logo: falcoLogo,
    title: 'Cloud Native Runtime Security',
    description: `Falco is a behavioral activity monitor designed to detect anomalous
    activity in applications. Falco audits a system at the Linux kernel
    layer with the help of eBPF. It enriches gathered data with other
    input streams such as container runtime metrics and Kubernetes
    metrics, and allows to continuously monitor and detect container,
    application, host, and network activity.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/falcosecurity/falco'},
      {label: 'Website', url: 'https://falco.org/'},
    ],
  },
  {
    logoUrl: 'https://github.com/facebookincubator/katran',
    name: 'Katran',
    logo: katranLogo,
    title: 'A high performance layer 4 load balancer',
    description: `Katran is a C++ library and eBPF program to build a high-performance
    layer 4 load balancing forwarding plane. Katran leverages the XDP
    infrastructure from the Linux kernel to provide an in-kernel
    facility for fast packet processing. Its performance scales linearly
    with the number of NIC's receive queues and it uses RSS friendly
    encapsulation for forwarding to L7 load balancers.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/facebookincubator/katran'},
      {label: 'Website', url: 'https://engineering.fb.com/open-source/open-sourcing-katran-a-scalable-network-load-balancer/'},
    ],
  },
]

const emergingProjects = [
  {
    logoUrl: 'https://github.com/ehids/ecapture',
    name: 'eCapture',
    logo: ecaptureLogo,
    title: 'SSL/TLS capture tool using eBPF',
    description: `eCapture is a tool that can capture plaintext without a CA
    certificate. It supports TLS encryption libraries such as
    openssl/gnutls/nspr etc. The userspace code is written in Go and
    uses cilium/ebpf. It can work on Linux Kernel 4.18 and later, and
    supports CO-RE features. At the same time, it also works without
    BTF.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/ehids/ecapture'},
    ],
  },
  {
    logoUrl: 'https://github.com/pixie-io/pixie',
    name: 'Pixie',
    logo: pixieLogo,
    title: 'Scriptable observability for Kubernetes',
    description: `Pixie is an open source observability tool for Kubernetes
    applications. Pixie uses eBPF to automatically capture telemetry
    data without the need for manual instrumentation. Developers can use
    Pixie to view the high-level state of their cluster (service maps,
    cluster resources, application traffic) and also drill down into
    more detailed views (pod state, flame graphs, individual full body
    application requests).`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/pixie-io/pixie'},
      {label: 'Website', url: 'https://px.dev'},
    ],
  },
  {
    logoUrl: 'https://github.com/cilium/hubble',
    name: 'Hubble',
    logo: hubbleLogo,
    title: 'Network, Service & Security Observability for Kubernetes using eBPF',
    description: `Hubble is a fully distributed networking and security observability
    platform for cloud native workloads. It is built on top of Cilium
    and eBPF to enable deep visibility into the communication and
    behavior of services as well as the networking infrastructure in a
    completely transparent manner.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/cilium/hubble'},
      {label: 'Website', url: 'https://cilium.io/'},
    ],
  },
  {
    logoUrl: 'https://github.com/aquasecurity/tracee',
    name: 'Tracee',
    logo: traceeLogo,
    title: 'Linux Runtime Security and Forensics using eBPF',
    description: `Tracee uses eBPF technology to detect and filter operating system
    events, helping you expose security insights, detect suspicious
    behavior, and capture forensic indicators.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/aquasecurity/tracee'},
    ],
  },
  {
    logoUrl: 'https://github.com/cilium/tetragon',
    name: 'Tetragon',
    logo: tetragonLogo,
    title: 'eBPF-based Security Observability & Runtime Enforcement',
    description: `Tetragon provides eBPF-based transparent security observability
    combined with real-time runtime enforcement. The deep visibility is
    achieved without requiring application changes and is provided at
    low overhead thanks to smart Linux in-kernel filtering and
    aggregation logic built directly into the eBPF-based kernel-level
    collector. The embedded runtime enforcement layer is capable of
    performing access control on kernel functions, system calls and at
    other enforcement levels.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/cilium/tetragon'},
    ],
  },
  {
    logoUrl: 'https://github.com/iovisor/kubectl-trace',
    name: 'kubectl trace',
    logo: kubectlTraceLogo,
    title: 'Schedule bpftrace programs on your Kubernetes cluster',
    description: `kubectl-trace is a kubectl plugin that allows for scheduling the
    execution of bpftrace(8) programs in Kubernetes clusters.
    kubectl-trace does not require installation of any components
    directly onto a Kubernetes cluster in order to execute bpftrace
    programs. When pointed to a cluster, it schedules a temporary job
    called trace-runner that executes bpftrace.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/iovisor/kubectl-trace'},
    ],
  },
  {
    logoUrl: 'https://github.com/solo-io/bumblebee',
    name: 'BumbleBee',
    logo: bumblebeeLogo,
    title: 'OCI compliant eBPF tooling',
    description: `BumbleBee simplifies building eBPF tools and allows you to package,
    distribute, and run eBPF programs using OCI images. It allows you to
    just focus on the eBPF portion of your code and BumbleBee automates
    away the boilerplate, including the userspace code.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/solo-io/bumblebee'},
      {label: 'Website', url: 'https://bumblebee.io/'},
    ],
  },
  {
    logoUrl: 'https://github.com/cilium/pwru',
    name: 'pwru',
    logo: pwruLogo,
    title: 'eBPF-based Linux kernel network packet tracer',
    description: 'pwru is an eBPF-based tool for tracing network packets in the Linux kernel with advanced filtering capabilities. It allows fine-grained introspection of kernel state to facilitate debugging network connectivity issues.',
    urls: [
      {label: 'GitHub', url: 'https://github.com/cilium/pwru'},
    ],
  },
  {
    logoUrl: 'https://github.com/iovisor/ply',
    name: 'ply',
    logo: plyLogo,
    title: 'A dynamic tracer for Linux',
    description: `ply is a dynamic tracer for Linux which is built upon eBPF. It has
    been designed with embedded systems in mind, is written in C and all
    that ply needs to run is libc and a modern Linux kernel with eBPF
    support, meaning, it does not depend on LLVM for its program
    generation. It has a C-like syntax for writing scripts and is
    heavily inspired by awk(1) and dtrace(1).`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/iovisor/ply'},
      {label: 'Website', url: 'https://wkz.github.io/ply/'},
    ],
  },
  {
    logoUrl: 'https://github.com/accuknox/KubeArmor',
    name: 'KubeArmor',
    logo: kubeArmorLogo,
    title: 'Container-aware Runtime Security Enforcement System',
    description: `KubeArmor is a container-aware runtime security enforcement system
    that restricts the behavior (such as process execution, file access,
    networking operation, and resource utilization) of containers at the
    system level, using LSMs and eBPF.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/accuknox/KubeArmor'},
      {label: 'Website', url: 'https://kubearmor.com'},
    ],
  },
  {
    logoUrl: 'https://github.com/merbridge/merbridge',
    name: 'Merbridge',
    logo: merbridgeLogo,
    title: 'Use eBPF to speed up your Service Mesh like crossing an Einstein-Rosen Bridge',
    description: `Merbridge is designed to make traffic interception and forwarding more efficient for service mesh. With Merbridge, developers can use eBPF instead of iptables to accelerate their service mesh without any additional operations or code changes. Currently, Merbridge already supports Istio, Linkerd, and Kuma.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/merbridge/merbridge'},
      {label: 'Website', url: 'https://merbridge.io/'},
    ],
  },
  {
    logoUrl: 'https://github.com/l3af-project',
    name: 'L3AF',
    logo: l3afLogo,
    title: 'Complete lifecycle management of eBPF programs',
    description: `L3AF is a platform to launch and manage eBPF programs in distributed
    environments. L3AF empowers users to compose multiple eBPF programs
    together to solve unique problems in different environments. Using
    the APIs provided by L3AF, these eBPF programs can be reconfigured,
    updated, inspected, and reordered on-the-fly. L3AF also provides
    configurable metrics for the eBPF programs it has launched.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/l3af-project'},
      {label: 'Website', url: 'https://l3af.io'},
    ],
  },
  {
    logoUrl: 'https://github.com/loxilb-io',
    name: 'LoxiLB',
    logo: loxiLBLogo,
    title: 'eBPF based cloud-native load-balancer for 5G Edge',
    description: `LoxiLB is an open-source cloud-native "external" service load-balancer for cloud-native 5G/edge workloads written from scratch using eBPF as its core-engine and based on Go Language. LoxiLB turns Kubernetes network load balancing for 5G/Edge services into high speed, flexible and programmable LB services.`,
    urls: [
      {label: 'GitHub', url: 'https://github.com/loxilb-io'},
      {label: 'Website', url: 'https://www.loxilb.io/'},
    ],
  },
]

const ProjectDescriptions = () => (
  <div className="project-descriptions">
    <TitleWithAnchor className="projects-wrapper-title" headerClassName="projects-title">
      Major Applications
    </TitleWithAnchor>
    <ul className="projects-list">
      {majorProjects.map((item) => (
        <ProjectCard {...item} key={item.name}/>
      ))}
    </ul>

    <TitleWithAnchor className="projects-wrapper-title" headerClassName="projects-title">
      Emerging
    </TitleWithAnchor>

    <div align="center">
      <p style={{ marginBottom: "20px", fontSize: '20px', textAlign: 'left', lineHeight: '1.625' }}>
        The ordering of emerging applications is based on the number of Github
        stars (high to low), updated on a quaterly basis.
      </p>
    </div>

    <ul className="projects-list">
      {emergingProjects.map((item, index) => (
        <ProjectCard {...item} key={index}/>
      ))}
    </ul>
  </div>
);

const Page = () => (
  <Layout>
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
          content: "https://ebpf.io" + '/images/ogimage.png',
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://ebpf.io/projects/" },
        { name: "twitter:title", content: pageMetaTitle },
        { name: "twitter:description", content: pageMetaDescription },
        {
          name: "twitter:image",
          content: "https://ebpf.io" + '/images/ogimage.png',
        },
      ]}
    />
      <Hero title="Applications" />
      <div className="page-projects">
        <div className="project-content-wrapper">
          <ProjectDescriptions />
          <FAQ/>
        </div>
    </div>
  </Layout>
);

export default Page;
