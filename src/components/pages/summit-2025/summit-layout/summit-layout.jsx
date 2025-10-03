import PropTypes from 'prop-types';
import React from 'react';

import SummitHeader from 'components/pages/summit-2025/summit-header/summit-header';
import SummitFooter from 'components/shared/summit-footer';

const SummitLayout = ({ children, navigation, devpostUrl }) => (
  <section className="flex min-h-screen flex-col">
    <SummitHeader navigation={navigation} devpostUrl={devpostUrl} />
    <main className="flex-grow">{children}</main>
    <SummitFooter />
  </section>
);

SummitLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navigation: PropTypes.array.isRequired,
  devpostUrl: PropTypes.string.isRequired,
};

export default SummitLayout;
