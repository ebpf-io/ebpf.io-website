import React from "react";

const LanguageDropdown = ({
  languageButtons,
  isOpen,
  setIsOpen,
  language,
  getLanguageName,
}) => (
  <div
    className={`language-select ${
      isOpen ? "visible opacity-100" : "invisible opacity-0"
    }`}
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
    onTouchStart={() => setIsOpen(true)}
    onTouchEnd={() => setIsOpen(false)}
  >
    <button className='button' type='button'>
      {getLanguageName(language)}
      <span className='triangle is-shown' />
    </button>
    <span className={`list${isOpen ? " is-shown" : ""}`}>
      {languageButtons}
    </span>
  </div>
);

export default LanguageDropdown;
