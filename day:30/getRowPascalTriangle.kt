class Solution {
    fun getRow(rowIndex: Int): List<Int> {
        // base cases(s)
        if(rowIndex == 0) return listOf(1)
        if(rowIndex == 1) return listOf(1,1)
        if(rowIndex == 2) return listOf(1,2,1)
    
        var result = mutableListOf(1,2,1)
        var count = rowIndex - 2;
        var i = 0;
        while(i < count) {
            var j = -1;
            var temp:MutableList<Int> = mutableListOf();
            var previous = result;
            while(j < previous.size - 1) {
                if(j == -1) {
                    temp.add(1);
                }
                else {
                    temp.add(previous[j] + previous[j+1]);
                }
                j += 1;
            }
            temp.add(1);
            result = temp;
            i += 1;
        }
    
        return result;
        
        }
}
