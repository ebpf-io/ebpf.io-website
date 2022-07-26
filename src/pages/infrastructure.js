import Helmet from "react-helmet";
import Layout from "../layouts";
import React from "react";

import { TitleWithAnchor } from "../common/TitleWithAnchor";
import { FAQ } from "../common/projects/Faq";
import linuxLogo from '../assets/projects-logos/linux.png';
import llvmLogo from '../assets/projects-logos/llvm2.png';
import ebpfForWindowsLogo from '../assets/projects-logos/ebpf-for-windows-logo.png';
import hbpfLogo from '../assets/projects-logos/hbpf.png';
import golangLogo from '../assets/projects-logos/golang.png';
import rustLogo from '../assets/projects-logos/rust.png';
import cppLogo from '../assets/projects-logos/cpp.png';
import "../stylesheets/index.scss";
import { Hero } from "../common/projects/Hero";
import { ProjectCard } from "../common/projects/ProjectCard";

const pageMetaTitle = "eBPF Core Infrastructure Landscape";
const pageMetaDescription = "A directory of eBPF-based core infrastructure";

const majorProjects = [
  {
    logoUrl: 'https://www.kernel.org/',
    name: 'Linux Kernel',
    logo: linuxLogo,
    title: 'eBPF Runtime',
    description: `The <strong>Linux kernel</strong> contains the eBPF runtime required to run eBPF
    programs. It implements the bpf(2) system call for interacting with
    programs, maps, BTF and various attachment points where eBPF
    programs can be executed from. The kernel contains a eBPF verifier
    in order to check programs for safety and a JIT compiler to
    translate programs to native machine code. User space tooling such
    as bpftool and libbpf are also maintained as part of the upstream
    kernel.`,
    urls: [
      {label: 'Git trees', url: 'https://git.kernel.org/?q=BPF+Group'},
      {label: 'Website', url: 'https://www.kernel.org/'},
      {label: 'Mailing list', url: 'https://lore.kernel.org/bpf/'},
      {label: 'CI', url: 'https://github.com/kernel-patches/bpf/pulls'},
      {label: 'Patches', url: 'https://patchwork.kernel.org/project/netdevbpf/list/?delegate=121173'},
      {label: 'Docs', url: 'https://www.kernel.org/doc/html/latest/bpf/'},
      {label: 'Office hours', url: 'https://docs.google.com/spreadsheets/d/1LfrDXZ9-fdhvPEp_LHkxAMYyxxpwBXjywWa0AejEveU/edit#gid=0'}
    ],
  },
  {
    logoUrl: 'https://llvm.org/',
    name: 'LLVM Compiler',
    logo: llvmLogo,
    title: 'eBPF Backend',
    description: `The <strong>LLVM</strong> compiler infrastructure contains the eBPF backend required
    to translate programs written in a C-like syntax to eBPF
    instructions. LLVM generates eBPF ELF files which contain program
    code, map descriptions, relocation information and BTF meta data.
    These ELF files contain all necessary information for eBPF loaders
    such as libbpf to prepare and load programs into the Linux kernel.
    The LLVM project also contains additional developer tools such as an
    eBPF object file disassembler.`,
    urls: [
      {label: 'Website', url: 'https://llvm.org/'},
      {label: 'GitHub', url: 'https://github.com/llvm/llvm-project/'},
      {label: 'Patches', url: 'https://reviews.llvm.org/search/query/ABG0ZPUPkDGb/#R'},
      {label: 'Bugtracker', url: 'https://github.com/llvm/llvm-project/labels/backend:BPF'},    
    ],
  },
]

const emergingProjects = [
  {
    logoUrl: 'https://github.com/microsoft/ebpf-for-windows',
    name: 'eBPF for Windows',
    logo: ebpfForWindowsLogo,
    title: 'eBPF Runtime',
    description: `The <strong>eBPF for Windows</strong> project is a work-in-progress that allows using
    existing eBPF toolchains and APIs familiar in the eBPF ecosystem to
    be used on top of Windows. That is, this project takes existing eBPF
    projects as submodules and adds the layer in between to make them
    run on top of Windows.`,
    urls: [
      {label: 'Website', url: 'https://microsoft.github.io/ebpf-for-windows/'},
      {label: 'GitHub', url: 'https://github.com/microsoft/ebpf-for-windows'},
      {label: 'Office hours', url: 'https://github.com/microsoft/ebpf-for-windows/discussions/427'},
      {label: 'Slack channel', url: 'https://cilium.slack.com/archives/C0210QTK2MV'},    
    ],
  },
  {
    logoUrl: 'https://github.com/rprinz08/hBPF',
    name: 'hBPF',
    logo: hbpfLogo,
    title: 'hBPF - eBPF in hardware',
    description: `An extended Berkley Packet Filter CPU implemented in hardware on
    FPGA. In contrast to classic HDL languages like Verilog or VHDL,
    Migen/LiteX (both based on Python) where used. Supports custom
    extensions to 'call' opcode and includes full test suite for each
    opcode for included emulator and simulator as well as for included
    hardware targets.`,
    urls: [
      {label: 'Website', url: 'https://www.min.at/hbpf/'},
      {label: 'GitHub', url: 'https://github.com/rprinz08/hBPF'},   
    ],
  },
]

