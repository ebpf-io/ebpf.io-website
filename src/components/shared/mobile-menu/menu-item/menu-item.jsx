import clsx from 'clsx';
import { useAnimation, m } from 'framer-motion';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const ANIMATION_DURATION = 0.2;
const submenuVariants = {
  from: {
    opacity: 0,
    display: 'none',
    height: 0,
    zIndex: -1,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
  to: {
    opacity: 1,
    display: 'flex',
    height: 'auto',
    zIndex: 10,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MenuItem = ({ title, to, items }) => {
  const { t } = useTranslation();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const Tag = to ? Link : 'button';
  const withChildItems = items?.length > 0;

  const controls = useAnimation();

  useEffect(() => {
    if (isSubmenuOpen) {
      controls.start('to');
    } else {
      controls.start('from');
    }
  }, [isSubmenuOpen, controls]);

  const handleClick = () => {
    if (withChildItems) {
      setIsSubmenuOpen((prevState) => !prevState);
    }
  };

  return (
    <li>
      <Tag
        className="group inline-flex w-full items-center justify-between py-5 font-semibold leading-none transition-colors duration-200 hover:text-gray-40"
        to={t(to)}
        onClick={handleClick}
      >
        <span>
          <Trans>{title}</Trans>
        </span>
        {withChildItems && (
          <span className="relative w-1.5">
            <span
              className={clsx(
                'absolute -left-1 top-1/2 h-2 w-0.5 -translate-y-1/2 bg-black transition-transform duration-200 group-hover:bg-gray-40',
                isSubmenuOpen ? 'rotate-45' : 'rotate-[135deg]'
              )}
            />
            <span
              className={clsx(
                'absolute left-[0.5px] top-1/2 h-2 w-0.5 -translate-y-1/2 bg-black transition-transform duration-200 group-hover:bg-gray-40',
                isSubmenuOpen ? '-rotate-45' : '-rotate-[135deg]'
              )}
            />
          </span>
        )}
      </Tag>
      {withChildItems && (
        <m.ul
          className="relative flex flex-col pl-6"
          initial="from"
          animate={controls}
          variants={submenuVariants}
        >
          {items.map(({ title, to, target, items }, index) => (
            <li className="mb-2 last:mb-3" key={index}>
              {to ? (
                <Link
                  className="flex py-3 leading-none"
                  theme="black"
                  to={t(to)}
                  target={target || null}
                  rel={target ? 'noopener noreferrer' : null}
                >
                  <Trans>{title}</Trans>
                </Link>
              ) : (
                <h3 className="flex py-3 font-medium leading-none">
                  <Trans>{title}</Trans>
                </h3>
              )}
              {items?.length > 0 && (
                <ul className="flex flex-col pl-6">
                  {items.map(({ title, to, target }, index) => (
                    <li className="mb-2" key={index}>
                      <Link
                        className="flex py-3 leading-none"
                        theme="black"
                        to={t(to)}
                        target={target || null}
                        rel={target ? 'noopener noreferrer' : null}
                      >
                        <Trans>{title}</Trans>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </m.ul>
      )}
    </li>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string,
      target: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          to: PropTypes.string,
          target: PropTypes.string,
        })
      ),
    })
  ),
};

MenuItem.defaultProps = {
  to: null,
  items: null,
};

export default MenuItem;
