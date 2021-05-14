class Cell {
	public x: number;
	public y: number;
	public value: number;
	public visited: boolean;
	constructor(
		x: number,
		y: number,
		value: number = 0,
		visited: boolean = false
	) {
		this.x = x;
		this.y = y;
		this.value = value;
		this.visited = visited;
	}
}
function numIslands(grid: string[][]): number {
// base case 1 - if all 1s, return 1
	// base case 2 - if all 0s, return 0
	const ROWS = grid.length;
	const COLS = grid[0].length;
	let sum = 0;
	for (let i = 0; i < ROWS; i++) {
		for (let j = 0; j < COLS; j++) {
			sum += +grid[i][j];
		}
	}
	if (sum === ROWS * COLS) return 1; // all 1s case
	if (sum === 0) return 0; // all 0s case

	let cells: Cell[][];
	cells = [];
	for (let i = 0; i < ROWS; i++) {
		cells[i] = [];
		for (let j = 0; j < COLS; j++) {
			cells[i][j] = new Cell(i, j, +grid[i][j]);
		}
	}
	function isValid(x: number, y: number): boolean {
		if (x >= 0 && x < ROWS) {
			if (y >= 0 && y < COLS) {
				return true;
			}
		}
		return false;
	}
	function getNorth(cell: Cell) {
		if (isValid(cell.x, cell.y - 1)) {
			return cells[cell.x][cell.y - 1];
		}
		return null;
	}
	function getSouth(cell: Cell) {
		if (isValid(cell.x, cell.y + 1)) {
			return cells[cell.x][cell.y + 1];
		}
		return null;
	}
	function getEast(cell: Cell) {
		if (isValid(cell.x + 1, cell.y)) {
			return cells[cell.x + 1][cell.y];
		}
		return null;
	}
	function getWest(cell: Cell) {
		if (isValid(cell.x - 1, cell.y)) {
			return cells[cell.x - 1][cell.y];
		}
		return null;
	}
	function getNeighbours(cell: Cell): Cell[] {
		let neighbours: Cell[] = [];
		neighbours.push(getNorth(cell));
		neighbours.push(getSouth(cell));
		neighbours.push(getEast(cell));
		neighbours.push(getWest(cell));

		return neighbours;
	}
	let count = 0;
	// find 1s surrounded with 0s (islands)

	for (let i = 0; i < ROWS; i++) {
		for (let j = 0; j < COLS; j++) {
			if (cells[i][j].visited || cells[i][j].value === 0) {
				continue;
			}
			const queue = [cells[i][j]];
			while (queue.length) {
				const cell = queue.shift();
				// no need to process cell with '0' value
				if (cell.value === 0 || cell.visited) {
					continue;
				}
				cell.visited = true;
				const neighbours = getNeighbours(cell);
				// check if all neighbours are 0s (nulls)
				if (neighbours.every((cell) => cell === null)) {
					// count += 1;
					// continue;
					continue;
				}
				for (let neighbour of neighbours) {
					if (!neighbour) continue;
					queue.push(neighbour);
				}
			}
			count += 1;
		}
	}

	return count;
};
