class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        hash ={}
        [result, max] = [0, 0];
        for i in range(len(nums)):
            num = nums[i]
            if(num in hash):
                hash[num] += 1;
            else:
                hash[num] = 1;
            if(hash[num] > max):
                result = num;
                max = hash[num];
    
        return result;
