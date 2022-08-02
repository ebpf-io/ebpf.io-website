import React from "react";

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
      <img src={getFlagLink(language)} className='flag' alt={language} />
      {getLanguageName(language)}
      <span className='triangle is-shown' />
    </button>
    <span className={`list${isOpen ? " is-shown" : ""}`}>
      {languageButtons}
    </span>
  </div>
);

export default LanguageDropdown;
