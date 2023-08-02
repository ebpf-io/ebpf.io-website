import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import FormModal from 'components/shared/form-modal';
import { hubspotFormId } from 'data/summit-2023/summit-2023-navigation';

const Hero = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <section className="safe-paddings">
      <div className="container pb-6 pt-16 lg:pb-0 md:pt-8 ">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-9xl font-bold leading-tight sm:text-7xl">{title}</h1>
          <p className="mt-4 max-w-[590px] text-xl font-light md:max-w-none md:text-lg">
            {description}
          </p>
          <Button
            className="mt-6 flex items-center rounded-lg px-6 leading-none sm:flex-1"
            size="sm"
            theme="orange"
            onClick={openModal}
          >
            Register here
          </Button>
        </div>
      </div>
      <FormModal
        title="Register for eBPF Summit"
        isOpen={isOpen}
        closeModal={closeModal}
        hubspotFormId={hubspotFormId}
      />
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;
