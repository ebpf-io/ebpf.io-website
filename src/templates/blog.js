import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../layouts";
import PostCard from "../common/blog-post/PostCard";

import "../stylesheets/blog.scss";
import Categories from "../common/blog/Categories";
import Pagination from "../common/blog/Pagination";

export default function NewsIndex({ pageContext }) {
  const { group, pathPrefix, pageCount, index } = pageContext;
  const pageMetaTitle = "eBPF - Blog";
  const pageMetaDescription =
    "The latest news, updates and articles covering eBPF and related topics.";
  const pageMetaImageUrl = "https://ebpf.io" + "/images/ogimage-blog.png";
  const featuredPost = group.find((post) => post.node.frontmatter.isFeatured === true)?.node;

  const uniqueCategories = [
    "*",
    "Update",
    "Technology",
    "How-To",
    "Release",
    "Community",
  ];

  return (
    <Layout footerClassName="blog-footer">
      <div className="blog">
        <div className='blog-posts'>
          <Helmet
            title={pageMetaTitle}
            meta={[
              { name: "keywords", content: "ebpf, bpf, news, updates, blog" },
              { name: "type", property: "og:type", content: "website" },
              {
                name: "url",
                property: "og:url",
                content: "https://ebpf.io/blog",
              },
              { name: "title", property: "og:title", content: pageMetaTitle },
              {
                name: "description",
                property: "og:description",
                content: pageMetaDescription,
              },
              { name: "description", content: pageMetaDescription },
              { name: "image", property: "og:image", content: pageMetaImageUrl },
              { name: "twitter:card", content: "summary_large_image" },
              { name: "twitter:url", content: "https://ebpf.io/blog" },
              { name: "twitter:title", content: pageMetaTitle },
              { name: "twitter:description", content: pageMetaDescription },
              { name: "twitter:image", content: pageMetaImageUrl },
            ]}
          >
            <link
              rel='alternate'
              type='application/rss+xml'
              title='RSS Feed'
              href='/blog/rss.xml'
            />
          </Helmet>

          <Categories categories={uniqueCategories}/>
          <div className="posts-wrapper">
          {featuredPost && 
          (<>
            <h2 className="posts-heading">Featured</h2>
            <PostCard post={featuredPost}/>
          </>)}

          <h2 className="posts-heading">Latest</h2>
          {group.filter((post) => post.node.frontmatter.isFeatured !== true).map(({ node: post }) => (
            <PostCard key={post.id} post={post} />
          ))}
          <Pagination currentPageIndex={index-1} pageCount={pageCount} blogPageURL={pathPrefix} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      totalCount
    }
  }
`;
