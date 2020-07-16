class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        # base case
        if(len(needle) == 0): return 0;
        if(haystack == needle): return 0;
    
        sliceLength = len(needle);
        
        for i in range(len(haystack)):
            window = (i + sliceLength)
            
            if window <= len(haystack):
                if(haystack[i:window] == needle):
                    return i
            else:
                return -1
        
        return -1
         
        
