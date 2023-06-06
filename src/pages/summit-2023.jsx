import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Hero from 'components/pages/summit-2023/hero';
import Hosts from 'components/pages/summit-2023/hosts';
import Information from 'components/pages/summit-2023/information';
import SEO from 'components/shared/seo';
import SummitLayout from 'components/shared/summit-layout';
// TODO: Update SEO
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
  date: 'September <strong>13</strong>, 2023',
  title: 'Summit 2023',
  description:
    '<p>eBPF Summit is a virtual event, targeted at DevOps, SecOps, platform architects, security engineers, and developers. Register to save the date and stay updated on event information.</p>',
  ctaButtons: [
    {
      url: '',
      title: 'Register here',
      theme: 'orange',
    },
    {
      url: 'https://ebpf.io/slack',
      title: 'Join Summit Slack',
      theme: 'gray',
      iconName: 'slack',
    },
  ],
};

const Summit2023 = () => {
  const { tracyHolmes, duffieCooley, lizRice } = useStaticQuery(graphql`
    query {
      lizRice: file(relativePath: { eq: "pages/summit-2023/hosts/liz-rice.png" }) {
        childImageSharp {
          gatsbyImageData(width: 120)
        }
      }
      duffieCooley: file(relativePath: { eq: "pages/summit-2023/hosts/duffie-cooley.png" }) {
        childImageSharp {
          gatsbyImageData(width: 120)
        }
      }
      tracyHolmes: file(relativePath: { eq: "pages/summit-2023/hosts/tracy-holmes.png" }) {
        childImageSharp {
          gatsbyImageData(width: 120)
        }
      }
    }
  `);

  const hosts = {
    title: 'Your eBPF Summit Hosts',
    items: [
      {
        avatar: lizRice,
        name: 'Liz Rice',
        position: 'Chief Open Source Officer, Isovalent',
      },
      {
        avatar: tracyHolmes,
        name: 'Tracy Holmes',
        position: 'Technical Community Advocate, Isovalent',
      },
      {
        avatar: duffieCooley,
        name: 'Duffie Cooley',
        position: 'Field CTO Open Source Officer, Isovalent',
      },
    ],
  };

  return (
    <SummitLayout
      navigation={navigation}
      mobileNavigation={mobileNavigation}
      hubspotFormId={hubspotFormId}
    >
      <Hero {...hero} />
      <Information />
      <Hosts {...hosts} />
    </SummitLayout>
  );
};

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => (
  <SEO pathname={pathname} {...SEO_DATA.contribute} />
);

export default Summit2023;
