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

const videoItems = [
  {
    videoId: '6N30Yp5f9c4',
    title: 'BPF and Spectre: Mitigating transient execution attacks',
    speaker: 'Daniel Borkmann, Isovalent',
    date: 'Aug 20, 2021',
  },
  {
    videoId: '_5Z2AU7QTH4',
    title: 'BPF Internals',
    speaker: 'Brendan Gregg, Netflix',
    date: 'Jun 9, 2021',
  },
  {
    videoId: 'PJY-rN1EsVw',
    title: 'Advanced BPF kernel features for the container age',
    speaker: 'Daniel Borkmann, Isovalent',
    date: 'Feb 9, 2021',
  },
  {
    videoId: 'slBAYUDABDA',
    title: 'The Future of eBPF based Networking and Security',
    speaker: 'Thomas Graf, Isovalent',
    date: 'Nov 8, 2020',
  },
  {
    videoId: 'Qhm1Zn_BNi4',
    title: 'BPF as a Fundamentally Better Dataplane',
    speaker: 'Daniel Borkmann, Isovalent',
    date: 'Nov 8, 2020',
  },
  {
    videoId: 'ZYBXZFKPS28',
    title: 'BPF at Facebook',
    speaker: 'Alexei Starovoitov, Facebook',
    date: 'Dec 19, 2019',
  },
  {
    videoId: '_Iq1xxNZOAo',
    title: 'How to Make Linux Microservice-Aware with Cilium and eBPF',
    speaker: 'Thomas Graf, Isovalent',
    date: 'Mar 6, 2019',
  },
];

const HomePage = () => (
  <Layout>
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
