import {createAsyncThunk} from '@reduxjs/toolkit';
import OpeningHoursApi from '../../api/OpeningHoursApi/OpeningHours';
import {ScheduleState} from '../../api/OpeningHoursApi/OpeningHoursTypes';
import {reorderDays} from '../../utils/helpers/formatDateHelper';

export const loadOpeningHours = createAsyncThunk<ScheduleState>(
  'openHours/getItems',
  async () => {
    const response: {data: ScheduleState} =
      await OpeningHoursApi.getOpeningHours();
    const newSchedule: ScheduleState = {...response.data};

    // restructure the obj to have open-close in same day
    const orderedSchedule: ScheduleState = reorderDays(newSchedule);

    // Return the updated schedule
    return orderedSchedule;
  },
);

const asyncOpeningHoursActions = {
  loadOpeningHours,
};

export default asyncOpeningHoursActions;
