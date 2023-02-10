/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import BlogPostsList from 'components/pages/blog/blog-posts-list';
import Sidebar from 'components/pages/blog/sidebar';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'data/seo-data';

const BlogPage = ({
  location: { pathname },
  pageContext: { categories, pageCount, currentPageIndex, categorySlug },
  data: {
    blogPosts: { nodes: posts },
    externalPosts: { nodes: externalPosts },
  },
}) => {
  const allPosts = { name: 'All posts', slug: '' };
  const categoriesWithAllPosts = [allPosts, ...categories];

  const filteredPosts = categorySlug === 'external' ? externalPosts : posts;

  return (
    <Layout headerWithFullWidthBottomBorder>
      <h1 className="sr-only">Blog page</h1>
      <div className="safe-paddings">
        <div className="container flex md:flex-col">
          <Sidebar
            className="w-full max-w-[230px] shrink-0 md:w-auto md:max-w-none"
            categories={categoriesWithAllPosts}
            pathname={pathname}
          />
          <BlogPostsList
            className="pl-20 pt-20 pb-36 xl:pb-32 lg:pl-16 lg:pt-16 lg:pb-28 md:pb-20 md:pt-14 md:pl-0"
            items={filteredPosts}
            pageCount={pageCount}
            currentPageIndex={currentPageIndex}
            categorySlug={categorySlug}
          />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} {...SEO_DATA.blog} />;

export const query = graphql`
  query BlogPageQuery(
    $limit: Int!
    $skip: Int!
    $draftFilter: [Boolean]!
    $postRegex: String!
    $category: [String]
    $isExternal: Boolean
  ) {
    blogPosts: allMdx(
      filter: {
        internal: { contentFilePath: { regex: $postRegex } }
        frontmatter: { categories: { in: $category } }
        fields: { isExternal: { eq: $isExternal }, isDraft: { in: $draftFilter } }
      }
      limit: $limit
      skip: $skip
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          categories
          title
          description
          date(formatString: "DD MMM, YYYY")
          externalUrl
          path
          ogImage {
            childImageSharp {
              gatsbyImageData(width: 500)
            }
            publicURL
          }
        }
      }
    }
    externalPosts: allMdx(
      filter: {
        internal: { contentFilePath: { regex: $postRegex } }
        fields: { isExternal: { eq: $isExternal }, isDraft: { in: $draftFilter } }
      }
      limit: $limit
      skip: $skip
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          categories
          title
          description
          date(formatString: "DD MMM, YYYY")
          externalUrl
          path
          ogImage {
            childImageSharp {
              gatsbyImageData(width: 500)
            }
            publicURL
          }
        }
      }
    }
  }
`;
