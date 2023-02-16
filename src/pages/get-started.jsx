/* eslint-disable react/prop-types */
import React from 'react';

import Documentation from 'components/pages/get-started/documentation/documentation';
import Hero from 'components/pages/get-started/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SubscriptionForm from 'components/shared/subscription-form';
import VideoGallery from 'components/shared/video-gallery';

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

const HomePage = () => (
  <Layout>
    <Hero />
    <Documentation />
    <div className="container mt-28">
      <SubscriptionForm size="md" />
    </div>
    <VideoGallery items={videoItems} title="Watch videos on how to build infrastructure" />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
