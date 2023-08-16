import React from 'react';

import Grid from 'components/pages/summit-schedule/grid';
import Hero from 'components/pages/summit-schedule/hero';
// TODO: Add after summit
// import Schedule from 'components/pages/summit-schedule/schedule';
import SEO from 'components/shared/seo';
import SummitLayout from 'components/shared/summit-layout';
import { navigation, hubspotFormId } from 'data/summit-2023/summit-2023-navigation';

const ogImage = '/images/social-preview-ebpf-summit.jpg';

const hero = {
  title: 'eBPF Summit 2023 Schedule',
  description:
    'Explore the schedule of the eBPF Summit, a virtual event for all things within the Open Source eBPF ecosystem',
};

// TODO: Add after summit
// const schedule = {
//   endpoint: 'https://sessionize.com/api/v2/oou3fuu0/view/Sessions',
// };

const Summit2023 = () => (
  <SummitLayout navigation={navigation} hubspotFormId={hubspotFormId}>
    <Hero {...hero} />
    {/* TODO: Add after summit */}
    {/* <Schedule {...schedule} /> */}
    <Grid />
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
