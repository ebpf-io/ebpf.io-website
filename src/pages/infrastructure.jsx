import React from 'react';

import EbpfLibraries from 'components/pages/project-landscape/ebpf-libraries';
import FAQ from 'components/pages/project-landscape/faq';
import Hero from 'components/pages/project-landscape/hero';
import ProjectsList from 'components/pages/project-landscape/projects-list';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import auxiliaryLibraries from 'data/pages/infrastructure/auxiliary-libraries';
import emergingInfrastructure from 'data/pages/infrastructure/emerging';
import majorInfrastructure from 'data/pages/infrastructure/major';
import SEO_DATA from 'data/shared/seo-data';

const majorInfrastructureProps = {
  titleTag: 'h2',
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
    <ProjectsList className="pt-[72px] lg:pt-16 md:pt-12" {...majorInfrastructureProps} />
    <ProjectsList className="pt-32 lg:pt-28 md:pt-20 sm:pt-16" {...emergingInfrastructureProps} />
    <EbpfLibraries />
    <ProjectsList className="pt-32 lg:pt-28 md:pt-20 sm:pt-16" {...auxiliaryLibrariesProps} />
    <FAQ />
  </Layout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => (
  <SEO pathname={pathname} {...SEO_DATA.infrastructure} />
);

export default InfrastructurePage;
