import React from 'react';

import Articles from 'components/pages/resources/articles';
import Books from 'components/pages/resources/books';
import Tutorials from 'components/pages/resources/tutorials';
import SEO from 'components/shared/seo';
import SummitLayout from 'components/shared/summit-layout';
import VideoGallery from 'components/shared/video-gallery';
import { navigation, hubspotFormId } from 'data/summit-2023/summit-2023-navigation';
import videoItems from 'data/summit-2023/video-data';

const ogImage = '/images/social-preview-ebpf-summit-resources.jpg';

const Resources = () => (
  <SummitLayout navigation={navigation} hubspotFormId={hubspotFormId}>
    <h1 className="heading-10xl container safe-paddings mt-16 text-center font-semibold leading-tight">
      eBPF resources
    </h1>
    <Books />
    <Tutorials />
    <Articles />
    <VideoGallery title="Watch videos on eBPF technology" items={videoItems} />
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
