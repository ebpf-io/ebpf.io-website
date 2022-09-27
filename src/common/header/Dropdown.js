import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import CustomLink from "../CustomLink";

const Dropdown = ({ title, items }) => {
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownOutsideClick = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useClickOutside([dropdownRef, buttonRef], handleDropdownOutsideClick);

  return (
    <div className='select'>
      <button
        className='button'
        ref={buttonRef}
        onClick={handleOpen}
        type='button'
      >
        {title}
        <span className={`triangle${isOpen ? " is-shown" : ""}`} />
      </button>
      <div className={`list${isOpen ? " is-shown" : ""}`}>
        {items.map(({ title, linkUrl, linkTarget, subitems }, index) => (
          <ul className='items-list' key={index}>
            {linkUrl ? (
              <li className='item-link'>
                <CustomLink url={linkUrl} target={linkTarget}>{title}</CustomLink>
              </li>
            ) : (
              <li className='item-link item-title'>{title}</li>
            )}
            {subitems?.map(({ name, linkUrl, linkTarget }, index) => (
              <ul key={index}>
                <li className='subitem-link'>
                  <CustomLink url={linkUrl} target={linkTarget}>{name}</CustomLink>
                </li>
              </ul>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
