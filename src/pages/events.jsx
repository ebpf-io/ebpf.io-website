/* eslint-disable react/prop-types */
import React from 'react';

import EventList from 'components/pages/events/event-list';
import Hero from 'components/pages/events/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import events from 'constants/temp-events-data.js';

const HomePage = () => (
  <Layout>
    <Hero />
    <EventList items={events} />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
