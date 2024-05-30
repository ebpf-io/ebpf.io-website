import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Speaker = ({ fullName, tagLine, profilePicture, clickHandler, isLoading }) => {
  const [isLoaded, setIsLoaded] = useState(isLoading);
  const hasData = fullName && profilePicture;

  return (
    <button
      className="flex w-60 flex-col items-center text-center"
      type="button"
      onClick={clickHandler}
    >
      {(!isLoaded || isLoading) && (
        <div className="h-40 w-40 flex-shrink-0 animate-pulse rounded-full bg-gray-96" />
      )}
      {isLoading && !hasData && (
        <>
          <div className="mt-5 h-[33px] w-40 animate-pulse rounded-md bg-gray-96 [@media(max-width:543px)]:mt-3" />
          <div className="mt-1 h-[25px] w-28 animate-pulse rounded-md bg-gray-96" />
          <div className="mt-1 h-[25px] w-36 animate-pulse rounded-md bg-gray-96" />
        </>
      )}
      {!isLoading && hasData && (
        <>
          <img
            className={clsx('h-40 w-40 flex-shrink-0 rounded-full', !isLoaded && 'hidden')}
            src={profilePicture}
            alt={fullName}
            width={160}
            height={160}
            loading="eager"
            onLoad={() => setIsLoaded(true)}
          />
          <h3 className="mt-5 text-2xl font-bold [@media(max-width:543px)]:mt-3">{fullName}</h3>
          {tagLine && (
            <span className="text-gray-1 mt-1 max-w-[240px] text-lg [@media(max-width:543px)]:max-w-none">
              {tagLine}
            </span>
          )}
        </>
      )}
    </button>
  );
};

Speaker.propTypes = {
  fullName: PropTypes.string,
  tagLine: PropTypes.string,
  profilePicture: PropTypes.string,
  clickHandler: PropTypes.func,
  isLoading: PropTypes.bool,
};

Speaker.defaultProps = {
  fullName: null,
  tagLine: null,
  profilePicture: null,
  clickHandler: () => {},
  isLoading: false,
};

export default Speaker;
