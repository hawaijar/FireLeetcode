class Solution {
    fun rotate(nums: IntArray, k: Int): Unit {
        var length = nums.size;
        var count = 0;
        while(count < k) {
            var last = nums[length - 1];
            for(i in length - 1 downTo 1 step 1) {
                nums[i] = nums[i - 1];
            }
            nums[0] = last; 
            count += 1;
        }
        }
    }
