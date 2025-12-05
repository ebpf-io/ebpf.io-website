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
  'Daniel Borkman': (
    <StaticImage
      className="h-40 w-40 flex-shrink-0 rounded-full"
      src="./images/daniel-borkman.jpeg"
      alt="Daniel Borkman"
      width={160}
      height={160}
      loading="lazy"
    />
  ),
  'Bill Mulligan': (
    <StaticImage
      className="h-40 w-40 flex-shrink-0 rounded-full"
      src="./images/bill-mulligan.jpeg"
      alt="Bill Mulligan"
      width={160}
      height={160}
      loading="lazy"
    />
  ),
  'Dylan Reimerink': (
    <StaticImage
      className="h-40 w-40 flex-shrink-0 rounded-full"
      src="./images/dylan-reimerink.png"
      alt="Dylan Reimerink"
      width={160}
      height={160}
      loading="lazy"
    />
  ),
  'Duffie Cooley': (
    <StaticImage
      className="h-40 w-40 flex-shrink-0 rounded-full"
      src="./images/duffie-cooley.jpg"
      alt="Duffie Cooley"
      width={160}
      height={160}
      loading="lazy"
    />
  ),
  'John Fastabend': (
    <StaticImage
      className="h-40 w-40 flex-shrink-0 rounded-full"
      src="./images/john-fastabend.png"
      alt="John Fastabend"
      width={160}
      height={160}
      loading="lazy"
    />
  ),
  'Joe Stringer': (
    <StaticImage
      className="h-40 w-40 flex-shrink-0 rounded-full"
      src="./images/joe-stringer.jpeg"
      alt="Joe Stringer"
      width={160}
      height={160}
      loading="lazy"
    />
  ),
  'Constanze b. Roedig': (
    <StaticImage
      className="h-40 w-40 flex-shrink-0 rounded-full"
      src="./images/constanze-b-oedig.png"
      alt="Constanze b. Roedig"
      width={160}
      height={160}
      loading="lazy"
    />
  ),
  'Nimisha Mehta': (
    <StaticImage
      className="h-40 w-40 flex-shrink-0 rounded-full"
      src="./images/nimisha-mehta.png"
      alt="Nimisha Mehta"
      width={160}
      height={160}
      loading="lazy"
    />
  ),
  'Neha Aggarwal': (
    <StaticImage
      className="h-40 w-40 flex-shrink-0 rounded-full"
      src="./images/neha-aggarwal.png"
      alt="Neha Aggarwal"
      width={160}
      height={160}
      loading="lazy"
    />
  ),
  'Teodor (Janez) Podobnik': (
    <StaticImage
      className="h-40 w-40 flex-shrink-0 rounded-full"
      src="./images/teodor-podobnik.png"
      alt="Teodor (Janez) Podobnik"
      width={160}
      height={160}
      loading="lazy"
    />
  ),
};

const Judges = ({ title, items }) => (
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

Judges.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Judges;
