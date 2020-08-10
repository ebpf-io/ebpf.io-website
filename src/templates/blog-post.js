import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { format } from "date-fns";
import parseHtml from "../../scripts/parse-html";

import "../stylesheets/blog.scss";

export const formatPostDate = post =>
  format(post.frontmatter.date, "MMMM D, YYYY");

const windowPopup = ev => {
  ev.preventDefault();
  const width = 500;
  const height = 300;
  const left = screen.width / 2 - width / 2;
  const top = screen.height / 2 - height / 2;

  const url = ev.currentTarget.href;
  window.open(
    url,
    "",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" +
      width +
      ",height=" +
      height +
      ",top=" +
      top +
      ",left=" +
      left
  );
};

export const BlogPost = ({ post, full }) => {
  const tags = post.frontmatter.tags || [];
  const categories = post.frontmatter.categories || [];

  const { hasPreview, previewHtml, mainHtml } = parseHtml(post);
  const html = full ? mainHtml : previewHtml;

  return (
    <div className="blog-post" key={post.id}>
      <header className="blog-header">
        <div className="blog-meta">
          <span className="blog-date">{formatPostDate(post)}</span>
        </div>
        <h1 className="blog-title">
          {full ? (
            post.frontmatter.title
          ) : (
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          )}
        </h1>
        {categories.length > 0 && (
          <div className="blog-post-categories">
            {categories.map((category, i) => (
              <span className="blog-post-category" key={category}>
                <a href={`/blog/categories/${category}`}>{category}</a>
              </span>
            ))}
          </div>
        )}
      </header>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {full && tags.length > 0 && (
        <div className="blog-post-tags">
          {tags.map((tag, i) => (
            <span className="blog-post-tag" key={tag}>
              <a href={`/blog/tags/${tag}`}>{tag}</a>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div className="blog-post-container">
      <Helmet title={`${post.frontmatter.title} — eBPF`} />
      <BlogPost full post={post} />
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        categories
        tags
        date
        path
        title
      }
    }
  }
`;
