import Helmet from "react-helmet";
import React from "react";
import Layout from "../layouts";
import { Link } from "gatsby";
import { unescape, shuffle } from "lodash";
import { format, parse as parseDate } from "date-fns";
import Slider from "infinite-react-carousel";

const pageMetaTitle = 'eBPF - Introduction, Tutorials & Community Resources'
const pageMetaDescription = 'eBPF is a revolutionary technology that can run sandboxed programs in the Linux kernel without changing kernel source code or loading a kernel module.'

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

const Title = () => (
  <hgroup>
    <img className="main-logo" src={require("../assets/logo-big.png")} />
  </hgroup>
);

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
      software able to reprogram the behavior the Linux kernel and even apply
      logic across multiple subsystems which were traditionally completely
      independent.
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
        <h2>Featured eBPF Talks</h2>
        {this.state.videos.length > 0 && (
          <Slider
            dots
            beforeChange={(oldIndex) => {
              const ref = `video-${this.state.videos[oldIndex]}`;
              this.refs[ref].contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*"
              );
            }}
            prevArrow={<div>←</div>}
            nextArrow={<div>→</div>}
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

class BlogRoll extends React.Component {
  feeds = [
    {
      url: "http%3A%2F%2Fwww.brendangregg.com%2Fblog%2Frss.xml",
      author: "Brendan Gregg",
      filterBy: (post) => post.title.toLowerCase().includes("bpf"),
    },
    {
      url:
        "http%3A%2F%2Ffetchrss.com%2Frss%2F5f326ba08a93f8883b8b45675f326d238a93f8b34b8b4567.xml",
      author: null,
      filterBy: (post) =>
        post.title.toLowerCase().includes("bpf") &&
        post.link !==
          "https://facebookmicrosites.github.io/bpf/blog/2018/08/31/welcome.html",
    },
    {
      url: "https%3A%2F%2Fcilium.io%2Fblog%2Frss.xml",
      author: "Cilium authors",
      filterBy: (post) =>
        post.categories.some((category) =>
          category.toLowerCase().includes("announcements")
        ),
    },
    {
      url: "https%3A%2F%2Fqmonnet.github.io%2Fwhirl-offload%2Ffeed.xml",
      author: "Quentin Monnet",
      filterBy: (post) => post.title.toLowerCase().includes("bpf"),
    },
    {
      url: "https%3A%2F%2Fpchaigno.github.io%2Ffeed.xml",
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
    const apiUrl = "https://api.rss2json.com/v1/api.json";
    const apiKey = process.env.RSS2JSON_API_KEY;
    Promise.all(
      this.feeds.map((feed) =>
        fetch(`${apiUrl}?api_key=${apiKey}&rss_url=${feed.url}`)
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
                  "yyyy-MM-dd HH:mm:ss",
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
        <h2>Featured eBPF Blogs</h2>
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
      <BlogRoll />
      <Outro />
    </div>
  </Layout>
);

export default IndexPage;
