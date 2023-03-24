import PropTypes from 'prop-types';
import React from 'react';

import DropdownSelect from './dropdown-select';
import DropdownWithTwoSelect from './dropdown-with-two-select';

const Filters = ({ eventFilters, activeFilters, handleFilters }) => {
  const [type, conference, region] = eventFilters;

  return (
    <div
      id="categories"
      className="container flex space-x-6 [@media(max-width:550px)]:flex-col [@media(max-width:550px)]:space-y-5 [@media(max-width:550px)]:space-x-0 "
    >
      <DropdownWithTwoSelect
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
