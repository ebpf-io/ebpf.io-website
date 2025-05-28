import { navigate } from 'gatsby';
import React from 'react';

import Button from 'components/shared/button';

// import bg1Md from './images/bg-1-md.png';
// import bg1 from './images/bg-1.png';
// import bg2Md from './images/bg-2-md.png';
// import bg2 from './images/bg-2.png';

import bg1Md from './images/bg-1-md.webp';
import bg1 from './images/bg-1.webp';
import bg2Md from './images/bg-2-md.webp';
import bg2 from './images/bg-2.webp';

const TopBanner = () => {
  const handleClick = () => {
    navigate('https://www.youtube.com/watch?v=Wb_vD3XZYOA', {
      target: '_blank',
    });
  };

  return (
    <div
      className="relative h-[60px] overflow-hidden py-3 xs:h-auto"
      style={{ background: 'linear-gradient(265.86deg,#ffe41a -14.77%,#ff9533 150.53%)' }}
    >
      <img
        className="absolute top-0 right-0 mix-blend-multiply md:hidden"
        src={bg1}
        alt=""
        aria-hidden
      />
      <img
        className="absolute top-0 left-0 mix-blend-multiply md:hidden"
        src={bg2}
        alt=""
        aria-hidden
      />
      <img
        className="absolute top-0 right-0 hidden mix-blend-multiply md:block"
        src={bg1Md}
        alt=""
        aria-hidden
      />
      <img
        className="absolute bottom-0 left-0 hidden mix-blend-multiply md:block"
        src={bg2Md}
        alt=""
        aria-hidden
      />
      <div className="relative z-10 flex items-center justify-center space-x-5 xs:flex-col xs:space-x-0 xs:space-y-2.5">
        <span className="font-sans text-3xl font-bold leading-none md:text-xl">
          eBPF Documentary
        </span>
        <Button className="h-9 px-4 pb-1 md:text-sm" theme="black-filled" onClick={handleClick}>
          Watch on Youtube
        </Button>
      </div>
    </div>
  );
};

export default TopBanner;
