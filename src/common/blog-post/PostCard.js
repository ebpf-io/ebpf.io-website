import React from "react";
import { format, parseISO } from "date-fns";

import { Link } from "gatsby";

import parseHtml from "../../../scripts/parse-html";

const formatPostDate = (post) =>
  format(parseISO(post.frontmatter.date), "MMMM d, yyyy");

const PostCard = ({ post, full }) => {
  const tags = post.frontmatter.tags || [];
  const { hasPreview, previewHtml, mainHtml, previewDescription } =
    parseHtml(post);

  const html = full ? mainHtml : hasPreview ? previewHtml : previewDescription;
  const url =
    post.frontmatter.externalUrl !== "" ? post.frontmatter.externalUrl : null;

  return (
    <div className='blog-post-card' key={post.id}>
      <h2 className='blog-title'>{post.frontmatter.title}</h2>
      <div className='blog-post-card-container'>
        <Link
          className='blog-link'
          to={url || post.frontmatter.path}
          target={url ? "_blank" : ""}
          rel={url ? "noopener noreferrer" : ""}
        >
          Read More
          <span className='link-triangle' />
        </Link>
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
      </div>
      <div
        className='blog-post-content'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default PostCard;
