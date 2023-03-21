import PropTypes from 'prop-types';
import React, { Fragment, useState, useCallback, useMemo } from 'react';

import Card from 'components/pages/events/card';
import Filters from 'components/pages/events/filters';
import Pagination from 'components/pages/events/pagination';
import SubscriptionForm from 'components/shared/subscription-form';
import { EVENT_PER_PAGE } from 'constants/event';
import { eventFilters } from 'constants/event-filters';
import useFilteredEvents from 'hooks/use-filtered-events';

import SpecialCard from '../special-card';

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

  console.log('Render!');

  const endOffset = itemOffset + EVENT_PER_PAGE;

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

  const filteredEvents = useFilteredEvents(allEvents, activeFilters);
  const currentEvents = filteredEvents.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredEvents.length / EVENT_PER_PAGE);

  console.log(filteredEvents.length);
  console.log(currentEvents.length);
  console.log(pageCount);

  return (
    <section className="safe-paddings pb-16 md:pb-12">
      {memoizedFilterDropdowns}
      <div className="container grid-gap grid grid-cols-12 justify-items-stretch pt-12 md:pt-10 sm:flex sm:flex-col sm:gap-y-5">
        {currentEvents.length > 0 &&
          currentEvents.map((item, index) => (
            <Fragment key={index}>
              <Card {...item} className="col-span-4 md:col-span-6" />
              {index === 4 && <SpecialCard type="book" className="col-span-4 md:col-span-6" />}
              {index === 10 && <SpecialCard type="webinar" className="col-span-4 md:col-span-6" />}
              {index === 7 && (
                <div className="col-span-12 my-[72px] lg:my-16 md:my-10 md:hidden">
                  <SubscriptionForm size="lg" />
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
