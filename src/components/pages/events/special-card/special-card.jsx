import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button/button';

import bookIllustration from './images/book-illustration.png';
import webinarIllustration from './images/webinar-illustration.svg';

const cardTypes = {
  book: {
    title: 'Explore books on eBPF from the industry experts',
    description: '',
    illustration: bookIllustration,
    width: 382,
    height: 271,
    imgClassName: 'xl:-mt-12 xs:-mt-6',
    buttonText: 'Learn more',
    buttonUrl: '/',
    style: 'bg-secondary-blue-light border-secondary-blue-1',
  },
  webinar: {
    title: 'Watch webinars on how to build infrastructure',
    description: 'There are many variations of passages of Lorem Ipsum available',
    buttonText: 'Learn more',
    buttonUrl: '/',
    illustration: webinarIllustration,
    width: 310,
    height: 275,
    imgClassName: '-mt-12 w-3/4 sm:w-1/2 xs:w-3/4',
    style: 'bg-secondary-yellow-1-light border-secondary-yellow-light',
  },
};

const SpecialCard = ({ type, className }) => (
  <div
    className={clsx(
      'flex h-full w-full flex-col justify-between rounded-lg border',
      cardTypes[type].style,
      className
    )}
  >
    <div className="flex flex-col pt-6 pl-6 pr-5">
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
      aria-hidden
    />
  </div>
);

SpecialCard.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SpecialCard.defaultProps = {
  className: null,
};

export default SpecialCard;
