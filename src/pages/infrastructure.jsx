import React from 'react';

import EbpfLibraries from 'components/pages/project-landscape/ebpf-libraries';
import FAQ from 'components/pages/project-landscape/faq';
import Hero from 'components/pages/project-landscape/hero';
import ProjectsList from 'components/pages/project-landscape/projects-list';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import auxiliaryLibraries from 'data/infrastructure/auxiliary-libraries';
import emergingInfrastructure from 'data/infrastructure/emerging';
import majorInfrastructure from 'data/infrastructure/major';
import SEO_DATA from 'data/seo-data';

const majorInfrastructureProps = {
  titleTag: 'h1',
  title: 'Major Infrastructure',
  items: majorInfrastructure,
};

const emergingInfrastructureProps = {
  title: 'Emerging',
  items: emergingInfrastructure,
};

const auxiliaryLibrariesProps = {
  title: 'eBPF Auxiliary Libraries',
  items: auxiliaryLibraries,
};

const InfrastructurePage = () => (
  <Layout>
    <h1 className="sr-only">Infrastructure</h1>
    <Hero />
    <ProjectsList className="mt-[72px] lg:mt-16 md:mt-12" {...majorInfrastructureProps} />
    <ProjectsList className="mt-32 lg:mt-28 md:mt-20 sm:mt-16" {...emergingInfrastructureProps} />
    <EbpfLibraries />
    <ProjectsList className="mt-32 lg:mt-28 md:mt-20 sm:mt-16" {...auxiliaryLibrariesProps} />
    <FAQ />
  </Layout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => (
  <SEO pathname={pathname} {...SEO_DATA.infrastructure} />
);

export default InfrastructurePage;
