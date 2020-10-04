class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        #base case
        if(len(s) == 1):
            if(s in wordDict):
                return True;
            else:
                return False;
            pyt
        queue = [0];
        visited = [0] * len(s)
        while(len(queue) != 0):
            start = queue.pop(0);
            if(visited[start] == 0):
                for end in range(start, len(s)):
                    word = s[start:end + 1]
                    if(word in wordDict):
                        if(end == len(s) - 1):
                            return True;
                        queue.append(end + 1);
            visited[start] = 1;
        
        return False;
