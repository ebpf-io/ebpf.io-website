import clsx from 'clsx';
import React from 'react';

import Button from 'components/shared/button/button';

import ciliumSvg from './images/cilium.svg';
import gitKernelSvg from './images/git-kernel.svg';
import kernelSvg from './images/kernel.svg';
import redditSvg from './images/reddit.svg';
import stackoverflowSvg from './images/stackoverflow.svg';
import wikipediaSvg from './images/wikipedia.svg';

const items = [
  {
    image: wikipediaSvg,
    title: 'Wikipedia',
    description: 'Wikipedia article on eBPF',
    linkUrl: 'https://en.wikipedia.org/wiki/EBPF',
  },
  {
    image: stackoverflowSvg,
    title: 'eBPF Stackoverflow',
    description: 'Ask questions and read answers',
    linkUrl: 'https://stackoverflow.com/questions/tagged/ebpf+or+bpf+or+xdp-bpf',
  },
  {
    image: redditSvg,
    title: 'eBPF community on Reddit',
    description: 'Explore stuff about eBPF kernel subsystem',
    linkUrl: 'https://www.reddit.com/r/eBPF/',
  },
  {
    image: ciliumSvg,
    title: 'BPF & XDP Reference Guide',
    description: 'Learn BPF internals and programming',
    linkUrl: 'https://cilium.readthedocs.io/en/stable/bpf/',
  },
  {
    image: kernelSvg,
    title: 'BPF Documentation',
    description: 'BPF Documentation in the Linux Kernel',
    linkUrl: 'https://www.kernel.org/doc/html/latest/bpf/index.html',
  },
  {
    image: gitKernelSvg,
    title: 'BPF Design Q&A',
    description: 'FAQ for kernel-related eBPF questions',
    linkUrl:
      'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/bpf/bpf_design_QA.rst',
  },
];

const Documentation = () => (
  <section className="hero safe-paddings md:mt-26 mt-32 lg:mt-20 sm:mt-14">
    <div className="container flex flex-col items-center">
      <h2 className="heading-8xl text-center font-semibold leading-tight">
        Read the Documentation to learn more about eBPF
      </h2>

      <ul className="mt-14 grid w-full grid-cols-2 sm:grid-cols-1">
        {items.map(({ title, image, linkUrl, description }, index) => (
          <li
            className={clsx(
              'flex border-l border-t border-dashed border-gray-80 p-10 lg:p-8',
              '[&:nth-child(-n+2)]:border-t-0 [&:nth-child(odd)]:border-l-0',
              'md:[&:nth-child(2n+1)]:border-l-0',
              'sm:w-full sm:border-l-0 sm:px-0 sm:first:pt-0 sm:last:pb-0 sm:[&:nth-child(odd)]:border-l-0 sm:[&:nth-child(2)]:border-t'
            )}
            key={index}
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex max-w-full items-center md:flex-col md:items-start sm:flex-row sm:items-center xs:flex-col xs:items-start">
                <img
                  className="h-[60px] w-[60px]"
                  src={image}
                  alt={title}
                  width={56}
                  height={56}
                  loading="lazy"
                />
                <div className="ml-5 flex flex-col md:ml-0 md:mt-5 sm:ml-5 sm:mt-0 xs:ml-0 xs:mt-5">
                  <span className="text-3xl font-semibold md:text-2xl sm:text-3xl">{title}</span>
                  <span className="mt-1 text-lg md:text-base sm:text-lg">{description}</span>
                </div>
              </div>

              <Button
                to={linkUrl}
                className="ml-10"
                target="_blank"
                rel="noreferrer noopener"
                theme="withYellowChevron"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Documentation;
