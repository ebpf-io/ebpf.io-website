import React from "react";
import Layout from "../layouts";
import {  graphql } from "gatsby";

import "../stylesheets/blog.scss";
import Post from "../common/blog-post/Post";
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

export const Head = ({data: { markdownRemark: postData }}) => {
  const {
     html, frontmatter: { title, path },
  } = postData;
  const { previewDescription } = parseHtml(postData);
  const pageMetaTitle = `eBPF - ${title}`
  const pageMetaDescription = previewDescription
  const pageLink = `https://ebpf.io${path}`
  const pageMetaImageUrl = 'https://ebpf.io' + '/images/ogimage-blog.png'

  return (
  <>
    <title>{pageMetaTitle}</title>
    <meta name='description' content={pageMetaDescription} />
    <meta
      name='keywords'
      content='ebpf, bpf, news, updates, blog'
    />
    <meta property='og:type' content='website' />
    <meta property='og:url' content={pageLink} />
    <meta property='og:title' content={pageMetaTitle} />
    <meta property='og:description' content={pageMetaDescription} />
    <meta property='og:image' content={pageMetaImageUrl} />
    <meta property='og:type' content='website' />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:url' content={pageLink} />
    <meta name='twitter:title' content={pageMetaTitle} />
    <meta name='twitter:description' content={pageMetaDescription} />
    <meta
      property='twitter:image'
      content={pageMetaImageUrl}
    />
  </>
);}
