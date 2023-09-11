import React, { useState } from 'react';

import Button from 'components/shared/button/button';
import FormModal from 'components/shared/form-modal';
import { hubspotFormId } from 'data/summit-2023/summit-2023-navigation';

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <section className="relative mt-40 md:mt-16 sm:mt-14">
      <div className="container">
        <div className="relative flex flex-row items-center justify-center space-x-10 rounded-lg bg-gray-98 px-6 py-[42px] md:flex-col md:space-x-0 md:space-y-6 md:py-6">
          <h2 className="heading-6xl text-left font-semibold leading-tight text-black md:text-center">
            Register for early access to presentation recordings!
          </h2>
          <Button
            className="rounded-lg leading-tight xs:w-full"
            theme="black-filled"
            size="md"
            onClick={() => setIsOpen(true)}
          >
            Register
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

export default Banner;
