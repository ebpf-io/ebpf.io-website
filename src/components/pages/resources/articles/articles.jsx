import React from 'react';

import Link from 'components/shared/link/link';

import cover1 from './images/cover-1.png';
import cover2 from './images/cover-2.png';
import cover3 from './images/cover-ebpf-2.png';

const items = [
  {
    cover: cover1,
    title: 'Why eBPF for All Means People Don’t Need to Care about eBPF',
    description:
      'A couple months ago, the two of us got to talking about a phenomenon we both observed.',
    date: 'Nov 17, 2022',
    linkUrl: 'https://isovalent.site/43oWWkV',
  },
  {
    cover: cover2,
    title: '“How the Hive Came To Bee” – a story of eBPF and Cilium so far',
    description:
      'Who created eBPF? Which challenges led to its creation? Does eBPF actually stand for anything? How does eBPF allow us to rethink the way we solve problems?',
    date: 'Dec 13, 2022',
    linkUrl: 'https://isovalent.site/44qW5ky',
  },
  {
    cover: cover3,
    title: 'Next-Generation Observability with eBPF',
    description:
      'Observability is about more than just operations and application monitoring, it’s about inferring the state of the environment based on the outputs from the overall system.',
    date: 'Oct 18, 2022',
    linkUrl: 'https://isovalent.site/446F67h',
  },
];

const Articles = () => (
  <section className="safe-paddings my-16">
    <div className="container flex flex-col items-center">
      <h2 className="heading-8xl font-semibold leading-tight">Read the articles from blog</h2>
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

export default Articles;
