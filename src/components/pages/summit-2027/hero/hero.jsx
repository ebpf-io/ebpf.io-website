import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import FormModal from 'components/shared/form-modal';
import SlackIcon from 'icons/slack.inline.svg';

import illustration from './images/illustration.webp';
import pattern from './images/pattern.svg';

const icons = {
  slack: SlackIcon,
};

const Hero = ({ date, title, tagline, time, description, ctaButtons, splashEventId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="container relative pt-28 pb-20 lg:w-[95%] lg:pt-16 lg:pb-8 md:pt-8">
        <div className="relative z-10 flex max-w-[600px] flex-col 2xl:max-w-[580px] lg:max-w-full lg:text-center">
          <div className="flex items-center gap-x-5 lg:mx-auto lg:flex-col lg:gap-x-0 lg:gap-y-4">
            <time
              className="with-orange-highlight inline-block rounded-md border-2 border-primary-orange border-opacity-30 bg-white p-2 text-center font-bold uppercase leading-none text-black"
              dangerouslySetInnerHTML={{ __html: date }}
            />
            <span className="text-sm uppercase" dangerouslySetInnerHTML={{ __html: time }} />
          </div>
          <h1 className="mt-7 text-11xl font-bold leading-tight sm:text-7xl">{title}</h1>
          {tagline && (
            <p className="mt-1 text-4xl font-medium leading-tight text-gray-30 md:text-3xl sm:text-2xl">
              {tagline}
            </p>
          )}
          <div
            className="with-link-primary mt-4 max-w-lg space-y-4 font-sans text-xl font-normal lg:mx-auto lg:max-w-xl md:max-w-lg md:space-y-4 md:text-lg sm:max-w-sm"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="mt-9 flex flex-wrap gap-5 lg:justify-center sm:flex-col sm:gap-3 xs:w-full">
            {ctaButtons.map(({ title, url, theme, iconName, target, isRegister }, index) => {
              const Icon = icons[iconName];

              return (
                <Button
                  className="flex items-center space-x-3 rounded-lg px-6 leading-none sm:flex-1 xs:px-3.5"
                  size="sm"
                  type={isRegister ? 'button' : undefined}
                  to={isRegister ? null : url}
                  target={target}
                  theme={theme}
                  key={index}
                  onClick={isRegister ? openModal : undefined}
                >
                  {Icon && <Icon className="mr-2.5 h-5 w-auto" />}
                  {title}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="absolute -right-16 top-[calc(50%+16px)] w-[640px] -translate-y-1/2 2xl:-right-8 2xl:w-[580px] xl:right-0 xl:w-[540px] lg:relative lg:right-auto lg:top-auto lg:mx-auto lg:mt-40 lg:w-full lg:max-w-[600px] lg:translate-y-0 sm:mt-28">
          <img
            src={pattern}
            className="absolute left-[13%] top-[-67%] -z-10 h-auto w-[125%] max-w-none"
            alt=""
            width={1043}
            height={541}
            loading="eager"
            aria-hidden
          />
          <img
            src={illustration}
            className="relative h-auto w-full"
            alt="eBPF Summit 2027 lettering made of honey with a Security Edition stamp"
            width={1600}
            height={702}
            loading="eager"
          />
        </div>
      </div>
      <FormModal
        title="Register for eBPF Summit 2027"
        isOpen={isOpen}
        closeModal={closeModal}
        splashEventId={splashEventId}
      />
    </section>
  );
};

Hero.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  ctaButtons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
      theme: PropTypes.string.isRequired,
      iconName: PropTypes.string,
      target: PropTypes.string,
      isRegister: PropTypes.bool,
    })
  ).isRequired,
  splashEventId: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  tagline: null,
};

export default Hero;
