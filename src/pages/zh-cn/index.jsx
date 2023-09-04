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

const data = {
  hero: {
    title:
      'Dynamically program the kernel for efficient networking, observability, tracing, and security',
    blackButtonTitle: 'Project Landscape',
    blackButtonUrl: '/applications',
    yellowButtonTitle: 'What is eBPF',
    yellowButtonUrl: '/what-is-ebpf',
    altImage: 'eBPF diagram',
    items: [
      'Programs are verified to safely execute',
      'Hook anywhere in the kernel to modify functionality',
      'JIT compiler for near native execution speed',
      'Add OS capabilities at runtime',
    ],
  },
  caseStudies: {
    title: 'Organizations in every industry use eBPF in production',
    linkText: 'More case studies',
    linkUrl: '/case-studies/',
  },
  videoGallery: {
    title: 'eBPF Community Talks',
    items: videoItems,
  },
};

const HomePage = () => (
  <Layout>
    <Hero {...data.hero} />
    <CaseStudies {...data.caseStudies} />
    <WhyEbpf />
    <Testimonials />
    <Features />
    <VideoGallery {...data.videoGallery} />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
