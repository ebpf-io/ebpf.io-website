import React from 'react';

import FAQ from 'components/pages/project-landscape/faq';
import Hero from 'components/pages/project-landscape/hero';
import ProjectsList from 'components/pages/project-landscape/projects-list';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import emergingApplications from 'data/applications/emerging';
import majorApplications from 'data/applications/major';
import SEO_DATA from 'data/seo-data';

const majorApplicationsProps = {
  titleTag: 'h1',
  title: 'Major Applications',
  items: majorApplications,
};

const emergingApplicationsProps = {
  title: 'Emerging',
  items: emergingApplications,
};

const ApplicationsPage = () => (
  <Layout>
    <h1 className="sr-only">Applications</h1>
    <Hero />
    <ProjectsList className="mt-[72px] lg:mt-16 md:mt-12" {...majorApplicationsProps} />
    <ProjectsList className="mt-32 lg:mt-28 md:mt-20 sm:mt-16" {...emergingApplicationsProps} />
    <FAQ />
  </Layout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => (
  <SEO pathname={pathname} {...SEO_DATA.applications} />
);

export default ApplicationsPage;
