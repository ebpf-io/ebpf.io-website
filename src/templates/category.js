import React from "react";
import { graphql, Link } from "gatsby";
import "../stylesheets/blog.scss";

import { formatPostDate } from "./blog-post";

export default function TagItem({ pageContext }) {
  const { type, parentUrl } = pageContext;
  return (
    <div className="tags-list section">
      <h1 className="tags-list-title">
        <Link to="/blog">Blog</Link> ▸{" "}
        <Link to={parentUrl}>{type === "tags" ? "Tags" : "Categories"}</Link> ▸{" "}
        <span>{pageContext.title}</span>
      </h1>
      <ol>
        {pageContext.items.map(post => (
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
