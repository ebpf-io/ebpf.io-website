/* eslint-disable react/prop-types */
import clsx from 'clsx';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
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
import createPageUrl from 'utils/create-page-url';

const pageUrls = createPageUrl('get-started');

const hasContributors = false;

const videoItems = [
  {
    videoId: 'wnlsHeiTLtE',
    title: 'How the Hive Came to Bee - A Technical Deep Dive of eBPF',
    speaker: 'Daniel Borkmann, Cilium',
    date: 'Dec 8, 2022',
  },
  {
    videoId: '99jUcLt3rSk',
    title: 'eBPF and Kubernetes: Little Helper Minions for Scaling Microservices',
    speaker: 'Daniel Borkmann, Cilium',
    date: 'Sep 4, 2020',
  },
  {
    videoId: 'cABk-6Sdb20',
    title: 'eBPF on the Rise - Getting Started',
    speaker: 'Quentin Monnet, Isovalent',
    date: 'May 14, 2021',
  },
  {
    videoId: 'U3PdyHlrG1o',
    title: 'BPF as a revolutionary technology for the container landscape',
    speaker: 'Daniel Borkmann, Cilium',
    date: 'Aug 7, 2020',
  },
];

const GetStartedPage = ({ pageContext: { events, blogPosts, contributors } }) => {
  const { t } = useTranslation();

  return (
    <Layout pageUrls={pageUrls}>
      <Hero />
      <Documentation />
      <div className="container mt-28 md:mt-20 sm:mt-12">
        <SubscriptionForm size="lg" />
      </div>
      <Books />
      <Tutorials />
      <Events items={events.map(({ frontmatter }) => ({ ...frontmatter }))} />
      <VideoGallery
        className="mt-32 lg:mt-24 md:mt-16 sm:mt-14"
        title={t('videoGallery.title')}
        items={videoItems}
      />
      <BlogPosts
        className={clsx(!hasContributors && 'mb-36 xl:mb-32 lg:mb-28 md:mb-20')}
        items={blogPosts.map(({ frontmatter }) => ({
          ...frontmatter,
          linkUrl: frontmatter.path || frontmatter.externalUrl,
          type: frontmatter.categories[0],
        }))}
      />
      {hasContributors && (
        <Contributors
          className="mb-36 xl:mb-32 lg:mb-28 md:mb-20"
          items={contributors.map(({ frontmatter }) => ({ ...frontmatter }))}
        />
      )}
    </Layout>
  );
};

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
    locales: allLocale(filter: { ns: { in: ["shared", "get-started"] } }) {
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
