/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
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
import createPageUrl from 'utils/create-page-url';

const pageUrls = createPageUrl('infrastructure');

const InfrastructurePage = () => {
  const { t } = useTranslation();

  return (
    <Layout pageUrls={pageUrls}>
      <h1 className="sr-only">
        <Trans>Infrastructure</Trans>
      </h1>
      <Hero />
      <ProjectsList
        className="pt-[72px] lg:pt-16 md:pt-12"
        title={t('Major Infrastructure')}
        items={majorInfrastructure}
      />
      <ProjectsList
        className="pt-32 lg:pt-28 md:pt-20 sm:pt-16"
        title={t('Emerging')}
        items={emergingInfrastructure}
      />
      <EbpfLibraries />
      <ProjectsList
        className="pt-32 lg:pt-28 md:pt-20 sm:pt-16"
        title={t('eBPF Auxiliary Libraries')}
        items={auxiliaryLibraries}
      />
      <FAQ />
    </Layout>
  );
};

export const Head = ({ location: { pathname }, pageContext: { language }, data }) => {
  const dataLanguage = data.locales.edges.find(
    (e) => e.node.ns === 'infrastructure' && e.node.language === language
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
export default InfrastructurePage;

export const query = graphql`
  query {
    locales: allLocale(filter: { ns: { in: ["shared", "infrastructure", "faq"] } }) {
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
