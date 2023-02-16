import React from 'react';

import Button from 'components/shared/button/button';

import bpfPerformanceTools from './images/bpf-performance-tools.jpg';
import linuxObservabilityWithBpf from './images/linux-observability-with-bpf.jpg';
import systemsPerformance from './images/systems-performance.jpg';
import whatIsEbpf from './images/what-is-ebpf.jpg';

const items = [
  {
    image: whatIsEbpf,
    alt: "What is eBPF? Liz Rice, O'Reilly, 2022",
    linkUrl: 'https://isovalent.com/data/liz-rice-what-is-ebpf.pdf',
  },
  {
    image: systemsPerformance,
    alt: 'Systems Performance: Enterprise and the Cloud, 2nd Edition, Brendan Gregg, Addison-Wesley Professional Computing Series, 2020',
    linkUrl: 'http://www.brendangregg.com/systems-performance-2nd-edition-book.html',
  },
  {
    image: bpfPerformanceTools,
    alt: 'BPF Performance Tools, Brendan Gregg, Addison-Wesley Professional Computing Series, Dec 2019',
    linkUrl: 'http://www.brendangregg.com/bpf-performance-tools-book.html',
  },
  {
    image: linuxObservabilityWithBpf,
    alt: "Linux Observability with BPF, David Calavera, Lorenzo Fontana, O'Reilly, Nov 2019",
    linkUrl: 'https://www.oreilly.com/library/view/linux-observability-with/9781492050193/',
  },
];

const Books = () => (
  <section className="hero safe-paddings mt-32 lg:mt-24 md:mt-16 sm:mt-14">
    <div className="container flex flex-col items-center px-3">
      <h2 className="heading-10xl text-center font-semibold leading-tight">
        Explore books on eBPF from the industry experts
      </h2>

      <ul className="mt-16 grid w-full  grid-cols-4 items-center justify-center gap-14 lg:mt-14 lg:gap-8 md:mt-11 md:flex-wrap sm:mt-8 sm:grid-cols-2 xs:grid-cols-1">
        {items.map(({ image, alt, linkUrl }, index) => (
          <li
            className="group relative m-auto drop-shadow-book xs:flex xs:max-w-[256px] xs:justify-center"
            key={index}
          >
            <img
              className="w-full rounded"
              src={image}
              alt={alt}
              width={256}
              height={334}
              loading="lazy"
            />

            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center rounded bg-transparent transition-colors duration-200 group-hover:bg-[#000000]/[0.3] ">
              <Button
                to={linkUrl}
                className="py-[16px] px-[28px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                target="_blank"
                rel="noreferrer noopener"
                theme="primary-yellow-filled"
              >
                Learn More
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Books;
