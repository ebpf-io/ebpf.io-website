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

export { getMonthAndDay, getYear, getHoursAndMinutes };
