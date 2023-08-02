import React from 'react';

// import Speakers from 'components/pages/summit-2023/speakers';
import Hero from 'components/pages/summit-schedule/hero';
import SEO from 'components/shared/seo';
import SummitLayout from 'components/shared/summit-layout';
import { navigation, hubspotFormId } from 'data/summit-2023/summit-2023-navigation';

const ogImage = '/images/social-preview-ebpf-summit.jpg';

const hero = {
  title: 'eBPF Summit 2023 Schedule',
  description:
    'Explore schedule of the eBPF Summit, a virtual event for all things within the Open Source eBPF ecosystem',
};

// const speakers = {
//   title: 'Featured Speakers',
//   endpoint: 'https://sessionize.com/api/v2/6b8qteaw/view/SpeakerWall',
// };

const Summit2023 = () => (
  <SummitLayout navigation={navigation} hubspotFormId={hubspotFormId}>
    <Hero {...hero} />
    {/* <Speakers {...speakers} /> */}
  </SummitLayout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: 'eBPF Summit 2023 Schedule',
    description:
      'Explore schedule of the eBPF Summit, a virtual event for all things within the Open Source eBPF ecosystem',
    image: ogImage,
    pathname,
  };
  return <SEO {...pageMetadata} />;
};

export default Summit2023;
