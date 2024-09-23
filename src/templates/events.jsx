/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';

import EventList from 'components/pages/events/event-list';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import createPageUrl from 'utils/create-page-url';

const pageUrls = createPageUrl('events');

const EventsPage = ({ pageContext: { postEvents, totalCount } }) => (
  <Layout pageUrls={pageUrls}>
    <div className="container flex flex-col pt-20 lg:pt-16">
      <h1 className="heading-9xl max-w-[890px] text-left font-semibold leading-tight">
        <Trans>eBPF Conferences and Meetups</Trans>
      </h1>
    </div>
    <EventList allEvents={postEvents} totalCount={totalCount} />
  </Layout>
);

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

export default EventsPage;

export const query = graphql`
  query {
    locales: allLocale(filter: { ns: { in: ["shared", "events"] } }) {
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
