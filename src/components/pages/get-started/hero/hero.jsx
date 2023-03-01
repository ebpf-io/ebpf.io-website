import clsx from 'clsx';
import React from 'react';

import Link from 'components/shared/link/link';

import BookSvg from './images/book.inline.svg';
import LabSvg from './images/lab.inline.svg';
import VideoSvg from './images/video.inline.svg';

const items = [
  {
    Image: LabSvg,
    title: 'Try the Lab',
    description:
      'Borrowing the opensnoop example from Liz Rice’s report, this lab teaches you to handle an eBPF tool, watch it loading its components, and even add your own tracing into the source eBPF code.',
    cardColorClassName: 'bg-secondary-blue-1-light border-secondary-blue-1',
    dashedBorderClassName: 'border-secondary-blue-2',
    linkUrl:
      'https://play.instruqt.com/embed/isovalent/tracks/ebpf-getting-started?token=em_9nxLzhlV41gb3rKM&show_challenges=true',
    linkTarget: '_blank',
  },
  {
    Image: BookSvg,
    title: 'Read the Books',
    description:
      'Read the “What is eBPF?” and “Learning eBPF” O’Reilly Books by Liz Rice or BPF Performance Tools by Brendan Gregg to get started. Throughout the books, you will learn what eBPF and why it is so powerful, the capabilities it provides.',
    cardColorClassName: 'bg-secondary-green-1-light border-secondary-green-1',
    dashedBorderClassName: 'border-secondary-green-2',
    linkUrl: '#books',
    linkTarget: '_self',
  },
  {
    Image: VideoSvg,
    title: 'Watch the video',
    description:
      'Dive into the history of eBPF with this talk from John Fastabend. Starting in the “early days” of 2014, it covers the main projects, companies, and players that influenced the landscape of Linux networking at the time and how they enabled the creation of eBPF.',
    cardColorClassName: 'bg-secondary-red-1-light border-secondary-red-1',
    dashedBorderClassName: 'border-secondary-red-2',
    linkUrl: 'https://www.youtube.com/watch?v=sYxUOKi3Q00',
    linkTarget: '_blank',
  },
];

const Hero = () => (
  <section className="hero safe-paddings mt-20 lg:mt-16 md:mt-14 sm:mt-11">
    <div className="container flex flex-col items-center">
      <h1 className="heading-10xl text-center font-semibold leading-tight">
        Get Started with eBPF
      </h1>

      <ul className="mt-16 grid grid-cols-3 gap-8 lg:mt-12 lg:gap-7 md:mt-10 md:grid-cols-1 md:gap-6">
        {items.map(
          (
            {
              Image,
              title,
              description,
              cardColorClassName,
              dashedBorderClassName,
              linkUrl,
              linkTarget,
            },
            index
          ) => (
            <li
              className={clsx(
                cardColorClassName,
                'flex flex-col justify-between rounded-lg border p-8 sm:p-6'
              )}
              key={index}
            >
              <div>
                <Image className="h-14 w-14" />

                <h3 className="mt-5 font-sans text-4xl font-semibold leading-snug lg:text-3xl md:text-4xl sm:mt-4 sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-2.5 text-lg lg:mt-2.5 lg:text-sm md:text-lg sm:text-base">
                  {description}
                </p>
              </div>

              <Link
                className={clsx(
                  dashedBorderClassName,
                  'mt-7 border-t border-dashed pt-7 text-sm font-semibold uppercase sm:mt-5 sm:pt-5'
                )}
                to={linkUrl}
                target={linkTarget}
                theme="black"
                el={linkTarget === '_blank' ? 'noreferrer noopener' : null}
              >
                {title}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  </section>
);

export default Hero;
