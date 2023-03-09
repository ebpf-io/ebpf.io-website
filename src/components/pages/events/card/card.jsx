import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ImageUniversal from 'components/shared//image-universal';
// import { getShortDate } from 'utils/constants/getDate';
import Link from 'components/shared/link/link';

import conferenceSvg from './images/conference.svg';
import meetupSvg from './images/meetup.svg';
import PlaceIcon from './images/place.inline.svg';
import TimeIcon from './images/time.inline.svg';
import webinarSvg from './images/webinar.svg';

const Card = ({
  type,
  title,
  description,
  image,
  date,
  place,
  linkUrl,
  className,
  gatsbyImageClassName,
  imgClassName,
  svgClassName,
}) => {
  const placeholderImages = {
    Meetup: meetupSvg,
    Conference: conferenceSvg,
    Webinar: webinarSvg,
  };

  const placeholder = placeholderImages[type];
  const imageSrc = image?.localFile;
  const imageUrl = image?.localFile.publicURL;

  return (
    <div className={clsx('flex h-full flex-col', className)}>
      <Link to={linkUrl} target="_blank" rel="noopener noreferrer">
        {(imageSrc || imageUrl) && (
          // TODO: Add rounded-b-lg
          <ImageUniversal
            gatsbyImageClassName={gatsbyImageClassName}
            imgClassName={imgClassName}
            svgClassName={svgClassName}
            imageSrc={imageSrc}
            imageUrl={imageUrl}
            width={384}
            height={182}
            alt={title}
          />
        )}

        {!image && (
          <img
            className="h-auto w-full shrink-0 self-center rounded-t-lg"
            src={placeholder || placeholderImages.Events}
            alt={title}
            width={384}
            height={182}
          />
        )}
        <div className="rounded-b-lg border-x border-b border-gray-90 p-6 pt-5 xs:p-4">
          <span
            className={clsx(
              'rounded pl-1.5 pr-[5px] pt-[3.5px] pb-[4.5px] text-xs font-bold uppercase leading-none tracking-middle-wide',
              { 'bg-secondary-green-light text-secondary-green': type === 'Meetup' },
              { 'bg-secondary-red-light text-secondary-red': type === 'Webinar' },
              { 'bg-secondary-green-light text-secondary-green': type === 'Conference' }
            )}
          >
            {type}
          </span>

          <h3 className="mt-2.5 font-sans text-2xl font-semibold leading-tight line-clamp-2 sm:text-xl">
            {title}
          </h3>

          <p className="mt-2 mb-5 text-base font-light leading-snug text-gray-40 line-clamp-3">
            {description}
          </p>

          <div className="mt-auto flex gap-x-4 border-t border-dashed border-gray-90 pt-5 xs:flex-col xs:gap-x-0 xs:gap-y-4">
            {date && (
              <div className="inline-flex items-center gap-x-1.5">
                <TimeIcon className="w-3.5 shrink-0" />
                <span className="text-sm font-normal leading-none">
                  <time dateTime={date}>{date}</time>
                </span>
              </div>
            )}
            {place && (
              <div className="flex items-center gap-x-1.5">
                <PlaceIcon className="w-3.5 shrink-0" />
                <span className="text-sm font-normal leading-none">{place}</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
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
  gatsbyImageClassName: PropTypes.string,
  imgClassName: PropTypes.string,
  svgClassName: PropTypes.string,
};

Card.defaultProps = {
  image: null,
  className: null,
  gatsbyImageClassName: null,
  imgClassName: null,
  svgClassName: null,
};

export default Card;
