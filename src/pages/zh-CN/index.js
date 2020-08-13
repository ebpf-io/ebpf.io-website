import React from "react";
import Link from "gatsby-link";
import { unescape, shuffle } from "lodash";
import { format, parse as parseDate } from "date-fns";
import Slider from "infinite-react-carousel";

import "../../stylesheets/index.scss";

const tracingText = `
加载eBPF程序到跟踪点以及内核和用户应用程序探测点的能力，为应用程序和系统本身的运行时行为带来了前所未有的可视化展示。
通过同时为应用程序和系统端提供内省功能，并将这两个视图组合在一起，从而为排查系统性能问题带来强大而独特的诊断能力。
高级统计数据结构， 是用一种高效的方式，提取有意义的可视化数据，而不需要导出大量的抽样数据，这通常是其他类似系统的实现方式。
`;

const securityText = `
基于查看和理解所有系统调用进行构建，并将其与所有网络操作涉及的网络包和套接字级视图相结合，可以带来革命性的新方法来保护系统。
虽然执行系统调用过滤、网络层面过滤和进程上下文跟踪的各个方面通常都是由完全独立的系统处理的，但eBPF允许将所有方面的可视化和控制能力结合起来，以创建基于更多上下文、具有更好控制级别的安全系统。
`;

const networkingText = `
通过结合可编程性和有效性，使eBPF天然满足网络解决方案的所有数据包处理的要求。
eBPF的可编程性使其能够添加额外的协议解析器，并且可以轻松地编写任意转发逻辑来满足不断变化的需求，而无需离开Linux内核处理网络包的上下文。
JIT编译器带来的高效性，使得eBPF执行性能接近于原生编译的内核代码。
`;

const monitoringText = `
与依赖于操作系统提供的静态计数器和计量器不同，eBPF支持自定义指标的收集和内核聚合的能力，并基于广泛的可能来源生成可视化事件。
通过只收集所需的可视化数据，在事件来源处生成直方图和类似的数据结构，而不是依赖样本的导出，这样可以扩展能够实现的可视化深度，并显著降低系统的总体开销。
`;

const Title = () => (
  <hgroup>
    <img className="main-logo" src={require("../../assets/logo-big.png")} />
  </hgroup>
);

const Buttons = () => (
  <h1 className="main-buttons">
    <Link to="/what-is-ebpf" className="main-button">
      什么是eBPF？
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
      Linux内核一直是实现监控/可观察性、网络和安全的理想环境。
      不幸的是，这往往是不切实际的，因为它需要改变内核源代码或加载内核模块，并导致生成互相层叠在一起的抽象层。
      eBPF是一项革命性的技术，它可以在不更改内核源代码或不加载内核模块的情况下，在Linux内核中运行沙盒程序。
    </p>
    <p>
      为了实现Linux内核的可编程性，基础架构软件可以利用现有的层次，使它们更加智能、功能更加丰富，而不是继续给系统增加额外的复杂度或降低执行效率和安全性。
    </p>
    <img src={require("../../assets/go.png")} />
    <p>
      eBPF引领了全新一代软件的开发能力，这些软件能够对Linux内核的行为进行二次编程，甚至可以应用在传统上完全独立的多个子系统，跨系统地实现相关逻辑。
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
        <h2>eBPF专题演讲</h2>
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
        icon={require("../../assets/intro_security.png")}
        text={securityText}
      />
      <Section
        title="网络"
        icon={require("../../assets/intro_networking.png")}
        text={networkingText}
      />
    </div>
    <div className="main-sections-right">
      <Section
        title="追踪 & 分析"
        icon={require("../../assets/intro_tracing.png")}
        text={tracingText}
      />
      <Section
        style={{ marginTop: "45px" }}
        title="观测 & 监控"
        icon={require("../../assets/intro_observability.png")}
        text={monitoringText}
      />
    </div>
  </div>
);

const Outro = () => (
  <div className="intro">
    <p>
      了解更多关于eBPF及其用户案例：
      <table width="100%">
        <tr>
          <td>
            <ul>
              <li>
                <a href="/what-is-ebpf">什么是eBPF？</a>
              </li>
              <li>
                <a href="/projects">使用ebpf的项目列表</a>
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                <a href="https://cilium.herokuapp.com/">
                  加入 #ebpf Slack社区
                </a>
              </li>
              <li>
                <a href="/contribute">学习如何作出贡献</a>
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
        <h2>eBPF专题博文</h2>
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

const IndexPage = () => (
  <div className="page-wrapper page-index">
    <Title />
    <Buttons />
    <Intro />
    <Sections />
    <Videos />
    <BlogRoll />
    <Outro />
  </div>
);

export default IndexPage;
