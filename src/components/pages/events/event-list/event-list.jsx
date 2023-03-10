import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Card from 'components/pages/events/card';
import SubscriptionForm from 'components/shared/subscription-form';

import Pagination from '../pagination';
import SpecialCard from '../special-card';

const EventList = ({ items, pageCount, currentPageIndex }) => (
  <section className="safe-paddings pt-12 pb-16 md:pt-10 md:pb-12">
    <div className="container grid-gap grid grid-cols-12 sm:flex sm:flex-col sm:gap-y-5">
      {items.map((item, index) => (
        <Fragment key={index}>
          <Card {...item} className="col-span-4 md:col-span-6" />
          {index === 4 && <SpecialCard type="book" className="col-span-4 md:col-span-6" />}
          {index === 10 && <SpecialCard type="webinar" className="col-span-4 md:col-span-6" />}
          {/* The section that is being displayed on the desktop */}
          {index === 7 && (
            <div className="col-span-12 my-[72px] md:!hidden">
              <SubscriptionForm size="lg" />
            </div>
          )}
          {/* The same section that is being displayed on the mobile */}
          {index === 5 && (
            <div className="col-span-12 my-20 hidden md:flex sm:my-12">
              <SubscriptionForm size="lg" />
            </div>
          )}
        </Fragment>
      ))}
      {pageCount > 1 && <Pagination pageCount={pageCount} currentPageIndex={currentPageIndex} />}
    </div>
  </section>
);

EventList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageCount: PropTypes.number.isRequired,
  currentPageIndex: PropTypes.number.isRequired,
};

export default EventList;
