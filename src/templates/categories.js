import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "../stylesheets/blog.scss"; // add some style if you want!

export default function TagsItem({ data, pathContext }) {
  const { type, items } = pathContext;
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
