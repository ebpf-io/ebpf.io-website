import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';

import EbpfLibraries from 'components/pages/project-landscape/ebpf-libraries';
import FAQ from 'components/pages/project-landscape/faq';
import Hero from 'components/pages/project-landscape/hero';
import ProjectsList from 'components/pages/project-landscape/projects-list';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import data from 'data/pages/infrastructure';
import SEO_DATA from 'data/shared/seo-data';

const InfrastructurePage = () => {
  const { language } = useI18next();

  return (
    <Layout pageUrls={data.pageUrls}>
      <h1 className="sr-only">{data[language].title}</h1>
      <Hero {...data[language].hero} />
      <ProjectsList
        className="pt-[72px] lg:pt-16 md:pt-12"
        {...data[language].majorInfrastructureProps}
      />
      <ProjectsList
        className="pt-32 lg:pt-28 md:pt-20 sm:pt-16"
        {...data[language].emergingInfrastructureProps}
      />
      <EbpfLibraries lang={language} />
      <ProjectsList
        className="pt-32 lg:pt-28 md:pt-20 sm:pt-16"
        {...data[language].auxiliaryLibrariesProps}
      />
      <FAQ lang={language} />
    </Layout>
  );
};

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const { language } = useI18next();

  return <SEO pathname={pathname} {...SEO_DATA.infrastructure[language]} />;
};

export default InfrastructurePage;

export const query = graphql`
  query {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
