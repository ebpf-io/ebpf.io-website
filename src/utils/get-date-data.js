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

export { getMonthAndDay, getYear };
