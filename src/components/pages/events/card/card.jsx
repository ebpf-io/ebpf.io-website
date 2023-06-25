import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import DateAndPlace from 'components/shared/date-and-place';
import ImageUniversal from 'components/shared/image-universal';
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
        'flex h-full flex-col self-stretch rounded-lg border border-gray-90 bg-white duration-200 hover:drop-shadow-book',
        className
      )}
    >
      <Link to={linkUrl} target="_blank" rel="noopener noreferrer">
        {(ogImage || imageUrl) && (
          <ImageUniversal
            gatsbyClassName="rounded-t-lg h-[182px] lg:h-[15vw] md:h-[24vw] sm:h-auto sm:max-h-none bg-gray-98"
            gatsbyImgClassName="mix-blend-multiply"
            svgClassName="mix-blend-multiply rounded-t-lg h-[182px] w-full lg:h-[15vw] md:h-[24vw] sm:h-auto sm:max-h-none object-contain bg-gray-98"
            imageSrc={ogImage}
            imageUrl={imageUrl}
            objectFit="contain"
            width={733}
            height={383}
            alt={title}
          />
        )}

        {!ogImage && (
          <img
            className="h-[182px] w-full self-center rounded-t-lg bg-gray-98 object-contain lg:h-[15vw] md:h-[24vw] sm:h-auto"
            src={placeholder || placeholderImages.Events}
            alt={title}
            width={733}
            height={383}
            loading="lazy"
          />
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6 pt-5 xs:p-4">
        <Label type={type} />
        <Link to={linkUrl} target="_blank" rel="noopener noreferrer">
          <h3 className="mt-2.5 line-clamp-2 font-sans text-2xl font-semibold leading-tight sm:text-xl">
            {title}
          </h3>
        </Link>
        <div
          className="with-link-blue mb-5 mt-2 line-clamp-3 text-base font-light leading-snug text-gray-40 "
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
  description: PropTypes.string,
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
  description: null,
  ogImage: null,
  className: null,
};

export default Card;
