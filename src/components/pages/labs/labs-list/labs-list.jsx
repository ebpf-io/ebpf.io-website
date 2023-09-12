import PropTypes from 'prop-types';
import React from 'react';

import LabsCard from 'components/pages/labs/labs-card';
import { labsCardPropTypes } from 'components/pages/labs/labs-card/labs-card';

const LabsList = ({ labs }) => (
  <section className="safe-paddings mb-24 mt-16 lg:mb-20 lg:mt-10">
    <div className="container-md grid-gap grid grid-cols-12">
      {labs.map((lab, index) => (
        <LabsCard {...lab} key={index} className="col-span-6 md:col-span-full" />
      ))}
    </div>
  </section>
);
LabsList.propTypes = {
  labs: PropTypes.arrayOf(
    PropTypes.shape({
      ...labsCardPropTypes,
    })
  ).isRequired,
};

export default LabsList;
