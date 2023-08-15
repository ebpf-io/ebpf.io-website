import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback } from 'react';

import Button from 'components/shared/button/button';
import SpeakersModal from 'components/shared/speakers-modal';
import TimeIcon from 'icons/clock.inline.svg';
import { PST_TIME, CEST_TIME } from 'utils/get-date-data';

import TimeSlot from './time-slot';

const btnStyle =
  'relative opacity-100 after:absolute after:left-0 after:block after:h-[1px] after:w-full after:content-[""] after:-bottom-1 after:bg-black';

const Grid = ({ scheduleEndpoint, speackersEndpoint }) => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [currentSpeaker, setCurrentSpeaker] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [timeZone, setTimeZone] = useState(PST_TIME);

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
        <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-gray-80" />
      </div>
    );
  }

  if (!error && timeSlots.length > 0) {
    return (
      <section className="safe-paddings bg-gray-98 pb-32 pt-16 lg:pb-24 md:pb-20 sm:pt-14">
        <div className="container flex flex-col items-center">
          <h2 className="mb-4 text-9xl font-bold leading-tight sm:text-7xl">Schedule</h2>
          <span className="mb-2.5 text-sm font-semibold leading-none">Choose your timezone</span>
          <div className="flex items-center gap-x-3 pb-16 lg:pb-12 md:pb-10">
            <Button
              className={clsx(
                'flex items-center !p-0',
                timeZone === PST_TIME ? btnStyle : 'opacity-50'
              )}
              size="2xs"
              theme="underline"
              onClick={() => setTimeZone(PST_TIME)}
            >
              {PST_TIME}
            </Button>
            <TimeIcon className="h-5 w-5" />
            <Button
              className={clsx(
                'flex items-center !p-0',
                timeZone === CEST_TIME ? btnStyle : 'opacity-50'
              )}
              size="2xs"
              theme="underline"
              onClick={() => setTimeZone(CEST_TIME)}
            >
              {CEST_TIME}
            </Button>
          </div>
          <ul className="w-full last:border-b-2">
            {timeSlots.map((slot, index) => (
              <TimeSlot
                key={index}
                {...slot}
                clickSpeakerHandler={clickSpeakerHandler}
                timeZone={timeZone}
              />
            ))}
          </ul>
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
