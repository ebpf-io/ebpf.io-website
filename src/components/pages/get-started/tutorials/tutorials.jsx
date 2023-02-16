import React from 'react';

import Button from 'components/shared/button/button';

// const items = [
//   {
//     title: 'eBPF Tracing Tutorials',
//     description:
//       'Learn how to use eBPF for tracing from just running bcc tools to developing with bpftrace and bcc.',
//     linkUrl: 'http://www.brendangregg.com/blog/2019-01-01/learn-ebpf-tracing.html',
//   },
//   {
//     title: 'XDP Tutorials',
//     description:
//       'Learn the basic steps needed to effectively write programs for the XDP from what it is to attaching multiple programs to one interface',
//     linkUrl: 'https://github.com/xdp-project/xdp-tutorial',
//   },
//   {
//     title: 'Compiler Explorer',
//     description:
//       'BPF support to run the compiler interactively in your web browser and explore the assembly',
//     linkUrl: 'https://godbolt.org/',
//   },
// ];

const Tutorials = () => (
  <section className="hero safe-paddings mt-40">
    <div className="container space-between flex">
      <div>
        <h2 className="heading-10xl w-1/2 font-semibold leading-tight">
          Dig into the eBPF technology with tutorials from industry experts
        </h2>
        <Button
          to="/" // TODO: add a proper url
          className="py-[16px] px-[28px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          target="_blank"
          rel="noreferrer noopener"
          theme="primary-yellow-filled"
        >
          Learn More
        </Button>
      </div>

      <div className="w-1/2">tttt</div>
    </div>
  </section>
);

export default Tutorials;
