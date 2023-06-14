import React from 'react';

import Hero from 'components/pages/summit-2023/hero';
import Hosts from 'components/pages/summit-2023/hosts';
import Information from 'components/pages/summit-2023/information';
import LastYear from 'components/pages/summit-2023/last-year';
import Proposal from 'components/pages/summit-2023/proposal';
import SEO from 'components/shared/seo';
import SummitLayout from 'components/shared/summit-layout';
import { navigation, hubspotFormId } from 'data/summit-2023/summit-2023-navigation';

const ogImage = '/images/social-preview-ebpf-summit.jpg';

const hero = {
  date: 'September <strong>13</strong>, 2023',
  title: 'eBPF Summit 2023',
  description:
    '<p>Welcome to the eBPF Summit, a virtual event for all things within the Open Source eBPF ecosystem. This event for the eBPF community is aimed at new and existing members wishing to learn and grow and includes hands-on technologists building, using or interested in eBPF as a platform.</p>',
};

const proposal = {
  title: 'Call for proposals: open now',
  date1: 'CFP closes: <strong>July 21</strong>',
  date2: 'Full schedule announced: <strong>August 21</strong>',
  buttonText: 'Send proposal',
  buttonUrl: 'https://sessionize.com/ebpf-summit-2023/',
  buttonTarget: '_blank',
};

const hosts = {
  title: 'Your eBPF Summit Hosts',
  items: [
    {
      name: 'Liz Rice',
      position: 'Chief Open Source Officer, Isovalent',
    },
    {
      name: 'Duffie Cooley',
      position: 'Field CTO, Isovalent',
    },
  ],
};

const lastYear = {
  title: `Last year's summit`,
  description:
    'The eBPF Summit 2022 featured 32 talks from many different perspectives, from kernel maintainers working on eBPF implementation, through projects using eBPF technology to create next-generation tools, through to end users sharing their experiences of leveraging this awesome new set of capabilities. Join us this September for what promises to be an even more exciting edition!',
  link: {
    url: 'https://youtu.be/UQV75Dol_dg',
    title: 'eBPF Summit 2022',
    target: '_blank',
  },
  items: [
    {
      number: '2.5k',
      unit: 'Registrations',
      textColor: 'black',
      numberColor: 'orange',
    },
    {
      number: '5',
      unit: 'Keynotes',
      textColor: 'white',
      numberColor: 'white',
    },
    {
      number: '32',
      unit: 'Talks',
      textColor: 'white',
      numberColor: 'orange',
    },
    {
      number: '2',
      unit: 'Days',
      textColor: 'black',
      numberColor: 'orange',
    },
  ],
};

const Summit2023 = () => (
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
    title: 'eBPF Summit 2023',
    description:
      'Register now for the eBPF Summit 2023, Sep 13, 2023, a free virtual event for DevOps, SRE, SecOps, and developers.',
    image: ogImage,
    pathname,
  };
  return <SEO {...pageMetadata} />;
};

export default Summit2023;
