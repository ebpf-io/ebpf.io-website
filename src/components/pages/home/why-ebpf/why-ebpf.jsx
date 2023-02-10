import clsx from 'clsx';
import React from 'react';

import Button from 'components/shared/button';

import FlexibilityIcon from './images/flexibility.inline.svg';
import PerformanceIcon from './images/performance.inline.svg';
import SecurityIcon from './images/security.inline.svg';

const items = [
  {
    icon: PerformanceIcon,
    title: 'Performance',
    description:
      'eBPF drastically improves processing by being JIT compiled and running directly in the kernel.',
  },
  {
    icon: SecurityIcon,
    title: 'Security',
    description:
      'eBPF programs are verified to not crash the kernel and can only be modified by privileged users.',
  },
  {
    icon: FlexibilityIcon,
    title: 'Flexibility',
    description:
      'Modify or add functionality and use cases to the kernel without having to restart or patch it.',
  },
];

const WhyEbpf = () => (
  <section className="why-ebpf safe-paddings relative z-10 mt-36 lg:mt-28 md:mt-24">
    <div className="container">
      <div
        className="flex rounded-lg px-7 py-16 text-white lg:px-4 lg:py-12 md:flex-col md:items-center md:py-10 md:px-4 sm:py-9 sm:px-7"
        style={{
          background:
            'linear-gradient(76.45deg, rgba(255, 238, 153, 0.16) -3.1%, rgba(255, 238, 153, 0) 41.46%), #1C1C1C',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.14), 0px 14px 30px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div className="flex flex-col justify-between px-9 lg:pl-8 lg:pr-11">
          <h2 className="heading-8xl font-semibold leading-tight md:text-center">Why eBPF?</h2>
          <Button
            className="px-7 lg:px-6 md:hidden"
            theme="primary-yellow-filled"
            size="md"
            to="/what-is-ebpf"
          >
            What is eBPF
          </Button>
        </div>
        <ul className="grid grid-cols-3 md:mt-9 sm:mt-7 sm:grid-cols-1">
          {items.map(({ icon: Icon, title, description }, index) => (
            <li
              className={clsx(
                'flex w-full max-w-[304px] flex-col border-l border-dashed border-gray-80 border-opacity-30 px-9 lg:px-8',
                'md:items-center md:px-5 md:first:border-l-0',
                'sm:max-w-[500px] sm:items-center sm:border-l-0 sm:border-t sm:py-7 sm:px-0 sm:text-center sm:first:border-t-0 sm:first:pt-0 sm:last:pb-0'
              )}
              key={index}
            >
              <Icon className="h-12 w-12" />
              <h3 className="mt-5 font-sans text-3xl font-semibold leading-snug lg:mt-4 lg:text-2xl">
                {title}
              </h3>
              <p className="mt-2.5 text-lg lg:text-base md:text-center">{description}</p>
            </li>
          ))}
        </ul>
        <Button
          className="hidden px-7 lg:px-6 md:mt-10 md:inline-flex sm:mt-8"
          theme="primary-yellow-filled"
          size="md"
          to="/what-is-ebpf"
        >
          What is eBPF
        </Button>
      </div>
    </div>
  </section>
);

export default WhyEbpf;
