import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback } from 'react';

import Button from 'components/shared/button';
import { getMonthAndDay } from 'utils/get-date-data';

const Schedule = ({ endpoint }) => {
  const [schedule, setSchedule] = useState([]);
  const [error, setError] = useState(null);

  const fetchSchedule = useCallback(async () => {
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
  }, [endpoint]);

  useEffect(() => {
    fetchSchedule();
  }, [fetchSchedule]);

  if (!error && schedule.length > 0) {
    return (
      <section className="safe-paddings mb-32 mt-16 lg:mb-24 md:mb-20 sm:mt-14">
        <div className="container">
          <ul className="w-full">
            {schedule.map(({ id, title, startsAt, speakers, recordingUrl }) => {
              const date = getMonthAndDay(startsAt);
              return (
                <li
                  className="group flex w-full justify-between border-t border-gray-94 py-8 last:border-b md:py-6 sm:flex-col"
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
                    <h3 className="text-4xl font-semibold leading-tight transition-colors duration-200 group-hover:text-gray-40 lg:text-3xl md:text-xl">
                      {title}
                    </h3>
                  </div>

                  <Button
                    className="my-auto flex max-h-14 items-center rounded-lg px-5 leading-none sm:flex-1"
                    size="md"
                    theme="gray"
                    to={recordingUrl}
                  >
                    Watch
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }

  return null;
};

Schedule.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default Schedule;
