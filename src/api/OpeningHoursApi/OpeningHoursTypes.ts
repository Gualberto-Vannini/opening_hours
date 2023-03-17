export type DaySchedule = {
  type: 'open' | 'close';
  value: number;
};

export interface ScheduleState {
  [key: string]: DaySchedule[] | [];
}
