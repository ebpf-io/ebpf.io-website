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
        width={280}
        height={364}
        loading="lazy"
      />
    ),
    linkUrl: 'https://isovalent.com/ebpf/#form',
  },
  {
    image: (
      <StaticImage
        className="w-full rounded"
        imgClassName="w-full"
        src="./images/lern-epf.jpg"
        alt="Learning eBPF O'Reilly book by Liz Rice"
        width={280}
        height={364}
        loading="lazy"
      />
    ),
    linkUrl: 'https://isovalent.com/learning-ebpf/#form',
  },
  {
    image: (
      <StaticImage
        className="w-full rounded"
        imgClassName="w-full"
        src="./images/security.jpg"
        alt="O’Reilly Report Security Observability with eBPF"
        width={280}
        height={364}
        loading="lazy"
      />
    ),
    linkUrl: 'https://isovalent.com/ebpf-security/#form',
  },
];

const Books = () => (
  <section className="hero safe-paddings mt-32 lg:mt-24 md:mt-16 sm:mt-14" id="books">
    <div className="container flex flex-col items-center px-3">
      <h2 className="heading-8xl text-center font-semibold leading-tight">Explore books on eBPF</h2>

      <ul className="mt-16 flex w-full flex-wrap justify-center gap-8 lg:mt-14 lg:gap-6 md:mt-11 sm:mt-8">
        {items.map(({ image, linkUrl }, index) => (
          <li
            className="group relative max-w-[280px] drop-shadow-book lg:max-w-[220px] xs:flex xs:justify-center"
            key={index}
          >
            <Link to={linkUrl} target="_blank" rel="noreferrer noopener">
              {image}

              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center rounded bg-transparent transition-colors duration-200 group-hover:bg-[#000000]/[0.3] ">
                <Button
                  className="py-4 px-7 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
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
