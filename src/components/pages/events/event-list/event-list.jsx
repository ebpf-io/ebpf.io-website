import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';

import Card from 'components/pages/events/card';
import Pagination from 'components/pages/events/pagination';
import SubscriptionForm from 'components/shared/subscription-form';
import { EVENT_PER_PAGE } from 'constants/event';

import SpecialCard from '../special-card';

const EventList = ({ allEvents, totalCount }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const pageCount = Math.ceil(totalCount / EVENT_PER_PAGE);
  const endOffset = itemOffset + EVENT_PER_PAGE;
  const currentEvents = allEvents.slice(itemOffset, endOffset);

  return (
    <section className="safe-paddings pt-12 pb-16 md:pt-10 md:pb-12">
      <div className="container grid-gap grid grid-cols-12 grid-rows-[min-content] items-stretch sm:flex sm:flex-col sm:gap-y-5">
        {currentEvents.map((item, index) => (
          <Fragment key={index}>
            <Card {...item} className="col-span-4 row-span-1 md:col-span-6" />
            {index === 4 && <SpecialCard type="book" className="col-span-4 md:col-span-6" />}
            {index === 10 && <SpecialCard type="webinar" className="col-span-4 md:col-span-6" />}
            {index === 7 && (
              <div className="md!hidden col-span-12 my-[72px] lg:my-16 md:my-10">
                <SubscriptionForm size="lg" />
              </div>
            )}
            {index === 6 && (
              <div className="col-span-12 hidden md:my-10 md:block">
                <SubscriptionForm size="lg" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
      {pageCount > 1 && (
        <Pagination totalCount={totalCount} pageCount={pageCount} callback={setItemOffset} />
      )}
    </section>
  );
};

EventList.propTypes = {
  allEvents: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalCount: PropTypes.number.isRequired,
};

export default EventList;
