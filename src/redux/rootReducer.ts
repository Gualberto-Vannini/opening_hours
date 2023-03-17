import {combineReducers} from '@reduxjs/toolkit';

import openHours from './openingHours/openHours';
import loading from './loading/loading';

const rootReducer = combineReducers({
  openHours,
  loading,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
