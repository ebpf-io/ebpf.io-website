import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import { BlogPost } from "./blog-post";

import "../stylesheets/blog.scss"; // add some style if you want!

const NavLink = props => <Link to={props.url}>{props.text}</Link>;

export default function BlogIndex({ data, pathContext }) {
  const { group, index, first, last } = pathContext;
  const prevUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  return (
    <div className="blog-posts">
      <Helmet title="Blog — eBPF">
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed"
          href="/blog/rss.xml"
        />
      </Helmet>

      {group.map(({ node: post }) => (
        <BlogPost key={post.id} post={post} />
      ))}
      <div className="prev-next-links blog-post">
        <div className="prev-link">
          {!first && <NavLink url={`/blog/${prevUrl}`} text="« Newer Posts" />}
        </div>
        <div className="next-link">
          {!last && <NavLink url={`/blog/${nextUrl}`} text="Older Posts »" />}
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      totalCount
    }
  }
`;
