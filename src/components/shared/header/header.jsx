/* eslint-disable import/no-extraneous-dependencies */
import clsx from 'clsx';
import { useTranslation, Trans, useI18next } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import React from 'react';

import Burger from 'components/shared/burger';
import Link from 'components/shared/link';
import headerMenu from 'data/shared/header-menu';
import ChevronIcon from 'icons/chevron.inline.svg';
import logo from 'images/logo-black.svg';

import LanguageSelect from './language-select';

const Header = ({ isMobileMenuOpen, onBurgerClick, fullWidthBottomBorder, pageUrls }) => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const logoUrl = language === 'en' ? '/' : `/${language}/`;

  return (
    <header
      className={clsx('safe-paddings z-[1000]', {
        'border-b border-gray-90': fullWidthBottomBorder,
      })}
    >
      <div className="container">
        <nav
          className={clsx('flex h-20 items-center justify-between lg:h-16', {
            'border-b border-dashed border-gray-80': !fullWidthBottomBorder,
          })}
        >
          <Link to={logoUrl}>
            <span className="sr-only">eBPF logo</span>
            <img
              className="w-auto h-9 lg:h-8"
              src={logo}
              alt=""
              width={106}
              height={36}
              loading="eager"
            />
          </Link>
          <div className="flex items-center justify-end">
            <ul className="flex space-x-8 lg:space-x-7 md:hidden">
              {headerMenu.map(({ title, to, items }, index) => {
                const Tag = to ? Link : 'button';
                const withChildItems = items?.length > 0;

                return (
                  <li className={clsx(withChildItems && 'group relative')} key={index}>
                    <Tag
                      className="group inline-flex items-center py-5 text-[15px] font-medium leading-none transition-colors duration-200 hover:text-gray-40 lg:text-sm"
                      to={t(to)}
                    >
                      <span>
                        <Trans>{title}</Trans>
                      </span>
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
                                to={to.startsWith('/') ? t(to) : to}
                                target={target || null}
                                rel={target ? 'noopener noreferrer' : null}
                              >
                                <Trans>{title}</Trans>
                              </Link>
                            ) : (
                              <h3 className="flex whitespace-pre px-5 py-2.5 text-[15px] font-medium leading-none lg:text-sm">
                                <Trans>{title}</Trans>
                              </h3>
                            )}
                            {items?.length > 0 && (
                              <ul className="flex flex-col px-4">
                                {items.map(({ title, to, target }) => (
                                  <li key={title}>
                                    <Link
                                      className="flex px-5 py-2.5 text-[15px] leading-none lg:text-sm"
                                      theme="black"
                                      to={t(to)}
                                      target={target || null}
                                      rel={target ? 'noopener noreferrer' : null}
                                    >
                                      <Trans>{title}</Trans>
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
            <span className="mx-6 h-3.5 w-[1px] bg-gray-80 md:hidden" />
            <LanguageSelect pageUrls={pageUrls} />
            <span className="mx-6 hidden h-3.5 w-[1px] bg-gray-80 md:block" />
            <Burger
              className="hidden md:block"
              isToggled={isMobileMenuOpen}
              onClick={onBurgerClick}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
  fullWidthBottomBorder: PropTypes.bool,
  pageUrls: PropTypes.object,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
  fullWidthBottomBorder: false,
  pageUrls: null,
};

export default Header;
