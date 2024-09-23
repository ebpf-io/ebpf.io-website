import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import CaseStudiesList from 'components/shared/case-studies-list';

const CaseStudies = () => {
  const { t } = useTranslation();

  return (
    <section className="case-studies safe-paddings mt-36 lg:mt-28 md:mt-24">
      <div className="container flex flex-col items-center">
        <h2 className="heading-8xl text-center font-semibold leading-tight">
          {t('caseStudies.title')}
        </h2>
        <CaseStudiesList
          className="relative mt-10"
          items={t('case-studies:items', { returnObjects: true }).slice(0, 6)}
          linkText={t('caseStudies.linkText')}
          linkUrl={t('/case-studies')}
        />
      </div>
    </section>
  );
};

export default CaseStudies;
