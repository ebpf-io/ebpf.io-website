import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback } from 'react';

import Button from 'components/shared/button';
import { getMonthAndDay } from 'utils/get-date-data';

import Modal from './modal';

const Schedule = ({ endpoint }) => {
  const [schedule, setSchedule] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const fetchSchedule = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(endpoint);

      if (response.ok) {
        const data = await response.json();
        if (data[0].sessions.length > 0) {
          setSchedule(data[0].sessions);
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
  }, [endpoint]);

  const clickHandler = (id) => {
    setCurrentEvent(schedule.find((event) => event.id === id));
    setIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  useEffect(() => {
    fetchSchedule();
  }, [fetchSchedule]);

  if (isLoading) {
    return (
      <div className="my-20 flex items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-gray-90" />
      </div>
    );
  }

  if (!error && schedule.length > 0) {
    return (
      <section className="safe-paddings mb-32 mt-16 lg:mb-24 md:mb-20 sm:mt-14">
        <div className="container max-w-[1008px]">
          <ul className="w-full">
            {schedule.map(({ id, title, startsAt, speakers, recordingUrl, questionAnswers }) => {
              const slideDeck =
                questionAnswers[0].question === 'Slide Deck' ? questionAnswers[0].answer : null;
              const date = getMonthAndDay(startsAt);
              return (
                <li
                  className="flex w-full justify-between border-t border-gray-94 py-8 last:border-b md:py-6 sm:flex-col"
                  key={id}
                >
                  <div className="flex max-w-[70%] flex-col pr-5 lg:max-w-full sm:mb-8">
                    <time className="mb-2 text-base leading-none text-gray-60">{date}</time>
                    <ul className="mb-2.5 flex flex-wrap gap-x-5">
                      {speakers.map(({ id, name }) => (
                        <li key={id}>
                          <span className="text-base leading-none">{name}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="text-left" type="button" onClick={() => clickHandler(id)}>
                      <h3 className="text-4xl font-semibold leading-tight transition-colors duration-200 hover:text-primary-orange lg:text-3xl md:text-xl">
                        {title}
                      </h3>
                    </button>
                  </div>

                  <div className="flex gap-x-4">
                    <Button
                      className="my-auto max-h-14 items-center rounded-lg px-5 leading-none sm:flex-1"
                      size="md"
                      theme={slideDeck ? 'gray' : 'disabled'}
                      to={slideDeck}
                    >
                      {slideDeck ? 'Download Slides' : 'Coming soon'}
                    </Button>
                    <Button
                      className="my-auto max-h-14 items-center rounded-lg px-5 leading-none sm:flex-1"
                      size="md"
                      theme={recordingUrl ? 'gray' : 'disabled'}
                      to={recordingUrl}
                    >
                      {recordingUrl ? 'Watch' : 'Coming soon'}
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <Modal isOpen={isOpen} closeModal={closeModal} {...currentEvent} />
      </section>
    );
  }

  return null;
};

Schedule.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default Schedule;
