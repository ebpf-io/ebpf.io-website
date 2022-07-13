import Helmet from "react-helmet";
import cn from "classnames";
import { Link } from "gatsby";
import Layout from "../layouts";
import React, { useState } from "react";
import { TitleWithAnchor } from "../common/TitleWithAnchor";

import "../stylesheets/index.scss";

const pageMetaTitle = "eBPF Core Infrastructure Landscape";
const pageMetaDescription = "A directory of eBPF-based core infrastructure";

const Hero = () => {
  const types = [
    { name: "Applications", url: "/applications" },
    { name: "Infrastructure", url: "/infrastructure" },
  ];
  const [active, setActive] = useState(types[0].name);

  return (
    <div className="projects-hero">
      <img src={require("../assets/hero-bg.svg")} alt="" aria-hidden />
      <h1>Infrastructure</h1>
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
        Linux Kernel
      </TitleWithAnchor>
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
            <a href="https://patchwork.kernel.org/project/netdevbpf/list/?delegate=121173">
              <b>Patches</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/kernel-patches/bpf/pulls">
              <b>CI</b>
            </a>{" "}
            |{" "}
            <a href="https://docs.google.com/spreadsheets/d/1LfrDXZ9-fdhvPEp_LHkxAMYyxxpwBXjywWa0AejEveU/edit#gid=0">
              <b>Office Hours</b>
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
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        LLVM Compiler
      </TitleWithAnchor>
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
            |{" "}
            <a href="https://reviews.llvm.org/search/query/ABG0ZPUPkDGb/#R">
              <b>Patches</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/llvm/llvm-project/labels/backend:BPF">
              <b>Bugtracker</b>
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

    <TitleWithAnchor headerClassName="projects-title projects-common-title">
      Emerging
    </TitleWithAnchor>

    <div className="project-box">
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        eBPF for Windows
      </TitleWithAnchor>
      <div className="project-minor-title">eBPF Runtime</div>
      <div className="project-body">
        <a
          className="project-logo"
          target="_blank"
          href="https://github.com/microsoft/ebpf-for-windows"
        >
          <img
            src={require("../assets/projects-logos/eBPF for Windows logo.png")}
          />
        </a>
        <div className="project-description">
          <p>
            <a href="https://microsoft.github.io/ebpf-for-windows/">
              <b>Website</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/microsoft/ebpf-for-windows">
              <b>GitHub</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/microsoft/ebpf-for-windows/discussions/427">
              <b>Office Hours</b>
            </a>{" "}
            |{" "}
            <a href="https://cilium.slack.com/archives/C0210QTK2MV">
              <b>Slack Channel</b>
            </a>{" "}
          </p>
          <p>
            The eBPF for Windows project is a work-in-progress that allows using
            existing eBPF toolchains and APIs familiar in the eBPF ecosystem to
            be used on top of Windows. That is, this project takes existing eBPF
            projects as submodules and adds the layer in between to make them
            run on top of Windows.
          </p>
        </div>
      </div>
    </div>

    <div className="project-box">
      <TitleWithAnchor
        headerClassName="project-major-title projects-common-title"
        headerTag="h3"
      >
        hBPF
      </TitleWithAnchor>
      <div className="project-minor-title">hBPF - eBPF in hardware</div>
      <div className="project-body">
        <a
          className="project-logo"
          target="_blank"
          href="https://github.com/rprinz08/hBPF"
        >
          <img src={require("../assets/projects-logos/hbpf.png")} />
        </a>
        <div className="project-description">
          <p>
            <a href="https://www.min.at/hbpf/">
              <b>Website</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/rprinz08/hBPF">
              <b>GitHub</b>
            </a>{" "}
          </p>
          <p>
            An extended Berkley Packet Filter CPU implemented in hardware on
            FPGA. In contrast to classic HDL languages like Verilog or VHDL,
            Migen/LiteX (both based on Python) where used. Supports custom
            extensions to 'call' opcode and includes full test suite for each
            opcode for included emulator and simulator as well as for included
            hardware targets.
          </p>
        </div>
      </div>
    </div>

    <TitleWithAnchor
      headerClassName="projects-title projects-common-title"
      className="projects-title"
    >
      eBPF Libraries
    </TitleWithAnchor>

    <div className="project-box">
      <a name="golang" />
      <div className="project-body">
        <div className="project-logo">
          <img src={require("../assets/projects-logos/golang.png")} />
        </div>
        <div className="project-description">
          <p>
            <b>Major:</b>{" "}
            <a href="https://github.com/cilium/ebpf">
              <b>ebpf</b>
            </a>
            <br />
            <b>Emerging:</b>{" "}
            <a href="https://github.com/aquasecurity/libbpfgo">
              <b>libbpfgo</b>
            </a>{" "}
          </p>
          <p>
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
            <b>Major:</b>{" "}
            <a href="https://github.com/libbpf/libbpf">
              <b>libbpf</b>
            </a>
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
            <b>Major:</b>{" "}
            <a href="https://github.com/libbpf/libbpf-rs">
              <b>libbpf-rs</b>
            </a>{" "}
            |{" "}
            <a href="https://github.com/redsift/redbpf">
              <b>redbpf</b>
            </a>
            <br />
            <b>Emerging:</b>{" "}
            <a href="https://github.com/aya-rs/aya">
              <b>Aya</b>
            </a>{" "}
          </p>
          <p>
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
