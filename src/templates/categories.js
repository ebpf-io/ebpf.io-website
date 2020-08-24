import React from "react";
import { graphql, Link } from "gatsby";

import "../stylesheets/blog.scss"; // add some style if you want!

export default function TagsItem({ pageContext }) {
  const { type, items } = pageContext;
  return (
    <div className="tags-list section">
      <h1 className="tags-list-title">
        <Link to="/blog">Blog</Link> ▸{" "}
        <span>{type === "tags" ? "Tags" : "Categories"}</span>
      </h1>
      <ol>
        {items.map(tag => (
          <li key={tag.title}>
            <h2 className="tags-post-title">
              <Link to={tag.url}>{tag.title}</Link>
            </h2>
          </li>
        ))}
      </ol>
    </div>
  );
}

export const pageQuery = graphql`
  query TagsIndexQuery {
    allMarkdownRemark {
      totalCount
    }
  }
`;
