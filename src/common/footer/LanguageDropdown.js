import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const getFlagLink = (language) => {
  switch (language) {
    case "/":
      return "/images/english.svg";
    case "/fr-fr/":
      return "/images/french.svg";
    case "/zh-cn/":
      return "/images/chinese.svg";
  }
};

const LanguageDropdown = ({ languageButtons, language, getLanguageName }) => {
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
    <div className='language-select'>
      <button
        className='button'
        ref={buttonRef}
        onClick={handleOpen}
        type='button'
      >
        <img src={getFlagLink(language)} className='flag' alt={language} />
        {getLanguageName(language)}
        <span className={`triangle${isOpen ? " is-shown" : ""}`} />
      </button>
      <div className={`list${isOpen ? " is-shown" : ""}`}>
        {languageButtons}
      </div>
    </div>
  );
};

export default LanguageDropdown;
