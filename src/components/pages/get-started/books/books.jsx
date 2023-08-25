import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button/button';
import Link from 'components/shared/link/link';

const items = [
  {
    image: (
      <StaticImage
        className="w-full rounded"
        imgClassName="w-full"
        src="./images/what-is-ebpf.jpg"
        alt="What is eBPF? Liz Rice, O'Reilly, 2022"
        width={216}
        height={282}
        loading="lazy"
      />
    ),
    linkUrl: 'https://isovalent.com/ebpf/#form',
    linkText: 'What is eBPF? Liz Rice, O’Reilly, 2022',
  },
  {
    image: (
      <StaticImage
        className="w-full rounded"
        imgClassName="w-full"
        src="./images/systems-performance.jpg"
        alt="Systems Performance: Enterprise and the Cloud, 2nd Edition, Brendan Gregg, Addison-Wesley Professional Computing Series, 2020"
        width={216}
        height={282}
        loading="lazy"
      />
    ),
    linkUrl: 'http://www.brendangregg.com/systems-performance-2nd-edition-book.html',
    linkText:
      'Systems Performance: Enterprise and the Cloud, 2nd Edition, Brendan Gregg, Addison-Wesley Professional Computing Series, 2020',
  },
  {
    image: (
      <StaticImage
        className="w-full rounded"
        imgClassName="w-full"
        src="./images/bpf-performance-tools.jpg"
        alt="BPF Performance Tools, Brendan Gregg, Addison-Wesley Professional Computing Series, Dec 2019"
        width={216}
        height={282}
        loading="lazy"
      />
    ),
    linkUrl: 'http://www.brendangregg.com/bpf-performance-tools-book.html',
    linkText:
      'BPF Performance Tools, Brendan Gregg, Addison-Wesley Professional Computing Series, Dec 2019',
  },
  {
    image: (
      <StaticImage
        className="w-full rounded"
        imgClassName="w-full"
        src="./images/linux-observability-with-bpf.jpg"
        alt="Linux Observability with BPF, David Calavera, Lorenzo Fontana, O'Reilly, Nov 2019"
        width={216}
        height={282}
        loading="lazy"
      />
    ),
    linkUrl: 'https://www.oreilly.com/library/view/linux-observability-with/9781492050193/',
    linkText: 'Linux Observability with BPF, David Calavera, Lorenzo Fontana, O’Reilly, Nov 2019',
  },
  {
    image: (
      <StaticImage
        className="w-full rounded"
        imgClassName="w-full"
        src="./images/lern-epf.jpg"
        alt="Learning eBPF O'Reilly book by Liz Rice"
        width={216}
        height={282}
        loading="lazy"
      />
    ),
    linkUrl: 'https://isovalent.com/learning-ebpf/#form',
    linkText: 'Learning eBPF O’Reilly book by Liz Rice',
  },
];

const Books = () => (
  <section className="hero safe-paddings mt-32 lg:mt-24 md:mt-16 sm:mt-14" id="books">
    <div className="container flex flex-col items-center px-3">
      <h2 className="heading-8xl text-center font-semibold leading-tight">
        Explore books on eBPF from the industry experts
      </h2>

      <ul className="mt-16 grid w-full grid-cols-5 items-center justify-center gap-8 lg:mt-14 lg:gap-6 md:mt-11 md:flex-wrap sm:mt-8 sm:grid-cols-2 xs:grid-cols-1">
        {items.map(({ image, linkUrl, linkText }, index) => (
          <li
            className="group relative m-auto drop-shadow-book xs:flex xs:max-w-[256px] xs:justify-center"
            key={index}
          >
            <Link to={linkUrl} target="_blank" rel="noreferrer noopener">
              {image}
              <span className="sr-only">{linkText}</span>
              <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded bg-transparent transition-colors duration-200 group-hover:bg-[#000000]/[0.3] ">
                <Button
                  className="px-7 py-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  theme="primary-yellow-filled"
                >
                  Learn More
                </Button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Books;
