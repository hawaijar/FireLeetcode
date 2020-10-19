class Solution {
    public int maxArea(int[] height) {
        var left = 0;
        var right = height.length - 1;
        var largest = 0;
    
        while(left < right) {
            largest = Math.max(largest, Math.min(height[left], height[right]) * (right - left));
            if(height[left] < height[right]) {
                left += 1;
            }
            else {
                right -= 1;
            }
        }

        return largest;
        }
}
