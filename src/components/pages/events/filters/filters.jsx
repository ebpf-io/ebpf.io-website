/* eslint-disable react/prop-types */
import React from 'react';

import DropdownSelect from './dropdown-select';

const Filters = ({ eventFilters, activeFilters, handleFilters }) => (
  <div
    id="categories"
    className="container flex flex-wrap space-x-7 pt-6 [@media(max-width:346px)]:w-[60%] [@media(max-width:346px)]:space-x-0 [@media(max-width:346px)]:space-y-0"
  >
    {eventFilters.map((item, index) => (
      <DropdownSelect
        className="[@media(max-width:346px)]:!mr-7 [@media(max-width:346px)]:mb-5"
        {...item}
        key={index}
        values={activeFilters[item.label]}
        onSelect={(newValues) => handleFilters(item.label, newValues)}
      />
    ))}
  </div>
);

export default Filters;
