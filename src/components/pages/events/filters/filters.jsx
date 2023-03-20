/* eslint-disable react/prop-types */
import React from 'react';

import DropdownSelect from './dropdown-select';

const Filters = ({ eventFilters, activeFilters, handleFilters }) => (
  <div
    id="categories"
    className="container flex space-x-6 [@media(max-width:550px)]:flex-col [@media(max-width:550px)]:space-y-5 [@media(max-width:550px)]:space-x-0 "
  >
    {eventFilters.map((item, index) => (
      <DropdownSelect
        {...item}
        key={index}
        values={activeFilters[item.label]}
        onSelect={(newValues) => handleFilters(item.label, newValues)}
      />
    ))}
  </div>
);

export default Filters;
