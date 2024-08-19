import React from 'react';

import Hero from 'components/pages/summit-schedule/hero';
import SEO from 'components/shared/seo';
import SummitLayout from 'components/shared/summit-layout';
import { navigation, hubspotFormId } from 'data/shared/summit-2023-navigation';

const ogImage = '/images/social-preview-ebpf-summit.jpg';

const hero = {
  title: 'eBPF Summit 2024 Schedule',
  description:
    'Explore the talks of the eBPF Summit, a virtual event for all things within the Open Source eBPF ecosystem',
};

const Summit2024 = () => (
  <SummitLayout navigation={navigation} hubspotFormId={hubspotFormId}>
    <Hero {...hero} />
    <div
      className="px-4 mx-4"
      dangerouslySetInnerHTML={{
        __html: `
            <script type="text/javascript" src="https://sessionize.com/api/v2/gjpcd45i/view/GridSmart"></script>
          `,
      }}
    />
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
