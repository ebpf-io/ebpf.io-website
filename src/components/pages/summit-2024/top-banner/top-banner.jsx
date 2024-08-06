import React from 'react';

const TopBanner = () => (
  <div className="relative flex h-[48px] flex-row items-center justify-center space-x-6 overflow-hidden bg-black py-2 sm:h-auto sm:flex-col sm:space-x-0 sm:space-y-1 sm:pb-5">
    <div className="flex flex-row items-center">
      <span className="font-sans text-lg font-medium leading-none text-orange-1 md:text-base">
        Call for proposal closed
      </span>
    </div>
  </div>
);

export default TopBanner;
