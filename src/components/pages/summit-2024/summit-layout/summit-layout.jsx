import PropTypes from 'prop-types';
import React from 'react';

import TopBanner from 'components/pages/summit-2024/top-banner';
import SummitFooter from 'components/shared/summit-footer';
import SummitHeader from 'components/shared/summit-header';

const SummitLayout = ({ children, navigation, hubspotFormId }) => (
  <>
    <TopBanner />
    <section className="flex min-h-screen flex-col">
      <SummitHeader navigation={navigation} hubspotFormId={hubspotFormId} />
      <main className="flex-grow">{children}</main>
      <SummitFooter />
    </section>
  </>
);

SummitLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navigation: PropTypes.array.isRequired,
  hubspotFormId: PropTypes.string.isRequired,
};

export default SummitLayout;
