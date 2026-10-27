import React from 'react';

import Link from 'components/shared/link';
import { cfpUrl } from 'data/shared/summit-2027-navigation';

const TopBanner = () => (
  <div className="relative flex h-[48px] flex-row items-center justify-center space-x-6 overflow-hidden bg-black py-2 sm:h-auto sm:flex-col sm:space-x-0 sm:space-y-1 sm:pb-5">
    <div className="flex flex-row items-center">
      <span className="font-sans text-lg font-medium leading-none text-white md:text-base">
        The call for proposals is open until November 24
      </span>
    </div>
    <Link theme="orange" size="lg" to={cfpUrl} target="_blank">
      Submit a talk
    </Link>
  </div>
);

export default TopBanner;
