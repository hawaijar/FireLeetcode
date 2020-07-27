class Solution:
    def addToNums1(self, nums1, x):
        nums1.append(x)
        for i in range(len(nums1) - 1, -1, -1):
            if i == 0:
                break
            if nums1[i] < nums1[i - 1]:
                [nums1[i], nums1[i - 1]] = [nums1[i - 1], nums1[i]]
                continue
            else:
                break
            
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        # base cases
        if len(nums1) == 0 or m == 0:
            if m == 0:
                while len(nums1) > 0:
                    nums1.pop()
            for i in nums2:
                nums1.append(i)
            return
        if len(nums2) == 0 or n == 0:
            if n == 0:
                while len(nums2) > 0:
                    nums2.pop()
            for i in nums1:
                nums2.append(i)
            return
        
        while len(nums1) > m:
            nums1.pop()
        while len(nums2) > n:
            nums2.pop()
        if nums2[0] >= nums1[len(nums1) - 1]:
            for x in nums2:
                nums1.append(x)
            return nums1
        for x in nums2:
            self.addToNums1(nums1, x)

        return nums1
        
