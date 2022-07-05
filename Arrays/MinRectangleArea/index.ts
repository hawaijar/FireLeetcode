function convertPointToString(x: number, y: number): string {
  return `${x}:${y}`;
}
class MinimumRectangleArea {
  solution(points: number[][]) {
    // base case
    if (points.length === 0) {
      return 0;
    }
    let minArea = +Infinity;
    // create a set of unique co-ordinates.
    // They will be handy when we search for opposite diagonals.
    const pointSet: Set<string> = new Set<string>();
    for (const point of points) {
      const [x, y] = point;
      pointSet.add(convertPointToString(x, y));
    }
    // scan each and every co-ordinate and try finding corresponding diagonal point
    for (const [index, point] of points.entries()) {
      const [p1x, p1y] = point;
      for (let j = index + 1; j < points.length; j++) {
        const [p2x, p2y] = points[j];
        if (p1x !== p2x && p1y !== p2y) {
          // found a diagonal
          // Find the opposite diagonal from the set
          const oppositeDiagonalPoint1 = pointSet.has(
            convertPointToString(p1x, p2y)
          );
          const oppositeDiagonalPoint2 = pointSet.has(
            convertPointToString(p2x, p1y)
          );
          const oppositeDiagonalExist =
            oppositeDiagonalPoint1 && oppositeDiagonalPoint2;
          if (oppositeDiagonalExist) {
            const area = Math.abs(p1x - p2x) * Math.abs(p1y - p2y);
            minArea = Math.min(minArea, area);
          }
        }
      }
    }
    if (minArea < +Infinity) {
      return minArea;
    }
    return 0;
  }
}

// Testing

const points = [
  [2, 5],
  [1, 5],
  [5, 1],
  [2, 4],
  [2, 2],
  [4, 2],
  [4, 5],
  [1, 2],
  [0, 0],
  [10, 10],
];

const obj2 = new MinimumRectangleArea();
const result2 = obj2.solution(points);
console.log(result2);
