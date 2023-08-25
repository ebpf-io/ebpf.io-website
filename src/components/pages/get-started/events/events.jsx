import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import EventCard from 'components/shared/event-card';
import Link from 'components/shared/link';

const Events = ({ items, className }) => (
  <section className={clsx('safe-paddings mt-32 lg:mt-24 md:mt-16 sm:mt-14', className)}>
    <div className="container">
      <h2 className="heading-8xl text-center font-semibold leading-tight">
        Participate in eBPF events to level up your expertize
      </h2>
      <div className="grid-gap mt-14 grid auto-rows-min grid-cols-12 justify-items-stretch md:mt-11 sm:mt-8 sm:flex sm:flex-col sm:gap-y-5">
        {items.map((item, index) => (
          <EventCard {...item} className="col-span-4 md:col-span-6" key={index} />
        ))}
      </div>
      <div className="mt-12 flex items-center justify-center sm:mt-10">
        <Link theme="black-primary-yellow" size="lg" to="/events/">
          More events
        </Link>
      </div>
    </div>
  </section>
);

Events.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};

Events.defaultProps = {
  className: null,
};

export default Events;
