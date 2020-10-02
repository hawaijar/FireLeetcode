from typing import List


def build_partition_table(s):
    matrix = []
    for char in s:
        matrix.append([0] * len(s))
    # all single char are palindrome themselves
    for i in range(len(s)):
        matrix[i][i] = 1
    # check palindrome for substrings (length of 2 and above)
    for col in range(1, len(s)):
        for row in range(col):
            if row + 1 == col:
                # two chars case
                if s[row] == s[col]:
                   matrix[row][col] = 1
            else:
                # more than two chars
                # check if the bottom-left is 1
                if matrix[row + 1][col - 1]:
                    # check whether the leftmost/rightmost chars are same
                    # substring between them is palindrome
                    if s[row] == s[col]:
                        matrix[row][col] = 1
    return matrix

class Solution:
    def __init__(self):
        self.pMatrix = []
        self.result = []

    def dfs(self, start, s, current_list):
        if start >= len(s):
            self.result.append(current_list[:])
        else:
            for end in range(start, len(s)):
                # check the substring (start, end)
                if self.pMatrix[start][end]:
                    current_list.append(s[start:end+1])
                    self.dfs(end + 1, s, current_list)
                    # backtrack it
                    current_list.pop()

    def partition(self, s: str) -> List[List[str]]:
        self.pMatrix = build_partition_table(s)
        self.dfs(0, s, [])
        r = self.result[:]
        result = []
        return r
        
