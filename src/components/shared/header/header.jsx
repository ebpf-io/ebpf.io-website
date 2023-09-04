import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Burger from 'components/shared/burger';
import Link from 'components/shared/link';
import ChevronIcon from 'icons/chevron.inline.svg';
import logo from 'images/logo-black.svg';

import { defaultLanguage } from '../../../../config/languages';

const Header = ({ items, isMobileMenuOpen, onBurgerClick, fullWidthBottomBorder, lang }) => (
  <header
    className={clsx('safe-paddings', {
      'border-b border-gray-90': fullWidthBottomBorder,
    })}
  >
    <div className="container">
      <nav
        className={clsx('flex h-20 items-center justify-between lg:h-16', {
          'border-b border-dashed border-gray-80': !fullWidthBottomBorder,
        })}
      >
        <Link to={lang === defaultLanguage ? '/' : `/${lang}/`}>
          <span className="sr-only">eBPF logo</span>
          <img
            className="h-9 w-auto lg:h-8"
            src={logo}
            alt=""
            width={106}
            height={36}
            loading="eager"
          />
        </Link>
        <ul className="flex space-x-8 lg:space-x-7 md:hidden">
          {items.map(({ title, to, items }, index) => {
            const Tag = to ? Link : 'button';
            const withChildItems = items?.length > 0;
            return (
              <li className={clsx(withChildItems && 'group relative')} key={index}>
                <Tag
                  className="group inline-flex items-center py-5 text-[15px] font-medium leading-none transition-colors duration-200 hover:text-gray-40 lg:text-sm"
                  to={to}
                >
                  <span>{title}</span>
                  {withChildItems && <ChevronIcon className="ml-1.5 mt-1 h-auto w-2.5" />}
                </Tag>
                {withChildItems && (
                  <ul
                    className="pointer-events-none absolute left-1/2 top-full z-10 flex min-w-[172px] -translate-x-[calc(50%+4px)] flex-col bg-white py-2.5 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100"
                    style={{
                      boxShadow:
                        '0px 2px 6px rgba(28, 23, 23, 0.04), 0px 5px 14px rgba(28, 23, 23, 0.1)',
                    }}
                  >
                    {items.map(({ title, to, target, items }) => (
                      <li key={title}>
                        {to ? (
                          <Link
                            className="flex whitespace-nowrap px-5 py-2.5 text-[15px] font-medium leading-none lg:text-sm"
                            theme="black"
                            to={to}
                            target={target || null}
                            rel={target ? 'noopener noreferrer' : null}
                          >
                            {title}
                          </Link>
                        ) : (
                          <h3 className="flex whitespace-pre px-5 py-2.5 text-[15px] font-medium leading-none lg:text-sm">
                            {title}
                          </h3>
                        )}
                        {items?.length > 0 && (
                          <ul className="flex flex-col px-4">
                            {items.map(({ title, to, target }) => (
                              <li key={title}>
                                <Link
                                  className="flex px-5 py-2.5 text-[15px] leading-none lg:text-sm"
                                  theme="black"
                                  to={to}
                                  target={target || null}
                                  rel={target ? 'noopener noreferrer' : null}
                                >
                                  {title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <Burger className="hidden md:block" isToggled={isMobileMenuOpen} onClick={onBurgerClick} />
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          to: PropTypes.string,
          target: PropTypes.string,
          items: PropTypes.arrayOf(
            PropTypes.shape({
              title: PropTypes.string.isRequired,
              to: PropTypes.string,
              target: PropTypes.string,
            })
          ),
        })
      ),
    })
  ).isRequired,
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
  fullWidthBottomBorder: PropTypes.bool,
  lang: PropTypes.string.isRequired,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
  fullWidthBottomBorder: false,
};

export default Header;
