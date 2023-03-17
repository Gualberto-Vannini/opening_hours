import {DaySchedule} from '../../api/OpeningHoursApi/OpeningHoursTypes';

// convert millisec like 36000 to 10 AM
const convertDate12Clock = (inputValue: number): string => {
  //create a new date obj
  const date = new Date();
  // set the hours, minutes, seconds, and milliseconds of the date object to 0
  // to have the date object to the beginning of the current day.
  date.setHours(0, 0, 0, 0);
  // set the number of seconds since midnight creating a new date obj
  date.setSeconds(inputValue);

  // The % 12 operator ensures that the result is a number between 0 and 11
  // The || 12 part sets the value to 12 if the result is 0 (12:00 is used to represent midnight in 12-hour clock format).
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const period = date.getHours() >= 12 ? 'PM' : 'AM';

  //The padStart method is used to ensure that the minutes are always displayed with two digits (e.g., "05" instead of "5").
  let newTimeString = `${hours}`;
  if (minutes === 30) {
    newTimeString += `:${minutes.toString().padStart(2, '0')}`;
  }
  newTimeString += ` ${period}`;

  return newTimeString;
};

export function formatOpeningHours(openingHours: DaySchedule[]): string {
  //tuple contains two numbers representing opening and closing times.
  const openingHoursPairs: [number, number][] = [];
  let i = 0;
  while (i < openingHours.length) {
    const openTime = openingHours[i].value;
    //The ? operator is used to handle the case where the next object is undefined
    const closeTime = openingHours[i + 1]?.value;
    //if both opening and closing times are defined it creates a new tuple with the two times and pushes it into the openingHoursPairs array.
    if (openTime && closeTime) {
      openingHoursPairs.push([openTime, closeTime]);
    }
    //considers each pair of consecutive objects in the array.
    i += 2;
  }

  // converting the millisec and create right format
  // from [ { "type": "open", "value": 36000 }, { "type": "close", "value": 64800 } ]
  // to 10 AM - 6 PM
  // for multiple element
  // from [ { "type": "open", "value": 32400 }, { "type": "close", "value": 39600 }, { "type": "open", "value": 57600 }, { "type": "close", "value": 82800 }]
  // to 9 AM - 11 AM, 4 PM - 11 PM
  const formattedOpeningHours = openingHoursPairs
    .map(
      pair => `${convertDate12Clock(pair[0])} - ${convertDate12Clock(pair[1])}`,
    )
    .join(', ');

  return formattedOpeningHours;
}
