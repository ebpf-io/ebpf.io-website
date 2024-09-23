import clsx from 'clsx';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import networkingSvg from './images/networking.svg';
import observabilitySvg from './images/observability.svg';
import securitySvg from './images/security.svg';
import tracingProfilingSvg from './images/tracing-profiling.svg';

const images = {
  networking: {
    icon: networkingSvg,
    bgClassName: 'bg-secondary-yellow-light',
  },
  observability: {
    icon: observabilitySvg,
    bgClassName: 'bg-secondary-green-light',
  },
  tracingAndProfiling: {
    icon: tracingProfilingSvg,
    bgClassName: 'bg-secondary-blue-light',
  },
  security: {
    icon: securitySvg,
    bgClassName: 'bg-secondary-red-light',
  },
};

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="features safe-paddings mt-32 lg:mt-24 md:mt-20">
      <div className="container">
        <h2 className="heading-8xl text-center font-semibold leading-dense">
          {t('features.title')}
        </h2>
        <ul className="mt-14 grid grid-cols-2 gap-8 lg:mt-12 lg:gap-7 md:mt-10 md:grid-cols-1 md:gap-6">
          {t('features.items', { returnObjects: true }).map(
            ({ image, title, description }, index) => {
              const { icon, bgClassName } = images[image];

              return (
                <li className="flex rounded-lg sm:flex-col" key={index}>
                  <div
                    className={clsx(
                      bgClassName,
                      'flex shrink-0 rounded-l-lg sm:rounded-t-lg sm:rounded-bl-none'
                    )}
                  >
                    <img
                      className="lg:w-[184px] lg:object-cover md:w-40 sm:mx-auto sm:w-[264px]"
                      src={icon}
                      alt={title}
                      width={264}
                      height={264}
                      loading="lazy"
                    />
                  </div>

                  <div className="rounded-r-lg border border-l-0 border-gray-90 p-8 lg:p-6 sm:rounded-bl-lg sm:rounded-tr-none sm:border-l sm:border-t-0">
                    <h3 className="font-sans text-3xl font-semibold leading-snug lg:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-3 lg:mt-2.5 lg:text-sm md:text-base">{description}</p>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
};

export default Features;
