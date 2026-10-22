import PropTypes from 'prop-types';
import React from 'react';

import SummitHeader from 'components/pages/summit-2024/summit-header';
import TopBanner from 'components/pages/summit-2027/top-banner';
import SummitFooter from 'components/shared/summit-footer';

const SummitLayout = ({ children, navigation, splashEventId }) => (
  <section className="flex min-h-screen flex-col">
    <TopBanner />
    <SummitHeader navigation={navigation} splashEventId={splashEventId} />
    <main className="flex-grow">{children}</main>
    <SummitFooter />
  </section>
);

SummitLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navigation: PropTypes.array.isRequired,
  splashEventId: PropTypes.string.isRequired,
};

export default SummitLayout;
