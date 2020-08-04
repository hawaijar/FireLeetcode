class Solution {
    fun generate(numRows: Int): List<List<Int>> {
        // base cases(s)
        if(numRows == 0) return listOf()
        if(numRows == 1) return listOf(listOf(1))
        if(numRows === 2) return listOf(listOf(1), listOf(1,1))
    
        val result = mutableListOf(listOf(1), listOf(1,1))
        val count = numRows - 2;
        var i = 0;
        while(i < count) {
        var j = -1;
        val temp: MutableList<Int> = mutableListOf();
        var previous = result.get(result.size - 1);
        while(j < previous.size - 1) {
            if(j === -1) {
                temp.add(1);
            }
            else {
                temp.add(previous.get(j) + previous.get(j+1));
            }
            j += 1;
        }
        temp.add(1);
        result.add(temp);
        i += 1;
    }
    
    return result;
        
    }
}
