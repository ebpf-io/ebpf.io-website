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

export const Head = ({ location: { pathname } }) => {
  const { t } = useTranslation();

  return <SEO pathname={pathname} {...t('index:meta', { returnObjects: true })} />;
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
