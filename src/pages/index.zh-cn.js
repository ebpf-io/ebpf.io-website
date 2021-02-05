import React from "react";
import Link from "gatsby-link";
import { unescape, shuffle } from "lodash";
import { format, parse as parseDate } from "date-fns";
import Slider from "infinite-react-carousel";
import Layout from "../layouts";
import { graphql } from "gatsby";
import { Post } from "../templates/post";
import Helmet from "react-helmet";

import "../stylesheets/index.scss";

const pageMetaTitle = 'eBPF - Introduction, Tutorials & Community Resources'
const pageMetaDescription = 'eBPF is a revolutionary technology that can run sandboxed programs in the Linux kernel without changing kernel source code or loading a kernel module.'

const tracingText = `
eBPF 程序能够加载到 trace points、内核及用户空间应用程序中的 probe points，
这种能力使我们对应用程序的运行时行为（runtime behavior）和系统本身
（system itself）提供了史无前例的可观测性。应用端和系统端的这种观测能力相结合，
能在排查系统性能问题时提供强大的能力和独特的信息。BPF 使用了很多高级数据结构，
因此能非常高效地导出有意义的可观测数据，而不是像很多同类系统一样导出海量的原始采样数据。`;

const securityText = `
观测和理解所有的系统调用的能力，以及在 packet 层和 socket 层审视所有的网络操作的能力，
这两者相结合，为系统安全提供了革命性的新方法。
以前，系统调用过滤、网络层过滤和进程上下文跟踪是在完全独立的系统中完成的；
eBPF 的出现统一了可观测性和各层面的控制能力，使我们有更加丰富的上下文和更精细的控制能力，
因而能创建更加安全的系统。`;

const networkingText = `
eBPF 的两大特色 —— 可编程和高性能 —— 使它能满足所有的网络包处理需求。
可编程意味着无需离开内核中的包处理上下文，就能添加额外的协议解析器或任何转发逻辑，
以满足不断变化的需求。高性能的 JIT 编译器使 eBPF 程序能达到几乎与原生编译的内核态代码一样的执行性能。`;

const monitoringText = `
相比于操作系统提供的静态计数器（counters、gauges），eBPF 能在内核中收集和聚合自定义 metric，
并能从不同数据源来生成可观测数据。这既扩展了可观测性的深度，也显著减少了整体系统开销，
因为现在可以选择只收集需要的数据，并且后者是直方图或类似的格式，而非原始采样数据。
`;

const Title = () => (
  <hgroup>
    <img className="main-logo" src={require("../assets/logo-big.png")} />
  </hgroup>
);

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

const Section = ({ icon, iconWidth, iconHeight, title, text, ...props }) => (
  <div className="main-section" {...props}>
    <div className="main-section-title">{title}</div>
    <img className="section-logo" src={icon} width={iconWidth} />
    <div className="main-section-text">{text}</div>
  </div>
);

const Intro = () => (
  <div className="intro">
    <p>
      Linux 内核一直是实现监控/可观测性、网络和安全功能的理想地方。
      不过很多情况下这并非易事，因为这些工作需要修改内核源码或加载内核模块，
      最终实现形式是在已有的层层抽象之上叠加新的抽象。
      eBPF 是一项革命性技术，它能在内核中运行沙箱程序（sandbox programs），
      而无需修改内核源码或者加载内核模块。
    </p>
    <p>
      将 Linux 内核变成可编程之后，就能基于现有的（而非增加新的）抽象层来打造更加智能、
      功能更加丰富的基础设施软件，而不会增加系统的复杂度，也不会牺牲执行效率和安全性。
    </p>
    <img src={require("../assets/go.png")} />
    <p>
      eBPF 催生了一种全新的软件开发方式。基于这种方式，我们不仅能对内核行为进行
      编程，甚至还能编写跨多个子系统的处理逻辑，而传统上这些子系统是完全独立、
      无法用一套逻辑来处理的。
    </p>
  </div>
);

