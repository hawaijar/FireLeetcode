class Solution:
    def binarySearch(self, numbers, target):
        [left, right] = [0, len(numbers) - 1]
        while(left <= right):
            mid = left + (right - left)//2;
            if(target == numbers[mid]):
                return mid;
            if(target < numbers[mid]):
                right = mid - 1;
            else:
                left = mid + 1;
        return -1;
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        for i in range(len(numbers)):
            diff = target - numbers[i]
            index = self.binarySearch(numbers[i+1:], diff)
            if index != -1:
                return [i + 1, i + 2 + index]
            
        
