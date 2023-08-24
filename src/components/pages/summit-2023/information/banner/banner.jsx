import React from 'react';

import Button from 'components/shared/button';

import screenIllustration from './images/screen.png';

const data = {
  title: 'Don’t Miss Out!<br /> eBPF 2023 Summit Schedule',
  description:
    'Discover how individuals and initiatives currently utilize eBPF to address engineering challenges, and explore the ongoing evolution of eBPF itself.',
  linkText: 'View the schedule',
  linkUrl: '/summit-2023-schedule/',
};

const Banner = () => (
  <div className="relative mt-8 flex w-full flex-row overflow-hidden rounded-xl bg-light-yellow-gradient lg:mt-6 sm:flex-col">
    <div className="flex max-w-[545px] flex-col items-start justify-start p-14 pr-0 lg:p-12 lg:pr-0 md:max-w-[420px] sm:max-w-none sm:p-6 sm:pb-0">
      <h3
        className="heading-6xl font-bold leading-dense tracking-[-0.01em]"
        dangerouslySetInnerHTML={{ __html: data.title }}
      />
      <p className="mt-3.5 text-sm font-normal leading-normal md:mt-2">{data.description}</p>
      <Button
        className="mt-7 rounded-lg !py-3 text-sm md:mt-5"
        size="sm"
        to={data.linkUrl}
        theme="black-filled"
      >
        {data.linkText}
      </Button>
    </div>
    <div className="relative flex-1 overflow-hidden sm:mt-7 sm:h-[228px] sm:w-full sm:flex-none">
      <img
        src={screenIllustration}
        alt=""
        className="absolute left-[87px] top-[41px] min-w-[468px] shadow-banner-image sm:left-6 sm:top-0 sm:w-full sm:min-w-[410px]"
        width={468}
        height={372}
        loading="lazy"
        aria-hidden
      />
    </div>
  </div>
);

export default Banner;
