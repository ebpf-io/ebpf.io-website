import React from "react";
import stringSimilarity from "string-similarity";
import { unescape } from "lodash";
import { format, parse as parseDate } from "date-fns";
import { TitleWithAnchor } from "../TitleWithAnchor";

export default class BlogRoll extends React.Component {
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
      filterBy: (post) =>
        post.categories.some((category) =>
          category.toLowerCase().includes("bpf")
        ),
    },
    {
      url: "https%3A%2F%2Fnakryiko.com%2Fatom.xml",
      author: "Andrii Nakryiko",
      filterBy: (post) => post.title.toLowerCase().includes("bpf") || post.title.toLowerCase().includes("btf"),
    },
    {
      url: "https%3A%2F%2Ffntlnz.wtf%2Findex.xml",
      author: "Lorenzo Fontana",
      filterBy: (post) =>
        post.categories.some((category) =>
          category.toLowerCase().includes("bpf")
        ),
    },
  ];

  constructor(props) {
    super(props);

    this.title = props.title;
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
        results.map((result) => {
          if(result.post.status !== 'ok') {
            console.error(`Feed ${result.post.feed.url} is temporary unavailable`)
          }
        });
        return results
          .filter((result) => result.post.status === 'ok')
          .reduce((acc, { feed, post: { items } }) => {
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
        let uniqPosts = posts;
        posts.forEach((initialPost) => {
          uniqPosts.forEach((resultPost, idx) => {
            /*
              If two posts have same author, come from different websites and have similar titles — remove the second
              one. Website check is necessary in case of such posts like "eBPF Summit Day 1 Recap" and
              "eBPF Summit Day 2 Recap". Because within a single website uniqueness is controlled manually by editors
              and thus posts with similar titles are rarely added on occasion.
            */
            if(
              (initialPost.author || '').toLowerCase() === (resultPost.author || '').toLowerCase() &&
              new URL(initialPost.link).host !== new URL(resultPost.link).host &&
              stringSimilarity.compareTwoStrings(initialPost.title, resultPost.title) >= 0.75
            ) {
              uniqPosts.splice(idx, 1)
            }
          });
        });
        uniqPosts.sort((a, b) => b.pubDate - a.pubDate);
        return uniqPosts;
      })
      .then((posts) => {
        this.setState({ posts });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div className="blog-roll-section">
        <TitleWithAnchor  className="common-title-container" headerClassName="common-title" children={this.title} />
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
};
