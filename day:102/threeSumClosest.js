
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // sort the elements 
    nums.sort((a,b) => a - b);
    let minDistance = Infinity;
    let result;
    
    for(let i = 0; i < nums.length - 2; i++) {
        let current = nums[i];
        let [left, right] = [i + 1, nums.length - 1];
        
        while(left < right) {
            let sum = current + nums[left] + nums[right];
            if(sum === target) {
                return target;
            }
            if(sum > target) {
                if(sum - target < minDistance) {
                   result = sum;
                   minDistance = sum - target;
                }
                right -= 1;
            }
            else {
               if(target - sum < minDistance) {
                   result = sum;
                   minDistance = target - sum;
                }
                left += 1; 
            }
        }
    }
    return result;
    
};
