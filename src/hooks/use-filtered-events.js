import { useMemo } from 'react';

const filterEventsData = (eventsData, activeFilters) => {
  const filteredData = eventsData.filter(
    ({ type, region, conference }) =>
      (activeFilters.eventtype.length === 0 || activeFilters.eventtype.includes(type)) &&
      (activeFilters.region.length === 0 || activeFilters.region.includes(region)) &&
      (activeFilters.conference.length === 0 || activeFilters.conference.includes(conference))
  );
  return filteredData;
};

export default function useFilteredEvents(eventsData, activeFilters) {
  return useMemo(() => filterEventsData(eventsData, activeFilters), [eventsData, activeFilters]);
}
