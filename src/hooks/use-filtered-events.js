import { useMemo } from 'react';

const filterEventsData = (eventsData, activeFilters) => {
  const filteredData = eventsData.filter(({ type, region, conference }) => {
    const isEventTypeSelected =
      activeFilters.eventtype.length === 0 || activeFilters.eventtype.includes(type);
    const isConferenceSelected =
      activeFilters.conference.length === 0 || activeFilters.conference.includes(conference);
    const isRegionSelected =
      activeFilters.region.length === 0 || activeFilters.region.includes(region);

    if (activeFilters.eventtype.length > 0 && activeFilters.conference.length > 0) {
      return (isEventTypeSelected || isConferenceSelected) && isRegionSelected;
    }

    return isEventTypeSelected && isConferenceSelected && isRegionSelected;
  });

  return filteredData;
};

export default function useFilteredEvents(eventsData, activeFilters) {
  return useMemo(() => filterEventsData(eventsData, activeFilters), [eventsData, activeFilters]);
}
