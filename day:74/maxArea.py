class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        largest = 0;
    
        while(left < right):
            largest = max(largest, min(height[left], height[right]) * (right - left))
            if(height[left] < height[right]):
                left += 1;
            else:
                right -= 1;
        return largest;
        
