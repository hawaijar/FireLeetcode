class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        hash = {};
    
        for i in range(len(nums)):
            num = str(nums[i]);
            if(num in hash):
                if(abs(hash[num] - i) <= k):
                    return True;
                hash[num] = i;
            else:
                hash[num] = i;
                
        return False;
