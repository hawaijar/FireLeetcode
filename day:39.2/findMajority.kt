class Solution {
    fun majorityElement(nums: IntArray): Int {
        var hash = mutableMapOf<Int, Int>();
        var result: Int = 0;
        var max = 0;
        
        for(num in nums) {
            if(num in hash) {
                hash.put(num, hash.get(num)!! + 1);
            }
            else {
                hash.put(num, 1);
            }
            if(hash.get(num)!! > max) {
                result = num;
                max = hash.get(num)!!;
            }
        }
        return result;        
    }
}
