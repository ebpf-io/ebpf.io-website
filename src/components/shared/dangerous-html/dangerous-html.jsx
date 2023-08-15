import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

const DangerousHtml = (props) => {
  const { html, className } = props;
  const divRef = useRef(null);

  useEffect(() => {
    if (!html) return;

    const slotHtml = document.createRange().createContextualFragment(html); // Create a 'tiny' document and parse the html string
    divRef.current.innerHTML = ''; // Clear the container
    divRef.current.appendChild(slotHtml); // Append the new content
  }, [html]);

  return <div className={className} ref={divRef} />;
};

DangerousHtml.propTypes = {
  html: PropTypes.string.isRequired,
  className: PropTypes.string,
};

DangerousHtml.defaultProps = {
  className: undefined,
};

export default DangerousHtml;
