/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/swag/hero';
import Swag from 'components/pages/swag/swag';
import Zoom from 'components/pages/swag/zoom';
import SEO from 'components/shared/seo';
import SummitLayout from 'components/shared/summit-layout';
import { navigation, hubspotFormId } from 'data/summit-2023/summit-2023-navigation';

const ogImage = '/images/social-preview-ebpf-summit-attendee-swag.jpg';

const hero = {
  title: 'eBPF Summit Attendee Swag',
  description: 'Bee a part of the hive, get your eBPF swag now!',
  buttonText: 'Visit our store',
  buttonUrl: 'https://cilium.myspreadshop.net/',
};

const HostWatchParty = () => (
  <SummitLayout navigation={navigation} hubspotFormId={hubspotFormId}>
    <Hero {...hero} />
    <Zoom />
    <Swag />
  </SummitLayout>
);

export default HostWatchParty;

export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: 'Attendee swag for eBPF Summit',
    description: 'Bee a part of the hive, get your eBPF swag now!',
    image: ogImage,
    pathname,
  };
  return <SEO {...pageMetadata} />;
};
