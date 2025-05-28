/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import FAQ from 'components/pages/project-landscape/faq';
import Hero from 'components/pages/project-landscape/hero';
import ProjectsList from 'components/pages/project-landscape/projects-list';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import emergingApplications from 'data/pages/applications/emerging';
import majorApplications from 'data/pages/applications/major';
import createPageUrl from 'utils/create-page-url';

const pageUrls = createPageUrl('applications');

const ApplicationsPage = () => {
  const { t } = useTranslation();

  return (
    <Layout pageUrls={pageUrls}>
      <h1 className="sr-only">
        <Trans>Applications</Trans>
      </h1>
      <Hero />
      <ProjectsList
        className="pt-[72px] lg:pt-16 md:pt-12"
        title={t('Major Applications')}
        items={majorApplications.sort((a, b) => b.githubStars - a.githubStars)}
      />
      <ProjectsList
        className="pt-32 lg:pt-28 md:pt-20 sm:pt-16"
        title={t('Emerging')}
        items={emergingApplications.sort((a, b) => b.githubStars - a.githubStars)}
      />
      <FAQ />
    </Layout>
  );
};

export const Head = ({ location: { pathname }, pageContext: { language }, data }) => {
  const dataLanguage = data.locales.edges.find(
    (e) => e.node.ns === 'applications' && e.node.language === language
  ).node.data;
  const t = JSON.parse(dataLanguage);

  return (
    <SEO
      pathname={pathname}
      title={t.meta.title}
      description={t.meta.description}
      keywords={t.meta.keywords}
    />
  );
};

export default ApplicationsPage;

export const query = graphql`
  query {
    locales: allLocale(filter: { ns: { in: ["shared", "applications", "faq"] } }) {
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
