import React from 'react';

// import Banner from 'components/pages/summit-2024/banner';
import Hero from 'components/pages/summit-2024/hero';
import Hosts from 'components/pages/summit-2024/hosts';
import Information from 'components/pages/summit-2024/information';
import LastYear from 'components/pages/summit-2024/last-year';
import Speakers from 'components/pages/summit-2024/speakers';
import SummitLayout from 'components/pages/summit-2024/summit-layout';
import SEO from 'components/shared/seo';
import endpoints from 'data/shared/sessionize';
import { navigation, hubspotFormId } from 'data/shared/summit-2024-navigation';

const ogImage = '/images/social-preview-ebpf-summit.jpg';

const hero = {
  date: 'September <strong>11</strong>, 2024',
  title: 'eBPF Summit 2024',
  time: '8:30AM-13:00PM&nbsp;PST / 5:30PM-10:00PM&nbsp;CEST',
  description:
    '<p>Now in its fifth year, the eBPF Summit is the virtual event for all things within the Open Source eBPF ecosystem. Whether you are new to the eBPF community or an established expert, please join us for the conference that brings together everyone building, using, or interested in eBPF as a platform. You’ll find everything from deep dives and hands-on challenges to visionary talks that chart the future of this amazing technology.</p>',
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
    'The eBPF Summit 2023 featured 17 talks from many different perspectives, from kernel maintainers working on the eBPF implementation, through projects using eBPF technology to create next-generation tools, through to end users sharing their experiences of leveraging this awesome new set of capabilities. Join us this September for what promises to be an even more exciting edition!',
  link: {
    url: 'https://www.youtube.com/watch?v=5pvDi6y6LrM',
    title: 'eBPF Summit 2023',
    target: '_blank',
  },
  items: [
    {
      number: '3.1k',
      unit: 'Registrations',
      textColor: 'black',
      numberColor: 'orange',
    },
    {
      number: '3',
      unit: 'Keynotes',
      textColor: 'white',
      numberColor: 'white',
    },
    {
      number: '17',
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

const Summit2024 = () => (
  <SummitLayout navigation={navigation} hubspotFormId={hubspotFormId}>
    <Hero {...hero} />
    {/* <Banner /> */}
    <Speakers
      title="Featured Speakers"
      endpoint={endpoints.speakers}
      linkTitle="View talks"
      linkUrl="/summit-2024-talks/"
    />
    <Information />
    <Hosts {...hosts} />
    <LastYear {...lastYear} />
  </SummitLayout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => {
  const pageMetadata = {
    title: 'eBPF Summit 2024',
    description:
      'Register now for the eBPF Summit 2023, Sep 11, 2024, a free virtual event for DevOps, SRE, SecOps, and developers.',
    image: ogImage,
    pathname,
  };
  return <SEO {...pageMetadata} />;
};

export default Summit2024;
