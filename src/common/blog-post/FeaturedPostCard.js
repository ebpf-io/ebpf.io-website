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
    <div className='featured-blog-post-card' key={post.id}>
      <div className="featured-blog-post-content">
       <div className='featured-blog-categories-and-date'>
          {categories.length > 0 && (
            <div className='featured-blog-post-categories'>
              {categories.map(
                (category, _) =>
                  category !== "_" && (
                    <span className='featured-blog-post-category' key={category}>
                      <a className="featured-blog-post-category-link" href={`/blog/categories/${slugify(category, {lower: true})}`}>
                        {category}
                      </a>
                    </span>
                  )
              )}
              {url && (
                <span className='featured-blog-post-category featured-blog-post-category-link'>
                  External
                </span>
              )}
              <span className='featured-blog-date'>{formatPostDate(post)}</span>
            </div>
          )}
        </div>
      <a
        className='featured-blog-title-link'
        href={url || post.frontmatter.path}
        target={url ? "_blank" : null}
        rel={url ? "noopener noreferrer" : null}
      >
        <h3 className='featured-blog-title'>{post.frontmatter.title}</h3>
      </a><div
        className='blog-post-content'
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="featured-blog-link">
        <a
          className='blog-link'
          href={url || post.frontmatter.path}
          target={url ? "_blank" : null}
          rel={url ? "noopener noreferrer" : null}
        >
          Read more
          <span className='link-triangle' />
        </a>
        </div>
      </div>
      <img className="featured-image" src={post.frontmatter.ogImage.publicURL} width="390" height="220"/>
    </div>
  );
};

export default PostCard;
