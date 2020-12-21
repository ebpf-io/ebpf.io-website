import React from "react";
import Helmet from "react-helmet";
import Layout from "../layouts";
import { graphql, Link } from "gatsby";
import { format, parseISO } from "date-fns";
import parseHtml from "../../scripts/parse-html";

import "../stylesheets/blog.scss";

export const formatPostDate = post =>
  format(parseISO(post.frontmatter.date), "MMMM d, yyyy");

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

export const Post = ({ post, full }) => {
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
            src={post.frontmatter.categories[0].toLowerCase() === 'update' ? require('../assets/news-icon.svg') : require('../assets/blog-post-icon.svg')}
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
              <a href={`/news/tags/${tag.toLowerCase().replace(' ', '-')}`}>{tag}</a>
            </span>
            ))}
          </div>
        )}
      </header>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const { previewDescription } = parseHtml(post);
  const pageMetaTitle = `eBPF - ${post.frontmatter.title}`
  const pageMetaDescription = previewDescription
  const pageLink = `https://ebpf.io${post.frontmatter.path}`
  const pageMetaImageUrl = 'https://ebpf.io' + require("../assets/ogimage-blog.png")
  return (
    <Layout>
      <div className="blog-post-container">
        <Helmet
          title={pageMetaTitle}

          meta={[
            {name: "keywords", content: "ebpf, bpf, news, updates, blog"},
            {name: "type", property: "og:type", content: "website"},
            {name: "url", property: "og:url", content: pageLink},
            {name: "title", property: "og:title", content: pageMetaTitle},
            {name: "description", property: "og:description", content: pageMetaDescription},
            {name: "description", content: pageMetaDescription},
            {name: "image", property: "og:image", content: pageMetaImageUrl},
            {name: "twitter:card", content: "summary_large_image"},
            {name: "twitter:url", content: pageLink},
            {name: "twitter:title", content: pageMetaTitle},
            {name: "twitter:description", content: pageMetaDescription},
            {name: "twitter:image", content: pageMetaImageUrl},
          ]}
        />
        <Post full post={post} />
      </div>
    </Layout>
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
