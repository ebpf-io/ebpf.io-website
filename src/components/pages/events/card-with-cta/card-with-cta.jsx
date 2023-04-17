import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button/button';

import bookIllustration from './images/book-illustration.png';

// TODO: add link to the webinar
const cardTypes = {
  book: {
    title: 'Explore books on eBPF from the industry experts',
    description: '',
    illustration: bookIllustration,
    width: 382,
    height: 271,
    imgClassName: 'xl:-mt-12 sm:-mt-0 xs:-mt-6  sm:w-full sm:min-w-[160px]',
    buttonText: 'Learn more',
    buttonUrl: '/get-started/#books',
    style: 'bg-secondary-blue-light border-secondary-blue-1',
  },
};

const CardWithCta = ({ type, className }) => (
  <div
    className={clsx(
      'flex h-full w-full flex-col justify-between overflow-hidden rounded-lg border hover:drop-shadow-book sm:flex-row sm:pt-5 [@media(max-width:480px)]:!flex-col',
      cardTypes[type].style,
      className
    )}
  >
    <div className="flex flex-col pt-6 pl-6 pr-5 sm:pb-5 sm:pt-0 xs:pb-0">
      <h3 className="font-sans text-5xl font-semibold leading-tight sm:text-3xl">
        {cardTypes[type].title}
      </h3>
      {cardTypes[type].description && (
        <p className="mt-2 text-base font-light leading-snug">{cardTypes[type].description}</p>
      )}
      <Button theme="black-filled" to={cardTypes[type].buttonUrl} size="md" className="mt-6 w-fit">
        {cardTypes[type].buttonText}
      </Button>
    </div>
    <img
      className={clsx('h-auto self-end', cardTypes[type].imgClassName)}
      src={cardTypes[type].illustration}
      width={cardTypes[type].width}
      height={cardTypes[type].height}
      alt=""
      loading="lazy"
      aria-hidden
    />
  </div>
);

CardWithCta.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CardWithCta.defaultProps = {
  className: null,
};

export default CardWithCta;
