/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import CaseStudies from 'components/pages/home/case-studies';
import Features from 'components/pages/home/features';
import Film from 'components/pages/home/film';
import Hero from 'components/pages/home/hero';
import Testimonials from 'components/pages/home/testimonials';
import WhyEbpf from 'components/pages/home/why-ebpf';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import VideoGallery from 'components/shared/video-gallery';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Hero />
      <CaseStudies />
      <WhyEbpf />
      <Film />
      <Testimonials />
      <Features />
      <VideoGallery
        title={t('index:videoGallery.title')}
        items={t('index:videoGallery.items', { returnObjects: true })}
      />
    </Layout>
  );
};

export default HomePage;

export const Head = ({ location: { pathname }, pageContext: { language }, data }) => {
  const dataLanguage = data.locales.edges.find(
    (e) => e.node.ns === 'index' && e.node.language === language
  ).node.data;
  const t = JSON.parse(dataLanguage);

  return <SEO pathname={pathname} title={t.meta.title} description={t.meta.description} />;
};

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
