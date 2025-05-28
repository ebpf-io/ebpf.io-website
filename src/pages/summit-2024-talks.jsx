import React from 'react';

// TODO: Add before summit
// import Grid from 'components/pages/summit-schedule/grid';
import SummitLayout from 'components/pages/summit-2024/summit-schedule-layout';
import Hero from 'components/pages/summit-schedule/hero';
import Schedule from 'components/pages/summit-schedule/schedule';
import SEO from 'components/shared/seo';
import endpoints from 'data/shared/sessionize-2024';
import { navigation, hubspotFormId } from 'data/shared/summit-2024-navigation';

const ogImage = '/images/social-preview-ebpf-summit.jpg';

const hero = {
  title: 'eBPF Summit 2024 Talks',
  description:
    'Explore the talks of the eBPF Summit, a virtual event for all things within the Open Source eBPF ecosystem',
};

const Summit2024 = () => (
  <SummitLayout navigation={navigation} hubspotFormId={hubspotFormId}>
    <Hero {...hero} />
    <Schedule endpoint={endpoints.schedule} />
  </SummitLayout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: 'eBPF Summit 2024 Talks',
    description:
      'Explore the talks of the eBPF Summit, a virtual event for all things within the Open Source eBPF ecosystem',
    image: ogImage,
    pathname,
  };
  return <SEO {...pageMetadata} />;
};

export default Summit2024;
