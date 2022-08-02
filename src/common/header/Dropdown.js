import { Link } from "gatsby";
import React from "react";

const LanguageDropdown = ({ isOpen, setIsOpen, title, items }) => (
  <div
    className={`select ${
      isOpen ? "visible opacity-100" : "invisible opacity-0"
    }`}
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
    onTouchStart={() => setIsOpen(true)}
    onTouchEnd={() => setIsOpen(false)}
  >
    <button className='button' onClick={() => setIsOpen(!isOpen)} type='button'>
      {title}
      <span className='triangle' />
    </button>
    <span className={`list${isOpen ? " is-shown" : ""}`}>
      {items.map(({ title, linkUrl, linkTarget, subitems }, index) => (
        <div className='item-link' key={index}>
          {linkUrl ? (
            linkUrl.startsWith("/") ? (
              <Link to={linkUrl}>{title}</Link>
            ) : (
              <a target={linkTarget || ""} href={linkUrl}>
                {title}
              </a>
            )
          ) : (
            <div className='item-title'>{title}</div>
          )}
          {subitems?.map(({ name, linkUrl, linkTarget }, index) => (
            <li className='item-link subitem-link' key={index}>
              {linkUrl.startsWith("/") ? (
                <Link className='link' to={linkUrl}>
                  {name}
                </Link>
              ) : (
                <a target={linkTarget || ""} className='link' href={linkUrl}>
                  {name}
                </a>
              )}
            </li>
          ))}
        </div>
      ))}
    </span>
  </div>
);

export default LanguageDropdown;
