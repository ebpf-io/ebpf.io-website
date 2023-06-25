import PropTypes from 'prop-types';
import React from 'react';

import LabsCard from 'components/pages/labs/labs-card';

const LabsList = ({ labs }) => (
  <section className="container-md grid-gap mb-24 mt-16 grid grid-cols-12 lg:mb-20 lg:mt-10">
    {labs.map((lab, index) => (
      <LabsCard {...lab} key={index} className="col-span-6 md:col-span-full" />
    ))}
  </section>
);

LabsList.propTypes = {
  labs: PropTypes.arrayOf(
    PropTypes.shape({
      lab: PropTypes.object.isRequired,
    })
  ).isRequired,
};

export default LabsList;
