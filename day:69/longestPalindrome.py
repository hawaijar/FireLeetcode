class Solution:
    def buildPTable(self, s):
        matrix = [];
        for char in s:
            matrix.append([0] * len(s))
        #all single char are palindrome themselves
        for i in range(len(s)):
            matrix[i][i] = 1;
        #check palindrome for substrings (length of 2 and above)
        for col in range(1, len(s)):
            for row in range(col):
                if(row + 1 == col):
                    #two chars case
                    if(s[row] == s[col]):
                        matrix[row][col] = 1;
                else:
                    #more than two chars
                    #check if the bottom-left is 1
                    if(matrix[row+1][col-1]):
                        #check whether the leftmost/rightmost chars are same;
                        #substring between them is palindrome
                        if(s[row] == s[col]):
                            matrix[row][col] = 1;
        return matrix;
    
    def longestPalindrome(self, s: str) -> str:
        #base case
        if(len(s) <= 1): return s;
    
        longest = '';
        matrix = self.buildPTable(s);
    
        for i in range(len(s)):
            for j in range(len(s)):
                if(i > j):
                    continue;
                if(matrix[i][j] == 1):
                    word = s[i:j + 1]
                    if len(word) > len(longest):
                        longest = word;
    
        return longest;
