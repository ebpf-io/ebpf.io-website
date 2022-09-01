import React from "react";
import { format, parseISO } from "date-fns";
import slugify from "slugify";

import parseHtml from "../../../scripts/parse-html";

const formatPostDate = (post) =>
  format(parseISO(post.frontmatter.date), "MMMM d, yyyy");

const PostCard = ({ post, full }) => {
  const categories = post.frontmatter.categories || [];
  const { hasPreview, previewHtml, mainHtml, previewDescription } =
    parseHtml(post);

  const html = full ? mainHtml : hasPreview ? previewHtml : previewDescription;
  const url =
    post.frontmatter.externalUrl !== "" ? post.frontmatter.externalUrl : null;

  return (
    <div className='blog-post-card' key={post.id}>
      <a
        className='blog-title-link'
        href={url || post.frontmatter.path}
        target={url ? "_blank" : null}
        rel={url ? "noopener noreferrer" : null}
      >
        <h3 className='blog-title'>{post.frontmatter.title}</h3>
      </a>
      <div className='blog-post-card-container'>
        <a
          className='blog-link'
          href={url || post.frontmatter.path}
          target={url ? "_blank" : null}
          rel={url ? "noopener noreferrer" : null}
        >
          Read more
          <span className='link-triangle' />
        </a>
        <div className='blog-categories-and-date'>
          <span className='blog-date'>{formatPostDate(post)}</span>
          {categories.length > 0 && (
            <div className='blog-post-categories'>
              {categories.map(
                (category, _) =>
                  category !== "_" && (
                    <span className='blog-post-category' key={category}>
                      <a className="blog-post-category-link" href={`/blog/categories/${slugify(category, {lower: true})}`}>
                        {category}
                      </a>
                    </span>
                  )
              )}
              {url && (
                <span className='blog-post-category blog-post-category-link'>
                  External
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <div
        className='blog-post-content'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default PostCard;
