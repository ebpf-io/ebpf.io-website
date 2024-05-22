import React from 'react';

import Banner from './banner';
import ConnectingIcon from './images/connecting.inline.svg';
import SharingIcon from './images/sharing.inline.svg';
import TrendingIcon from './images/trending.inline.svg';

const cardItems = [
  {
    title: 'Connecting technologists',
    description:
      'This year’s summit is a single-day virtual event diving into the technology that’s powering the most exciting new infrastructure tools.',
    iconName: 'connecting',
  },
  {
    title: 'Sharing ideas',
    description:
      'You’ll hear about how people and projects leverage eBPF today to solve engineering problems, and how eBPF itself is evolving and growing.',
    iconName: 'sharing',
  },
  {
    title: 'Trending technologies',
    description:
      'eBPF is one of the most talked about technologies in our industry - enabling a new generation of networking, observability and security tools.',
    iconName: 'trending',
  },
];

const icons = {
  connecting: ConnectingIcon,
  sharing: SharingIcon,
  trending: TrendingIcon,
};

const Information = () => (
  <section className="mt-16 md:mt-10" id="information">
    <div className="container">
      <h2 className="heading-9xl text-center font-bold leading-none">About the conference</h2>
      <p className="mt-5 text-center text-xl leading-normal md:mt-3">
        Back by popular demand, we’re excited to announce the eBPF Summit 2023
      </p>
      <div className="mt-14 flex space-x-8 lg:space-x-6 md:mt-10 md:flex-col md:space-x-0 md:space-y-6">
        {cardItems.map(({ iconName, title, description }, index) => {
          const Icon = icons[iconName];
          return (
            <article
              className="flex flex-1 flex-col items-start rounded-lg border border-gray-94 p-8 lg:p-6"
              key={index}
            >
              <Icon className="h-auto w-14 shrink-0" />
              <h3 className="mt-6 text-2xl font-bold leading-tight lg:text-xl md:mt-4 md:text-xl">
                {title}
              </h3>
              <p className="mt-2.5 text-lg leading-normal lg:text-base">{description}</p>
            </article>
          );
        })}
      </div>
      <Banner />
    </div>
  </section>
);

export default Information;
