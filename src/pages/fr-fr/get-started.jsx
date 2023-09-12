/* eslint-disable react/prop-types */
import React from 'react';

import Books from 'components/pages/get-started/books';
import Documentation from 'components/pages/get-started/documentation/documentation';
import Hero from 'components/pages/get-started/hero';
import Tutorials from 'components/pages/get-started/tutorials';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SubscriptionForm from 'components/shared/subscription-form';
import VideoGallery from 'components/shared/video-gallery';
import data from 'data/pages/get-started';
import SEO_DATA from 'data/shared/seo-data';

import { languages } from '../../../config/languages';

const lang = languages['fr-fr'].code;

const HomePage = () => (
  <Layout lang={lang} pageUrls={data.pageUrls}>
    <Hero {...data[lang].hero} />
    <Documentation {...data[lang].documentation} />
    <div className="container mt-28 md:mt-20 sm:mt-12">
      <SubscriptionForm size="lg" {...data[lang].subscriptionForm} />
    </div>
    <Books {...data[lang].books} />
    <Tutorials {...data[lang].tutorials} />
    <VideoGallery className="mt-[150px] md:mt-20 sm:mt-16" {...data[lang].videoGallery} />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => (
  <SEO pathname={pathname} {...SEO_DATA.home[lang]} />
);
