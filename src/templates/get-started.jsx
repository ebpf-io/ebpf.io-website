/* eslint-disable react/prop-types */
import clsx from 'clsx';
import { graphql } from 'gatsby';
import React from 'react';

import BlogPosts from 'components/pages/get-started/blog-posts';
import Books from 'components/pages/get-started/books';
import Contributors from 'components/pages/get-started/contributors';
import Documentation from 'components/pages/get-started/documentation/documentation';
import Events from 'components/pages/get-started/events';
import Hero from 'components/pages/get-started/hero';
import Tutorials from 'components/pages/get-started/tutorials';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SubscriptionForm from 'components/shared/subscription-form';
import VideoGallery from 'components/shared/video-gallery';
import data from 'data/pages/get-started';

const pageUrls = {
  en: '/get-started/',
  'fr-fr': '/fr-fr/get-started/',
  pt: '/pt/get-started/',
  'pt-br': '/pt-br/get-started/',
  'it-it': '/it-it/get-started/',
  es: '/es/get-started/',
  'zh-cn': '/zh-cn/get-started/',
  sw: '/sw/get-started/',
  'tw-cn': '/tw-cn/get-started/',
};

const hasContributors = false;

const GetStartedPage = ({ pageContext: { events, blogPosts, contributors, language } }) => (
  <Layout pageUrls={pageUrls}>
    <Hero {...data[language].hero} />
    <Documentation {...data[language].documentation} />
    <div className="container mt-28 md:mt-20 sm:mt-12">
      <SubscriptionForm size="lg" {...data[language].subscriptionForm} />
    </div>
    <Books {...data[language].books} />
    <Tutorials {...data[language].tutorials} />
    <Events
      items={events.map(({ frontmatter }) => ({ ...frontmatter }))}
      {...data[language].events}
    />
    <VideoGallery className="mt-32 lg:mt-24 md:mt-16 sm:mt-14" {...data[language].videoGallery} />
    <BlogPosts
      className={clsx(!hasContributors && 'mb-36 xl:mb-32 lg:mb-28 md:mb-20')}
      items={blogPosts.map(({ frontmatter }) => ({
        ...frontmatter,
        linkUrl: frontmatter.path || frontmatter.externalUrl,
        type: frontmatter.categories[0],
      }))}
      {...data[language].blog}
    />
    {hasContributors && (
      <Contributors
        className="mb-36 xl:mb-32 lg:mb-28 md:mb-20"
        items={contributors.map(({ frontmatter }) => ({ ...frontmatter }))}
        {...data[language].contributors}
      />
    )}
  </Layout>
);

export default GetStartedPage;

export const Head = ({ location: { pathname }, pageContext: { language }, data }) => {
  const t = JSON.parse(
    data.locales.edges.find((edge) => edge.node.language === language).node.data
  );

  return (
    <SEO
      pathname={pathname}
      title={t['eBPF - Introduction, Tutorials & Community Resources']}
      description={
        t[
          'eBPF is a revolutionary technology that can run sandboxed programs in the Linux kernel without changing kernel source code or loading a kernel module.'
        ]
      }
    />
  );
};
export const query = graphql`
  query {
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
