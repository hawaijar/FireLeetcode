/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
return the number of islands.
Example 1:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 */

function numIslands(grid) {
  // base cases
  if (grid.length === 0) return 0;

  let sum = 0;
  let countCells = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      sum += grid[i][j];
      countCells += 1;
    }
  }
  // if all cells are zeroes, return 0
  if (sum === 0) return 0;
  // if all cells are ones, return 1
  if (sum === countCells) return 1;

  let count = 0;
  // We need to parse all cells
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count += bfs(grid, i, j);
      }
    }
  }
  return count;
}

const VISITED = "2"; // 0: water, 1: land

function bfs(grid, row, col) {
  // find all the neighbours of grid[row][col] and reset any '1's to '0's.
  // check the boundaries of the grid to identify invalid moves
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[row].length ||
    grid[row][col] === VISITED ||
    grid[row][col] === "0"
  ) {
    return;
  }
  grid[row][col] = VISITED;
  // traverse north direction
  bfs(grid, row - 1, col);
  // traverse south direction
  bfs(grid, row + 1, col);
  // traverse east direction
  bfs(grid, row, col - 1);
  // traverse west direction
  bfs(grid, row, col + 1);

  return 1;
}