class Videos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };
  }

  componentDidMount() {
    this.setState({
      videos: shuffle([
        "https://www.youtube.com/embed/mFxs3VXABPU?start=12&enablejsapi=1",
        "https://www.youtube.com/embed/7pmXdG8-7WU?start=7&enablejsapi=1",
        "https://www.youtube.com/embed/_Iq1xxNZOAo?start=45&enablejsapi=1",
        "https://www.youtube.com/embed/U3PdyHlrG1o?start=7&enablejsapi=1",
        "https://www.youtube.com/embed/ZYBXZFKPS28?start=0&enablejsapi=1",
      ]),
    });
  }

  render() {
    return (
      <div className="videos-section">
        <h2>eBPF 相关演讲</h2>
        {this.state.videos.length > 0 && (
          <Slider
            dots
            arrows={false}
            beforeChange={(oldIndex) => {
              const ref = `video-${this.state.videos[oldIndex]}`;
              this.refs[ref].contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*"
              );
            }}
          >
            {this.state.videos.map((src) => {
              return (
                <div className="video-wrapper" key={src}>
                  <iframe
                    ref={`video-${src}`}
                    src={src}
                    className="video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    );
  }
}

const Sections = () => (
  <div className="main-sections" style={{ marginTop: "30px" }}>
    <div className="main-sections-left">
      <Section
        title="安全"
        icon={require("../assets/intro_security.png")}
        text={securityText}
      />
      <Section
        title="网络"
        icon={require("../assets/intro_networking.png")}
        text={networkingText}
      />
    </div>
    <div className="main-sections-right">
      <Section
        title="跟踪 & 性能分析"
        icon={require("../assets/intro_tracing.png")}
        text={tracingText}
      />
      <Section
        style={{ marginTop: "45px" }}
        title="观测 & 监控"
        icon={require("../assets/intro_observability.png")}
        text={monitoringText}
      />
    </div>
  </div>
);

const BlogLatest = ({ posts }) => (
  <div className="blog-latest">
    <h2>最新博客</h2>
    <div className="blog-posts">
      {posts.map(({node: post}) => <Post key={post.id} post={post} />)}
    </div>
  </div>
);

const Outro = () => (
  <div className="intro">
    <p>
      更多 eBPF 信息及使用案例：
      <table width="100%">
        <tr>
          <td>
            <ul>
              <li>
                <a href="/what-is-ebpf">eBPF 是什么？</a>
              </li>
              <li>
                <a href="/projects">使用 eBPF 的项目列表</a>
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                <a href="https://cilium.herokuapp.com/">
                  加入 #ebpf Slack 社区
                </a>
              </li>
              <li>
                <a href="/contribute">贡献指南</a>
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </p>
  </div>
);

class BlogRoll extends React.Component {
  feeds = [
    {
      url:
        "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.brendangregg.com%2Fblog%2Frss.xml",
      author: "Brendan Gregg",
      filterBy: (post) => post.title.toLowerCase().includes("bpf"),
    },
    {
      url:
        "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffetchrss.com%2Frss%2F5f326ba08a93f8883b8b45675f326d238a93f8b34b8b4567.xml",
      author: null,
      filterBy: (post) =>
        post.title.toLowerCase().includes("bpf") &&
        post.link !==
        "https://facebookmicrosites.github.io/bpf/blog/2018/08/31/welcome.html",
    },
    {
      url:
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fcilium.io%2Fblog%2Frss.xml",
      author: "Cilium authors",
      filterBy: (post) =>
        post.categories.some((category) =>
          category.toLowerCase().includes("announcements")
        ),
    },
    {
      url:
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fqmonnet.github.io%2Fwhirl-offload%2Ffeed.xml",
      author: "Quentin Monnet",
      filterBy: (post) => post.title.toLowerCase().includes("bpf"),
    },
    {
      url:
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fpchaigno.github.io%2Ffeed.xml",
      author: "Paul Chaignon",
      filterBy: (post) => post.title.toLowerCase().includes("bpf"),
    },
  ];

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    Promise.all(
      this.feeds.map((feed) =>
        fetch(feed.url)
          .then((r) => r.json())
          .then((post) => ({ feed, post }))
      )
    )
      .then((results) => {
        return results.reduce((acc, { feed, post: { items } }) => {
          return acc.concat(
            items
              .map((post) => ({
                ...post,
                pubDate: parseDate(
                  post.pubDate,
                  "yyyy-MM-dd hh:mm:ss",
                  new Date()
                ),
                author: post.author || feed.author,
              }))
              .sort((a, b) => b.pubDate - a.pubDate)
              .filter(
                (post) =>
                  feed.filterBy(post) && post.pubDate.getFullYear() >= 2018
              )
              .slice(0, 3)
          );
        }, []);
      })
      .then((posts) => {
        posts.sort((a, b) => b.pubDate - a.pubDate);
        return posts;
      })
      .then((posts) => {
        this.setState({ posts });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div className="blog-roll-section">
        <h2>eBPF 相关文章</h2>
        {this.state.posts.length === 0 && (
          <div className="blog-roll-loading">Loading...</div>
        )}
        {this.state.posts.length > 0 && (
          <ul>
            {this.state.posts.map((post) => {
              return (
                <li key={post.link}>
                  <a
                    href={post.link}
                    className="blog-roll-item"
                    target="_blank"
                  >
                    <span className="blog-roll-date">
                      {format(post.pubDate, "MMM d, yyyy")}
                    </span>{" "}
                    <span className="blog-roll-title">
                      <u>{unescape(post.title)}</u>{" "}
                      <span className="blog-roll-author">{post.author}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

const IndexPage = ({ data }) => (
  <Layout>
    <div className="page-wrapper page-index">
      <Helmet
        title={pageMetaTitle}

        meta={[
          {name: "keywords", content: "ebpf, bpf, xdp, introduction, tutorial, documentation, deep dive, community"},
          {name: "type", property: "og:type", content: "website"},
          {name: "url", property: "og:url", content: "https://ebpf.io/"},
          {name: "title", property: "og:title", content: pageMetaTitle},
          {name: "description", property: "og:description", content: pageMetaDescription},
          {name: "image", property: "og:image", content: 'https://ebpf.io' + require("../assets/ogimage.png")},
          {name: "twitter:card", content: "summary_large_image"},
          {name: "twitter:url", content: "https://ebpf.io/"},
          {name: "twitter:title", content: pageMetaTitle},
          {name: "twitter:description", content: pageMetaDescription},
          {name: "twitter:image", content: 'https://ebpf.io' + require("../assets/ogimage.png")},
        ]}
      />
      <Title />
      <Buttons />
      <Intro />
      <Sections />
      <Videos />
      <BlogLatest posts={data.allMarkdownRemark.edges} />
      <BlogRoll />
      <Outro />
    </div>
  </Layout>
);

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
            tags
          }
        }
      }
    }
  }
`;
