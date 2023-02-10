import React from 'react';

import Link from 'components/shared/link';

import ArticleIcon from './images/article.inline.svg';
import FollowIcon from './images/follow.inline.svg';
import NewsIcon from './images/news.inline.svg';

const items = [
  {
    icon: NewsIcon,
    title: 'Explore previous releases of eCHO News',
    description: 'Full archive of all eCHO News issues is available',
    links: [
      {
        text: 'Explore archive',
        to: '#archive',
      },
    ],
  },
  {
    icon: FollowIcon,
    title: 'eCHO News is curated by Bill Mulligan',
    description: 'Bill Mulligan is working to grow the eBPF and Cilium communities',
    links: [
      {
        text: 'Follow on Twitter',
        to: 'https://twitter.com/breakawaybilly',
        target: '_blank',
      },
    ],
  },
  {
    icon: ArticleIcon,
    title: 'Interested in submitting an article?',
    description:
      'Send it on Slack, submit the form, or email <a href="mailto:bill@isovalent.com">bill@ebpf.io</a>',
    links: [
      {
        text: 'Send on Slack',
        to: 'https://cilium.herokuapp.com/',
        target: '_blank',
      },
      {
        text: 'Submit form',
        to: 'https://cilium.io/telling-story/',
        target: '_blank',
      },
    ],
  },
];

const Cards = () => (
  <section className="cards safe-paddings mt-32 lg:mt-24 sm:mt-20">
    <ul className="container flex divide-x divide-dashed divide-gray-80 sm:max-w-lg sm:flex-col sm:justify-center sm:divide-x-0 sm:divide-y">
      {items.map(({ icon: Icon, title, description, links }, index) => (
        <li
          className="flex flex-col pl-14 pr-16 first:pl-0 last:pr-0 lg:px-10 md:px-6 sm:items-center sm:px-0 sm:py-6 sm:text-center sm:first:pt-0 sm:last:pb-0"
          key={index}
        >
          <Icon className="h-14 w-14" />
          <h3 className="mt-5 max-w-[300px] font-sans text-3xl font-semibold leading-snug lg:text-2xl md:text-xl sm:max-w-none">
            {title}
          </h3>
          <p
            className="mt-2.5 mb-[26px] max-w-[288px] sm:max-w-none [&_a]:font-semibold [&_a]:transition-colors [&_a]:duration-200 [&_a]:hover:text-gray-40"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <ul className="mt-auto flex space-x-4">
            {links.map(({ text, to, target }, index) => (
              <li
                className="relative text-sm font-semibold uppercase leading-none tracking-wider before:absolute before:top-1/2 before:-left-2.5 before:block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-90 first:before:hidden lg:text-[13px] md:text-xs"
                key={index}
              >
                <Link
                  className="font-sans"
                  theme="black"
                  to={to}
                  target={target || null}
                  rel={target ? 'noopener noreferrer' : null}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
);

export default Cards;
