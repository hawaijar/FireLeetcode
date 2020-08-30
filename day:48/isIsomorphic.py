class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        #base case 
        if(len(s) != len(t)): 
            return False;
    
        hash = {}; 
    
        for i in range(len(s)):
            [x, y] = [s[i], t[i]]
            if(x in hash):
                if(hash[x] != y):
                    return False;
            else:
                #x is new
                #check y is also new
                if(y in hash.values()):
                    return False;
            hash[x] = y;
                    
        return True;
