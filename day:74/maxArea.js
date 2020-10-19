/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let [left, right] = [0, height.length - 1];
    let largest = 0;
    
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

};
