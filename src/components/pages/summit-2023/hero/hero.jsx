import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import SlackIcon from 'icons/slack.inline.svg';

import illustration from './images/illustration.svg';

const icons = {
  slack: SlackIcon,
};

const Hero = ({ date, title, description, ctaButtons }) => (
  <section className="relative lg:overflow-hidden">
    <div className="absolute right-0 -top-20 w-[200px] lg:block md:-right-4 sm:-top-[120px] sm:-right-[81px]">
      <StaticImage src="./images/drop-1.jpg" alt="" loading="eager" aria-hidden />
    </div>
    <div className="absolute -top-3 left-0 w-[128px] 2xl:-left-4 2xl:top-12 lg:-top-3 md:-left-4 sm:-left-14 sm:-top-[28px] sm:hidden">
      <StaticImage src="./images/drop-2.jpg" alt="" loading="eager" aria-hidden />
    </div>
    <div className="absolute top-96 -left-10 w-[330px] 2xl:top-[450px] 2xl:-left-20 2xl:w-[280px] lg:top-80 lg:left-0 lg:block md:top-64 md:-left-20 sm:hidden">
      <StaticImage src="./images/honey.jpg" alt="" loading="eager" aria-hidden />
    </div>
    <div className="container relative pt-28 pb-6 lg:w-[95%] lg:pb-0 md:pt-24">
      <div className="max-w-[644px] lg:max-w-full lg:text-center">
        <time
          className="with-orange-highlight inline-block rounded-md border-2 border-primary-orange border-opacity-30 bg-white p-2 text-center font-bold uppercase leading-none text-black"
          dangerouslySetInnerHTML={{ __html: date }}
        />

        <h1 className="mt-7 text-[80px] font-bold leading-tight sm:text-5xl">{title}</h1>
        <div
          className="with-link-primary mt-4 max-w-lg space-y-4 text-xl font-semibold lg:mx-auto lg:max-w-xl md:max-w-lg md:space-y-4 md:text-lg sm:max-w-sm"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="mt-9 flex space-x-5 lg:justify-center sm:flex-col sm:space-x-0 sm:space-y-3 xs:w-full">
          {ctaButtons.map(({ title, url, theme, iconName }, index) => {
            const Icon = icons[iconName];
            return (
              <Button
                className="flex items-center space-x-3 rounded-lg px-5 sm:flex-1 xs:px-3.5"
                size="sm"
                to={url}
                theme={theme}
                key={index}
              >
                {Icon && <Icon className="mr-3 h-5 w-auto" />}
                {title}
              </Button>
            );
          })}
        </div>
      </div>
      <img
        src={illustration}
        className="absolute top-[4.5rem] right-8 h-auto w-[648px] xl:top-24 xl:right-0 xl:w-[490px] lg:static lg:mt-12 lg:w-full"
        alt="Illustration"
      />
    </div>
  </section>
);

Hero.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ctaButtons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      theme: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Hero;
