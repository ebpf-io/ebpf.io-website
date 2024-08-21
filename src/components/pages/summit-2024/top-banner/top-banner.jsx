import React from 'react';

const TopBanner = () => (
  <div className="relative flex h-[48px] flex-row items-center justify-center space-x-6 overflow-hidden bg-black py-2 sm:h-auto sm:flex-col sm:space-x-0 sm:space-y-1 sm:pb-5">
    <div className="flex flex-row items-center">
      <span className="font-sans text-lg font-medium leading-none text-white md:text-base">
        eBPF Summit 2024 Schedule is now live!
      </span>
    </div>
    <Link theme="orange" size="lg" to="/summit-2024-schedule" target="_blank">
      View the schedule
    </Link>
  </div>
);

export default TopBanner;
