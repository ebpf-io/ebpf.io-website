import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../layouts";
import { Post } from "./post";

import "../stylesheets/blog.scss"; // add some style if you want!

const NavLink = props => <Link to={props.url}>{props.text}</Link>;

export default function NewsIndex({ data, pageContext }) {
  const { group, index, first, last } = pageContext;
  const prevUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  const pageMetaTitle = 'eBPF - News and updates'
  const pageMetaDescription = 'The latest news, updates and articles covering eBPF and related topics.'
  return (
    <Layout>
      <div className="blog-posts">
        <Helmet
          title={pageMetaTitle}

          meta={[
            {name: "keywords", content: "ebpf, bpf, news, updates, blog"},
            {name: "type", property: "og:type", content: "website"},
            {name: "url", property: "og:url", content: "https://ebpf.io/news"},
            {name: "title", property: "og:title", content: pageMetaTitle},
            {name: "description", property: "og:description", content: pageMetaDescription},
            {name: "description", content: pageMetaDescription},
            {name: "image", property: "og:image", content: 'https://ebpf.io' + require("../assets/ogimage.png")},
            {name: "twitter:card", content: "summary_large_image"},
            {name: "twitter:url", content: "https://ebpf.io/news"},
            {name: "twitter:title", content: pageMetaTitle},
            {name: "twitter:description", content: pageMetaDescription},
            {name: "twitter:image", content: 'https://ebpf.io' + require("../assets/ogimage.png")},
          ]}
        >
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS Feed"
            href="/news/rss.xml"
          />
        </Helmet>

        {group.map(({ node: post }) => (
          <Post key={post.id} post={post} />
        ))}
        <div className="prev-next-links blog-post">
          <div className="prev-link">
            {!first && <NavLink url={`/news/${prevUrl}`} text="« Newer Posts" />}
          </div>
          <div className="next-link">
            {!last && <NavLink url={`/news/${nextUrl}`} text="Older Posts »" />}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      totalCount
    }
  }
`;
