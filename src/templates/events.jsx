/* eslint-disable react/prop-types */
import React from 'react';

import EventList from 'components/pages/events/event-list';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const EventsPage = ({ pageContext: { postEvents, totalCount } }) => (
  <Layout>
    <div className="container flex flex-col pt-20 lg:pt-16">
      <h1 className="heading-9xl pb-12 font-semibold leading-tight lg:pb-8">
        Participate in eBPF events that highlight
        <br />a range of expert voices and inspiring ideas
      </h1>
    </div>
    <EventList allEvents={postEvents} totalCount={totalCount} />
  </Layout>
);

export default EventsPage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
