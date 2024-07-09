/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';

import FAQ from 'components/pages/project-landscape/faq';
import Hero from 'components/pages/project-landscape/hero';
import ProjectsList from 'components/pages/project-landscape/projects-list';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import data from 'data/pages/applications';
import SEO_DATA from 'data/shared/seo-data';

const ApplicationsPage = () => {
  const { language } = useI18next();

  return (
    <Layout pageUrls={data.pageUrls}>
      <h1 className="sr-only">{data[language].title}</h1>
      <Hero {...data[language].hero} />
      <ProjectsList
        className="pt-[72px] lg:pt-16 md:pt-12"
        {...data[language].majorApplicationsProps}
      />
      <ProjectsList
        className="pt-32 lg:pt-28 md:pt-20 sm:pt-16"
        {...data[language].emergingApplicationsProps}
      />
      <FAQ />
    </Layout>
  );
};

export const Head = ({ location: { pathname } }) => {
  const { language } = useI18next();

  return <SEO pathname={pathname} {...SEO_DATA.applications[language]} />;
};

export default ApplicationsPage;

export const query = graphql`
  query {
    locales: allLocale(filter: { ns: { in: ["shared"] } }) {
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
