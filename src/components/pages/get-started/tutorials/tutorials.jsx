import React from 'react';

import Button from 'components/shared/button/button';

const items = [
  {
    title: 'eBPF Tracing Tutorials',
    description:
      'Learn how to use eBPF for tracing from just running bcc tools to developing with bpftrace and bcc.',
    linkUrl: 'http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html',
  },
  {
    title: 'XDP Tutorials',
    description:
      'Learn the basic steps needed to effectively write programs for the XDP from what it is to attaching multiple programs to one interface',
    linkUrl: 'https://github.com/xdp-project/xdp-tutorial',
  },
  {
    title: 'Compiler Explorer',
    description:
      'BPF support to run the compiler interactively in your web browser and explore the assembly',
    linkUrl: 'https://godbolt.org/',
  },
];

const Tutorials = () => (
  <section className="hero safe-paddings mt-40 md:mt-32 sm:mt-24">
    <div className="container grid grid-cols-2 gap-x-[26px] md:grid-cols-1">
      <div className="pr-[72px] pt-3 md:max-w-[550px] md:pr-0">
        <h2 className="heading-8xl font-semibold leading-tight">
          Dig into the eBPF technology with tutorials from industry experts
        </h2>
        <Button
          to="/" // TODO: add a proper url
          className="mt-[36px] py-[16px] px-[36px]"
          target="_blank"
          rel="noreferrer noopener"
          theme="primary-yellow-filled"
        >
          More tutorials
        </Button>
      </div>

      <ul className="md:mt-14">
        {items.map(({ title, description, linkUrl }, index) => (
          <li
            className="flex items-center justify-between border-t border-dashed border-gray-80 pt-7 pb-8 last:border-b"
            key={index}
          >
            <div className="flex flex-col">
              <span className="text-4xl font-semibold leading-tight">{title}</span>
              <span className="mt-2.5 text-base leading-normal">{description}</span>
            </div>

            <Button
              to={linkUrl}
              className="ml-10"
              target="_blank"
              rel="noreferrer noopener"
              theme="withYellowChevron"
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Tutorials;
