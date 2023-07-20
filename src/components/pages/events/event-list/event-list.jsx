import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import useLocation from 'react-use/lib/useLocation';

import Card from 'components/pages/events/card';
import Filters from 'components/pages/events/filters';
import Pagination from 'components/pages/events/pagination';
import { EVENT_PER_PAGE } from 'constants/event';
import { eventFilters } from 'constants/event-filters';
import useFilteredEvents from 'hooks/use-filtered-events';

import EmptyState from '../empty-state';

const getInitialFilters = (allFilters) =>
  allFilters.reduce((acc, { label }) => {
    if (!acc[label]) {
      acc[label] = [];
    }
    return acc;
  }, {});

const EventList = ({ allEvents, totalCount }) => {
  const [eventPositionStart, setEventPositionStart] = useState(0);
  const [activeFilters, setActiveFilters] = useState(getInitialFilters(eventFilters));

  const location = useLocation();
  const handleFilters = (filter, newValues) => {
    setActiveFilters((prev) => ({ ...prev, [filter.label]: newValues }));
    setEventPositionStart(0);
  };

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const eventtype = eventFilters[0].label;
    const conference = eventFilters[1].label;
    const eventtypeParam = urlSearchParams.get(eventtype);
    const conferenceParam = urlSearchParams.get(conference);
    const isOverviewParam = urlSearchParams.has('overview');

    if (isOverviewParam) {
      setActiveFilters(getInitialFilters(eventFilters));
      window.history.replaceState({}, '', window.location.pathname);
    }

    if (eventtypeParam || conferenceParam) {
      setActiveFilters((prev) => ({
        ...prev,
        ...(eventtypeParam && prev[eventtype] !== eventtypeParam
          ? { [eventtype]: [eventtypeParam] }
          : {}),
        ...(conferenceParam && prev[conference] !== conferenceParam
          ? { [conference]: [conferenceParam] }
          : {}),
      }));

      const element = document.getElementById('ref');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementOffset = window.pageYOffset + elementTop;
        window.scrollTo({
          top: elementOffset,
          behavior: 'smooth',
        });
      }

      window.history.replaceState({}, '', window.location.pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const eventPositionEnd = eventPositionStart + EVENT_PER_PAGE;
  const filteredEvents = useFilteredEvents(
    allEvents,
    activeFilters,
    eventPositionStart,
    eventPositionEnd
  );
  const currentEvents = filteredEvents.slice(eventPositionStart, eventPositionEnd);
  const pageCount = Math.ceil(filteredEvents.length / EVENT_PER_PAGE);

  return (
    <section className="safe-paddings pb-28 pt-6 lg:pb-24 md:pb-16 sm:pb-12" id="ref">
      <Filters
        eventFilters={eventFilters}
        activeFilters={activeFilters}
        handleFilters={handleFilters}
      />
      {currentEvents.length > 0 ? (
        <div className="container grid-gap grid auto-rows-min grid-cols-12 justify-items-stretch pt-12 md:pt-10 sm:flex sm:flex-col sm:gap-y-5">
          {currentEvents.length > 0 &&
            currentEvents.map((item, index) => (
              <Card {...item} className="col-span-4 md:col-span-6" key={index} />
            ))}
        </div>
      ) : (
        <EmptyState />
      )}

      {pageCount > 1 && (
        <Pagination
          totalCount={totalCount}
          pageCount={pageCount}
          callback={setEventPositionStart}
        />
      )}
    </section>
  );
};

EventList.propTypes = {
  allEvents: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalCount: PropTypes.number.isRequired,
};

export default EventList;
