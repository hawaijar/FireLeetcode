// write a function that takes X by X array of arrays of numbers
// as well two x/y combinations and have it return the shortest
// length (you don't need to track the actual path) from point A
// to point B.
//
// the numbers in the maze array represent as follows:
// 0 – open space
// 1 - closed space, cannot pass through. a wall
// 2 - one of the two origination points
export interface Point {
  x: number;
  y: number;
}
const BY_A = 0;
const BY_B = 1;
const BY_NONE = 2;

interface MazeNode {
  point: Point;
  closed: boolean;
  length: number;
  opened: typeof BY_A | typeof BY_B | typeof BY_NONE;
}

function getVisited(maze: number[][]) {
  let visited: MazeNode[][] = [];
  for (let row = 0; row < maze.length; row++) {
    let xAxis: MazeNode[] = [];
    for (let col = 0; col < maze[0].length; col++) {
      const coordinate: MazeNode = {
        point: { x: row, y: col },
        closed: maze[col][row] === 1,
        length: 0,
        opened: BY_NONE,
      };
      xAxis.push(coordinate);
    }
    visited.push(xAxis);
  }
  return visited;
}

function getNeighbours(visited: MazeNode[][], node: MazeNode): MazeNode[] {
  const neighbours: MazeNode[] = [];
  const point = node.point;
  const { x, y } = point;

  // left direction
  if (x - 1 >= 0 && !visited[x - 1][y].closed) {
    neighbours.push(visited[x - 1][y]);
  }
  // right direction
  if (x + 1 < visited[0].length && !visited[x + 1][y].closed) {
    neighbours.push(visited[x + 1][y]);
  }
  // up direction
  if (y - 1 >= 0 && !visited[x][y - 1].closed) {
    neighbours.push(visited[x][y - 1]);
  }
  // down direction
  if (y + 1 < visited.length && !visited[x][y + 1].closed) {
    neighbours.push(visited[x][y + 1]);
  }

  return neighbours;
}

export function findShortestPathLength(
  maze: number[][],
  source: Point,
  destination: Point
): number {
  const visited = getVisited(maze);
  visited[source.x][source.y].opened = BY_A;
  visited[destination.x][destination.y].opened = BY_B;

  let aQueue: MazeNode[] = [visited[source.x][source.y]];
  let bQueue: MazeNode[] = [visited[destination.x][destination.y]];

  let iteration = 0;

  while (aQueue.length > 0 && bQueue.length > 0) {
    iteration += 1;

    // BFS from A node
    let aNeighbors: MazeNode[] = [];
    while (aQueue.length > 0) {
      const node = aQueue.shift()!;
      const neighbors = getNeighbours(visited, node);
      aNeighbors = aNeighbors.concat(neighbors);
    }
    // process A neighbors
    for (let neighbor of aNeighbors) {
      if (neighbor.opened === BY_B) {
        return neighbor.length + iteration;
      } else if (neighbor.opened === BY_NONE) {
        neighbor.opened = BY_A;
        neighbor.length = iteration;
        aQueue.push(neighbor);
      }
    }
    ///////////////////////////////////////////
    // BFS from B node
    let bNeighbors: MazeNode[] = [];
    while (bQueue.length > 0) {
      const node = bQueue.shift()!;
      const neighbors = getNeighbours(visited, node);
      bNeighbors = bNeighbors.concat(neighbors);
    }
    // process B neighbors
    for (let neighbor of bNeighbors) {
      if (neighbor.opened === BY_A) {
        return neighbor.length + iteration;
      } else if (neighbor.opened === BY_NONE) {
        neighbor.opened = BY_B;
        neighbor.length = iteration;
        bQueue.push(neighbor);
      }
    }
  }

  return -1;
}

// module.exports = findShortestPathLength;
export default findShortestPathLength;

// const sixBySix = [
//   [0, 0, 0, 0, 0, 0],
//   [0, 2, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 2, 0, 0, 0],
// ];
//
// const source: Point = { x: 1, y: 1 };
// const destination: Point = { x: 2, y: 5 };
//
// const shortestPathLength = findShortestPathLength(
//   sixBySix,
//   source,
//   destination
// );
//
// console.log(shortestPathLength); // should equal 7

// const fifteenByFifteen = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
//   [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
//   [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0],
//   [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
//   [0, 0, 1, 0, 1, 0, 1, 1, 2, 1, 0, 1, 0, 1, 0],
//   [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
//   [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
//   [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0],
//   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
//   [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];
//
// const source: Point = { x: 1, y: 1 };
// const destination: Point = { x: 8, y: 8 };
//
// const shortestPathLength = findShortestPathLength(
//   fifteenByFifteen,
//   source,
//   destination
// );
//
// console.log(shortestPathLength); // should equal 78

// const eightByEight = [
//   [0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 1, 0, 1, 1, 0],
//   [0, 0, 0, 0, 0, 0, 1, 0],
//   [0, 2, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0, 0, 1, 2],
// ];
//
// const source: Point = { x: 1, y: 7 };
// const destination: Point = { x: 7, y: 7 };
//
// const shortestPathLength = findShortestPathLength(
//   eightByEight,
//   source,
//   destination
// );
//
// console.log(shortestPathLength); // should equal 78
