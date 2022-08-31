import React, { useState, useEffect, Fragment } from "react";
import { format, parseISO } from "date-fns";

import parseHtml from "../../../scripts/parse-html";

const formatPostDate = (post) =>
  format(parseISO(post.frontmatter.date), "MMMM d, yyyy");

const TableOfContents = () => {
  const [toc, setToc] = useState([]);

  const getTocId = (element) => {
    return element.id
      ? element.id
      : element.textContent
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^a-z0-9\-]/g, "");
  };

  useEffect(() => {
    document
      .querySelectorAll(".blog-post-content > h2, .blog-post-content > h3")
      .forEach((h) => {
        h.id = getTocId(h);
        toc.push(h);
      });
    setToc(toc);
  });

  return (
    <Fragment>
      <details className='blog-toc' open>
        <summary>Table of Contents</summary>
        <ul>
          {toc.map((item, index) => {
            const level = +item.tagName[1] - 2;
            const style = { paddingLeft: `${20 * level}px` };
            let className = "toc-item";
            return (
              <li className={className} style={style} key={index}>
                <a href={`#${item.id}`}>{item.textContent}</a>
              </li>
            );
          })}
        </ul>
      </details>
    </Fragment>
  );
};

const Post = ({ post, full }) => {
  const tags = post.frontmatter.tags || [];
  const { hasPreview, previewHtml, mainHtml, previewDescription } =
    parseHtml(post);

  const html = full ? mainHtml : hasPreview ? previewHtml : previewDescription;

  return (
    <div className='blog-post' key={post.id}>
      <header className='blog-header'>
        <h1 className='blog-title'>{post.frontmatter.title}</h1>
        <div className='blog-tags-and-date'>
          <span className='blog-date'>{formatPostDate(post)}</span>
          {tags.length > 0 && (
            <div className='blog-post-tags'>
              {tags.map(
                (tag, i) =>
                  tag !== "_" && (
                    <span className='blog-post-tag' key={tag}>
                      <a
                        href={`/blog/tags/${tag
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {tag}
                      </a>
                    </span>
                  )
              )}
            </div>
          )}
        </div>
      </header>
      {full && !(post.frontmatter.toc === false) && <TableOfContents />}
      <div
        className='blog-post-content'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default Post;
