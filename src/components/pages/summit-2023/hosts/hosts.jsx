import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const Hosts = ({ title, items }) => (
  <section className="py-28 md:py-20">
    <Container>
      <Heading className="text-center" tag="h2" size="4xl">
        {title}
      </Heading>
      <div className="mx-auto mt-16 flex max-w-[904px] flex-wrap gap-8 md:mt-10 md:gap-6">
        {items.map(({ avatar, name, position }, index) => (
          <div className="flex flex-grow flex-col items-center text-center" key={index}>
            <GatsbyImage
              className="h-32 w-32 flex-shrink-0 rounded-full"
              image={getImage(avatar)}
              alt={name}
            />
            <h3 className="mt-5 text-2xl font-bold [@media(max-width:543px)]:mt-3">{name}</h3>
            <span className="text-gray-1 mt-1 max-w-[280px] text-lg [@media(max-width:543px)]:mt-0 [@media(max-width:543px)]:max-w-none">
              {position}
            </span>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

Hosts.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.shape({}).isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Hosts;
