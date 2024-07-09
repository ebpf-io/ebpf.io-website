/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import EventList from 'components/pages/events/event-list';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import data from 'data/pages/events';

const pageUrls = {
  en: '/events/',
  'fr-fr': '/fr-fr/events/',
  pt: '/pt/events/',
  'pt-br': '/pt-br/events/',
  'it-it': '/it-it/events/',
  es: '/es/events/',
  'zh-cn': '/zh-cn/events/',
  sw: '/sw/events/',
  'tw-cn': '/tw-cn/events/',
};

const EventsPage = ({ pageContext: { postEvents, totalCount, language } }) => (
  <Layout pageUrls={pageUrls}>
    <div className="container flex flex-col pt-20 lg:pt-16">
      <h1
        className="heading-9xl max-w-[890px] text-left font-semibold leading-tight"
        dangerouslySetInnerHTML={{ __html: data[language].title }}
      />
    </div>
    <EventList allEvents={postEvents} totalCount={totalCount} />
  </Layout>
);

export default EventsPage;

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
