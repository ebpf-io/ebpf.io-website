/* eslint-disable react/prop-types */
import React from 'react';

import CaseStudies from 'components/pages/home/case-studies';
import Community from 'components/pages/home/community';
import Features from 'components/pages/home/features';
import Hero from 'components/pages/home/hero';
import Testimonials from 'components/pages/home/testimonials';
import WhyEbpf from 'components/pages/home/why-ebpf';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const HomePage = () => (
  <Layout>
    <Hero />
    <CaseStudies />
    <WhyEbpf />
    <Testimonials />
    <Features />
    <Community />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
