import React, { Fragment } from "react";
import { format, parseISO } from "date-fns";

import newsIcon from './assets/news-icon.svg';
import blogPostIcon from './assets/blog-post-icon.svg';
import { Link } from "gatsby";

import parseHtml from "../../../scripts/parse-html";

const formatPostDate = post =>
  format(parseISO(post.frontmatter.date), "MMMM d, yyyy");


class TableOfContents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toc: [],
    };
  }

  getTocId(element) {
    return element.id
      ? element.id
      : element.textContent
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^a-z0-9\-]/g, "");
  }

  componentDidMount() {
    const toc = [];
    document.querySelectorAll(".blog-post-content > h2, .blog-post-content > h3").forEach((h) => {
      h.id = this.getTocId(h);
      toc.push(h);
    });
    this.setState({ toc });
  }

  render() {
    return (
      <Fragment>
        <details className="blog-toc" open>
          <summary>Table of Contents</summary>
          <ul>
          {
            this.state.toc.map((item) => {
              const level = +item.tagName[1] - 2;
              const style = { paddingLeft: `${20 * level}px` };
              let className = "toc-item";
              return (
                <li className={className} style={style}>
                  <a href={`#${item.id}`}>{item.textContent}</a>
                </li>
              );
            })
          }
          </ul>
        </details>
      </Fragment>
    );
  }
}

const Post = ({ post, full }) => {
  const tags = post.frontmatter.tags || [];
  const { hasPreview, previewHtml, mainHtml, previewDescription } = parseHtml(post);

  const html = full
               ? mainHtml
               : hasPreview
                 ? previewHtml
                 : previewDescription;

  return (
    <div className="blog-post" key={post.id}>
      <header className="blog-header">
        <span className="blog-date">{formatPostDate(post)}</span>
        <h1 className="blog-title">
          <img
            alt="Title icon"
            src={post.frontmatter.categories[0].toLowerCase() === 'update' ? newsIcon : blogPostIcon}
            width={24}
            height={24}
          />
          {full ? (
            post.frontmatter.title
          ) : (
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          )}
        </h1>
        {tags.length > 0 && (
          <div className="blog-post-tags">
            {tags.map((tag, i) => tag !== '_' && (
              <span className="blog-post-tag" key={tag}>
              <a href={`/blog/tags/${tag.toLowerCase().replace(' ', '-')}`}>{tag}</a>
            </span>
            ))}
          </div>
        )}
      </header>
      {full && !(post.frontmatter.toc === false) && (<TableOfContents />)}
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default Post;