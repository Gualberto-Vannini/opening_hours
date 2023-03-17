const useCurrentDay = (checkDay: string) => {
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const today = new Date();
  const dayOfTheWeek = weekdays[today.getDay()];
  const isToday = dayOfTheWeek === checkDay;

  return {dayOfTheWeek, isToday};
};

export default useCurrentDay;
