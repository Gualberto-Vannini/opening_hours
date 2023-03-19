import useCurrentDay from '../useCurrentDay';

describe('useCurrentDay', () => {
  it('returns the correct day of the week and isToday value for the given checkDay', () => {
    // Test for today (the day the test is run)
    const today = new Date().toLocaleDateString('en-US', {weekday: 'long'});
    const {dayOfTheWeek, isToday} = useCurrentDay(today);
    expect(dayOfTheWeek).toEqual(today);
    expect(isToday).toBe(true);

    // Test for the day after today
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const checkDay = tomorrow.toLocaleDateString('en-US', {weekday: 'long'});
    const {isToday: isTodayTomorrow} = useCurrentDay(checkDay);
    expect(isTodayTomorrow).toBe(false);
  });
});
