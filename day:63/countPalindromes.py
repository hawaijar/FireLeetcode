class Solution:
    def countSubstrings(self, s: str) -> int:
        #let's create a 2D/table based on the input string
        matrix = [];
        count = 0;
    
        for char in s:
            matrix.append([0]*len(s))
    
        #all individual char (of the string) is palindrome
        for i in range(len(s)):
            matrix[i][i] = 1;
            count += 1;
    
        for col in range(1, len(s)):
            for row in range(col):
                #for substrings of length = 2, if the first & last equals ==> palindrome
                if(row == col - 1 and s[row] == s[col]):
                    matrix[row][col] = 1;
                    count += 1;
                else:
                    if(matrix[row + 1][col - 1] == 1 and s[row] == s[col]):
                        matrix[row][col] = 1;
                        count += 1;
    
        return count;
