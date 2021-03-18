import React from "react";
import Layout from "../layouts";
import { graphql, Link } from 'gatsby'
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
    <Link to="/projects" className="main-button">
      Projects
    </Link>
  </h1>
);

const Intro = () => (
  <div className="intro">
    <p>
      The Linux kernel has always been an ideal place to implement
      monitoring/observability, networking, and security. Unfortunately this was
      often impractical as it required changing kernel source code or loading
      kernel modules, and resulted in layers of abstractions stacked on top of
      each other. eBPF is a revolutionary technology that can run sandboxed
      programs in the Linux kernel without changing kernel source code or
      loading kernel modules.
    </p>
    <p>
      By making the Linux kernel programmable, infrastructure software can
      leverage existing layers, making them more intelligent and feature-rich
      without continuing to add additional layers of complexity to the system or
      compromising execution efficiency and safety.
    </p>
    <img src={require("../assets/go.png")} />
    <p>
      eBPF has resulted in the development of a completely new generation of
      software able to reprogram the behavior of the Linux kernel and even apply
      logic across multiple subsystems which were traditionally completely
      independent.
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
    <p>
      To learn more about eBPF and its use cases:
      <table width="100%">
        <tr>
          <td>
            <ul>
              <li>
                <a href="/what-is-ebpf">What is eBPF?</a>
              </li>
              <li>
                <a href="/projects">List of eBPF-powered projects</a>
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                <a href="/slack">
                  Join the #ebpf Slack community
                </a>
              </li>
              <li>
                <a href="/contribute">Learn how to contribute</a>
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </p>
  </div>
);

const IndexPage = ({ data }) => {
  return <Layout>
    <div className="page-wrapper page-index">
      <HelmetBlock />
      <MainTitle />
      <Buttons />
      <Intro />
      <Sections />
      <Videos title="Featured eBPF Talks" />
      <BlogLatest title="Latest Blog Posts" posts={data.allMarkdownRemark.edges} />
      <BlogRoll title="Featured eBPF Community Blogs"/>
      <Outro />
    </div>
  </Layout>
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
