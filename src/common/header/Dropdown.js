import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import CustomLink from "../CustomLink";

const LanguageDropdown = ({ title, items }) => {
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
                <CustomLink text={title} url={linkUrl} target={linkTarget} />
              </li>
            ) : (
              <li className='item-link item-title'>{title}</li>
            )}
            {subitems?.map(({ name, linkUrl, linkTarget }, index) => (
              <li className='subitem-link' key={index}>
                <CustomLink text={name} url={linkUrl} target={linkTarget} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default LanguageDropdown;
