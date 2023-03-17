/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';

import EventList from 'components/pages/events/event-list';
import Filters from 'components/pages/events/filters';
import Hero from 'components/pages/events/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import { eventFilters } from 'constants/event-filters';

const getInitialFilters = (allFilters) =>
  allFilters.reduce((acc, { label }) => {
    if (!acc[label]) {
      acc[label] = [];
    }
    return acc;
  }, {});

const EventsPage = ({ pageContext: { featuredEvents, allEvents, totalCount } }) => {
  const [activeFilters, setActiveFilters] = useState(getInitialFilters(eventFilters));

  const handleFilters = useCallback(
    (label, newValues) => {
      const newFilters = {
        ...activeFilters,
        [label]: newValues,
      };
      setActiveFilters(newFilters);
    },
    [activeFilters]
  );

  return (
    <Layout>
      <Hero items={featuredEvents} />
      <Filters
        eventFilters={eventFilters}
        activeFilters={activeFilters}
        handleFilters={handleFilters}
      />
      <EventList allEvents={allEvents} totalCount={totalCount} />
    </Layout>
  );
};

export default EventsPage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
