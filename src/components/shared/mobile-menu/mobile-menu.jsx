import { m, useAnimation, LazyMotion, domAnimation } from 'framer-motion';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import MenuItem from './menu-item';

const ANIMATION_DURATION = 0.2;

const variants = {
  from: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
    },
    transitionEnd: {
      zIndex: -1,
    },
  },
  to: {
    zIndex: 999,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileMenu = ({ isOpen }) => {
  const { t } = useTranslation();
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      controls.start('to');
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      controls.start('from');
    }
  }, [isOpen, controls]);

  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        className="safe-paddings absolute inset-x-0 top-16 hidden h-screen w-full rounded-md bg-white md:block"
        initial="from"
        animate={controls}
        variants={variants}
      >
        <ul className="flex h-[calc(100vh-64px-60px)] flex-col divide-y divide-gray-90 divide-opacity-50 overflow-y-auto overflow-x-hidden px-7 pb-7 sm:px-4 xs:h-[calc(100vh-64px-90px)]">
          {t('header:menu', { returnObjects: true }).map((item, index) => (
            <MenuItem {...item} key={index} />
          ))}
        </ul>
      </m.nav>
    </LazyMotion>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
};

MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu;
