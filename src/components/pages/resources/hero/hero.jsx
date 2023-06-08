import React from 'react';

import Link from 'components/shared/link/link';

import cover3 from './images/cocver-ebpf-2.png';
import cover2 from './images/cocver-ebpf.png';
import cover1 from './images/cocver-tetragon.png';

const items = [
  {
    cover: cover1,
    title: 'Tetragon – eBPF-based Security Observability & Runtime Enforcement',
    description: 'We are excited to announce the Tetragon open source project.',
    date: 'May 16, 2022',
    linkUrl: 'https://isovalent.com/blog/post/2022-05-16-tetragon/',
  },
  {
    cover: cover2,
    title: 'How eBPF will solve Service Mesh – Goodbye Sidecars',
    description:
      'Service mesh is a concept describing the requirements of modern cloud native applications with regards to communication, visibility, and security.',
    date: 'Dec 08, 2021',
    linkUrl: 'https://isovalent.com/blog/post/2021-12-08-ebpf-servicemesh/',
  },
  {
    cover: cover3,
    title: 'Next-Generation Observability with eBPF',
    description:
      'Observability is about more than just operations and application monitoring, it’s about inferring the state of the environment based on the outputs from the overall system.',
    date: 'Oct 18, 2022',
    linkUrl: 'https://isovalent.com/blog/post/next-generation-observability-with-ebpf/',
  },
];

const Hero = () => (
  <section className="safe-paddings my-16">
    <div className="container flex flex-col items-center">
      <h1 className="heading-10xl mb-20 text-center font-semibold leading-tight lg:mb-14">
        eBPF resources
      </h1>
      <h2 className="heading-8xl font-semibold leading-tight">Read the articles from our blog</h2>
      <div className="grid-gap-x mt-16 grid grid-cols-12 lg:mt-10 md:grid-cols-4 md:gap-y-10">
        {items.map(({ cover, title, description, date, linkUrl }, index) => (
          <Link
            className="group col-span-4 flex flex-col md:max-w-[700px] sm:max-w-full"
            to={linkUrl}
            target="_blank"
            rel="noreferrer noopener"
            key={index}
          >
            <img
              className="h-auto w-full"
              src={cover}
              alt=""
              width={382}
              height={182}
              loading="eager"
              aria-hidden
            />
            <div className="mt-5 flex h-full w-full flex-col gap-y-2 transition-colors duration-200 group-hover:text-gray-40">
              <time className="text-sm leading-none">{date}</time>
              <h3 className="text-2xl font-bold leading-tight ">{title}</h3>
              <p className="text-base leading-normal">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
