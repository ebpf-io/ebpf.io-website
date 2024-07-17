import clsx from 'clsx';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import Link from 'components/shared/link/link';

import BookSvg from './images/book.inline.svg';
import LabSvg from './images/lab.inline.svg';
import VideoSvg from './images/video.inline.svg';

const images = {
  lab: LabSvg,
  book: BookSvg,
  video: VideoSvg,
};

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero safe-paddings mt-20 lg:mt-16 md:mt-14 sm:mt-11">
      <div className="container flex flex-col items-center">
        <h1 className="heading-10xl text-center font-semibold leading-tight"> {t('hero.title')}</h1>

        <ul className="mt-16 grid grid-cols-3 gap-8 lg:mt-12 lg:gap-7 md:mt-10 md:grid-cols-1 md:gap-6">
          {t('hero.items', { returnObjects: true }).map(
            (
              {
                image,
                title,
                description,
                cardColorClassName,
                dashedBorderClassName,
                linkUrl,
                linkTarget,
              },
              index
            ) => {
              const Image = images[image];

              return (
                <li
                  className={clsx(
                    cardColorClassName,
                    'flex flex-col justify-between rounded-lg border p-8 sm:p-6'
                  )}
                  key={index}
                >
                  <div>
                    <Image className="h-14 w-14" />

                    <h3 className="mt-5 font-sans text-4xl font-semibold leading-snug lg:text-3xl md:text-4xl sm:mt-4 sm:text-3xl">
                      {title}
                    </h3>
                    <p className="mt-2.5 text-lg lg:mt-2.5 lg:text-sm md:text-lg sm:text-base">
                      {description}
                    </p>
                  </div>

                  <Link
                    className={clsx(
                      dashedBorderClassName,
                      'mt-7 border-t border-dashed pt-7 text-sm font-semibold uppercase sm:mt-5 sm:pt-5'
                    )}
                    to={linkUrl}
                    target={linkTarget}
                    theme="black"
                    el={linkTarget === '_blank' ? 'noreferrer noopener' : null}
                  >
                    {title}
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
