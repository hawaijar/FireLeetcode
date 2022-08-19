const OPEN = 0;
const CLOSE = 1;

export interface Point {
  x: number;
  y: number;
}

interface MazeNode {
  point: Point;
  distance: number;
}

const DIRECTIONS = [
  // top
  [0, -1],
  // bottom
  [0, 1],
  // left
  [-1, 0],
  // right
  [1, 0],
];

function isValid(
  row: number,
  col: number,
  maze: number[][],
  visited: boolean[][]
) {
  // check boundary conditions
  if (row < 0 || row >= maze.length || col < 0 || col >= maze[0].length) {
    return false;
  }
  // check if the node is already visited
  if (visited[row][col]) {
    return false;
  }
  // check if the node is 'close' or 'block'
  if (maze[row][col] === CLOSE) {
    return false;
  }

  // otherwise, it's valid (to be a neighbour)
  return true;
}

function getNeighbours(node: MazeNode, maze: number[][], visited: boolean[][]) {
  const { point, distance: nodeDistance } = node;
  const { x: row, y: col } = point;
  const neighbours: MazeNode[] = [];
  for (let direction of DIRECTIONS) {
    const [dx, dy] = direction;
    const newX = dx + row;
    const newY = dy + col;
    if (isValid(newX, newY, maze, visited)) {
      neighbours.push({
        point: { x: newX, y: newY },
        distance: nodeDistance + 1,
      });
    }
  }
  return neighbours;
}

export function findShortestPathLength(
  maze: number[][],
  source: Point,
  destination: Point
): number {
  // check the invalid cases
  if (
    !maze ||
    maze.length === 0 ||
    maze[source.x][source.y] === CLOSE ||
    maze[destination.x][destination.y] === CLOSE
  ) {
    return -1;
  }
  const ROWS = maze.length;
  const COLS = maze[0].length;

  // create the matrix to track the 'visited' status
  let visited: boolean[][] = [];
  for (let i = 0; i < ROWS; i++) {
    const row: boolean[] = new Array(COLS).fill(false);
    visited.push(row);
  }
  let shortestDistance = Infinity;

  const queue: MazeNode[] = [{ point: source, distance: 0 }];
  while (queue.length > 0) {
    const node = queue.shift()!;
    const { point, distance } = node;
    // check if we encounter the 'destination' point
    if (point.x === destination.x && point.y === destination.y) {
      shortestDistance = distance;
      break;
    }
    // update the 'visited' status
    visited[point.x][point.y] = true;

    const neighbors = getNeighbours(node, maze, visited);
    for (let neighbor of neighbors) {
      const { point, distance } = neighbor;
      // check whether the neighbor is the 'destination' node
      if (point.x === destination.x && point.y === destination.y) {
        shortestDistance = distance;
        queue.length = 0;
        break;
      }
      // check whether the neighbor is already visited
      if (!visited[point.x][point.y]) {
        queue.push(neighbor);
      }
    }
  }

  // no path available.
  if (shortestDistance === Infinity) {
    return -1;
  }
  return shortestDistance;
}
