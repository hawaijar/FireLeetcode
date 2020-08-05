class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        #base cases(s)
        if(rowIndex == 0): return [1]
        if(rowIndex == 1): return [1,1]
        if(rowIndex == 2): return [1,2,1]
    
        result = [1,2,1]
        count = rowIndex - 2;
        i = 0;
        while(i < count):
            j = -1;
            temp = [];
            previous = result;
            while(j < len(previous) - 1):
                if(j == -1):
                    temp.append(1)
                else:
                    temp.append(previous[j] + previous[j+1]);
                j += 1;
            temp.append(1);
            result = temp;
            i += 1;
    
        return result;
