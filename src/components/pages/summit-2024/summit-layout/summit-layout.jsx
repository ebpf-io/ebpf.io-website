import PropTypes from 'prop-types';
import React from 'react';

import SummitHeader from 'components/pages/summit-2024/summit-header';
import TopBanner from 'components/pages/summit-2024/top-banner';
import SummitFooter from 'components/shared/summit-footer';

const SummitLayout = ({ children, navigation, hubspotFormId, showBanner = true }) => (
  <section className="flex min-h-screen flex-col">
    {showBanner && <TopBanner />}
    <SummitHeader navigation={navigation} hubspotFormId={hubspotFormId} />
    <main className="flex-grow">{children}</main>
    <SummitFooter />
  </section>
);

SummitLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navigation: PropTypes.array.isRequired,
  hubspotFormId: PropTypes.string.isRequired,
  showBanner: PropTypes.bool.isRequired,
};

export default SummitLayout;
