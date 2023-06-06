import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import ConnectingIcon from './images/connecting.inline.svg';
import SharingIcon from './images/sharing.inline.svg';
import TrendingIcon from './images/trending.inline.svg';

const cardItems = [
  {
    title: 'Connecting end-users',
    description:
      'The eBPF Summit brings together end-user and the eBPF developer community for two days of exciting content all around eBPF. ',
    iconName: 'connecting',
  },
  {
    title: 'Sharing experience',
    description:
      'Just like last year, we will hear from both end-users sharing their experience using eBPF as well as developers actively working on eBPF and eBPF projects.',
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
  <section className="mt-14 md:mt-10" id="information">
    <Container>
      <Heading className="text-center" tag="h2" size="4xl">
        About conference
      </Heading>
      <p className="mt-5 text-center text-xl leading-normal md:mt-3">
        Back by popular demand, we’re excited to announce the eBPF Summit 2022
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
              <Heading
                tag="h3"
                className="mt-6 text-2xl leading-tight lg:text-xl md:mt-4 md:text-xl"
              >
                {title}
              </Heading>
              <p className="mt-2.5 text-lg leading-normal lg:text-base">{description}</p>
            </article>
          );
        })}
      </div>
    </Container>
  </section>
);

export default Information;
