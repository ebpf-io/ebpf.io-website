/* eslint-disable react/prop-types */
import React from 'react';

import EventList from 'components/pages/events/event-list';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import data from 'data/pages/events';
import SEO_DATA from 'data/shared/seo-data';

const pageUrls = {
  en: '/events/',
  'fr-fr': '/fr-fr/events/',
  pt: '/pt/events/',
  'pt-br': '/pt-br/events/',
  'it-it': '/it-it/events/',
  'zh-cn': '/zh-cn/events/',
  sw: '/sw/events/',
};

const EventsPage = ({ pageContext: { postEvents, totalCount, language } }) => (
  <Layout lang={language} pageUrls={pageUrls}>
    <div className="container flex flex-col pt-20 lg:pt-16">
      <h1 className="heading-9xl mx-auto max-w-[890px] text-center font-semibold leading-tight">
        {data[language].title}
      </h1>
    </div>
    <EventList allEvents={postEvents} totalCount={totalCount} />
  </Layout>
);

export default EventsPage;

export const Head = ({ location: { pathname }, pageContext: { language } }) => (
  <SEO pathname={pathname} {...SEO_DATA.home[language]} />
);
