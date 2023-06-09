import React from 'react';

import Books from 'components/pages/resources/books';
import Hero from 'components/pages/resources/hero';
import Tutorials from 'components/pages/resources/tutorials';
import SEO from 'components/shared/seo';
import SummitLayout from 'components/shared/summit-layout';
import VideoGallery from 'components/shared/video-gallery';
import { navigation, hubspotFormId } from 'data/summit-2023/summit-2023-navigation';
import videoItems from 'data/summit-2023/video-data';

const ogImage = '/images/social-preview-ebpf-summit-resources.jpg';

const Resources = () => (
  <SummitLayout navigation={navigation} hubspotFormId={hubspotFormId}>
    <Hero />
    <Books />
    <VideoGallery title="Watch videos on eBPF technology" items={videoItems} />
    <Tutorials />
  </SummitLayout>
);

// eslint-disable-next-line react/prop-types
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
