import PropTypes from 'prop-types';
import React from 'react';

import SummitFooter from 'components/shared/summit-footer';
import SummitHeader from 'components/shared/summit-header';

const SummitLayout = ({ children, navigation, mobileNavigation, hubspotFormId }) => (
  <>
    <SummitHeader
      navigation={navigation}
      mobileNavigation={mobileNavigation}
      hubspotFormId={hubspotFormId}
    />
    <main>{children}</main>
    <SummitFooter />
  </>
);

SummitLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navigation: PropTypes.array.isRequired,
  mobileNavigation: PropTypes.array.isRequired,
  hubspotFormId: PropTypes.string.isRequired,
};

export default SummitLayout;
