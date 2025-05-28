/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import TableOfContents from 'components/pages/static/table-of-contents';
import Content from 'components/shared/content';
import Layout from 'components/shared/layout/layout';
import SEO from 'components/shared/seo';
import createPageUrl from 'utils/create-page-url';

const pages = ['what-is-ebpf'];

const pageUrls = pages.reduce((acc, page) => {
  acc[page] = createPageUrl(page);
  return acc;
}, {});

const StaticPage = ({
  data: {
    mdx: {
      tableOfContents,
      frontmatter: { title },
    },
  },
  children,
  location,
}) => {
  let pageUrl = false;

  Object.keys(pageUrls).forEach((page) => {
    if (location.pathname.includes(page)) {
      pageUrl = page;
    }
  });

  return (
    <Layout pageUrls={pageUrl ? pageUrls[pageUrl] : null}>
      <div className="safe-paddings">
        <div className="container grid grid-cols-12 mt-20 grid-gap-x mb-28 lg:mb-24 lg:mt-16 md:mb-20 md:mt-12">
          <TableOfContents
            className="col-span-3 lg:col-span-4 lg:max-w-[300px] md:hidden"
            items={tableOfContents.items}
          />
          <article className="col-start-5 col-end-13 md:col-span-full">
            <h1 className="font-semibold heading-10xl leading-dense">{title}</h1>
            <TableOfContents
              className="hidden mt-10 md:block"
              title="Table of contents"
              items={tableOfContents.items}
            />
            <Content
              className="mt-10 prose-static"
              title={title}
              items={tableOfContents.items}
              content={children}
            />
          </article>
        </div>
      </div>
    </Layout>
  );
};

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