const ebpfLibraries = [
  {
    logo: golangLogo,
    name: 'golang',
    majorUrls: [
      {label: 'eBPF', url: 'https://github.com/cilium/ebpf'},
    ],
    emergingUrls: [
      {label: 'libbpfgo', url: 'https://github.com/aquasecurity/libbpfgo'},
    ],
    description: `<p>
    <a href="https://github.com/cilium/ebpf">eBPF</a> is designed as a
    pure Go library that provides utilities for loading, compiling, and
    debugging eBPF programs. It has minimal external dependencies and is
    intended to be used in long running processes.
  </p>
  <p>
    <a href="https://github.com/aquasecurity/libbpfgo">libbpfgo</a> is a
    Go wrapper around libbpf. It supports BPF CO-RE and its goal is to
    be a complete implementation of libbpf APIs. It uses CGo to call
    into linked versions of libbpf.
  </p>`,
  },
  {
    logo: cppLogo,
    name: 'cpp',
    majorUrls: [
      {label: 'libbpf', url: 'https://github.com/libbpf/libbpf'},
    ],
    description: `libbpf is a C/C++ based library which is maintained as part of the
    upstream Linux kernel. It contains an eBPF loader which takes over
    processing LLVM generated eBPF ELF files for loading into the
    kernel. <a href="https://facebookmicrosites.github.io/bpf/blog/2020/02/20/bcc-to-libbpf-howto-guide.html">
      libbpf</a> received a major boost in capabilities and sophistication and closed
    many existing gaps with BCC as a library. It also supports important
    features not available in BCC such as global variables and BPF
    skeletons.`,
  },
  {
    logo: rustLogo,
    name: 'rust',
    majorUrls: [
      {label: 'libbpf-rs', url: 'https://github.com/libbpf/libbpf-rs'},
      {label: 'redbpf', url: 'https://github.com/redsift/redbpf'},
    ],
    emergingUrls: [
      {label: 'Aya', url: 'https://github.com/aya-rs/aya'},
    ],
    description: `<p>
    <a href="https://github.com/libbpf/libbpf-rs">libbpf-rs</a> is a
    safe, idiomatic, and opinionated wrapper API around libbpf written
    in Rust. libbpf-rs, together with libbpf-cargo (libbpf cargo plugin)
    allows to write 'compile once run everywhere' (CO-RE) eBPF programs.
  </p>
  <p>
    <a href="https://github.com/redsift/redbpf">redbpf</a> is a Rust
    eBPF toolchain that contains a collection of Rust libraries to work
    with eBPF programs.
  </p>
  <p>
    <a href="https://github.com/aya-rs/aya">Aya</a> is an eBPF library
    built with a focus on operability and developer experience. It
    allows for both eBPF programs and their userspace programs to be
    written in Rust.
  </p>`,
  },
]
const ProjectDescriptions = () => (
  <div className="project-descriptions">
    <TitleWithAnchor headerClassName="projects-title projects-common-title">
      Major
    </TitleWithAnchor>
    <ul>
      {majorProjects.map((project) => (
        <ProjectCard key={project.name} {...project} logoSize="sm" />
      ))}
    </ul>

    <TitleWithAnchor headerClassName="projects-title projects-common-title">
      Emerging
    </TitleWithAnchor>

    <ul>
      {emergingProjects.map((project) => (
        <ProjectCard key={project.name} {...project} logoSize="sm" />
      ))}
    </ul>

    <TitleWithAnchor
      headerClassName="projects-title projects-common-title"
      className="projects-title"
    >
      eBPF Libraries
    </TitleWithAnchor>
    <ul>
      {ebpfLibraries.map((project, index) => (
        <ProjectCard key={index} {...project} logoSize="sm" />
      ))}
    </ul>
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
        <FAQ/>
      </div>
    </div>
  </Layout>
);

export default Page;
