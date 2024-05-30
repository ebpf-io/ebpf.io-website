import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import hexagonBg from './images/hexagon-background.svg';
import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';
import shape3 from './images/shape-3.svg';
import shape4 from './images/shape-4.svg';

const twitterCards = [
  {
    avatar: (
      <StaticImage
        className="h-11 w-11"
        src="./images/jean.jpg"
        alt="Jean userpic"
        width={44}
        height={44}
        style={{ borderRadius: '50%' }}
        loading="lazy"
      />
    ),
    name: '✨ Jean Yang ✨',
    nick: '@jeanqasaur',
    text: `Excited for <marker> #eBPFSummit! </marker> I'll be speaking alongside <marker> @brendangregg </marker> and the CTF eBee. 🐝My talk will be about what the world will look when eBPF silently powers everything. The event will be virtual 9/13 if you'd like to join us! <marker> https://ebpf.io/summit-2023/ <marker/>`,
    date: 'Aug 9, 2023',
    url: 'https://x.com/jeanqasaur/status/1689320196497162240',
  },
  {
    avatar: (
      <StaticImage
        className="h-11 w-11"
        src="./images/dan.jpg"
        alt="Danner finnerman userpic"
        width={44}
        height={44}
        style={{ borderRadius: '50%' }}
        loading="lazy"
      />
    ),
    name: 'Daniel Finnerman',
    nick: '@thebsdbox',
    text: `Just watched <marker> @rawkode</marker> solve the <marker> @eBPFsummit</marker> CTF challenge (on HARDMODE) in around 15 mins. 😂`,
    time: '11:39 AM',
    date: 'Sep 5, 2023',
    url: 'https://x.com/thebsdbox/status/1699009295734436261',
  },
  {
    avatar: (
      <StaticImage
        className="h-11 w-11"
        src="./images/shubham.jpg"
        alt="Shubham userpic"
        width={44}
        height={44}
        style={{ borderRadius: '50%' }}
        loading="lazy"
      />
    ),
    name: 'Shubham',
    nick: '@ShubhamInTech',
    text: `5 days to go for the <marker> @eBPFsummit </marker> lessgoo! what are the talks y'all are most excited abouttt? for me, it has to be THE <marker>@brendangregg</marker> #ebpf`,
    time: '3:07 PM',
    date: 'Sep 7, 2023',
    url: 'https://x.com/ShubhamInTech/status/1699785414570357147',
  },
];

const shapes = [shape1, shape2, shape3, shape4];
const LastYear = ({ title, description, link, items }) => (
  <section
    className="relative overflow-hidden pb-32 pt-40 after:absolute after:left-0 after:top-0 after:-z-20 after:h-full after:w-full after:bg-gray-98 lg:pt-32 md:pb-20 md:pt-20"
    id="last-year-summit"
  >
    <div className="container">
      <div className="grid grid-cols-2 items-start gap-x-8 gap-y-10 lg:grid-cols-1">
        <div className="flex max-w-[546px] flex-col items-start">
          <h2 className="heading-9xl font-bold leading-none">{title}</h2>
          <p className="mt-5 text-left text-xl leading-normal md:text-lg">{description}</p>
          <Link
            className="mt-7 text-lg leading-none"
            theme="underline"
            to={link.url}
            target={link.target}
          >
            {link.title}
          </Link>
        </div>
        <div className="relative pb-[56.25%]">
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src="https://www.youtube.com/embed/5pvDi6y6LrM"
            frameBorder="0"
            width={592}
            height={333}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Embedded YouTube"
            allowFullScreen
          />
        </div>
      </div>
      <div className="relative">
        <img
          className="absolute left-1/2 top-1/2 -z-10 h-[1015px] w-[1501px] max-w-none translate-x-[calc(-50%+3rem)] translate-y-[calc(-50%-13.5rem)] md:hidden"
          width={1501}
          height={1015}
          loading="lazy"
          src={hexagonBg}
          alt=""
          aria-hidden
        />
        <ul className="mx-auto mt-[8.5rem] grid max-w-[760px] grid-cols-4 place-items-center gap-x-10 gap-y-8 lg:mt-32 lg:max-w-[740px] lg:gap-x-[82px] md:mt-28 md:max-w-[400px] md:grid-cols-2 md:gap-x-8 sm:mt-24">
          {items.map(({ number, unit, textColor, numberColor }, index) => {
            const isTextBlack = textColor === 'black';
            const isNumberOrange = numberColor === 'orange';
            return (
              <li className="relative max-w-[160px] lg:min-w-[140px]" key={index}>
                <img
                  src={shapes[index]}
                  alt=""
                  width={160}
                  height={188}
                  loading="lazy"
                  aria-hidden
                />
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col space-y-0.5 text-center">
                  <span
                    className={clsx(
                      'text-[64px] font-semibold leading-none lg:text-5xl md:text-6xl xs:text-5xl',
                      isNumberOrange ? 'text-primary-orange' : 'text-white'
                    )}
                  >
                    {number}
                  </span>
                  <span
                    className={clsx(
                      'text-base font-medium leading-none',
                      isTextBlack ? 'text-black' : 'text-white'
                    )}
                  >
                    {unit}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-32 grid grid-cols-3 place-items-start gap-8 lg:mt-28 lg:grid-cols-1 md:mt-24 sm:mt-20">
        {twitterCards.map(({ avatar, name, nick, text, time, date, url }, index) => (
          <Link
            className="flex min-h-[230px] w-full flex-col justify-start rounded-lg border-[1.5px] border-gray-94 bg-white p-8 lg:p-7"
            key={index}
            to={url}
            target="_blank"
          >
            <div className="flex items-center space-x-3 self-start">
              {avatar}
              <div className="flex flex-col">
                <span className="font-bold">{name}</span>
                <span className="mt-1 text-gray-20">{nick}</span>
              </div>
            </div>
            <p
              className="with-marker-blue mt-5 text-lg leading-normal"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <div className="mt-4 flex space-x-5 self-start font-sans font-normal leading-normal text-gray-50">
              <time>{time}</time>
              <time className="relative before:absolute before:-left-3 before:top-1/2 before:block before:h-[3px] before:w-[3px] before:-translate-y-1/2 before:rounded-full before:bg-gray-50">
                {date}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
LastYear.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
      textColor: PropTypes.oneOf(['black', 'white']).isRequired,
      numberColor: PropTypes.oneOf(['white', 'orange']).isRequired,
    })
  ).isRequired,
};

export default LastYear;
