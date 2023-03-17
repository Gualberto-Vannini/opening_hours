import {createSlice} from '@reduxjs/toolkit';

import asyncOpeningHoursActions from './openHoursActions';
import {ScheduleState} from '../../api/OpeningHoursApi/OpeningHoursTypes';

let initialState: ScheduleState = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
};
// A function that accepts an initial state, an object of reducer functions, and a "slice name",
// and automatically generates action creators and action types that correspond to the reducers and state.
// This APIs are the standard approach for writing Redux logic.

const openHoursSlice = createSlice({
  name: 'openHours',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      asyncOpeningHoursActions.loadOpeningHours.fulfilled,
      (state, action) => {
        state = action.payload;
        return state;
      },
    );
  },
});

export const openHoursActions = {
  ...openHoursSlice.actions,
  ...asyncOpeningHoursActions,
};

export default openHoursSlice.reducer;
