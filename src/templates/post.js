import React from "react";
import Helmet from "react-helmet";
import Layout from "../layouts";
import {  graphql } from "gatsby";

import "../stylesheets/blog.scss";
import Post from "../common/blog-post/Post";

const Template =({ data }) => {
  const { markdownRemark: post } = data;
  const { previewDescription } = parseHtml(post);
  const pageMetaTitle = `eBPF - ${post.frontmatter.title}`
  const pageMetaDescription = previewDescription
  const pageLink = `https://ebpf.io${post.frontmatter.path}`
  const pageMetaImageUrl = 'https://ebpf.io' + '/images/ogimage-blog.png'
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

export default Template;

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
        toc
      }
    }
  }
`;
