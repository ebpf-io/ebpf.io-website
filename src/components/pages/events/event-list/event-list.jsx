import PropTypes from 'prop-types';
import React, { Fragment, useState, useCallback, useMemo, useEffect } from 'react';
import { useSearchParam } from 'react-use';

import Card from 'components/pages/events/card';
import Filters from 'components/pages/events/filters';
import Pagination from 'components/pages/events/pagination';
import SubscriptionForm from 'components/shared/subscription-form';
import { EVENT_PER_PAGE } from 'constants/event';
import { eventFilters } from 'constants/event-filters';
import useFilteredEvents from 'hooks/use-filtered-events';

import CardWithCta from '../card-with-cta';

const getInitialFilters = (allFilters) =>
  allFilters.reduce((acc, { label }) => {
    if (!acc[label]) {
      acc[label] = [];
    }
    return acc;
  }, {});

const EventList = ({ allEvents, totalCount }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [activeFilters, setActiveFilters] = useState(getInitialFilters(eventFilters));

  const eventtype = useSearchParam('eventtype');
  const conference = useSearchParam('conference');

  const handleFilters = useCallback(
    (filter, newValues) => {
      const newFilters = {
        ...activeFilters,
        [filter.label]: newValues,
      };
      setActiveFilters(newFilters);
    },
    [activeFilters]
  );

  useEffect(() => {
    if (eventtype) {
      handleFilters(eventFilters[0], [eventtype]);
    }
    if (conference) {
      handleFilters(eventFilters[1], [conference]);
    }
    if (eventtype || conference) {
      history.pushState(null, '', window.location.pathname);
    }
  }, [eventtype, conference, handleFilters]);

  const memoizedFilterDropdowns = useMemo(
    () => (
      <Filters
        eventFilters={eventFilters}
        activeFilters={activeFilters}
        handleFilters={handleFilters}
      />
    ),
    [activeFilters, handleFilters]
  );

  const endOffset = itemOffset + EVENT_PER_PAGE;
  const filteredEvents = useFilteredEvents(allEvents, activeFilters, itemOffset, endOffset);
  const currentEvents = filteredEvents.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredEvents.length / EVENT_PER_PAGE);

  return (
    <section className="safe-paddings pb-28 lg:pb-24 md:pb-16 sm:pb-12">
      {memoizedFilterDropdowns}
      <div className="container grid-gap grid auto-rows-min grid-cols-12 justify-items-stretch pt-12 md:pt-10 sm:flex sm:flex-col sm:gap-y-5">
        {currentEvents.length > 0 &&
          currentEvents.map((item, index) => (
            <Fragment key={index}>
              <Card {...item} className="col-span-4 md:col-span-6" />
              {index === 4 && <CardWithCta type="book" className="col-span-4 md:col-span-6" />}
              {index === 7 && (
                <div className="col-span-12 my-10 lg:my-16 md:my-10 md:hidden">
                  <SubscriptionForm size="md" />
                </div>
              )}
              {index === 6 && (
                <div className="col-span-12 hidden md:my-10 md:block">
                  <SubscriptionForm size="lg" />
                </div>
              )}
            </Fragment>
          ))}
      </div>

      {pageCount > 1 && (
        <Pagination totalCount={totalCount} pageCount={pageCount} callback={setItemOffset} />
      )}
    </section>
  );
};

EventList.propTypes = {
  allEvents: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalCount: PropTypes.number.isRequired,
};

export default EventList;
