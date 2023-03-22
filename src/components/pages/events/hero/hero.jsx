import PropTypes from 'prop-types';
import React from 'react';

import ListCard from './list-card';
import MainCard from './main-card';

const title =
  'Participate in eBPF events that highlight</br>a range of expert voices and inspiring ideas';

const Hero = ({ items }) => {
  const mainItem = items.shift();

  return (
    <section className="safe-paddings pt-20 pb-[72px] lg:pt-16 md:pb-10">
      <div className="container flex flex-col">
        <h1
          className="heading-9xl pb-12 font-semibold leading-tight lg:pb-8"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {items.length > 0 && (
          <div className="grid w-full grid-cols-12 gap-x-8 md:gap-x-0">
            <MainCard {...mainItem} className="col-span-8 flex flex-col md:col-span-12" />
            <div className="col-span-4 col-start-9 flex flex-col md:col-span-12 md:col-start-1 md:last:border-b md:last:border-dashed md:last:border-gray-90">
              {items.map((item, index) => (
                <ListCard {...item} key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

Hero.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Hero;
