import React from 'react';

import cover3 from './images/cocver-ebpf-2.png';
import cover2 from './images/cocver-ebpf.png';
import cover1 from './images/cocver-tetragon.png';

const items = [
  {
    cover: cover1,
    title: 'Tetragon – eBPF-based Security Observability & Runtime Enforcement',
    description: 'We are excited to announce the Tetragon open source project.',
    date: 'May 16, 2022',
  },
  {
    cover: cover2,
    title: 'How eBPF will solve Service Mesh – Goodbye Sidecars',
    description:
      'Service mesh is a concept describing the requirements of modern cloud native applications with regards to communication, visibility, and security.',
    date: 'Dec 08, 2021',
  },
  {
    cover: cover3,
    title: 'Next-Generation Observability with eBPF',
    description:
      'Observability is about more than just operations and application monitoring, it’s about inferring the state of the environment based on the outputs from the overall system.',
    date: 'Oct 18, 2022',
  },
];

const Hero = () => (
  <section className="safe-paddings my-16">
    <div className="container flex flex-col items-center">
      <h1 className="heading-10xl mb-20 text-center font-semibold leading-tight lg:mb-16">
        eBPF resources
      </h1>
      <h2 className="heading-8xl font-semibold leading-tight">Read the articles from our blog</h2>
      <ul className="grid-gap-x mt-5 grid grid-cols-12">
        {items.map(({ cover, title, description, date }, index) => (
          <li className="col-span-4 flex flex-col" key={index}>
            <img src={cover} alt="" />
            <div className="mt-5 flex h-full w-full flex-col gap-y-2">
              <time className="text-sm leading-none">{date}</time>
              <h3 className="text-2xl font-bold leading-tight">{title}</h3>
              <p className="text-base leading-normal">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Hero;
