class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        #base cases(s)
        if(numRows == 0): return []
        if(numRows == 1): return [[1]]
        if(numRows == 2): return [[1], [1,1]]
    
        result = [[1], [1,1]]
        count = numRows - 2;
        i = 0;
        while(i < count):
            j = -1;
            temp = [];
            previous = result[len(result) - 1];
            while(j < len(previous) - 1):
                if(j == -1):
                    temp.append(1);
                else:
                    temp.append(previous[j] + previous[j+1])
                j += 1;
            temp.append(1);
            result.append(temp);
            i += 1;
    
        return result;
        
