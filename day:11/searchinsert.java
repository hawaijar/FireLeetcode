class Solution {
    public int searchInsert(int[] nums, int target) {
        int arrLength = nums.length;
        // base case
        if(arrLength == 0) return 0;
        if(target < nums[0]) return 0;
        if(arrLength == 1){
            if(target <= nums[0]) return 0;
            return 1;
        }
        if(target > nums[arrLength - 1]) return arrLength;
    
        // start binary search
        int low = 0;
        int high = arrLength - 1;
        int middle = 0;
    
        while(low <= high) {
            middle = (int) Math.floor((low + high)/2);
            if(nums[middle] == target) {
                return middle;
            }
            else if(target < nums[middle]) {
                high = middle - 1;
            }
            else if(target > nums[middle]) {
                low = middle + 1;
            }
        }
        // target is not there in the array
        if(target > nums[middle]){
            return middle + 1;
        }
         else {
            return middle;
        }
    }
}
