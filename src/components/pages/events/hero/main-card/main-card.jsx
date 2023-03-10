import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ImageUniversal from 'components/shared//image-universal';
import DateAndPlace from 'components/shared/date-and-place';
import Label from 'components/shared/label';
import Link from 'components/shared/link/link';

import conferenceSvg from './images/conference-main.svg';
import meetupSvg from './images/meetup-main.svg';
import webinarSvg from './images/webinar-main.svg';

const MainCard = ({ type, title, description, image, date, place, linkUrl, className }) => {
  const placeholderImages = {
    Meetup: meetupSvg,
    Conference: conferenceSvg,
    Webinar: webinarSvg,
  };

  const placeholder = placeholderImages[type];
  const imageSrc = image?.localFile;
  const imageUrl = image?.localFile.publicURL;

  return (
    <div
      className={clsx(
        'lg:border-b-none flex h-full flex-col border-b border-dashed border-gray-90 pb-6',
        className
      )}
    >
      <Link to={linkUrl} target="_blank" rel="noopener noreferrer">
        {(imageSrc || imageUrl) && (
          <ImageUniversal
            gatsbyImageClassName="rounded-t-[3px]"
            imageSrc={imageSrc}
            imageUrl={imageUrl}
            width={800}
            height={280}
            alt={title}
          />
        )}

        {!image && (
          <img
            className="h-auto w-full shrink-0 self-center rounded-t-[3px]"
            src={placeholder || placeholderImages.Events}
            alt={title}
            width={800}
            height={280}
          />
        )}
        <div className="py-6 lg:pb-0">
          <Label type={type} />
          <h3 className="heading-7xl mt-2.5 font-semibold leading-tight line-clamp-2">{title}</h3>
          <p className="mt-2 mb-5 text-base font-light leading-snug text-gray-40 line-clamp-3">
            {description}
          </p>
          <DateAndPlace className="mt-6" date={date} place={place} />
        </div>
      </Link>
    </div>
  );
};

MainCard.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    localFile: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.object,
      }),
      publicURL: PropTypes.string,
    }),
  }),
  date: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
};

MainCard.defaultProps = {
  image: null,
  className: null,
};

export default MainCard;
