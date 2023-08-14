import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback } from 'react';

import TimeSlot from './time-slot';

const Grid = ({ endpoint }) => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSchedule = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(endpoint);

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
  }, [endpoint]);

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

  if (!error && timeSlots.length > 0) {
    return (
      <section className="safe-paddings mb-32 mt-16 lg:mb-24 md:mb-20 sm:mt-14">
        <div className="container grid-gap-x grid grid-cols-12">
          <ul className="col-span-11 w-full last:border-b-2 lg:col-span-full">
            {timeSlots.map((slot, index) => (
              <TimeSlot key={index} {...slot} />
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return null;
};

Grid.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default Grid;
