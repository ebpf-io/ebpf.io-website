import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import Checkbox from 'components/shared/checkbox';
import useClickOutside from 'hooks/use-click-outside';
import ChevronIcon from 'icons/chevron.inline.svg';

const DropdownSelect = ({ name, items, values, onSelect, className }) => {
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (state, value) => {
    if (state) {
      onSelect([...values, value]);
    } else {
      onSelect(values.filter((currentValue) => currentValue !== value));
    }
  };

  const handleDropdownOutsideClick = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useClickOutside([dropdownRef, buttonRef], handleDropdownOutsideClick);

  return (
    <div className={clsx('relative', className)}>
      <button
        type="button"
        className="group flex items-center transition-colors duration-200"
        ref={buttonRef}
        onClick={handleOpen}
      >
        <span
          className={clsx(
            'text-base font-normal leading-none tracking-[0.015em] text-gray-40 transition-colors duration-200 group-hover:text-black',
            isOpen && '!text-black',
            !!values.length && '!font-medium !tracking-normal !text-black'
          )}
        >
          {name}
        </span>
        <ChevronIcon
          className={clsx(
            'ml-2 h-2 w-3 shrink-0 text-gray-40 transition-[transform,color] duration-200 group-hover:text-black',
            isOpen && '-rotate-180',
            (isOpen || !!values.length) && '!text-black'
          )}
        />
      </button>
      <div
        className={clsx(
          'border-gray-5 shadow-box absolute top-[197%] left-0 rounded border bg-white transition-[opacity,visibility] duration-200',
          isOpen ? 'visible z-10 opacity-100' : 'invisible -z-10 opacity-0'
        )}
        ref={dropdownRef}
      >
        <nav className="p-4.5 flex items-start justify-between md:p-3">
          <ul className="flex flex-col">
            {items.map(({ name }, index) => (
              <li
                className="accent-blue hover:accent-blue-hover flex items-center space-x-2.5 pt-2.5 first:pt-0 md:pt-3"
                key={index}
              >
                <Checkbox
                  id={name}
                  name="type"
                  label={name}
                  value={name}
                  checked={values.includes(name)}
                  onChange={(e) => handleSelect(e.target.checked, e.target.value)}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

DropdownSelect.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })).isRequired,
  values: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

DropdownSelect.defaultProps = {
  className: null,
};

export default DropdownSelect;
