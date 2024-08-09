import clsx from 'clsx';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { useI18next } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import React, { useCallback, useRef, useState } from 'react';

import Link from 'components/shared/link';
import useClickOutside from 'hooks/use-click-outside';
import ChevronIcon from 'icons/chevron.inline.svg';

import { languages as languageList } from '../../../../../config/languages';

const ANIMATION_DURATION = 0.2;

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: '0',
    height: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
  },
  visible: {
    opacity: 1,
    y: '0',
    height: 'auto',
    pointerEvents: 'auto',
    visibility: 'visible',
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const LanguageSelect = ({ pageUrls }) => {
  const { language, languages } = useI18next();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleClickOutside = useCallback(() => {
    setShowDropdown(false);
  }, [setShowDropdown]);

  useClickOutside([dropdownRef], handleClickOutside);

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative h-10 w-36 md:mt-6 xs:w-full">
        <div
          className="absolute bottom-0 right-0 w-36 items-center overflow-hidden rounded border border-gray-40 bg-black text-sm leading-none transition-[shadow,border-color] duration-200 hover:border-gray-70 xs:w-full"
          ref={dropdownRef}
        >
          <m.ul
            className="flex flex-col"
            initial="hidden"
            animate={showDropdown ? 'visible' : 'hidden'}
            variants={dropdownVariants}
          >
            {Object.values(languages)
              .filter((lang) => lang !== language)
              .map((lang) => {
                let url = lang === 'en' ? '/' : `/${lang}/`;

                if (pageUrls) url = pageUrls[lang];

                return (
                  <li className="flex" key={lang}>
                    <Link className="px-[13px] py-3 xs:w-full" theme="white" to={url}>
                      {languageList[lang].name}
                    </Link>
                  </li>
                );
              })}
          </m.ul>
          <button
            className="relative flex h-10 w-full items-center justify-between rounded bg-black px-[13px] py-3 text-sm font-medium leading-none"
            type="button"
            aria-label="Select language"
            onClick={handleDropdown}
          >
            <span>{languageList[language].name}</span>
            <ChevronIcon
              className={clsx('ml-1.5 mt-1 h-auto w-2.5', showDropdown ? 'rotate-180' : 'rotate-0')}
            />
          </button>
        </div>
      </div>
    </LazyMotion>
  );
};

LanguageSelect.propTypes = {
  pageUrls: PropTypes.objectOf(PropTypes.string),
};

LanguageSelect.defaultProps = {
  pageUrls: null,
};

export default LanguageSelect;
