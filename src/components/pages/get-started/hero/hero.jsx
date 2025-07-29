import clsx from 'clsx';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import Link from 'components/shared/link/link';

import BookSvg from './images/book.inline.svg';
import DocSvg from './images/doc.inline.svg';
import LabSvg from './images/lab.inline.svg';
import VideoSvg from './images/video.inline.svg';

const cards = {
  lab: {
    icon: LabSvg,
    colorClassName: 'bg-secondary-blue-1-light border-secondary-blue-1',
    borderClassName: 'border-secondary-blue-2',
    linkUrl: 'https://ebpf.io/labs/',
    linkTarget: '_blank',
  },
  book: {
    icon: BookSvg,
    colorClassName: 'bg-secondary-green-1-light border-secondary-green-1',
    borderClassName: 'border-secondary-green-2',
    linkUrl: '#books',
    linkTarget: '_self',
  },
  video: {
    icon: VideoSvg,
    colorClassName: 'bg-secondary-red-1-light border-secondary-red-1',
    borderClassName: 'border-secondary-red-2',
    linkUrl: 'https://www.youtube.com/watch?v=sYxUOKi3Q00',
    linkTarget: '_blank',
  },
  doc: {
    icon: DocSvg,
    colorClassName: 'bg-secondary-yellow-1-light border-primary-yellow',
    borderClassName: 'border-secondary-red-2',
    linkUrl: 'https://docs.ebpf.io/',
    linkTarget: '_blank',
  },
};

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero safe-paddings mt-20 lg:mt-16 md:mt-14 sm:mt-11">
      <div className="container flex flex-col items-center">
        <h1 className="heading-10xl text-center font-semibold leading-tight"> {t('hero.title')}</h1>

        <ul className="mt-16 grid grid-cols-3 gap-8 lg:mt-12 lg:gap-7 md:mt-10 md:grid-cols-1 md:gap-6">
          {t('hero.items', { returnObjects: true }).map(({ card, title, description }, index) => {
            const {
              icon: Image,
              colorClassName,
              borderClassName,
              linkUrl,
              linkTarget,
            } = cards[card];

            return (
              <li
                className={clsx(
                  colorClassName,
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
                    borderClassName,
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
          })}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
