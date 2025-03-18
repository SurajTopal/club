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

export function getMatchStatus(start_time, end_time) {
  const now = new Date();
  const startDate = new Date(start_time);
  const endDate = new Date(end_time);

  const formatTime = date => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format
    return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  };

  if (now >= startDate && now <= endDate) {
    return {matchStatus: 'Live', time: formatTime(endDate)};
  } else if (now < startDate) {
    return {matchStatus: 'Upcoming', time: formatTime(startDate)};
  } else {
    return {matchStatus: 'Completed', time: formatTime(endDate)};
  }
}
