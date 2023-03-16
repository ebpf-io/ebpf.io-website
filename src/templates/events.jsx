/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import EventList from 'components/pages/events/event-list';
import Hero from 'components/pages/events/hero';
import Pagination from 'components/pages/events/pagination';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import { EVENT_PER_PAGE } from 'constants/event';

const EventsPage = ({ pageContext: { featuredEvents, allEvents, totalCount, pageCount } }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + EVENT_PER_PAGE;
  const currentEvent = allEvents.slice(itemOffset, endOffset);

  return (
    <Layout>
      <Hero items={featuredEvents} />
      <EventList items={currentEvent} />
      {pageCount > 1 && (
        <Pagination totalCount={totalCount} pageCount={pageCount} callback={setItemOffset} />
      )}
    </Layout>
  );
};

export default EventsPage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
