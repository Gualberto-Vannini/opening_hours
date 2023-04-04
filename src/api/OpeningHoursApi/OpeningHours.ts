import {AxiosResponse} from 'axios';
import {gistBucketApiAxios} from '../Apis';
import {ScheduleState} from './OpeningHoursTypes';
//there are 2 sample data apis
//you can switch ROUTE_OPENING_HOURS with ROUTE_OPENING_HOURS_SECOND and have a different dataset
// import {ROUTE_OPENING_HOURS, ROUTE_OPENING_HOURS_SECOND} from './routes';

import {ROUTE_OPENING_HOURS} from './routes';

class OpeningHoursApi {
  getOpeningHours(): Promise<AxiosResponse<ScheduleState>> {
    return gistBucketApiAxios.get(ROUTE_OPENING_HOURS);
  }
}
export default new OpeningHoursApi();
