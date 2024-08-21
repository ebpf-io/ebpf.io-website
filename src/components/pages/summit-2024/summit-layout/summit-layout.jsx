import PropTypes from 'prop-types';
import React from 'react';

import SummitHeader from 'components/pages/summit-2024/summit-header';
import SummitFooter from 'components/shared/summit-footer';

const SummitLayout = ({ children, navigation, hubspotFormId }) => (
  <section className="flex min-h-screen flex-col">
    <SummitHeader navigation={navigation} hubspotFormId={hubspotFormId} />
    <main className="flex-grow">{children}</main>
    <SummitFooter />
  </section>
);

SummitLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navigation: PropTypes.array.isRequired,
  hubspotFormId: PropTypes.string.isRequired,
};

export default SummitLayout;
