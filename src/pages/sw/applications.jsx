import React from 'react';

import FAQ from 'components/pages/project-landscape/faq';
import Hero from 'components/pages/project-landscape/hero';
import ProjectsList from 'components/pages/project-landscape/projects-list';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import data from 'data/pages/applications';
import SEO_DATA from 'data/shared/seo-data';

import { languages } from '../../../config/languages';

const lang = languages.sw.code;

const ApplicationsPage = () => (
  <Layout lang={lang} pageUrls={data.pageUrls}>
    <h1 className="sr-only">{data[lang].title}</h1>
    <Hero {...data[lang].hero} />
    <ProjectsList className="pt-[72px] lg:pt-16 md:pt-12" {...data[lang].majorApplicationsProps} />
    <ProjectsList
      className="pt-32 lg:pt-28 md:pt-20 sm:pt-16"
      {...data[lang].emergingApplicationsProps}
    />
    <FAQ lang={lang} />
  </Layout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => (
  <SEO pathname={pathname} {...SEO_DATA.applications[lang]} />
);

export default ApplicationsPage;
