import React from "react";
import Layout from "../layouts";
import { graphql, Link } from "gatsby";
import BlogLatest from "../common/homepage/BlogLatest";
import BlogRoll from "../common/homepage/BlogRoll";
import MainTitle from "../common/homepage/MainTitle";
import Section from "../common/homepage/Section";
import Videos from "../common/homepage/Videos";
import "../stylesheets/index.scss";

import security from '../assets/intro_security.png';
import networking from '../assets/intro_networking.png'
import tracing from '../assets/intro_tracing.png';
import observability from '../assets/intro_observability.png';
import go from '../assets/go.png';

const pageMetaTitle = 'eBPF - Introduction, Tutorials & Community Resources';
const pageMetaDescription =
  'eBPF is a revolutionary technology that can run sandboxed programs in the Linux kernel without changing kernel source code or loading a kernel module.';

const tracingText = `
eBPF 程序能够加载到 trace points、内核及用户空间应用程序中的 probe points，
这种能力使我们对应用程序的运行时行为（runtime behavior）和系统本身
（system itself）提供了史无前例的可观测性。应用端和系统端的这种观测能力相结合，
能在排查系统性能问题时提供强大的能力和独特的信息。BPF 使用了很多高级数据结构，
因此能非常高效地导出有意义的可观测数据，而不是像很多同类系统一样导出海量的原始采样数据。
`;

const securityText = `
观测和理解所有的系统调用的能力，以及在 packet 层和 socket 层审视所有的网络操作的能力，
这两者相结合，为系统安全提供了革命性的新方法。
以前，系统调用过滤、网络层过滤和进程上下文跟踪是在完全独立的系统中完成的；
eBPF 的出现统一了可观测性和各层面的控制能力，使我们有更加丰富的上下文和更精细的控制能力，
因而能创建更加安全的系统。
`;

const networkingText = `
eBPF 的两大特色 —— 可编程和高性能 —— 使它能满足所有的网络包处理需求。
可编程意味着无需离开内核中的包处理上下文，就能添加额外的协议解析器或任何转发逻辑，
以满足不断变化的需求。高性能的 JIT 编译器使 eBPF 程序能达到几乎与原生编译的内核态代码一样的执行性能。
`;

const monitoringText = `
相比于操作系统提供的静态计数器（counters、gauges），eBPF 能在内核中收集和聚合自定义 metric，
并能从不同数据源来生成可观测数据。这既扩展了可观测性的深度，也显著减少了整体系统开销，
因为现在可以选择只收集需要的数据，并且后者是直方图或类似的格式，而非原始采样数据。
`;

const Buttons = () => (
  <h1 className="main-buttons">
    <Link to="/what-is-ebpf" className="main-button">
      eBPF 是什么？
    </Link>
    <Link to="/projects" className="main-button">
      项目列表
    </Link>
  </h1>
);

const Intro = () => (
  <div className="intro">
    <p>
      Linux 内核一直是实现监控/可观测性、网络和安全功能的理想地方。
      不过很多情况下这并非易事，因为这些工作需要修改内核源码或加载内核模块，
      最终实现形式是在已有的层层抽象之上叠加新的抽象。 eBPF
      是一项革命性技术，它能在内核中运行沙箱程序（sandbox programs），
      而无需修改内核源码或者加载内核模块。
    </p>
    <p>
      将 Linux
      内核变成可编程之后，就能基于现有的（而非增加新的）抽象层来打造更加智能、
      功能更加丰富的基础设施软件，而不会增加系统的复杂度，也不会牺牲执行效率和安全性。
    </p>
    <img src={go} />
    <p>
      eBPF 催生了一种全新的软件开发方式。基于这种方式，我们不仅能对内核行为进行
      编程，甚至还能编写跨多个子系统的处理逻辑，而传统上这些子系统是完全独立、
      无法用一套逻辑来处理的。
    </p>
  </div>
);

const Sections = () => (
  <div className="main-sections" style={{ marginTop: "30px" }}>
    <div className="main-sections-left">
      <Section
        title="安全"
        icon={security}
        text={securityText}
      />
      <Section
        title="网络"
        icon={networking}
        text={networkingText}
      />
    </div>
    <div className="main-sections-right">
      <Section
        title="跟踪 & 性能分析"
        icon={tracing}
        text={tracingText}
      />
      <Section
        style={{ marginTop: "45px" }}
        title="观测 & 监控"
        icon={observability}
        text={monitoringText}
      />
    </div>
  </div>
);

const Outro = () => (
  <div className="intro">
    <p>更多 eBPF 信息及使用案例：</p>
    <table width="100%">
      <tbody>
        <tr>
          <td>
            <ul>
              <li>
                <a href="/what-is-ebpf">eBPF 是什么？</a>
              </li>
              <li>
                <a href="/applications">使用 eBPF 的项目列表</a>
              </li>
              <li>
                <a href="https://www.ebpf.top">深入浅出 eBPF（中文博客）</a>
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                <a href="/slack">加入 #ebpf Slack 社区</a>
              </li>
              <li>
                <a href="/contribute">贡献指南</a>
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
        <MainTitle />
        <Buttons />
        <Intro />
        <Sections />
        <Videos title="eBPF 相关演讲" />
        <BlogLatest title="最新博客" posts={data.allMarkdownRemark.edges} />
        <BlogRoll title="eBPF 相关文章" />
        <Outro />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query CNIndexQuery {
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
            externalUrl
          }
        }
      }
    }
  }
`;

export const Head = () => (
  <>
    <title>{pageMetaTitle}</title>
    <meta name='description' content={pageMetaDescription} />
    <meta
      name='keywords'
      content='ebpf, bpf, landscape, directory, open source'
    />
    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://ebpf.io/' />
    <meta property='og:title' content={pageMetaTitle} />
    <meta property='og:description' content={pageMetaDescription} />
    <meta property='og:image' content='https://ebpf.io/images/ogimage.png' />
    <meta property='og:type' content='website' />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:url' content='https://ebpf.io/' />
    <meta name='twitter:title' content={pageMetaTitle} />
    <meta name='twitter:description' content={pageMetaDescription} />
    <meta
      property='twitter:image'
      content='https://ebpf.io/images/ogimage.png'
    />
  </>
);
