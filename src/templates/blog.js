import React from "react";
import { graphql } from "gatsby";

import Layout from "../layouts";
import PostCard from "../common/blog-post/PostCard";
import SEO from "../common/SEO";

import "../stylesheets/blog.scss";
import Categories from "../common/blog/Categories";
import Pagination from "../common/blog/Pagination";

export default function NewsIndex({ pageContext }) {
  const { group, pathPrefix, pageCount, index } = pageContext;
  
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

export const Head = ({location: { pathname }}) => {
  const pageMetadata = {
    title: 'eBPF - Blog',
     description: 'The latest news, updates and articles covering eBPF and related topics.',
     slug: pathname,
     ogImage: '/images/ogimage-blog.png',
     keywords: 'ebpf, bpf, news, updates, blog',
     isBlogPage: true,
  }
  return <SEO {...pageMetadata} />
}



