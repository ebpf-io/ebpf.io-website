/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import { getFormattedTimeWithAmPm, calculateTimeDifference } from 'utils/get-date-data';

import Modal from '../modal';

const TimeSlot = ({ rooms }) => {
  const [currentRoom, setCurrentRoom] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = (id) => {
    setCurrentRoom(rooms.find((event) => event.id === id));
    setIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <section className="flex w-full border-r-2 border-black md:flex-col">
      <div className="flex w-full max-w-[104px] border-t-2 border-black py-7 md:max-w-full md:md:border-l-2 md:py-5">
        <span className="text-xl font-bold leading-none md:mx-auto">
          {getFormattedTimeWithAmPm(rooms[0].session.startsAt)}
        </span>
      </div>
      <div className="flex w-full md:flex-col ">
        {rooms.map(({ name, session: { id, title, startsAt, endsAt, speakers, description } }) => {
          const date = getFormattedTimeWithAmPm(startsAt);
          const duration = calculateTimeDifference(startsAt, endsAt);
          return (
            <article
              className="max-w-1/2 flex w-full flex-col items-center justify-center border-l-2 border-t-2 border-black px-7 pb-8 pt-7 transition-colors duration-200 hover:bg-primary-yellow md:px-4 md:py-7"
              key={id}
            >
              <div className="flex flex-col items-center gap-y-2">
                <span className="text-sm font-semibold leading-none">{name}</span>
                <span className="text-sm leading-none text-black">
                  <time>{date}</time> — <span>{duration} min</span>
                </span>
              </div>
              <h3 className="mt-2.5 text-center text-3xl font-bold leading-tight lg:text-2xl md:text-xl">
                {title}
              </h3>
              {speakers && (
                <ul className="mt-2.5 flex flex-wrap gap-x-5">
                  {speakers.map(({ id, name }) => (
                    <li key={id}>
                      <span className="text-base leading-none">{name}</span>
                    </li>
                  ))}
                </ul>
              )}
              {description && (
                <Button
                  className="mt-5 flex items-center !rounded-none sm:flex-1"
                  size="2xs"
                  theme="outline"
                  onClick={() => clickHandler(id)}
                >
                  Introductory and overview
                </Button>
              )}
            </article>
          );
        })}
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} {...currentRoom} />
    </section>
  );
};

TimeSlot.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default TimeSlot;
