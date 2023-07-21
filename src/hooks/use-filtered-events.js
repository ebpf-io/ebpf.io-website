import { useMemo } from 'react';

import { eventFilters } from 'constants/event-filters';

const upcomingDate = eventFilters[3].items[0].name;
const archivedDate = eventFilters[3].items[1].name;

const filterEventsData = (eventsData, activeFilters) => {
  const filteredData = eventsData.filter(({ type, region, conference, date }) => {
    const eventDate = new Date(date);
    const now = new Date();

    const isDateSelected =
      activeFilters.date.length === 0 ||
      (activeFilters.date.includes(upcomingDate) && eventDate > now) ||
      (activeFilters.date.includes(archivedDate) && eventDate < now);

    const isEventTypeSelected =
      activeFilters.eventtype.length === 0 || activeFilters.eventtype.includes(type);

    const isConferenceSelected =
      activeFilters.conference.length === 0 || activeFilters.conference.includes(conference);

    const isRegionSelected =
      activeFilters.region.length === 0 || activeFilters.region.includes(region);

    if (activeFilters.eventtype.length > 0 && activeFilters.conference.length > 0) {
      return (isEventTypeSelected || isConferenceSelected) && isRegionSelected;
    }

    return isEventTypeSelected && isConferenceSelected && isRegionSelected && isDateSelected;
  });

  return filteredData;
};

export default function useFilteredEvents(eventsData, activeFilters) {
  return useMemo(() => filterEventsData(eventsData, activeFilters), [eventsData, activeFilters]);
}
