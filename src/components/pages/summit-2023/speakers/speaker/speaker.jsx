import PropTypes from 'prop-types';
import React from 'react';

const Speaker = ({ fullName, tagLine, profilePicture }) => (
  <div className="flex flex-col items-center text-center">
    <img
      className="h-40 w-40 flex-shrink-0 rounded-full"
      src={profilePicture}
      alt={fullName}
      width={160}
      height={160}
      loading="eager"
    />
    <h3 className="mt-5 text-2xl font-bold [@media(max-width:543px)]:mt-3">{fullName}</h3>
    <span className="text-gray-1 mt-1 max-w-[240px] text-lg [@media(max-width:543px)]:mt-0 [@media(max-width:543px)]:max-w-none">
      {tagLine}
    </span>
  </div>
);

Speaker.propTypes = {
  fullName: PropTypes.string.isRequired,
  tagLine: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
};

export default Speaker;
