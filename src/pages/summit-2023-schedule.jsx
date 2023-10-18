import React from 'react';

// TODO: Add before summit
// import Grid from 'components/pages/summit-schedule/grid';
import Hero from 'components/pages/summit-schedule/hero';
import Schedule from 'components/pages/summit-schedule/schedule';
import SEO from 'components/shared/seo';
import SummitLayout from 'components/shared/summit-layout';
import endpoints from 'data/shared/sessionize';
import { navigation, hubspotFormId } from 'data/shared/summit-2023-navigation';

const ogImage = '/images/social-preview-ebpf-summit.jpg';

const hero = {
  title: 'eBPF Summit 2023 Talks',
  description:
    'Explore the talks of the eBPF Summit, a virtual event for all things within the Open Source eBPF ecosystem',
};

const Summit2023 = () => (
  <SummitLayout navigation={navigation} hubspotFormId={hubspotFormId}>
    <Hero {...hero} />
    <Schedule endpoint={endpoints.schedule} />
    {/* TODO: Add before summit */}
    {/* <Grid /> */}
  </SummitLayout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: 'eBPF Summit 2023 Talks',
    description:
      'Explore the talks of the eBPF Summit, a virtual event for all things within the Open Source eBPF ecosystem',
    image: ogImage,
    pathname,
  };
  return <SEO {...pageMetadata} />;
};

export default Summit2023;
