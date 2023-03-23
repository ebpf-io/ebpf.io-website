import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ImageUniversal from 'components/shared//image-universal';
// import { getShortDate } from 'utils/constants/getDate';
import DateAndPlace from 'components/shared/date-and-place';
import Label from 'components/shared/label';
import Link from 'components/shared/link/link';
import conferenceSvg from 'images/conference.svg';
import meetupSvg from 'images/meetup.svg';
import webinarSvg from 'images/webinar.svg';

const Card = ({ type, title, description, ogImage, date, place, linkUrl, className }) => {
  const placeholderImages = {
    Meetup: meetupSvg,
    Conference: conferenceSvg,
    Webinar: webinarSvg,
  };

  const placeholder = placeholderImages[type];
  const imageUrl = ogImage?.publicURL;

  return (
    <div
      className={clsx(
        'flex h-full flex-col self-stretch rounded-lg border border-gray-90 bg-white hover:drop-shadow-book',
        className
      )}
    >
      <Link to={linkUrl} target="_blank" rel="noopener noreferrer">
        {(ogImage || imageUrl) && (
          <ImageUniversal
            className="h-[182px] w-full overflow-hidden rounded-t-lg md:h-56 sm:h-60 xs:h-48"
            svgClassName="mix-blend-multiply"
            imageSrc={ogImage}
            imageUrl={imageUrl}
            width={384}
            height={182}
            alt={title}
          />
        )}

        {!ogImage && (
          <img
            className="h-[182px] w-full self-center rounded-t-lg bg-gray-96 object-contain md:h-56 sm:h-60 xs:h-48"
            src={placeholder || placeholderImages.Events}
            alt={title}
            width={384}
            height={182}
          />
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6 pt-5 xs:p-4">
        <Label type={type} />
        <Link to={linkUrl} target="_blank" rel="noopener noreferrer">
          <h3 className="mt-2.5 font-sans text-2xl font-semibold leading-tight line-clamp-2 sm:text-xl">
            {title}
          </h3>
        </Link>
        <div
          className="mt-2 mb-5 text-base font-light leading-snug text-gray-40 line-clamp-3 "
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <DateAndPlace
          className="mt-auto border-t border-dashed border-gray-90 pt-5"
          date={date}
          place={place}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ogImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.object,
    }),
    publicURL: PropTypes.string,
  }),
  date: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  ogImage: null,
  className: null,
};

export default Card;
