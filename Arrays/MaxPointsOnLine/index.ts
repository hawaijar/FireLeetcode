class MaxPointsOnLine {
  solution(points: number[][]) {
    // base case
    if (points.length === 0) {
      return 0;
    }
    if (points.length === 1) {
      return 1;
    }

    let maxNumberOfPointsOnLine = 2;

    function gcd(a: number, b: number): number {
      a = Math.abs(a);
      b = Math.abs(b);
      if (b > a) {
        [a, b] = [b, a];
      }
      while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
      }
    }

    function integerDivision(a: number, b: number): number {
      return ~~(a / b);
    }

    function getSlopeOfLineBetween(
      point1: number[],
      point2: number[]
    ): number[] {
      const [x1, y1] = point1;
      const [x2, y2] = point2;

      let xDiff = x1 - x2;
      let yDiff = y1 - y2;
      const greatestCommonDivisor = gcd(Math.abs(xDiff), Math.abs(yDiff));

      xDiff = integerDivision(xDiff, greatestCommonDivisor);
      yDiff = integerDivision(yDiff, greatestCommonDivisor);

      if (xDiff < 0) {
        xDiff *= -1;
        yDiff *= -1;
      }

      return [xDiff, yDiff];
    }

    for (let [index, point1] of points.entries()) {
      const slopes: { [key: string]: number } = {};
      // start searching points other than points[index] == point1
      for (let j = index + 1; j < points.length; j++) {
        const point2 = points[j];
        const [x, y] = getSlopeOfLineBetween(point1, point2);
        const hashKey = `${x}:${y}`;
        if (!(hashKey in slopes)) {
          slopes[hashKey] = 1;
        }
        slopes[hashKey] += 1;
      }
      maxNumberOfPointsOnLine = Math.max(
        maxNumberOfPointsOnLine,
        Math.max(...Object.values(slopes))
      );
    }
    return maxNumberOfPointsOnLine;
  }
}

// Testing
const linePoints = [
  [1, 1],
  [3, 2],
  [5, 3],
  [4, 1],
  [2, 3],
  [1, 4],
];

const obj4 = new MaxPointsOnLine();
const result22 = obj4.solution(linePoints);
console.log(result22);
