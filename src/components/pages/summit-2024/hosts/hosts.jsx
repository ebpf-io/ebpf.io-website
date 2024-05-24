import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

const avatars = {
  'Liz Rice': (
    <StaticImage
      className="h-40 w-40 flex-shrink-0 rounded-full"
      src="./images/liz-rice.png"
      alt="Liz Rice"
      width={160}
      height={160}
      loading="lazy"
    />
  ),
  'Duffie Cooley': (
    <StaticImage
      className="h-40 w-40 flex-shrink-0 rounded-full"
      src="./images/duffie-cooley.png"
      alt="Duffie Cooley"
      width={160}
      height={160}
      loading="lazy"
    />
  ),
};

const Hosts = ({ title, items }) => (
  <section className="py-32 md:py-20">
    <div className="container">
      <h2 className="heading-9xl text-center font-bold leading-none">{title}</h2>
      <div className="mx-auto mt-16 flex max-w-[904px] flex-wrap justify-center gap-8 md:mt-10 md:gap-6">
        {items.map(({ name, position }, index) => (
          <div className="flex flex-col items-center text-center" key={index}>
            {avatars[name]}
            <h3 className="mt-5 text-2xl font-bold [@media(max-width:543px)]:mt-3">{name}</h3>
            <span className="text-gray-1 mt-1 max-w-[280px] text-lg [@media(max-width:543px)]:mt-0 [@media(max-width:543px)]:max-w-none">
              {position}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Hosts.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Hosts;
