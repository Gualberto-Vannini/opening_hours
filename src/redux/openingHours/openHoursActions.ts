import {createAsyncThunk} from '@reduxjs/toolkit';
import OpeningHoursApi from '../../api/OpeningHoursApi/OpeningHours';
import {DaySchedule} from '../../api/OpeningHoursApi/OpeningHoursTypes';

interface ScheduleState {
  [key: string]: DaySchedule[];
}
// interface ConvertedDaySchedule extends DaySchedule {
//   dateConversion: string;
// }
export const loadOpeningHours = createAsyncThunk(
  'openHours/getItems',
  async () => {
    // const response = await OpeningHoursApi.getOpeningHours();
    // return response.data;
    const response = await OpeningHoursApi.getOpeningHours();
    const newSchedule = {...response.data};
    // Order the days of the week

    // Order the days of the week
    const orderedSchedule: ScheduleState = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
      ...newSchedule,
    };

    // Loop through the days of the week to be sure of the week's order of the item
    Object.keys(orderedSchedule).forEach(day => {
      const daySchedule = orderedSchedule[day];
      const nextDay =
        Object.keys(orderedSchedule)[
          (Object.keys(orderedSchedule).indexOf(day) + 1) % 7
        ];
      const nextDaySchedule = orderedSchedule[nextDay];

      // If the day has only one schedule item and the next day exists, move the first item of the next day to the current day
      if (daySchedule.length === 1 && nextDaySchedule) {
        const nextDayFirstSchedule = nextDaySchedule[0];
        orderedSchedule[day] = [...daySchedule, nextDayFirstSchedule];
        orderedSchedule[nextDay] = nextDaySchedule.slice(1);
      }
    });

    // Return the updated schedule
    return orderedSchedule;
  },
);

const asyncOpeningHoursActions = {
  loadOpeningHours,
};

export default asyncOpeningHoursActions;
