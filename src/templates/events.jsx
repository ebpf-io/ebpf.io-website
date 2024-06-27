/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import EventList from 'components/pages/events/event-list';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const pageUrls = {
  en: '/events/',
  'fr-fr': '/fr-fr/events/',
  pt: '/pt/events/',
  'pt-br': '/pt-br/events/',
  'it-it': '/it-it/events/',
  'zh-cn': '/zh-cn/events/',
  sw: '/sw/events/',
  'tw-cn': '/tw-cn/events/',
};

const EventsPage = ({ pageContext: { postEvents, totalCount, language } }) => {
  const { t } = useTranslation();

  return (
    <Layout lang={language} pageUrls={pageUrls}>
      <div className="container flex flex-col pt-20 lg:pt-16">
        <h1
          className="heading-9xl max-w-[890px] text-left font-semibold leading-tight"
          dangerouslySetInnerHTML={{ __html: t('events:title') }}
        />
      </div>
      <EventList allEvents={postEvents} totalCount={totalCount} />
    </Layout>
  );
};

export const Head = ({ location: { pathname } }) => {
  const { t } = useTranslation();

  return <SEO pathname={pathname} {...t('events:meta', { returnObjects: true })} />;
};

export default EventsPage;

export const query = graphql`
  query {
    locales: allLocale {
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
