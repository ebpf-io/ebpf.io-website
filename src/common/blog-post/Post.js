import React, { useState, useEffect, Fragment } from "react";
import { format, parseISO } from "date-fns";
import slugify from "slugify";

import parseHtml from "../../../scripts/parse-html";
import CustomLink from "../CustomLink";

const formatPostDate = (post) =>
  format(parseISO(post.frontmatter.date), "MMMM d, yyyy");

const TableOfContents = () => {
  const [toc, setToc] = useState([]);

  const getTocId = (element) => {
    return element.id
      ? element.id
      : slugify(element.textContent, {remove: /[^a-z0-9\-]/g, lower: true})
  };

  useEffect(() => {
    const headings = document
    .querySelectorAll(".blog-post-content > h2, .blog-post-content > h3");
    const items = [];
    
      headings.forEach((heading) => {
        heading.id = getTocId(heading);
        items.push(heading);
      });
    setToc(items);
  }, [toc, setToc]);
  
  return (
      <details className='blog-toc' open>
        <summary>Table of Contents</summary>
        <ul>
          {toc.map((item, index) => {
            const level = +item.tagName[1] - 2;
            const style = { paddingLeft: `${20 * level}px` };
            return (
              <li className="toc-item" style={style} key={index}>
                <a href={`#${item.id}`}>{item.textContent}</a>
              </li>
            );
          })}
        </ul>
      </details>
  );
};

const Post = ({ post, full }) => {
  const categories = post.frontmatter.categories || [];
  const { hasPreview, previewHtml, mainHtml, previewDescription } =
    parseHtml(post);

  let html = '';

  if (full) {
    html = mainHtml
  } else {
    if (hasPreview) {
      html = previewHtml
    } else {
      html = previewDescription;
    }
  }

  const Tag = full ? Fragment : CustomLink;

  return (
    <article className='blog-post' key={post.id}>
      <header className='blog-header'>
        <Tag url={post.frontmatter.path || post.frontmatter.externalUrl} target={post.frontmatter.externalUrl ? '_blank' : null}>
          <h1 className='blog-title'>
            {post.frontmatter.title}
          </h1>
        </Tag>
       
        <div className='blog-categories-and-date'>
          <span className='blog-date'>{formatPostDate(post)}</span>
          {categories.length > 0 && (
            <div className='blog-post-categories'>
              {categories.map(
                (category, i) =>
                  category !== "_" && (
                    <span className='blog-post-category' key={category}>
                        {category}
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
    </article>
  );
};

export default Post;
