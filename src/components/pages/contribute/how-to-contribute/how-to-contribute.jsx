import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link/link';

import FileIcon from './images/file.inline.svg';
import GearIcon from './images/gear.inline.svg';
import PenIcon from './images/pen.inline.svg';

const icons = {
  file: FileIcon,
  gear: GearIcon,
  pen: PenIcon,
};

const HowToContribute = ({ items }) => (
  <section className="how-to-contribute safe-paddings mb-36 mt-28 xl:mb-32 lg:mb-28 lg:mt-20 md:mb-20 md:mt-16">
    <div className="container">
      <ul className="flex divide-x divide-dashed divide-gray-80 md:flex-col md:divide-x-0 md:divide-y">
        {items.map(({ icon, title, description, links }, index) => {
          const Icon = icons[icon];

          return (
            <li
              className="flex-1 px-14 first:pl-0 last:pr-0 xl:px-12 lg:px-10 md:px-0 md:py-8 md:first:pt-0 md:last:pb-0"
              key={index}
            >
              <Icon className="h-14 w-14 lg:h-12 lg:w-12" />
              <h3 className="mt-5 font-sans text-3xl font-semibold leading-tight lg:text-2xl md:text-xl">
                {title}
              </h3>
              <div className="mt-3 text-sm" dangerouslySetInnerHTML={{ __html: description }} />
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-3">
                {links.map(({ text, to, target }, index) => (
                  <li
                    className="relative font-semibold uppercase leading-none before:absolute before:-right-2.5 before:top-1/2 before:block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-90 last:before:hidden"
                    key={index}
                  >
                    <Link
                      className="text-[13px] leading-none tracking-wider"
                      theme="black"
                      size="sm"
                      to={to}
                      target={target || null}
                      rel={target === '_blank' ? 'noopener noreferrer' : null}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

HowToContribute.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          to: PropTypes.string.isRequired,
          target: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default HowToContribute;
