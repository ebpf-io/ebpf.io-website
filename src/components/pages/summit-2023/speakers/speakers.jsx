import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback } from 'react';

import Speaker from 'components/pages/summit-2023/speakers/speaker';

const Speakers = ({ title, endpoint }) => {
  const [speakers, setSpeakers] = useState([]);
  const [error, setError] = useState(null);

  const fetchSpeakers = useCallback(async () => {
    try {
      const response = await fetch(endpoint);

      if (response.ok) {
        const data = await response.json();
        setSpeakers(data);
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      setError(error.toString());
    }
  }, [endpoint]);

  useEffect(() => {
    fetchSpeakers();
  }, [fetchSpeakers]);

  if (!error && speakers.length > 0) {
    return (
      <section className="pb-10 pt-32 md:pt-20">
        <div className="container">
          <h2 className="heading-9xl text-center font-bold leading-none">{title}</h2>
          <div className="mt-16 flex flex-wrap justify-center gap-8 md:mt-10 md:gap-6">
            {speakers.map(({ fullName, tagLine, profilePicture, id }) => (
              <Speaker
                key={id}
                fullName={fullName}
                tagLine={tagLine}
                profilePicture={profilePicture}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  return null;
};

Speakers.propTypes = {
  title: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
};

export default Speakers;
