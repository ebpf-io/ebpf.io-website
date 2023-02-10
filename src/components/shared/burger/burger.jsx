import clsx from 'clsx';
import { LazyMotion, m, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

const ANIMATION_DURATION = 0.2;

const Burger = ({ className: additionalClassName, isToggled, onClick }) => (
  <LazyMotion features={domAnimation}>
    <m.button
      className={clsx('relative -mr-2 h-10 w-10', additionalClassName)}
      type="button"
      aria-label={isToggled ? 'Close menu' : 'Open menu'}
      animate={isToggled ? 'toggled' : 'initial'}
      onClick={onClick}
    >
      <m.span
        className="absolute top-[11px] left-[8px] block h-0.5 w-6 rounded-full bg-black"
        variants={{
          initial: {
            top: 11,
            display: 'block',
            transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
          },
          toggled: {
            top: 17,
            transition: { duration: ANIMATION_DURATION },
            transitionEnd: { display: 'none' },
          },
        }}
      />
      <m.span
        className="absolute top-[19px] left-[8px] block h-0.5 w-6 rounded-full bg-black"
        variants={{
          initial: {
            display: 'block',
            transition: { delay: ANIMATION_DURATION },
          },
          toggled: {
            display: 'none',
            transition: { delay: ANIMATION_DURATION },
          },
        }}
      />
      <m.span
        className="absolute bottom-[11px] left-[8px] block h-0.5 w-6 rounded-full bg-black"
        variants={{
          initial: {
            bottom: 11,
            display: 'block',
            transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
          },
          toggled: {
            bottom: 17,
            transition: { duration: ANIMATION_DURATION },
            transitionEnd: { display: 'none' },
          },
        }}
      />
      <m.span
        className="absolute top-[17px] left-[8px] hidden h-0.5 w-6 rounded-full bg-black"
        variants={{
          initial: {
            rotate: '0deg',
            transition: { duration: ANIMATION_DURATION },
            transitionEnd: { display: 'none' },
          },
          toggled: {
            display: 'block',
            rotate: '45deg',
            transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
          },
        }}
      />
      <m.span
        className="absolute top-[17px] left-[8px] hidden h-0.5 w-6 rounded-full bg-black"
        variants={{
          initial: {
            rotate: '0deg',
            transition: { duration: ANIMATION_DURATION },
            transitionEnd: { display: 'none' },
          },
          toggled: {
            display: 'block',
            rotate: '-45deg',
            transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
          },
        }}
      />
    </m.button>
  </LazyMotion>
);

Burger.propTypes = {
  className: PropTypes.string,
  isToggled: PropTypes.bool,
  onClick: PropTypes.func,
};

Burger.defaultProps = {
  className: null,
  isToggled: false,
  onClick: null,
};

export default Burger;
