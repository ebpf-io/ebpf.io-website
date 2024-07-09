/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
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
import data from 'data/pages/home';

const HomePage = () => {
  const { language } = useI18next();

  return (
    <Layout>
      <Hero {...data[language].hero} />
      <CaseStudies {...data[language].caseStudies} />
      <WhyEbpf {...data[language].whyEbpf} />
      <Film {...data[language].film} />
      <Testimonials {...data[language].testimonials} />
      <Features {...data[language].features} />
      <VideoGallery {...data[language].videoGallery} />
    </Layout>
  );
};

export default HomePage;

export const Head = ({ location: { pathname }, pageContext: { language }, data }) => {
  const t = JSON.parse(
    data.locales.edges.find((edge) => edge.node.language === language).node.data
  );

  return (
    <SEO
      pathname={pathname}
      title={t['eBPF - Introduction, Tutorials & Community Resources']}
      description={
        t[
          'eBPF is a revolutionary technology that can run sandboxed programs in the Linux kernel without changing kernel source code or loading a kernel module.'
        ]
      }
    />
  );
};

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
