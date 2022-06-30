#### Calendar Matching

Let us assume that we want to set up a meeting with our co-worker. We have got our calendar (of scheduled meetings) and our co-worker's calendar also. 
We also have our daily bound (earliest and latest time available) and our co-worker's daily bound. We

The calendars are in the format below -
```calendar1 = [
["8:00", "9:00"],
["12:00", "13:00"],
["15:00", "18:00"]
]
```
In the above, the person has a meeting (busy) between 8AM and 9AM, 12PM and 1PM and so on.

And the daily bounds are in the format below -

```
["8:00", "20:00"]
```
In the above, the person is available from 8AM till 8PM.

If we are given two calendars and their daily bounds, and also a meeting duration, D, how can we find 
those intervals that we can schedule a meeting with the given meeting duration, D.

##### Example 1
```
calendar1: [
    ["9:00", "16:00"],
    ["17:00", "18:00"]
  ],
  dailyBounds1: ["9:00", "20:00"],
  calendar2: [
    ["14:30", "15:00"],
    ["17:00", "18:00"]
  ],
  dailyBounds2: ["10:00", "21:00"],
  "meetingDuration": 30
```

In the above case, we can only schedule meetings with the below intervals -

```
["16:00", "17:00"], ["18:00", "20:00"]
```

### Solution

- Find all the free intervals of the first calendar
- Find all the free intervals of the second calendar
- Merge the above intervals (in ascending order) and select those intervals whose duration is at least the required meeting duration.

#### Time complexity = 3*O(n) == O(n)
#### Space complexity = O(n)
