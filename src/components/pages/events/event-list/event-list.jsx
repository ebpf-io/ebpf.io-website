import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import useLocation from 'react-use/lib/useLocation';

import Filters from 'components/pages/events/filters';
import Pagination from 'components/pages/events/pagination';
import EventCard from 'components/shared/event-card';
import { EVENT_PER_PAGE } from 'constants/event';
import { eventFilters } from 'constants/event-filters';
import useFilteredEvents from 'hooks/use-filtered-events';

import EmptyState from '../empty-state';

import closeIcon from './images/close.svg';

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

  const resetFilters = () => {
    Object.values(eventFilters).forEach((type) => {
      handleFilters(type, []);
    });
  };

  const resetFilterTag = (type, tag) => {
    handleFilters(
      { label: type },
      activeFilters[type].filter((item) => item !== tag)
    );
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
  const allActiveFilters = Object.entries(activeFilters).flatMap(([label, items]) =>
    items.map((item) => ({ label, title: item }))
  );

  return (
    <section className="mt-9 safe-paddings pb-28 lg:pb-24 md:pb-16 sm:pb-12" id="ref">
      <div
        className={clsx('container flex flex-col gap-y-6', {
          'divide-y divide-gray-80 divide-dashed': allActiveFilters.length > 0,
        })}
      >
        <Filters
          eventFilters={eventFilters}
          activeFilters={activeFilters}
          handleFilters={handleFilters}
        />
        {allActiveFilters.length > 0 && (
          <ul className="flex flex-wrap items-center w-full gap-4 pt-6">
            {allActiveFilters.map(({ title, label }, index) => (
              <li key={index}>
                <span className="inline-flex items-center justify-center pl-4 text-sm font-medium leading-none text-center text-black border-none rounded-full bg-gray-96 whitespace-nowrap">
                  <span>{title}</span>
                  <button
                    className="inline-flex items-center justify-center py-[13px] pl-3 pr-4 leading-none text-center rounded-full outline-none cursor-pointer hover:bg-gray-94 transition-colors duration-200"
                    type="button"
                    aria-label={`Remove filter ${title}`}
                    onClick={() => resetFilterTag(label, title)}
                  >
                    <img
                      className="w-3 h-3"
                      src={closeIcon}
                      alt=""
                      width={12}
                      height={12}
                      loading="lazy"
                    />
                  </button>
                </span>
              </li>
            ))}
            <li>
              <button
                className="self-start pb-1 mt-auto font-sans text-sm font-semibold leading-none transition-colors duration-200 border-b-2 text-gray-80 border-gray-80 hover:text-gray-60 hover:border-gray-70"
                type="button"
                onClick={resetFilters}
              >
                Reset filters
              </button>
            </li>
          </ul>
        )}
      </div>

      {currentEvents.length > 0 ? (
        <div className="container grid grid-cols-12 pt-12 grid-gap auto-rows-min justify-items-stretch md:pt-10 sm:flex sm:flex-col sm:gap-y-5">
          {currentEvents.length > 0 &&
            currentEvents.map((item, index) => (
              <EventCard {...item} className="col-span-4 md:col-span-6" key={index} />
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
