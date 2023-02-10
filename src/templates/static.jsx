/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import TableOfContents from 'components/pages/static/table-of-contents';
import Content from 'components/shared/content';
import Layout from 'components/shared/layout/layout';
import SEO from 'components/shared/seo';

const StaticPage = ({
  data: {
    mdx: {
      tableOfContents,
      frontmatter: { title },
    },
  },
  children,
}) => (
  <Layout>
    <div className="safe-paddings">
      <div className="container grid-gap-x mt-20 mb-28 grid grid-cols-12 lg:mt-16 lg:mb-24 md:mt-12 md:mb-20">
        <TableOfContents
          className="col-span-3 lg:col-span-4 lg:max-w-[300px] md:hidden"
          items={tableOfContents.items}
        />
        <article className="col-start-5 col-end-13 md:col-span-full">
          <h1 className="heading-10xl font-semibold leading-dense">{title}</h1>
          <TableOfContents
            className="mt-10 hidden md:block"
            title="Table of contents"
            items={tableOfContents.items}
          />
          <Content
            className="prose-static mt-10"
            title={title}
            items={tableOfContents.items}
            content={children}
          />
        </article>
      </div>
    </div>
  </Layout>
);

export default StaticPage;

export const pageQuery = graphql`
  query StaticPageQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        ogTitle
        ogDescription
        ogKeywords
      }
      tableOfContents(maxDepth: 3)
    }
  }
`;

export const Head = ({
  location: { pathname },
  data: {
    mdx: {
      frontmatter: { title, ogTitle, ogDescription, ogKeywords },
    },
  },
}) => (
  <SEO
    pathname={pathname}
    title={ogTitle || title}
    description={ogDescription}
    keywords={ogKeywords}
  />
);
