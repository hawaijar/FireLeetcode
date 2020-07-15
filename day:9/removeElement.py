class Solution:
    def removeElement(self, nums: List[int], target: int) -> int:
        length = len(nums)
        
        # base case
        if(length == 0): return length
        if(length == 1 and nums[0] == target): return 0;
        
        [i, j] = [0, length - 1]
        
        while(i < j):
            while(nums[i] != target and i != j):
                i += 1
            if(i == j):
                break
            while(nums[j] == target and i != j):
                j -= 1
            if(i == j): break
            
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i += 1
            j -= 1
        
        result = filter(lambda x: x != target, nums)
        return len(list(result))
