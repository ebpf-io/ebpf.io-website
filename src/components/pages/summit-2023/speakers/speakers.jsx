import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback } from 'react';

import Speaker from 'components/pages/summit-2023/speakers/speaker';
import Button from 'components/shared/button';
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

  return (
    <section className="pb-10 pt-32 md:pt-20">
      <div className="container">
        <div className="flex flex-col items-start justify-center">
          <h2 className="heading-9xl mx-auto text-center font-bold leading-none">{title}</h2>
          <div className="mx-auto mt-16 flex flex-wrap justify-center gap-10 md:mt-10 md:gap-6">
            {!error && speakers.length > 0 ? (
              <>
                {speakers.map(({ fullName, tagLine, profilePicture, id }) => (
                  <Speaker
                    key={id}
                    clickHandler={() => clickHandler(id)}
                    fullName={fullName}
                    tagLine={tagLine}
                    profilePicture={profilePicture}
                  />
                ))}
              </>
            ) : (
              <>
                {[0, 1, 2, 3].map((_, index) => (
                  <Speaker key={index} isLoading />
                ))}
              </>
            )}
          </div>
          <Button
            className="mx-auto mt-16 flex items-center space-x-3 rounded-lg px-6 leading-none md:mt-10 sm:flex-1 xs:px-3.5"
            size="sm"
            to="/summit-2023-schedule/"
            theme="orange"
          >
            Schedule
          </Button>
        </div>
      </div>
      <SpeakersModal isOpen={isOpen} closeModal={closeModal} {...currentSpeaker} />
    </section>
  );
};

Speakers.propTypes = {
  title: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
};

export default Speakers;
