import React from "react";
import Layout from "../layouts";
import { graphql, Link } from "gatsby";
import BlogLatest from "../common/homepage/BlogLatest";
import BlogRoll from "../common/homepage/BlogRoll";
import HelmetBlock from "../common/homepage/Helmet";
import MainTitle from "../common/homepage/MainTitle";
import Section from "../common/homepage/Section";
import Videos from "../common/homepage/Videos";
import "../stylesheets/index.scss";

const tracingText = `
The ability to attach eBPF programs to trace points as well as kernel and user
application probe points allows unprecedented visibility into the runtime
behavior of applications and the system itself. By giving introspection
abilities to both the application and system side, both views can be combined,
allowing powerful and unique insights to troubleshoot system performance
problems.  Advanced statistical data structures allow to extract meaningful
visibility data in an efficient manner, without requiring the export of vast
amounts of sampling data as typically done by similar systems.
`;

const securityText = `
Building on the foundation of seeing and understanding all system calls and
combining that with a packet and socket-level view of all networking operations
allows for revolutionary new approaches to securing systems. While aspects of
system call filtering, network-level filtering, and process context tracing
have typically been handled by completely independent systems, eBPF allows for
combining the visibility and control of all aspects to create security systems
operating on more context with better level of control.
`;

const networkingText = `
The combination of programmability and efficiency makes eBPF a natural fit for
all packet processing requirements of networking solutions. The programmability
of eBPF enables adding additional protocol parsers and easily program any
forwarding logic to meet changing requirements without ever leaving the packet
processing context of the Linux kernel. The efficiency provided by the JIT
compiler provides execution performance close to that of natively compiled
in-kernel code.
`;

const monitoringText = `
Instead of relying on static counters and gauges exposed by the operating
system, eBPF enables the collection & in-kernel aggregation of custom metrics
and generation of visibility events based on a wide range of possible sources.
This extends the depth of visibility that can be achieved as well as reduces
the overall system overhead significantly by only collecting the visibility
data required and by generating histograms and similar data structures at the
source of the event instead of relying on the export of samples.
`;

const Buttons = () => (
  <h1 className="main-buttons">
    <Link to="/what-is-ebpf" className="main-button">
      What is eBPF?
    </Link>
    <Link to="/applications" className="main-button">
      Project Landscape
    </Link>
  </h1>
);

const Intro = () => (
  <div className="intro">
    <p>
      eBPF is a revolutionary technology with origins in the Linux kernel that
      can run sandboxed programs in an operating system kernel. It is used to
      safely and efficiently extend the capabilities of the kernel without
      requiring to change kernel source code or load kernel modules.
    </p>
    <p>
      Historically, the operating system has always been an ideal place to
      implement observability, security, and networking functionality due to the
      kernel’s privileged ability to oversee and control the entire system. At
      the same time, an operating system kernel is hard to evolve due to its
      central role and high requirement towards stability and security. The rate
      of innovation at the operating system level has thus traditionally been
      lower compared to functionality implemented outside of the operating
      system.
    </p>
    <img src={require("../assets/overview.png")} />
    <p>
      eBPF changes this formula fundamentally. By allowing to run sandboxed
      programs within the operating system, application developers can run eBPF
      programs to add additional capabilities to the operating system at
      runtime. The operating system then guarantees safety and execution
      efficiency as if natively compiled with the aid of a Just-In-Time (JIT)
      compiler and verification engine. This has led to a wave of eBPF-based
      projects covering a wide array of use cases, including next-generation
      networking, observability, and security functionality.
    </p>
    <p>
      Today, eBPF is used extensively to drive a wide variety of use cases:
      Providing high-performance networking and load-balancing in modern data
      centers and cloud native environments, extracting fine-grained security
      observability data at low overhead, helping application developers trace
      applications, providing insights for performance troubleshooting,
      preventive application and container runtime security enforcement, and
      much more. The possibilities are endless, and the innovation that eBPF is
      unlocked has only just begun.
    </p>
  </div>
);

const Sections = () => (
  <div className="main-sections" style={{ marginTop: "30px" }}>
    <div className="main-sections-left">
      <Section
        title="Security"
        icon={require("../assets/intro_security.png")}
        text={securityText}
      />
      <Section
        title="Networking"
        icon={require("../assets/intro_networking.png")}
        text={networkingText}
      />
    </div>
    <div className="main-sections-right">
      <Section
        title="Tracing & Profiling"
        icon={require("../assets/intro_tracing.png")}
        text={tracingText}
      />
      <Section
        style={{ marginTop: "45px" }}
        title="Observability & Monitoring"
        icon={require("../assets/intro_observability.png")}
        text={monitoringText}
      />
    </div>
  </div>
);

const Outro = () => (
  <div className="intro">
    <p>To learn more about eBPF and its use cases:</p>
    <table width="100%">
      <tbody>
        <tr>
          <td>
            <ul>
              <li>
                <a href="/what-is-ebpf">What is eBPF?</a>
              </li>
              <li>
                <a href="/projects">eBPF Landscape</a>
              </li>
              <li>
                <a href="https://www.ebpf.top">Head First eBPF (Chinese)</a>
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                <a href="/slack">Join the #ebpf Slack community</a>
              </li>
              <li>
                <a href="/contribute">Learn how to contribute</a>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const IndexPage = ({ data, location: { pathname } }) => {
  return (
    <Layout path={pathname}>
      <div className="page-wrapper page-index">
        <HelmetBlock />
        <MainTitle />
        <Buttons />
        <Intro />
        <Sections />
        <Videos title="Featured eBPF Talks" />
        <BlogLatest
          title="Latest Blog Posts"
          posts={data.allMarkdownRemark.edges}
        />
        <BlogRoll title="Featured eBPF Community Blogs" />
        <Outro />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2
    ) {
      edges {
        node {
          html
          id
          excerpt
          frontmatter {
            categories
            date
            path
            title
            tags
          }
        }
      }
    }
  }
`;
