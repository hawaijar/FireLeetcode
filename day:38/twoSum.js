function binarySearch(numbers, target) {
    let [left, right] = [0, numbers.length - 1]
    
    while(left <= right) {
        let mid = left + Math.floor((right - left)/2);
        if(target === numbers[mid]) {
            return mid;
        }
        if(target < numbers[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return -1;
}

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for(let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i];
        let index = binarySearch(numbers.slice(i + 1), diff);
        if(index !== -1) {
            return [i + 1, i + 2 + index]
        }
    }
};
