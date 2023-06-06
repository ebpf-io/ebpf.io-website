import React from 'react';

import Hero from 'components/pages/summit-2023/hero';
import SEO from 'components/shared/seo';
import SummitLayout from 'components/shared/summit-layout';
import SEO_DATA from 'data/seo-data';

const hubspotFormId = process.env.HUBSPOT_FORM_ID_2023;

const navigation = [
  { name: 'Information', href: '/summit-2023/#information' },
  { name: 'eBPF resources', href: '/ebpf-resources' },
  { name: `Last year's summit`, href: `/summit-2023/#last-year's-summit` },
  { name: 'Attendee Swag', href: '/swag' },
];

const mobileNavigation = [
  { name: 'Information', href: '/summit-2023/#information' },
  { name: 'eBPF resources', href: '/ebpf-resources' },
  { name: `Last year's summit`, href: `/summit-2023/#last-year's-summit` },
  { name: 'Attendee Swag', href: '/swag' },
];

const hero = {
  date: 'September <strong>28-29</strong>, 2022',
  title: 'eBPF Summit',
  description:
    '<p>eBPF Summit is a virtual event, targeted at DevOps, SecOps, platform architects, security engineers, and developers. Register to save the date and stay updated on event information.</p>',
  ctaButtons: [
    {
      url: 'https://ebpf.io/slack',
      title: 'Join Summit Slack',
      theme: 'orange',
    },
    {
      url: 'https://ebpf.io/summit-2022/day-1',
      title: 'Watch day 1',
      theme: 'gray',
    },
    {
      url: 'https://ebpf.io/summit-2022/day-2',
      title: 'Watch day 2',
      theme: 'gray',
    },
  ],
};

const Summit2023 = () => (
  <SummitLayout
    navigation={navigation}
    mobileNavigation={mobileNavigation}
    hubspotFormId={hubspotFormId}
  >
    <Hero {...hero} />
  </SummitLayout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => (
  <SEO pathname={pathname} {...SEO_DATA.contribute} />
);

export default Summit2023;
