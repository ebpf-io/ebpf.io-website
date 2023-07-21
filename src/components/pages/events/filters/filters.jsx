import PropTypes from 'prop-types';
import React from 'react';

import DropdownSelect from './dropdown-select';
import DropdownWithTwoLevels from './dropdown-with-two-levels';

const Filters = ({ eventFilters, activeFilters, handleFilters }) => {
  const [type, conference, region, date] = eventFilters;
  const {
    eventtype: eventtypeFilter,
    conference: conferenceFilter,
    region: regionFilter,
    date: dateFilter,
  } = activeFilters;
  const isTypeSelected = eventtypeFilter.length > 0 || conferenceFilter.length > 0;
  const isRegionSelected = regionFilter.length > 0;
  const isDateSelected = dateFilter.length > 0;

  return (
    <div
      id="categories"
      className="container flex justify-center space-x-6 [@media(max-width:845px)]:flex-col [@media(max-width:845px)]:space-x-0 [@media(max-width:845px)]:space-y-5 "
    >
      <DropdownSelect
        {...date}
        values={activeFilters[date.label]}
        isSelected={isDateSelected}
        onSelect={(newValues) => handleFilters(date, newValues)}
      />
      <DropdownWithTwoLevels
        mainFilter={type}
        isSelected={isTypeSelected}
        secondFilter={conference}
        activeFilters={activeFilters}
        handleFilters={handleFilters}
      />
      <DropdownSelect
        {...region}
        values={activeFilters[region.label]}
        isSelected={isRegionSelected}
        onSelect={(newValues) => handleFilters(region, newValues)}
      />
    </div>
  );
};

Filters.propTypes = {
  eventFilters: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })).isRequired,
    })
  ).isRequired,
  activeFilters: PropTypes.objectOf(PropTypes.array).isRequired,
  handleFilters: PropTypes.func.isRequired,
};

export default Filters;
