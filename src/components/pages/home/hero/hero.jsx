import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import Button from 'components/shared/button';

import CheckIcon from './images/check.inline.svg';
import diagramMobile from './images/diagram-mobile.svg';
import diagram from './images/diagram.svg';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero safe-paddings mt-20 lg:mt-16 md:mt-14 sm:mt-11">
      <div className="container flex flex-col items-center">
        <h1 className="heading-10xl text-center font-semibold leading-tight">{t('hero.title')}</h1>
        <div className="mt-10 grid grid-cols-2 gap-x-7 lg:mt-8 md:gap-y-4 sm:gap-x-4 [@media(max-width:414px)]:w-full [@media(max-width:414px)]:grid-cols-1">
          <Button size="md" theme="black-filled" to={t('hero.blackButtonUrl')}>
            {t('hero.blackButtonTitle')}
          </Button>
          <Button size="md" theme="primary-yellow-filled" to={t('hero.yellowButtonUrl')}>
            {t('hero.yellowButtonTitle')}
          </Button>
        </div>
        <img
          className="mt-20 lg:mt-16 md:mt-14 sm:hidden"
          src={diagram}
          alt={t('hero.altImage')}
          width={1216}
          height={344}
          loading="eager"
        />
        <img
          className="mt-14 hidden w-full max-w-[450px] sm:block"
          src={diagramMobile}
          alt={t('hero.altImage')}
          width={328}
          height={592}
          loading="eager"
        />
        <div className="mt-[52px] w-full border-t border-dashed border-gray-80 pt-[52px] lg:mt-12 lg:pt-12 sm:mt-10 sm:pt-10">
          <ul className="flex gap-x-[74px] lg:gap-x-7 md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-8 sm:grid-cols-1 sm:gap-y-5">
            {t('hero.items', { returnObjects: true }).map((item, index) => (
              <li className="flex items-baseline space-x-3.5 sm:items-start" key={index}>
                <CheckIcon className="h-5 w-5 shrink-0 md:h-[18px] md:w-[18px] sm:mt-1" />
                <span className="min-w-[168px] text-lg font-medium lg:min-w-[auto] lg:text-base md:max-w-none md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
