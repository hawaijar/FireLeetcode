class Solution {
    public int removeElement(int[] nums, int target) {
        int len = nums.length;
         // base case
        if(len == 0) return len;
        if(len == 1 && nums[0] == target) return 0;

        int i = 0;
        int j =  len - 1;

        while(i < j) {
         while(nums[i] != target && i != j) {
            i += 1;
         }
         if(i == j) {
            break;
         } 
        
         while(nums[j] == target && i != j) {
            j -= 1;
         }
         if(i == j) {
            break;
         }
         
         int temp = nums[i];
         nums[i] = nums[j];
         nums[j] = temp;
         i += 1;
         j -= 1;
     }
     int count = 0;
        for(int k = 0; k < len; k++) {
            if(nums[k] != target) count += 1;
        }
    return count;
    }
}
