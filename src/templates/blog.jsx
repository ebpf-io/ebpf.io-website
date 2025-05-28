/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import BlogPostsList from 'components/pages/blog/blog-posts-list';
import Sidebar from 'components/pages/blog/sidebar';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const BlogPage = ({
  location: { pathname },
  pageContext: { categories, pageCount, currentPageIndex, categorySlug },
  data: {
    blogPosts: { nodes: posts },
    externalPosts: { nodes: externalPosts },
  },
}) => {
  const filteredPosts = categorySlug === 'external' ? externalPosts : posts;

  return (
    <Layout headerWithFullWidthBottomBorder>
      <h1 className="sr-only">Blog page</h1>
      <div className="safe-paddings">
        <div className="container flex md:flex-col">
          <Sidebar
            className="w-full max-w-[230px] shrink-0 md:w-auto md:max-w-none"
            categories={categories}
            pathname={pathname}
          />
          <BlogPostsList
            className="pb-36 pl-20 pt-20 xl:pb-32 lg:pb-28 lg:pl-16 lg:pt-16 md:pb-20 md:pl-0 md:pt-14"
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

export const Head = ({ location: { pathname } }) => (
  <SEO
    pathname={pathname}
    title="eBPF - Blog"
    description="The latest news, updates and articles covering eBPF and related topics."
  />
);

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

    locales: allLocale(filter: { ns: { in: ["shared"] } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
