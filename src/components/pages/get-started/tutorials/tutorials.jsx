import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button/button';
import Link from 'components/shared/link/link';

const Tutorials = ({ title, linkTitle, items }) => (
  <section className="hero safe-paddings mt-40 md:mt-16 sm:mt-14">
    <div className="container grid grid-cols-2 gap-x-[26px] md:grid-cols-1">
      <div className="pr-[72px] pt-3 md:max-w-[550px] md:pr-0">
        <h2 className="heading-8xl font-semibold leading-tight">{title}</h2>
        <Button
          to="https://github.com/iovisor/bpftrace/blob/master/docs/tutorial_one_liners.md"
          className="mt-9 px-9 py-4 sm:hidden"
          target="_blank"
          rel="noreferrer noopener"
          theme="primary-yellow-filled"
        >
          {linkTitle}
        </Button>
      </div>

      <ul className="md:mt-14 sm:mt-10">
        {items.map(({ title, description, linkUrl }, index) => (
          <li className="border-t border-dashed border-gray-80 last:border-b" key={index}>
            <Link
              className="group flex items-center justify-between pb-8 pt-7 "
              to={linkUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="flex flex-col">
                <h3 className="text-4xl font-semibold leading-tight transition-colors duration-200 group-hover:text-gray-40">
                  {title}
                </h3>
                <span className="mt-2.5 text-base leading-normal">{description}</span>
              </div>

              <Button className="ml-10" theme="withYellowChevron" />
            </Link>
          </li>
        ))}
      </ul>

      <Button
        to="https://github.com/iovisor/bpftrace/blob/master/docs/tutorial_one_liners.md"
        className="mt-9 hidden max-w-fit px-9 py-4 sm:inline-flex"
        target="_blank"
        rel="noreferrer noopener"
        theme="primary-yellow-filled"
      >
        {linkTitle}
      </Button>
    </div>
  </section>
);

Tutorials.propTypes = {
  title: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      linkUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Tutorials;
