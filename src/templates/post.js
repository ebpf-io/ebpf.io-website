import React from "react";
import Layout from "../layouts";
import {  graphql } from "gatsby";

import "../stylesheets/blog.scss";
import Post from "../common/blog-post/Post";
import SEO from "../common/SEO";
import parseHtml from "../../scripts/parse-html";


const Template =({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <div className="blog-post-container">
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
        date
        path
        title
        toc
      }
    }
  }
`;

export const Head = ({data: { markdownRemark: postData }, location: { pathname }}) => {
  const {
     frontmatter: { title },
  } = postData;
  const { previewDescription } = parseHtml(postData);

  const pageMetadata = {
    title:  `eBPF - ${title}`,
    description: previewDescription,
    slug: pathname,
    keywords: 'ebpf, bpf, news, updates, blog',
    ogImage: '/images/ogimage-blog.png',
  }

  return <SEO {...pageMetadata} />
}

