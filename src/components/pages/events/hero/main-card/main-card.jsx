import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ImageUniversal from 'components/shared//image-universal';
import DateAndPlace from 'components/shared/date-and-place';
import Label from 'components/shared/label';
import Link from 'components/shared/link/link';
import conferenceSvg from 'images/conference.svg';
import meetupSvg from 'images/meetup.svg';
import webinarSvg from 'images/webinar.svg';

const MainCard = ({ type, title, description, ogImage, date, place, linkUrl, className }) => {
  const placeholderImages = {
    Meetup: meetupSvg,
    Conference: conferenceSvg,
    Webinar: webinarSvg,
  };

  const placeholder = placeholderImages[type];
  const imageUrl = ogImage?.publicURL;

  return (
    <div className={clsx('lg:border-b-none flex h-full flex-col', className)}>
      <Link to={linkUrl} target="_blank" rel="noopener noreferrer">
        {(ogImage || imageUrl) && (
          <ImageUniversal
            gatsbyClassName="rounded-t-[3px] w-full h-[329px] lg:h-[26vw] md:h-auto md:max-h-none before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gray-98"
            gatsbyImgClassName="mix-blend-multiply opacity-0 md:h-auto"
            svgClassName="mix-blend-multiply rounded-t-[3px] w-full h-[280px] lg:h-[26vw] md:h-auto md:max-h-none object-contain bg-gray-98"
            imageSrc={ogImage}
            imageUrl={imageUrl}
            objectFit="contain"
            width={967}
            height={509}
            alt={title}
          />
        )}

        {!ogImage && (
          <img
            className="h-auto w-full shrink-0 self-center rounded-t-[3px]"
            src={placeholder || placeholderImages.Events}
            alt={title}
            width={967}
            height={509}
          />
        )}
        <div className="py-6 lg:pb-0">
          <Label type={type} />
          <h3 className="heading-6xl mt-2.5 line-clamp-2 font-semibold leading-tight">{title}</h3>
          <p className="mb-5 mt-2 line-clamp-3 text-base font-light leading-snug text-gray-40">
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

MainCard.defaultProps = {
  ogImage: null,
  className: null,
};

export default MainCard;
