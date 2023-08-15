// eslint-disable-next-line import/no-extraneous-dependencies
import { DateTime } from 'luxon';

const PST_TIME = 'PST';
const CEST_TIME = 'CEST';

function getMonthAndDay(date) {
  const convertedDate = new Date(date);
  const day = convertedDate.getUTCDate();
  const month = convertedDate.toLocaleString('en-US', { month: 'long' });
  return `${month} ${day}`;
}

function getYear(date) {
  const convertedDate = new Date(date);
  const year = convertedDate.getFullYear();
  return year;
}

function getHoursAndMinutes(dateTime) {
  const convertedDateTime = new Date(dateTime);
  const hours = convertedDateTime.getUTCHours();
  const minutes = convertedDateTime.getUTCMinutes();

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}

function getFormattedTimeWithAmPm(dateTime, timeZone) {
  let dt = DateTime.fromISO(dateTime, { zone: 'America/Los_Angeles' });

  switch (timeZone) {
    case CEST_TIME:
      dt = dt.setZone('Europe/Berlin');
      break;
    case PST_TIME:
    default:
      break;
  }

  const formattedTime = dt.toFormat('h:mm a');
  return formattedTime;
}

function calculateTimeDifference(startsAt, endsAt) {
  const startsAtDate = new Date(startsAt);
  const endsAtDate = new Date(endsAt);
  const timeDifferenceMilliseconds = endsAtDate - startsAtDate;
  const timeDifferenceMinutes = timeDifferenceMilliseconds / (1000 * 60);
  return timeDifferenceMinutes;
}

export {
  PST_TIME,
  CEST_TIME,
  getMonthAndDay,
  getYear,
  getHoursAndMinutes,
  calculateTimeDifference,
  getFormattedTimeWithAmPm,
};
