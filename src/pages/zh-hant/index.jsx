/* eslint-disable react/prop-types */
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
import SEO_DATA from 'data/shared/seo-data';

import { languages } from '../../../config/languages';

const lang = languages['zh-hant'].code;

const HomePage = () => (
  <Layout lang={lang}>
    <Hero {...data[lang].hero} />
    <CaseStudies {...data[lang].caseStudies} />
    <WhyEbpf {...data[lang].whyEbpf} />
    <Film {...data[lang].film} />
    <Testimonials {...data[lang].testimonials} />
    <Features {...data[lang].features} />
    <VideoGallery {...data[lang].videoGallery} />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => (
  <SEO pathname={pathname} {...SEO_DATA.home[lang]} />
);
