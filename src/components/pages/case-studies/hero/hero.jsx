import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import CaseStudiesList from 'components/shared/case-studies-list';
import Link from 'components/shared/link';

const Description = () => {
  const { t } = useTranslation();

  return (
    <span>
      {t('case-studies:description.beforeLink')}{' '}
      <Link theme="black-primary-yellow" size="lg" to="https://github.com/ebpf-io/ebpf.io">
        {t('case-studies:description.insideLink')}
      </Link>
      {t('case-studies:description.afterLink') !== '.' && ' '}
      {t('case-studies:description.afterLink')}
    </span>
  );
};

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero safe-paddings mb-32 mt-20 lg:mb-28 lg:mt-16 md:mb-20 md:mt-12">
      <div className="container flex flex-col">
        <h1 className="heading-10xl text-center font-semibold leading-tight">
          {t('case-studies:title')}
        </h1>
        <p className="mx-auto mt-4 max-w-[656px] text-center text-lg xs:text-base">
          <Description />
        </p>
        <CaseStudiesList
          className="mt-12 lg:mt-10"
          items={t('case-studies:items', { returnObjects: true })}
        />
      </div>
    </section>
  );
};

export default Hero;
