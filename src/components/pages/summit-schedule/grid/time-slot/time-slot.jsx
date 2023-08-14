import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import {
  getMonthAndDay,
  getFormattedTimeWithAmPm,
  calculateTimeDifference,
} from 'utils/get-date-data';

import Modal from '../modal';

const TimeSlot = ({ rooms, clickSpeakerHandler }) => {
  const [currentRoom, setCurrentRoom] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const oneColumn = 1;

  const clickHandler = (id) => {
    setCurrentRoom(rooms.find(({ session }) => session.id === id));
    setIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <section className="flex w-full border-r-2 border-black md:flex-col">
      <div className="flex w-full max-w-[104px] flex-col gap-y-2 border-t-2 border-black py-7 md:max-w-full md:items-center md:md:border-l-2 md:py-5">
        <time className="text-sm leading-none">{getMonthAndDay(rooms[0].session.startsAt)}</time>
        <time className="text-xl font-bold leading-none md:text-base">
          {getFormattedTimeWithAmPm(rooms[0].session.startsAt)}
        </time>
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
              <h3
                className={clsx(
                  'mt-2.5 text-center text-3xl font-bold leading-tight lg:text-2xl md:text-xl',
                  rooms.length === oneColumn && 'max-w-[60%] sm:max-w-full'
                )}
              >
                {title}
              </h3>
              {speakers && (
                <ul className="mt-2.5 flex flex-wrap gap-x-5">
                  {speakers.map(({ id, name }) => (
                    <li key={id}>
                      <button
                        className="relative inline-block text-base leading-none transition-all duration-200 after:absolute after:left-0 after:block after:h-[1px] after:w-full after:content-[''] hover:after:-bottom-1 hover:after:bg-black"
                        type="button"
                        onClick={() => clickSpeakerHandler(name)}
                      >
                        {name}
                      </button>
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
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      session: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        startsAt: PropTypes.string.isRequired,
        endsAt: PropTypes.string.isRequired,
        speakers: PropTypes.array,
        description: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  clickSpeakerHandler: PropTypes.func.isRequired,
};

export default TimeSlot;
