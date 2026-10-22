import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const SplashForm = ({ splashEventId, className }) => {
  const [query, setQuery] = useState('');

  // Pass the page's query string (e.g. UTM params) through to Splash
  useEffect(() => {
    setQuery(window.location.search.slice(1));
  }, []);

  return (
    <div className={className}>
      <iframe
        className="h-full w-full"
        src={`https://events.isovalent.com/${splashEventId}${query ? `?${query}` : ''}`}
        width="100%"
        height="100%"
        title="Isovalent Splash Form"
      />
    </div>
  );
};

SplashForm.propTypes = {
  className: PropTypes.string,
  splashEventId: PropTypes.string.isRequired,
};

SplashForm.defaultProps = {
  className: null,
};

export default SplashForm;
