function dfs(board, i, j) {
    // check whether [i, j] lies within the boundary
    if( i < 0 || j < 0) return;
    if(i >= board.length || j >= board[0].length) return;
    
    if(board[i][j] === 'O') {
        board[i][j] = '1';
        // dfs its neighbours
        dfs(board, i - 1, j);
        dfs(board, i + 1, j);
        dfs(board, i, j - 1);
        dfs(board, i, j + 1);
    }
    
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    // base case
    if(board.length === 0) return;
    
    let ROWS = board.length;
    let COLS = board[0].length;
    
    // let's encode 'O' lying in the borders as '1'
    
    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            // top & left
            if(i === 0 || j === 0) {
                if(board[i][j] === 'O') {
                    dfs(board, i, j);
                }
            }
            // bottom
            if(i === ROWS - 1) {
                if(board[i][j] === 'O') {
                    dfs(board, i, j);
                }
            }
            // right
            if(j === COLS - 1) {
                if(board[i][j] === 'O') {
                    dfs(board, i, j);
                }
            }
        }
    }
    // scan the grid and converts all 'O's to 'X's
    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            if(board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }
    // scan the grid and converts all '1's to 'A's
    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLS; j++) {
            if(board[i][j] === '1') {
                board[i][j] = 'O';
            }
        }
    }
    
};
