/* eslint-disable react/prop-types */
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
        valuesMain={activeFilters[type.label]}
        valuesSecond={activeFilters[conference.label]}
        onSelectMain={(newValues) => handleFilters(type.label, newValues)}
        onSelectSecond={(newValues) => handleFilters(conference.label, newValues)}
      />
      <DropdownSelect
        {...region}
        values={activeFilters[region.label]}
        onSelect={(newValues) => handleFilters(region.label, newValues)}
      />
    </div>
  );
};

export default Filters;
