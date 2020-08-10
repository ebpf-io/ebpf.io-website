import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import "../stylesheets/blog.scss";

import { formatPostDate } from "./blog-post";

export default function TagItem({ data, pathContext }) {
  const { type, items, parentUrl } = pathContext;
  return (
    <div className="tags-list section">
      <h1 className="tags-list-title">
        <Link to="/blog">Blog</Link> ▸{" "}
        <Link to={parentUrl}>{type === "tags" ? "Tags" : "Categories"}</Link> ▸{" "}
        <span>{pathContext.title}</span>
      </h1>
      <ol>
        {pathContext.items.map(post => (
          <li key={post.id}>
            <div className="tags-post-date">{formatPostDate(post)}</div>
            <h2 className="tags-post-title">
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </h2>
            {post.excerpt && (
              <p className="tags-post-excerpt">
                {post.excerpt.replace("{{preview}}", "").trim()}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export const pageQuery = graphql`
  query TagItemQuery {
    allMarkdownRemark {
      totalCount
    }
  }
`;
