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

import { languages } from '../../../config/languages';

const videoItems = [
  {
    videoId: 'wnlsHeiTLtE',
    title: 'How the Hive Came to Bee - A Technical Deep Dive of eBPF',
    speaker: 'Daniel Borkmann, Cilium',
    date: 'Dec 8, 2022',
  },
  {
    videoId: '99jUcLt3rSk',
    title: 'eBPF and Kubernetes: Little Helper Minions for Scaling Microservices',
    speaker: 'Daniel Borkmann, Cilium',
    date: 'Sep 4, 2020',
  },
  {
    videoId: 'cABk-6Sdb20',
    title: 'eBPF on the Rise - Getting Started',
    speaker: 'Quentin Monnet, Isovalent',
    date: 'May 14, 2021',
  },
  {
    videoId: 'U3PdyHlrG1o',
    title: 'BPF as a revolutionary technology for the container landscape',
    speaker: 'Daniel Borkmann, Cilium',
    date: 'Aug 7, 2020',
  },
];

const data = {
  videoGallery: {
    title: 'Vidéos d’introduction eBPF',
    items: videoItems,
  },
};

const lang = languages['fr-fr'].code;

const HomePage = () => (
  <Layout lang={lang}>
    <Hero lang={lang} />
    <Documentation />
    <div className="container mt-28 md:mt-20 sm:mt-12">
      <SubscriptionForm size="lg" />
    </div>
    <Books />
    <Tutorials />
    <VideoGallery className="mt-[150px] md:mt-20 sm:mt-16" {...data.videoGallery} />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
