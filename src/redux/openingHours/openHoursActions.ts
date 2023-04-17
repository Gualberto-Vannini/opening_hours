import {createAsyncThunk} from '@reduxjs/toolkit';
import OpeningHoursApi from '../../api/OpeningHoursApi/OpeningHours';
import {ScheduleState} from '../../api/OpeningHoursApi/OpeningHoursTypes';
import {reorderDays} from '../../utils/helpers/formatDateHelper';

const loadOpeningHours = createAsyncThunk<
  ScheduleState,
  void,
  {rejectValue: string}
>('openHours/getItems', async (_, {rejectWithValue}) => {
  try {
    const response: ScheduleState = await OpeningHoursApi.fetchSchedule();
    const newSchedule: ScheduleState = {...response};

    // restructure the obj to have open-close in same day
    const orderedSchedule: ScheduleState = reorderDays(newSchedule);

    // Return the updated schedule
    return orderedSchedule;
  } catch (err) {
    //type guard to check if err is an instance of Error
    if (err instanceof Error) {
      return rejectWithValue(err.message);
    } else {
      return rejectWithValue('An unknown error occurred.');
    }
  }
});

const asyncOpeningHoursActions = {
  loadOpeningHours,
};

export default asyncOpeningHoursActions;
