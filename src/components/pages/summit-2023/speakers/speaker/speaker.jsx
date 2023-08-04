import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Speaker = ({ fullName, tagLine, profilePicture, clickHandler }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <button className="flex flex-col items-center text-center" type="button" onClick={clickHandler}>
      <img
        className={clsx('h-40 w-40 flex-shrink-0 rounded-full', !isLoaded && 'hidden')}
        src={profilePicture}
        alt={fullName}
        width={160}
        height={160}
        loading="eager"
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && (
        <div className="h-40 w-40 flex-shrink-0 animate-pulse rounded-full bg-gray-96" />
      )}
      <h3 className="mt-5 text-2xl font-bold [@media(max-width:543px)]:mt-3">{fullName}</h3>
      {tagLine && (
        <span className="text-gray-1 mt-1 max-w-[240px] text-lg [@media(max-width:543px)]:mt-0 [@media(max-width:543px)]:max-w-none">
          {tagLine}
        </span>
      )}
    </button>
  );
};

Speaker.propTypes = {
  fullName: PropTypes.string.isRequired,
  tagLine: PropTypes.string,
  profilePicture: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

Speaker.defaultProps = {
  tagLine: null,
};

export default Speaker;
