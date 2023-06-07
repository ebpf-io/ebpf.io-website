import React from 'react';

import SEO from 'components/shared/seo';
import SummitLayout from 'components/shared/summit-layout';
import VideoGallery from 'components/shared/video-gallery';
// TODO: Update SEO
import SEO_DATA from 'data/seo-data';
import { navigation, mobileNavigation } from 'data/summit-2023/summit-2023-navigation';
import videoItems from 'data/summit-2023/video-data';

const hubspotFormId = process.env.HUBSPOT_FORM_ID_2023;

const Summit2023 = () => (
  <SummitLayout
    navigation={navigation}
    mobileNavigation={mobileNavigation}
    hubspotFormId={hubspotFormId}
  >
    <VideoGallery title="Watch videos on eBPF technology" items={videoItems} />
  </SummitLayout>
);

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => (
  <SEO pathname={pathname} {...SEO_DATA.contribute} />
);

export default Summit2023;
