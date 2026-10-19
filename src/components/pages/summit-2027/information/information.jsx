import React from 'react';

import ConnectingIcon from 'components/pages/summit-2024/information/images/connecting.inline.svg';
import SharingIcon from 'components/pages/summit-2024/information/images/sharing.inline.svg';
import TrendingIcon from 'components/pages/summit-2024/information/images/trending.inline.svg';

const cardItems = [
  {
    title: 'See what’s really happening',
    description:
      'Trace processes, files and network calls from inside the kernel, with the context to tell normal behavior from an attack.',
    iconName: 'connecting',
  },
  {
    title: 'Detect threats at runtime',
    description:
      'Learn how people and projects use eBPF to catch suspicious behavior while it’s happening, not hours later in a log review.',
    iconName: 'sharing',
  },
  {
    title: 'Enforce policy where attacks happen',
    description:
      'Explore how eBPF blocks malicious actions right at the kernel hook, and where eBPF security is heading next.',
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
      <p className="mx-auto mt-5 max-w-[860px] text-center text-xl leading-normal md:mt-3">
        Technical deep dives, hands-on CTF challenges and big-picture talks on where eBPF security
        is heading. Bring your questions, share what you’ve learned, and leave with new ways to
        defend what you run.
      </p>
      <div className="mt-14 mb-14 flex space-x-8 lg:space-x-6 md:mt-10 md:flex-col md:space-x-0 md:space-y-6">
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
    </div>
  </section>
);

export default Information;
