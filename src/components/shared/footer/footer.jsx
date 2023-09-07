import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import socialLinks from 'data/shared/social-links';
import logo from 'images/logo-white.svg';

import LanguageSelect from './language-select';

const SocialLinks = ({ className }) => (
  <ul className={clsx('flex space-x-4', className)}>
    {socialLinks.map(({ text, to, icon: Icon }) => (
      <li key={text}>
        <Link className="group" to={to} target="_blank" rel="noopener noreferrer">
          <span className="sr-only">{text}</span>
          <Icon className="h-10 w-10 text-white transition-colors duration-200 group-hover:text-primary-yellow" />
        </Link>
      </li>
    ))}
  </ul>
);

SocialLinks.propTypes = {
  className: PropTypes.string,
};

SocialLinks.defaultProps = {
  className: null,
};

const Footer = ({ items, lang }) => (
  <footer className="safe-paddings bg-black pt-16 text-white lg:pt-12">
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
              Maintained by the eBPF community.
            </span>
            <span className="mt-1 text-sm font-semibold opacity-80">
              See a bug?{'  '}
              <Link
                theme="primary-yellow"
                to="https://github.com/ebpf-io/ebpf.io-website/issues/new/choose"
                target="_blank"
                rel="noopener noreferrer"
              >
                File an issue
              </Link>
            </span>
          </div>
        </div>
      </nav>
      <div className="mt-16 flex items-center justify-between border-t border-dashed border-gray-80 border-opacity-20 py-8 lg:mt-12 md:flex-col md:items-start">
        <div className="flex flex-col items-start justify-start">
          <div className="flex space-x-6 text-sm font-medium sm:flex-wrap sm:gap-x-5 sm:gap-y-5 sm:space-x-0">
            <span>© {new Date().getFullYear()} eBPF.io authors</span>
            {/* <Link theme="white" to="/terms-of-service">
                Terms of Service
              </Link>
              <Link theme="white" to="/privacy-policy">
                Privacy Policy
              </Link> */}
          </div>
          <span className="mt-4 text-sm text-gray-70">
            The content of the{' '}
            <Link className="!inline font-medium" theme="white" to="/">
              ebpf.io
            </Link>{' '}
            website is licensed under a{' '}
            <Link
              className="!inline"
              theme="white"
              size="sm"
              to="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creative Commons Attribution 4.0 International License
            </Link>
            .
          </span>
        </div>
        <LanguageSelect lang={lang} />
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
};

export default Footer;
