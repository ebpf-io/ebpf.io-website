/* eslint-disable react/prop-types */
import React from 'react';

import EventList from 'components/pages/events/event-list';
import Hero from 'components/pages/events/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const EventsPage = ({ pageContext: { featuredEvents, postEvents, totalCount } }) => (
  <Layout>
    <Hero items={featuredEvents} />
    <EventList allEvents={postEvents} totalCount={totalCount} />
  </Layout>
);

export default EventsPage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
