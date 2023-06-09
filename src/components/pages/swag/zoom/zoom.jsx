import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import ZoomIcon from './images/zoom.inline.svg';

const data = {
  title: 'Zoom background',
  description: 'Sweeten your Zoom setup with an eBPF Summit background',
  buttonText: 'Get it now',
  buttonUrl: '/images/zoom-background.jpg',
};

const Zoom = () => (
  <section className="pt-36 pb-32 lg:pt-28 lg:pb-24 md:pb-20 md:pt-24 sm:py-16">
    <div className="container flex items-center justify-center space-x-24 lg:flex-col lg:space-x-0">
      <StaticImage
        className="max-w-[624px] xl:max-w-[475px] lg:max-w-full"
        src="./images/zoom-preview.jpg"
        alt="Zoom background"
        width={624}
        height={316}
        loading="eager"
      />
      <div className="max-w-[488px] lg:mt-12 lg:max-w-full lg:text-center">
        <div className="flex items-center space-x-5 lg:justify-center">
          <ZoomIcon className="h-11 w-11 sm:h-8 sm:w-8" />
          <h2 className="heading-8xl font-bold leading-dense">{data.title}</h2>
        </div>
        <p className="mt-4 text-xl lg:mx-auto">{data.description}</p>

        <a
          className="hover:bg-black-hover focus-visible:ring-outline relative mt-5 inline-flex h-[52px] items-center justify-center whitespace-nowrap rounded-md bg-black px-12 font-extrabold leading-none text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 disabled:pointer-events-none md:h-[44px] sm:w-full"
          href={data.buttonUrl}
          theme="black"
          download
        >
          {data.buttonText}
        </a>
      </div>
    </div>
  </section>
);

export default Zoom;
