/* eslint-disable react/prop-types */
import React from 'react';

import CaseStudies from 'components/pages/home/case-studies';
import Features from 'components/pages/home/features';
import Hero from 'components/pages/home/hero';
import Testimonials from 'components/pages/home/testimonials';
import WhyEbpf from 'components/pages/home/why-ebpf';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import VideoGallery from 'components/shared/video-gallery';
import videoItems from 'data/home-page/video-data';

const HomePage = () => (
  <Layout lang="zh-cn">
    <Hero />
    <CaseStudies />
    <WhyEbpf />
    <Testimonials />
    <Features />
    <VideoGallery title="eBPF Community Talks" items={videoItems} />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
