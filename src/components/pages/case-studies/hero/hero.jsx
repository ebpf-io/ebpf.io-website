import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import CaseStudiesList from 'components/shared/case-studies-list';
import Link from 'components/shared/link';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero safe-paddings mb-32 mt-20 lg:mb-28 lg:mt-16 md:mb-20 md:mt-12">
      <div className="container flex flex-col">
        <h1 className="heading-10xl text-center font-semibold leading-tight">
          <Trans>eBPF Case Studies</Trans>
        </h1>
        <p className="mx-auto mt-4 max-w-[656px] text-center text-lg xs:text-base">
          <Trans>
            Here are some of the organizations that are using eBPF in production. If you’re using
            eBPF and aren’t on this list,{' '}
            <Link theme="black-primary-yellow" size="lg" to="https://github.com/ebpf-io/ebpf.io">
              please submit a pull request
            </Link>
            .
          </Trans>
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
