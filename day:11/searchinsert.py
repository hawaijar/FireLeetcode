class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        arrLength = len(nums);
        #base case
        if(arrLength == 0): return 0;
        if(target < nums[0]): return 0;
        if(arrLength == 1):
            if(target <= nums[0]):
                return 0
            else:
                return 1
        if(target > nums[arrLength - 1]): return arrLength;
    
        #start binary search
        [low, high] = [0, arrLength - 1];
        middle = None
    
        while(low <= high):
            middle = math.floor((low + high)/2);
            if(nums[middle] == target):
                return middle;
            elif(target < nums[middle]):
                high = middle - 1;
            elif(target > nums[middle]):
                low = middle + 1;
        #target is not there in the array
        if(target > nums[middle]):
            return middle + 1;
        else:
            return middle;
        
