/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useRef, useState } from 'react';

import Checkbox from 'components/shared/checkbox';
import useClickOutside from 'hooks/use-click-outside';
import ChevronIcon from 'icons/chevron.inline.svg';

const DropdownWithTwoSelect = ({
  mainFilter,
  secondFilter,
  valuesMain,
  valuesSecond,
  onSelectMain,
  onSelectSecond,
  className,
}) => {
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const { name, items: itemsMain } = mainFilter;
  const { items: itemsSecond } = secondFilter;

  const handleSelectMainFilter = (state, value) => {
    if (state) {
      onSelectMain([...valuesMain, value]);
    } else {
      onSelectMain(valuesMain.filter((currentValue) => currentValue !== value));
    }
  };

  const handleSelectSecondFilter = (state, value) => {
    if (state) {
      onSelectSecond([...valuesSecond, value]);
    } else {
      onSelectSecond(valuesSecond.filter((currentValue) => currentValue !== value));
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
        className="group flex w-60 items-center justify-between rounded-full border border-gray-90 py-4 px-5 transition-colors duration-200 hover:border-gray-40 [@media(max-width:550px)]:w-full"
        ref={buttonRef}
        onClick={handleOpen}
      >
        <span
          className={clsx(
            'text-base font-medium leading-none text-gray-40 transition-colors duration-200 group-hover:text-black',
            isOpen && '!text-black',
            !!valuesMain.length && '!font-medium !tracking-normal !text-black'
          )}
        >
          {name}
        </span>
        <ChevronIcon
          className={clsx(
            'mt-1 h-auto w-2.5 shrink-0 text-gray-40 transition-[transform,color] duration-200 group-hover:text-black',
            isOpen && '-rotate-180',
            (isOpen || !!valuesMain.length) && '!text-black'
          )}
        />
      </button>
      <div
        className={clsx(
          'absolute top-16 left-0 w-[270px] rounded border border-gray-90 bg-white drop-shadow-book transition-[opacity,visibility] duration-200 hover:drop-shadow-book [@media(max-width:550px)]:w-full',
          isOpen ? 'visible z-10 opacity-100' : 'invisible -z-10 opacity-0'
        )}
        ref={dropdownRef}
      >
        <nav className="flex flex-col items-start justify-between px-4 py-5 md:p-3">
          <ul className="flex flex-col">
            {itemsMain.map(({ name }, index) => (
              <li className="flex items-center space-x-2.5 pt-2.5 first:pt-0 md:pt-3" key={index}>
                <Checkbox
                  id={name}
                  name="type"
                  label={name}
                  value={name}
                  checked={valuesMain.includes(name)}
                  onChange={(e) => handleSelectMainFilter(e.target.checked, e.target.value)}
                />
              </li>
            ))}
          </ul>
          <ul className="flex flex-col pl-7 pt-2.5 md:pt-3">
            {itemsSecond.map(({ name }, index) => (
              <li className="flex items-center space-x-2.5 pt-2.5 first:pt-0 md:pt-3" key={index}>
                <Checkbox
                  id={name}
                  name="type"
                  label={name}
                  value={name}
                  checked={valuesSecond.includes(name)}
                  onChange={(e) => handleSelectSecondFilter(e.target.checked, e.target.value)}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DropdownWithTwoSelect;
