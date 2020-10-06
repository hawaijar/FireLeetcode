class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        #base case
        if(len(s) == 0):
            return 0;
        
        longest = 0;
    
        for i in range(len(s)):
            count = 0;
            hash = {};
            for j in range(i, len(s)):
                if s[j] not in hash:
                    count += 1;
                    hash[s[j]] = 1;
                    longest = max(longest, count);
                else:
                    break;
        return longest;
