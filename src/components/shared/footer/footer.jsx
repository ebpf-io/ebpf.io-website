import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import data from 'data/shared/footer';
import logo from 'images/logo-white.svg';

import LanguageSelect from './language-select';
import SocialLinks from './social-links';

const Footer = ({ items, lang, pageUrls }) => (
  <footer className="safe-paddings overflow-y-hidden bg-black pt-16 text-white lg:pt-12">
    <div className="container">
      <nav className="flex justify-between lg:flex-col lg:space-y-12">
        <div className="flex md:items-center md:justify-between">
          <Link to="/">
            <span className="sr-only">eBPF logo</span>
            <img
              className="h-auto w-32"
              src={logo}
              alt="eBPF logo"
              width={128}
              height={44}
              loading="lazy"
            />
          </Link>
          <SocialLinks className="hidden md:flex sm:hidden" />
        </div>
        <div className="flex space-x-[100px] lg:justify-between lg:space-x-[122px] md:space-x-20 sm:flex-col sm:space-x-0">
          <ul className="flex space-x-[97px] lg:space-x-[122px] md:space-x-16 sm:order-1 sm:mt-11 sm:flex-wrap sm:gap-x-20 sm:gap-y-11 sm:space-x-0 xs:gap-x-10">
            {items.map(({ title, items }) => (
              <li key={title}>
                <h3 className="font-medium leading-none tracking-[0.02em] xs:leading-tight">
                  {title}
                </h3>
                <ul className="mt-5 flex flex-col space-y-5">
                  {items.map(({ title, to, target }) => (
                    <li className="leading-none" key={title}>
                      <Link
                        className="text-sm leading-none opacity-80"
                        theme="white"
                        to={to}
                        target={target || null}
                        rel={target ? 'noopener noreferrer' : null}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:max-w-[163px] sm:max-w-none">
            <SocialLinks className="md:hidden sm:flex" />
            <span className="mt-6 text-sm text-gray-70 opacity-80 md:mt-0 sm:mt-6">
              {data[lang].maintain.title}
            </span>
            <span className="mt-1 text-sm font-semibold opacity-80">
              {data[lang].maintain.beforeLink}
              {'  '}
              <Link
                theme="primary-yellow"
                to="https://github.com/ebpf-io/ebpf.io-website/issues/new/choose"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data[lang].maintain.linkTitle}
              </Link>
            </span>
          </div>
        </div>
      </nav>
      <div className="mt-16 flex items-center justify-between border-t border-dashed border-gray-80 border-opacity-20 py-8 lg:mt-12 md:flex-col md:items-start">
        <div className="flex flex-col items-start justify-start">
          <div className="flex space-x-6 text-sm font-medium sm:flex-wrap sm:gap-x-5 sm:gap-y-5 sm:space-x-0">
            <span>
              © {new Date().getFullYear()} {data[lang].copyright}
            </span>
            {/* <Link theme="white" to="/terms-of-service">
                Terms of Service
              </Link>
              <Link theme="white" to="/privacy-policy">
                Privacy Policy
              </Link> */}
          </div>
          <span className="mt-4 text-sm text-gray-70">{data[lang].content}</span>
        </div>
        <LanguageSelect lang={lang} pageUrls={pageUrls} />
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
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
  lang: PropTypes.string.isRequired,
  pageUrls: PropTypes.object,
};

Footer.defaultProps = {
  pageUrls: null,
};

export default Footer;
