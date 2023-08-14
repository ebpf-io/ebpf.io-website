import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback } from 'react';

import SpeakersModal from 'components/shared/speakers-modal';

import TimeSlot from './time-slot';

const Grid = ({ scheduleEndpoint, speackersEndpoint }) => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [currentSpeaker, setCurrentSpeaker] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const clickSpeakerHandler = (name) => {
    setCurrentSpeaker(speakers.find((speaker) => speaker.fullName === name));
    setIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const fetchSchedule = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(scheduleEndpoint);

      if (response.ok) {
        const data = await response.json();
        if (data[0].timeSlots.length > 0) {
          setTimeSlots(data[0].timeSlots);
        } else {
          setError('No data found.');
        }
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      setError(error.toString());
    }
    setIsLoading(false);
  }, [scheduleEndpoint]);

  const fetchSpeakers = useCallback(async () => {
    try {
      const response = await fetch(speackersEndpoint);

      if (response.ok) {
        const data = await response.json();
        setSpeakers(data);
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      setError(error.toString());
    }
  }, [speackersEndpoint]);

  useEffect(() => {
    fetchSchedule();
    fetchSpeakers();
  }, [fetchSchedule, fetchSpeakers]);

  if (isLoading) {
    return (
      <div className="my-20 flex items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-gray-90" />
      </div>
    );
  }

  if (!error && timeSlots.length > 0) {
    return (
      <section className="safe-paddings mb-32 mt-16 lg:mb-24 md:mb-20 sm:mt-14">
        <div className="container flex flex-col items-center">
          <h2 className="pb-16 text-9xl font-bold leading-tight lg:pb-12 md:pb-10 sm:text-7xl">
            Schedule
          </h2>
          <div className="grid-gap-x grid w-full grid-cols-12">
            <ul className="col-span-11 w-full last:border-b-2 lg:col-span-full">
              {timeSlots.map((slot, index) => (
                <TimeSlot key={index} {...slot} clickSpeakerHandler={clickSpeakerHandler} />
              ))}
            </ul>
          </div>
        </div>
        <SpeakersModal isOpen={isOpen} closeModal={closeModal} {...currentSpeaker} />
      </section>
    );
  }

  return null;
};

Grid.propTypes = {
  scheduleEndpoint: PropTypes.string.isRequired,
  speackersEndpoint: PropTypes.string.isRequired,
};

export default Grid;
