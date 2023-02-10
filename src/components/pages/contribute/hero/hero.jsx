import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Link from 'components/shared/link';

import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';

const links = [
  {
    text: 'Git trees',
    to: 'https://git.kernel.org/?q=BPF+Group',
  },
  {
    text: 'Linux kernel eBPF runtime',
    to: '/infrastructure/#linux-kernel',
  },
];

const Hero = () => (
  <section className="hero safe-paddings mt-20 lg:mt-16 md:mt-12">
    <div className="container">
      <div className="mx-auto max-w-[790px] text-center">
        <h1 className="heading-10xl font-semibold leading-tight">How to Contribute to eBPF</h1>
        <p className="mt-3">
          eBPF consists of many communities including the eBPF runtime in the Linux kernel, various
          development SDKs and libraries, a series of large projects using eBPF, and a wide set of
          smaller projects and tools. There are therefore many ways to contribute to the eBPF
          community and get involved. The following list of ideas can serve as a starting point on
          how you can get involved and contribute to the community.
        </p>
      </div>
      <div
        className="mt-20 flex rounded-lg lg:mt-16 lg:flex-col md:mt-12"
        style={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.18)' }}
      >
        <StaticImage
          class="shrink-0 rounded-l-lg lg:h-auto lg:w-full lg:max-w-full lg:rounded-t-lg lg:rounded-bl-none"
          imgClassName="rounded-l-lg lg:rounded-t-lg lg:rounded-bl-none"
          src="./images/contribute-hero.jpg"
          width={592}
          height={481}
          quality={95}
          loading="eager"
          objectPosition="20% 20%"
          alt="Maintainers of the eBPF runtime in the Linux kernel"
        />
        <div
          className="relative overflow-hidden rounded-r-lg p-14 text-white lg:rounded-b-lg lg:rounded-tr-none lg:p-12 md:px-10 sm:px-8 sm:py-10 xs:px-6 xs:py-8"
          style={{
            background:
              'linear-gradient(64.7deg, rgba(255, 238, 153, 0.16) -6.14%, rgba(255, 238, 153, 0) 61.85%), #1A1A1A',
          }}
        >
          <img
            className="absolute top-0 right-0 md:-right-10 sm:-right-14 sm:-top-6 xs:hidden"
            src={shape1}
            alt=""
            width={171}
            height={196}
            aria-hidden
          />
          <img
            className="absolute bottom-0 right-0 md:-right-10"
            src={shape2}
            alt=""
            width={332}
            height={78}
            aria-hidden
          />
          <h2 className="max-w-[460px] font-sans text-[34px] font-semibold leading-tight lg:max-w-[90%] lg:text-6xl md:text-5xl xs:max-w-none">
            Contribute to the eBPF runtime in the Linux kernel
          </h2>
          <div className="mt-4 text-sm">
            <p>
              The Linux kernel community is maintaining separate Git trees for the eBPF subsystem to
              manage all developer contributions. The trees are maintained by:
            </p>
            <ul className="mt-2.5 inline-flex space-x-6 xs:flex-col xs:space-x-0 xs:space-y-2">
              <li className="relative pl-3.5 before:absolute before:top-2 before:left-0 before:block before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary-yellow">
                <span className="font-semibold">Alexei Starovoitov</span>, Facebook
              </li>
              <li className="relative pl-3.5 before:absolute before:top-2 before:left-0 before:block before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary-yellow">
                <span className="font-semibold">Daniel Borkmann</span>, Cilium/Isovalent
              </li>
            </ul>
            <p className="mt-2.5">
              Working on the eBPF runtime can be incredibly rewarding as it builds the foundation
              for software being written that runs on millions of systems and devices. Work includes
              a wide range of topics from adding support to additional hooks, adding new program
              types, improvements to the eBPF verifier, adding JIT support for additional CPU
              architectures, extending the set of BPF helpers, adding new test cases to BPF's test
              infrastructure, or improvements to bpftool and libbpf.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-4">
              {links.map(({ text, to }, index) => (
                <li
                  className="relative text-[13px] font-semibold uppercase leading-none before:absolute before:top-1/2 before:-right-3 before:block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-30 last:before:hidden lg:text-[13px]"
                  key={index}
                >
                  <Link
                    className="tracking-wider"
                    theme="white"
                    target="_blank"
                    rel="noreferrer noopener"
                    to={to}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
