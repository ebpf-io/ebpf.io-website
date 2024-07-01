import PropTypes from 'prop-types';
import React from 'react';

import DropdownSelect from './dropdown-select';
import DropdownWithTwoLevels from './dropdown-with-two-levels';

const Filters = ({ eventFilters, activeFilters, handleFilters }) => {
  const [type, conference, region, date] = eventFilters;

  return (
    <div
      id="categories"
      className="flex w-full space-x-6 border-b pb-6 border-gray-80 border-dashed [@media(max-width:845px)]:flex-col [@media(max-width:845px)]:space-x-0 [@media(max-width:845px)]:space-y-5 "
    >
      <DropdownSelect
        {...date}
        values={activeFilters[date.label]}
        onSelect={(newValues) => handleFilters(date, newValues)}
      />
      <DropdownWithTwoLevels
        mainFilter={type}
        secondFilter={conference}
        activeFilters={activeFilters}
        handleFilters={handleFilters}
      />
      <DropdownSelect
        {...region}
        values={activeFilters[region.label]}
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
