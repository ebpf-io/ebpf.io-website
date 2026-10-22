import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const SplashForm = ({ splashEventId, className }) => {
  const [query, setQuery] = useState('');

  // Pass the page's query string (e.g. UTM params) through to Splash
  useEffect(() => {
    setQuery(window.location.search.slice(1));
  }, []);

  // Sized inline rather than with Tailwind classes: after client-side navigation Gatsby keeps
  // the previous page's CSS bundle, which may not have new arbitrary classes, and the iframe
  // falls back to the browser's default 150px height
  return (
    <div className={className} style={{ height: '70vh' }}>
      <iframe
        style={{ width: '100%', height: '100%' }}
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
