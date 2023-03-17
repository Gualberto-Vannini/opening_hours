import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../rootReducer';

const loadingSelector = (state: RootState) => state.loading;

const openHoursRequestState = createSelector(
  loadingSelector,
  state => state.openHours || {},
);

export default {
  openHoursRequestState,
};
