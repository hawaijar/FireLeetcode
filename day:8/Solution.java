class Solution {
    public int removeDuplicates(int[] nums) {
        // base case
    if(nums.length <= 1) return nums.length;
    
    int count = 1;
    int j = 1;
        
    for(int i = 0; i < nums.length - 1; i++) {
        while(j < nums.length) {
            if(nums[i] == nums[j]) {
                j += 1;
            }
            else {
                nums[i+1] = nums[j];
                count += 1;
                j += 1;
                break;
            }
        } 
        
    }
    
    return count;
    }
}
