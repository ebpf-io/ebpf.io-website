/* eslint-disable react/prop-types */
import React from 'react';

import EventList from 'components/pages/events/event-list';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import events from 'constants/temp-events-data.js';

const HomePage = () => (
  <Layout>
    <EventList items={events} />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
