import clsx from 'clsx';
import React from 'react';

import networkingSvg from './images/networking.svg';
import observabilitySvg from './images/observability.svg';
import securitySvg from './images/security.svg';
import tracingProfilingSvg from './images/tracing-profiling.svg';

const items = [
  {
    bgClassName: 'bg-secondary-yellow-light',
    image: networkingSvg,
    title: 'Networking',
    description:
      'Speed packet processing without leaving kernel space. Add additional protocol parsers and easily program any forwarding logic to meet changing requirements.',
  },
  {
    bgClassName: 'bg-secondary-green-light',
    image: observabilitySvg,
    title: 'Observability',
    description:
      'Collection and in-kernel aggregation of custom metrics with generation of visibility events and data structures from a wide range of possible source without having to export samples.',
  },
  {
    bgClassName: 'bg-secondary-blue-light',
    image: tracingProfilingSvg,
    title: 'Tracing & Profiling',
    description:
      'Attach eBPF programs to trace points as well as kernel and user application probe points giving powerful introspection abilities and unique insights to troubleshoot system performance problems.',
  },
  {
    bgClassName: 'bg-secondary-red-light',
    image: securitySvg,
    title: 'Security',
    description:
      'Combine seeing and understanding all system calls with a packet and socket-level view of all networking to create security systems operating on more context with a better level of control',
  },
];

const Features = () => (
  <section className="features safe-paddings mt-32 lg:mt-24 md:mt-20">
    <div className="container">
      <h2 className="heading-8xl text-center font-semibold leading-dense">
        What’s possible with eBPF?
      </h2>
      <ul className="mt-14 grid grid-cols-2 gap-8 lg:mt-12 lg:gap-7 md:mt-10 md:grid-cols-1 md:gap-6">
        {items.map(({ image, title, description, bgClassName }, index) => (
          <li className="flex rounded-lg sm:flex-col" key={index}>
            <div
              className={clsx(
                bgClassName,
                'flex shrink-0 rounded-l-lg sm:rounded-t-lg sm:rounded-bl-none'
              )}
            >
              <img
                className="lg:w-[184px] lg:object-cover md:w-40 sm:mx-auto sm:w-[264px]"
                src={image}
                alt={title}
                width={264}
                height={264}
                loading="lazy"
              />
            </div>

            <div className="rounded-r-lg border border-l-0 border-gray-90 p-8 lg:p-6 sm:rounded-bl-lg sm:rounded-tr-none sm:border-t-0 sm:border-l">
              <h3 className="font-sans text-3xl font-semibold leading-snug lg:text-2xl">{title}</h3>
              <p className="mt-3 lg:mt-2.5 lg:text-sm md:text-base">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Features;
