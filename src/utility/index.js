import moment from 'moment';

export const formatEventDate = (startDate, endDate) => {
  const start = moment(startDate);
  const end = moment(endDate);
  const today = moment().startOf('day');
  const tomorrow = moment().add(1, 'day').startOf('day');

  if (start.isSame(today, 'day')) {
    return `Today, ${start.format('hh:mm A')}`; // Show "Today" and start time
  } else if (start.isSame(tomorrow, 'day')) {
    return `Tomorrow, ${start.format('hh:mm A')}`; // Show "Tomorrow" and start time
  } else {
    return `${start.format('DD MMM')}, ${start.format('hh:mm A')}`; // Show date (DD/MMM) and start time otherwise
  }
};
