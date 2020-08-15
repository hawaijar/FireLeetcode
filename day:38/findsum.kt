class Solution {
    fun binarySearch(numbers:List<Int>, target: Int):Int {
        var left:Int = 0
        var right:Int = numbers.size - 1
    
        while(left <= right) {
            var mid:Int = left + Math.floor((right.toDouble() - left.toDouble())/2).toInt()
            if(target == numbers[mid]) {
                return mid;
            }
            if(target < numbers[mid]) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
         }
        return -1;
    }
    fun twoSum(numbers: IntArray, target: Int): IntArray {
        for(i in 0 until numbers.size) {
            var diff = target - numbers[i];
            var index:Int = binarySearch(numbers.slice(i + 1..numbers.size - 1), diff);
            if(index !== -1) {
                return intArrayOf(i + 1, i + 2 + index)
            }
        }
        return intArrayOf(0)
    }
}
