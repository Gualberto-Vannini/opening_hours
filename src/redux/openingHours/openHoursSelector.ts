import {RootState} from '../rootReducer';

const openHours = (state: RootState) => state?.openHours;

const openHoursSelectors = {
  openHours,
};

export default openHoursSelectors;
