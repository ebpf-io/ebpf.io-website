import React from 'react';

import Hosts from 'components/pages/summit-2024/hosts';
import Hero from 'components/pages/summit-2027/hero';
import Information from 'components/pages/summit-2027/information';
import LastYear from 'components/pages/summit-2027/last-year';
import Proposal from 'components/pages/summit-2027/proposal';
import SummitLayout from 'components/pages/summit-2027/summit-layout';
import SEO from 'components/shared/seo';
import {
  navigation,
  hubspotFormId,
  cfpUrl,
  slackUrl,
  calendarUrl,
} from 'data/shared/summit-2027-navigation';

// TODO: replace with a 2027 social preview image
const ogImage = '/images/social-preview-ebpf-summit.jpg';

const hero = {
  date: '[Month] <strong>[XX]</strong>, 2027',
  title: 'eBPF Summit 2027',
  tagline: 'Security Edition',
  time: '[Time TBA]',
  hubspotFormId,
  description:
    '<p>The eBPF Summit is back, and this year it’s all about security. Whether you’re new to eBPF or have been writing programs for years, join us for the free virtual conference on what eBPF makes possible: seeing what’s really happening on your systems, detecting threats at runtime, and enforcing policy right where attacks happen.</p>',
  ctaButtons: [
    {
      title: 'Register here',
      theme: 'orange',
      isRegister: true,
    },
    {
      title: 'Join Summit Slack',
      url: slackUrl,
      theme: 'gray',
      iconName: 'slack',
      target: '_blank',
    },
    {
      title: 'Add to your calendar',
      url: calendarUrl,
      theme: 'gray',
      iconName: 'calendar',
    },
  ],
};

const proposal = {
  title: 'Call for proposals: open now',
  date1: 'CFP closes: <strong>[XX date]</strong>',
  date2: 'Full schedule announced: <strong>[XX date]</strong>',
  buttonText: 'Submit a proposal',
  buttonUrl: cfpUrl,
  buttonTarget: '_blank',
};

const hosts = {
  title: 'Your eBPF Summit Hosts',
  items: [
    {
      name: 'Liz Rice',
      position: 'Chief of Open Source, Isovalent at Cisco',
    },
    {
      name: 'Duffie Cooley',
      position: 'Field CTO, Isovalent at Cisco',
    },
  ],
};

const lastYear = {
  title: `Last year's summit`,
  description:
    'In 2025 the eBPF Summit became a global, async hackathon. People of every skill level built schedulers, profilers and frameworks with eBPF and Cilium, judged by maintainers and experts from across the community.',
  link: {
    url: '/summit-2025/',
    title: 'Explore the 2025 projects',
    target: '_self',
  },
  // TODO: confirm the countries and weeks numbers
  items: [
    {
      number: '500+',
      unit: 'Participants',
      textColor: 'black',
      numberColor: 'orange',
    },
    {
      number: '42',
      unit: 'Projects',
      textColor: 'white',
      numberColor: 'white',
    },
    {
      number: '[XX]',
      unit: 'Countries',
      textColor: 'white',
      numberColor: 'orange',
    },
    {
      number: '[XX]',
      unit: 'Weeks',
      textColor: 'black',
      numberColor: 'orange',
    },
  ],
};

const Summit2027 = () => (
  <SummitLayout navigation={navigation} hubspotFormId={hubspotFormId}>
    <Hero {...hero} />
    <Proposal {...proposal} />
    <Information />
    <Hosts {...hosts} />
    <LastYear {...lastYear} />
  </SummitLayout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: 'eBPF Summit 2027: Security Edition',
    description:
      'Register now for eBPF Summit 2027: Security Edition, a free virtual event on using eBPF to observe, detect and stop attacks on your systems.',
    image: ogImage,
    pathname,
  };
  return <SEO {...pageMetadata} />;
};

export default Summit2027;
