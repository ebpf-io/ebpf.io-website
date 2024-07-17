import clsx from 'clsx';
import { useI18next } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import React, { useCallback, useRef, useState } from 'react';

import Link from 'components/shared/link';
import useClickOutside from 'hooks/use-click-outside';
import ChevronIcon from 'icons/chevron.inline.svg';
import EnIcon from 'icons/languages/en.inline.svg';
import EsIcon from 'icons/languages/es.inline.svg';
import FrFrIcon from 'icons/languages/fr-fr.inline.svg';
import ItItIcon from 'icons/languages/it-it.inline.svg';
import PtBrIcon from 'icons/languages/pt-br.inline.svg';
import PtIcon from 'icons/languages/pt.inline.svg';
import SwIcon from 'icons/languages/sw.inline.svg';
import ZhCNIcon from 'icons/languages/zh-cn.inline.svg';

import { languages as languageList } from '../../../../../config/languages';

const langIcons = {
  en: EnIcon,
  es: EsIcon,
  'fr-fr': FrFrIcon,
  'it-it': ItItIcon,
  pt: PtIcon,
  'pt-br': PtBrIcon,
  sw: SwIcon,
  'tw-cn': ZhCNIcon,
  'zh-cn': ZhCNIcon,
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

  const LangIcon = langIcons[language];
  const langShortName = languageList[language].shortName;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="inline-flex items-center justify-center py-5 text-sm font-medium leading-none text-black hover:text-gray-40"
        type="button"
        aria-label="Select language"
        onClick={handleDropdown}
      >
        <LangIcon className="mr-1.5 h-[18px] w-[18px]" />
        <span className="w-7">{langShortName}</span>
        <ChevronIcon
          className={clsx('ml-1.5 mt-1 h-auto w-2.5', showDropdown ? 'rotate-180' : 'rotate-0')}
        />
      </button>
      <ul
        className={clsx(
          'absolute right-0 top-full z-10 flex w-[136px] flex-col bg-white py-2.5 transition-opacity duration-200',
          showDropdown ? 'visible opacity-100' : 'hidden opacity-0'
        )}
        style={{
          boxShadow: '0px 2px 6px rgba(28, 23, 23, 0.04), 0px 5px 14px rgba(28, 23, 23, 0.1)',
        }}
      >
        {Object.values(languages)
          .filter((lang) => lang !== language)
          .map((lang) => {
            let url = lang === 'en' ? '/' : `/${lang}/`;

            if (pageUrls) url = pageUrls[lang];

            return (
              <li className="flex" key={lang}>
                <Link
                  className="flex whitespace-nowrap px-5 py-2.5 text-[15px] font-medium leading-none lg:text-sm"
                  theme="black"
                  to={url}
                >
                  {languageList[lang].name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

LanguageSelect.propTypes = {
  pageUrls: PropTypes.objectOf(PropTypes.string),
};

LanguageSelect.defaultProps = {
  pageUrls: null,
};

export default LanguageSelect;
