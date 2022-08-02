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
          <ul className='item-link' key={index}>
            {linkUrl ? (
              <CustomLink text={title} url={linkUrl} target={linkTarget} />
            ) : (
              <span className='item-title'>{title}</span>
            )}
            {subitems?.map(({ name, linkUrl, linkTarget }, index) => (
              <li className='item-link subitem-link' key={index}>
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
