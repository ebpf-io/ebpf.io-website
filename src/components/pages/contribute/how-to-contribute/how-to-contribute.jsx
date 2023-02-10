import React from 'react';

import Link from 'components/shared/link/link';

import FileIcon from './images/file.inline.svg';
import GearIcon from './images/gear.inline.svg';
import PenIcon from './images/pen.inline.svg';

const items = [
  {
    icon: FileIcon,
    title: 'Contribute to an eBPF project',
    description:
      '<p>The list of eBPF-based projects is long and growing. It will be simple to find a project that sparks interest. Check out the eBPF landscape to see an overview of eBPF-based projects.</p><p>Many of the listed eBPF-based projects maintain a list of good-first-issue-labeled tasks which are scoped to not require extensive project specific knowledge and provide a great opportunity to get hands-on quickly.</p>',
    links: [
      {
        text: 'eBPF landscape',
        to: 'https://ebpf.io/projects',
      },
    ],
  },
  {
    icon: GearIcon,
    title: 'Contribute to the eBPF development toolchains',
    description:
      '<p>Even though the Linux kernel provides minimal libraries and APIs to use eBPF directly, the majority of projects leverage an eBPF development toolchain to simplify use of eBPF and share common code among other projects.</p><p>Check out eBPF development toolchains for a frequently updated list of projects in this space. You will find information on how to get involved on each project website directly.</p>',
    links: [
      {
        text: 'eBPF development toolchains',
        to: 'https://ebpf.io/what-is-ebpf#toolchains',
      },
    ],
  },
  {
    icon: PenIcon,
    title: 'Contribute to ebpf.io',
    description:
      '<p>Do you have a writing talent? Are you good with diagrams? The content of the ebpf.io website is licensed under a Creative Commons Attribution 4.0 International License. If you want to get involved, visit the GitHub repository. Make sure to also join the #ebpf-website Slack channel to get in touch with the team working on the documentation. Share what you have learned by improving the documentation or write additional tutorials.</p>',
    links: [
      {
        text: 'License',
        to: 'https://creativecommons.org/licenses/by/4.0/',
      },
      {
        text: 'GitHub repository',
        to: 'https://github.com/ebpf-io/ebpf.io-website',
      },
      {
        text: 'Slack',
        to: 'https://ebpf.io/slack',
      },
    ],
  },
];

const HowToContribute = () => (
  <section className="how-to-contribute safe-paddings mt-28 mb-36 xl:mb-32 lg:mt-20 lg:mb-28 md:mt-16 md:mb-20">
    <div className="container">
      <ul className="flex divide-x divide-dashed divide-gray-80 md:flex-col md:divide-x-0 md:divide-y">
        {items.map(({ icon: Icon, title, description, links }, index) => (
          <li
            className="flex-1 px-14 first:pl-0 last:pr-0 xl:px-12 lg:px-10 md:px-0 md:py-8 md:first:pt-0 md:last:pb-0"
            key={index}
          >
            <Icon className="h-14 w-14 lg:h-12 lg:w-12" />
            <h3 className="mt-5 font-sans text-3xl font-semibold leading-tight lg:text-2xl md:text-xl">
              {title}
            </h3>
            <div className="mt-3 text-sm" dangerouslySetInnerHTML={{ __html: description }} />
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-3">
              {links.map(({ text, to }, index) => (
                <li
                  className="relative font-semibold uppercase leading-none before:absolute before:top-1/2 before:-right-2.5 before:block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-90 last:before:hidden"
                  key={index}
                >
                  <Link
                    className="text-[13px] leading-none tracking-wider"
                    theme="black"
                    size="sm"
                    to={to}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HowToContribute;
