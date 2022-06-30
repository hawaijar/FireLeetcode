class ScheduleMeeting {
  private readonly calendar1: string[][];
  private readonly dailyBounds1: string[];
  private readonly calendar2: string[][];
  private readonly dailyBounds2: string[];
  private readonly meetingDuration: number;

  constructor(
    calendar1: string[][],
    dailyBounds1: string[],
    calendar2: string[][],
    dailyBounds2: string[],
    meetingDuration: number
  ) {
    this.calendar1 = calendar1;
    this.dailyBounds1 = dailyBounds1;
    this.calendar2 = calendar2;
    this.dailyBounds2 = dailyBounds2;
    this.meetingDuration = meetingDuration;
  }

  solution() {
    // base case
    if (
      this.meetingDuration <= 0 ||
      this.dailyBounds1.length === 0 ||
      this.dailyBounds2.length === 0
    ) {
      return [[""]];
    }
    // find all free intervals of the first calendar
    // calendar1 = [[a1, b1], [a2, b2], [a3, b3]...]
    const firstFreeIntervals = ScheduleMeeting.findAllFreeIntervalsOf(
      this.calendar1,
      this.dailyBounds1
    );
    // find all free intervals of the second calendar
    // calendar2 = [[m1, n1], [m2, n2], [m3, n3]...]
    const secondFreeIntervals = ScheduleMeeting.findAllFreeIntervalsOf(
      this.calendar2,
      this.dailyBounds2
    );

    // Now do the merging of the two intervals and find the common intervals whose duration >= meetingDuration
    let firstIndex = 0;
    let secondIndex = 0;

    const result = [];

    while (
      firstIndex < firstFreeIntervals.length &&
      secondIndex < secondFreeIntervals.length
    ) {
      const [firstStart, firstEnd] = firstFreeIntervals[firstIndex];
      const [secondStart, secondEnd] = secondFreeIntervals[secondIndex];

      const commonStartInterval = Math.max(firstStart, secondStart);
      const commonEndInterval = Math.min(firstEnd, secondEnd);

      if (commonEndInterval - commonStartInterval >= this.meetingDuration) {
        result.push([
          ScheduleMeeting.minutesToTime(commonStartInterval),
          ScheduleMeeting.minutesToTime(commonEndInterval),
        ]);
      }

      if (firstEnd > secondEnd) {
        secondIndex += 1;
      } else {
        firstIndex += 1;
      }
    }
    return result;
  }

  private static findAllFreeIntervalsOf(
    calendar: string[][],
    dailyBounds: string[]
  ) {
    let firstInterval = ScheduleMeeting.timeToMinutes(dailyBounds[0]);
    const freeIntervals = [];
    for (const [start, end] of calendar) {
      const startTime = ScheduleMeeting.timeToMinutes(start);
      const endTime = ScheduleMeeting.timeToMinutes(end);

      if (firstInterval < startTime) {
        freeIntervals.push([firstInterval, startTime]);
      }
      firstInterval = endTime;
    }
    let endInterval = ScheduleMeeting.timeToMinutes(dailyBounds[1]);
    if (firstInterval < endInterval) {
      freeIntervals.push([firstInterval, endInterval]);
    }
    return freeIntervals;
  }

  static timeToMinutes(time: string) {
    const [hour, minute] = time.split(":");
    return Number(hour) * 60 + Number(minute);
  }
  static minutesToTime(minutes: number) {
    // remaining minutes; for e.g. if it's 08:34, this will give 34.
    const minutesInterval = minutes % 60;
    const hours = (minutes - minutesInterval) / 60;

    if (minutesInterval < 10) {
      return `${hours}:0${minutesInterval}`;
    }
    return `${hours}:${minutesInterval}`;
  }
}

// Testing
const calendar1: string[][] = [];
const dailyBounds1 = ["9:00", "20:00"];
const calendar2: [][] = [];
const dailyBounds2 = ["9:00", "16:30"];
const meetingDuration = 30;

const obj = new ScheduleMeeting(
  calendar1,
  dailyBounds1,
  calendar2,
  dailyBounds2,
  meetingDuration
);

console.log(obj.solution());
