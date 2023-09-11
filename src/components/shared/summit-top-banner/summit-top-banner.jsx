import React from 'react';

import Link from 'components/shared/link';

import YouTubeLogo from './images/youtube.svg';

const SummitTopBanner = () => (
  <div className="relative flex h-[48px] flex-row items-center justify-center space-x-6 overflow-hidden bg-black py-2 sm:h-auto sm:flex-col sm:space-x-0 sm:space-y-1 sm:pb-5">
    <div className="flex flex-row items-center">
      <img
        className="mr-3 h-8 w-8"
        src={YouTubeLogo}
        alt="youtube logo"
        width={32}
        height={32}
        loading="eager"
        aria-hidden
      />
      <span className="font-sans text-lg font-medium leading-none text-white md:text-base">
        Youtube stream of eBPF Summit
      </span>
    </div>
    <Link theme="orange" size="lg" to="https://www.youtube.com/watch?v=EViAho-6qoc" target="_blank">
      Join now
    </Link>
  </div>
);

export default SummitTopBanner;
