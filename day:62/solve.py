class Solution:
    def dfs(self, board, i, j):
        # check whether [i, j] lies within the boundary
        if( i < 0 or j < 0): return;
        if(i >= len(board) or j >= len(board[0])): return;
    
        if(board[i][j] == 'O'):
            board[i][j] = '1';
            # dfs its neighbours
            self.dfs(board, i - 1, j);
            self.dfs(board, i + 1, j);
            self.dfs(board, i, j - 1);
            self.dfs(board, i, j + 1);
            
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        #base case
        if(len(board) == 0): return;
    
        ROWS = len(board);
        COLS = len(board[0]);
    
        # let's encode 'O' lying in the borders as '1'
    
        for i in range(ROWS):
            for j in range(COLS):
                # top & left
                if(i == 0 or j == 0):
                    if(board[i][j] == 'O'):
                        self.dfs(board, i, j);
                # bottom
                if(i == ROWS - 1):
                    if(board[i][j] == 'O'):
                        self.dfs(board, i, j);
                # right
                if(j == COLS - 1):
                    if(board[i][j] == 'O'):
                        self.dfs(board, i, j);
                        
        # scan the grid and converts all 'O's to 'X's
        for i in range(ROWS):
            for j in range(COLS):
                if(board[i][j] == 'O'):
                    board[i][j] = 'X';
        # scan the grid and converts all '1's to 'A's
        for i in range(ROWS):
            for j in range(COLS):
                if(board[i][j] == '1'):
                    board[i][j] = 'O';
