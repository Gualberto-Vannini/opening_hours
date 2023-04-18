import {
  reorderDays,
  convertDate12Clock,
  formatOpeningHours,
} from '../formatDateHelper';
import {
  ScheduleState,
  DaySchedule,
} from '../../../api/OpeningHoursApi/OpeningHoursTypes';

const SCHEDULE_STATE_MOCK_DATA: ScheduleState = {
  monday: [],
  tuesday: [
    {type: 'open', value: 36000},
    {type: 'close', value: 64800},
  ],
  wednesday: [],
  thursday: [
    {type: 'open', value: 36000},
    {type: 'close', value: 64800},
  ],
  friday: [{type: 'open', value: 36000}],
  saturday: [
    {type: 'close', value: 3600},
    {type: 'open', value: 36000},
  ],
  sunday: [
    {type: 'close', value: 3600},
    {type: 'open', value: 43200},
    {type: 'close', value: 75600},
  ],
};

describe('formatOpeningHours core function test', () => {
  it('formats opening hours correctly for single pairs', () => {
    const openingHours: DaySchedule[] = [
      {type: 'open', value: 36000},
      {type: 'close', value: 64800},
    ];
    expect(formatOpeningHours(openingHours)).toEqual('10 AM - 6 PM');
  });

  it('formats opening hours correctly for multiple pairs', () => {
    const openingHours: DaySchedule[] = [
      {type: 'open', value: 32400},
      {type: 'close', value: 39600},
      {type: 'open', value: 57600},
      {type: 'close', value: 82800},
    ];
    expect(formatOpeningHours(openingHours)).toEqual(
      '9 AM - 11 AM, 4 PM - 11 PM',
    );
  });

  it('returns an empty string for an empty array', () => {
    const openingHours: DaySchedule[] = [];
    expect(formatOpeningHours(openingHours)).toEqual('');
  });
});

describe('reorderDays core function test', () => {
  it('reorders the schedule correctly', () => {
    const reorderedSchedule = reorderDays(SCHEDULE_STATE_MOCK_DATA);

    expect(reorderedSchedule.monday).toEqual([]);
    expect(reorderedSchedule.tuesday).toEqual([
      {type: 'open', value: 36000},
      {type: 'close', value: 64800},
    ]);
    expect(reorderedSchedule.wednesday).toEqual([]);
    expect(reorderedSchedule.thursday).toEqual([
      {type: 'open', value: 36000},
      {type: 'close', value: 64800},
    ]);
    expect(reorderedSchedule.friday).toEqual([
      {type: 'open', value: 36000},
      {type: 'close', value: 3600},
    ]);
    expect(reorderedSchedule.saturday).toEqual([
      {type: 'open', value: 36000},
      {type: 'close', value: 3600},
    ]);
    expect(reorderedSchedule.sunday).toEqual([
      {type: 'open', value: 43200},
      {type: 'close', value: 75600},
    ]);
  });
});

describe('convertDate12Clock core function test', () => {
  it('converts milliseconds to 12-hour clock format correctly', () => {
    expect(convertDate12Clock(32400)).toEqual('9 AM');
    expect(convertDate12Clock(36000)).toEqual('10 AM');
    expect(convertDate12Clock(3600)).toEqual('1 AM');
    expect(convertDate12Clock(5400)).toEqual('1:30 AM');
    expect(convertDate12Clock(66600)).toEqual('6:30 PM');
    expect(convertDate12Clock(64800)).toEqual('6 PM');
  });
});
