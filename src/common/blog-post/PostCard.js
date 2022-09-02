import React from "react";
import { format, parseISO } from "date-fns";

const formatPostDate = (post) =>
  format(parseISO(post.frontmatter.date), "MMMM d, yyyy");

const PostCard = ({ post }) => {
  const categories = post.frontmatter.categories || [];

  const url =
    post.frontmatter.externalUrl !== "" ? post.frontmatter.externalUrl : null;

  return (
    <div className='blog-post-card' key={post.id}>
      {post.frontmatter.ogImage && <img className="post-image" src={post.frontmatter.ogImage.publicURL} width="300" height="220"/>}
      {!post.frontmatter.ogImage && <img className="post-image" src='/images/placeholder-cover.jpg' width="300" height="220"/>}
      <div className="blog-post-card-content">
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
                          {category}
                      </span>
                    )
                )}
                {url && (
                  <span className='blog-post-category'>
                    External
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
