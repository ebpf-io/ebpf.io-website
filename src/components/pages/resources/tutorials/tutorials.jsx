import React from 'react';

import Button from 'components/shared/button/button';
import Link from 'components/shared/link/link';

const items = [
  {
    title: 'Getting started with eBPF',
    description:
      'The best way to have your first experience with eBPF programming is to walk through this lab, which teaches you to handle an eBPF tool, watch it loading its components and even add your own tracing into the source eBPF code.',
    linkUrl: 'https://isovalent.site/3NDyAh8',
  },
  {
    title: 'Security Observability with eBPF & Tetragon',
    description:
      'A new paradigm that utilizes eBPF, a Linux kernel technology, to allow Security and DevOps teams, SREs, Cloud Engineers, and Solution Architects to gain real-time visibility into Kubernetes.',
    linkUrl: 'https://isovalent.site/3XCrAWy',
  },
];

const Tutorials = () => (
  <section className="hero safe-paddings mb-32 mt-40 md:my-16 sm:mb-14 sm:mt-0">
    <div className="container grid grid-cols-2 gap-x-[26px] md:grid-cols-1">
      <div className="pr-[72px] pt-3 md:max-w-[550px] md:pr-0">
        <h2 className="heading-8xl font-semibold leading-tight">
          Dig into the eBPF technology with labs
        </h2>
        <Button
          to="https://isovalent.site/44fbMf2"
          className="mt-9 rounded-lg px-9 py-4 sm:hidden"
          target="_blank"
          rel="noreferrer noopener"
          theme="orange"
        >
          View all labs
        </Button>
      </div>

      <ul className="md:mt-14 sm:mt-10">
        {items.map(({ title, description, linkUrl }, index) => (
          <li className="border-t border-dashed border-gray-80 last:border-b" key={index}>
            <Link
              className="group flex items-center justify-between pb-8 pt-7 "
              to={linkUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="flex flex-col transition-colors duration-200 group-hover:text-gray-40">
                <h3 className="text-4xl font-semibold leading-tight lg:text-2xl md:text-xl">
                  {title}
                </h3>
                <span className="mt-2.5 text-base leading-normal">{description}</span>
              </div>

              <Button className="ml-10" theme="withWhiteChevron" />
            </Link>
          </li>
        ))}
      </ul>

      <Button
        to="https://isovalent.com/resource-library/labs/"
        className="mt-9 hidden max-w-fit rounded-lg px-9 py-4 sm:inline-flex"
        target="_blank"
        rel="noreferrer noopener"
        theme="orange"
      >
        View all labs
      </Button>
    </div>
  </section>
);

export default Tutorials;
