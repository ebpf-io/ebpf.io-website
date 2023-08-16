import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback } from 'react';

import Speaker from 'components/pages/summit-2023/speakers/speaker';
import SpeakersModal from 'components/shared/speakers-modal';

const Speakers = ({ title, endpoint }) => {
  const [speakers, setSpeakers] = useState([]);
  const [currentSpeaker, setCurrentSpeaker] = useState(null);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = (id) => {
    setCurrentSpeaker(speakers.find((speaker) => speaker.id === id));
    setIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const fetchSpeakers = useCallback(async () => {
    try {
      const response = await fetch(endpoint);

      if (response.ok) {
        const data = await response.json();
        setSpeakers(data.filter((speaker) => speaker.isTopSpeaker));
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
          <div className="mt-16 flex flex-wrap justify-center gap-10 md:mt-10 md:gap-6">
            {speakers.map(({ fullName, tagLine, profilePicture, id }) => (
              <Speaker
                key={id}
                clickHandler={() => clickHandler(id)}
                fullName={fullName}
                tagLine={tagLine}
                profilePicture={profilePicture}
              />
            ))}
          </div>
        </div>
        <SpeakersModal isOpen={isOpen} closeModal={closeModal} {...currentSpeaker} />
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
