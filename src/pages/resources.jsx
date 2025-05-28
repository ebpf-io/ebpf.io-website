/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import Articles from 'components/pages/resources/articles';
import Books from 'components/pages/resources/books';
import Tutorials from 'components/pages/resources/tutorials';
import SummitLayout from 'components/pages/summit-2024/summit-layout';
import SEO from 'components/shared/seo';
import VideoGallery from 'components/shared/video-gallery';
import { navigation, hubspotFormId } from 'data/shared/summit-2024-navigation';

const ogImage = '/images/social-preview-ebpf-summit-resources.jpg';

const videoItems = [
  {
    videoId: 'hzMif_cytLs',
    title: 'eBPF superpowers a dynamic kernel',
    speaker: 'Raphaël Pinson',
    date: 'Feb 8, 2023',
  },
  {
    videoId: '3pC_gf975-g',
    title: 'Superpowers for Networking, Observability & Security',
    speaker: 'Liz Rice, Isovalent',
    date: 'May 21, 2021',
  },
  {
    videoId: 'xI6BV7kZeDM',
    title: 'eBPF Superpowers For Security',
    speaker: 'Natalia Ivanko and John Fastabend, Isovalent',
    date: 'Mar 18, 2023',
  },
  {
    videoId: 'NdrCM4SmZZY',
    title: 'Learning eBPF',
    speaker: 'Liz Rice, Isovalent',
    date: 'Apr 8, 2023',
  },
  {
    videoId: 'uBqRv8bDroc',
    title: "A Beginner's Guide to eBPF Programming with Go",
    speaker: 'Liz Rice, Isovalent',
    date: 'Nov 8, 2021',
  },
  {
    videoId: 'Xs3MBK17kCk',
    title: 'Real Time Security - eBPF for Preventing attacks',
    speaker: 'Liz Rice, Isovalent',
    date: 'May 19, 2022',
  },
  {
    videoId: 'TJgxjVTZtfw',
    title: 'Tutorial: Getting Started with eBPF',
    speaker: 'Liz Rice, Isovalent',
    date: 'May 25, 2023',
  },
  {
    videoId: '3Lxkn7zZ_vw',
    title: 'Solving Security Problems Visually with eBPF',
    speaker: 'Liz Rice, Isovalent',
    date: 'Feb 2, 2023',
  },
  {
    videoId: '5t7-HM2jlTM',
    title: 'WTF are eBPF & Cilium?',
    speaker: 'Liz Rice and Christopher Luciano, Isovalent',
    date: 'Jan 21, 2022',
  },
  {
    videoId: 'Hed2DOrk_kk',
    title: 'eBPF Superpowers for Go programmers',
    speaker: 'Liz Rice, Isovalent',
    date: 'Sept 21, 2022',
  },
];

const Resources = () => (
  <SummitLayout navigation={navigation} hubspotFormId={hubspotFormId}>
    <h1 className="container heading-10xl safe-paddings mt-16 text-center font-semibold leading-tight">
      eBPF resources
    </h1>
    <Books />
    <Tutorials />
    <Articles />
    <VideoGallery title="Watch videos on eBPF technology" items={videoItems} />
  </SummitLayout>
);

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: 'eBPF resources',
    description: 'Dig into the eBPF technology with our labs, books, and tutorials.',
    image: ogImage,
    pathname,
  };
  return <SEO {...pageMetadata} />;
};

export default Resources;

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
