/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let [i, j] = [0, 0];
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);
    let result = new Set();
    
    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] === nums2[j]) {
            result.add(nums1[i]);
            i += 1;
            j += 1;
        }
        else if(nums1[i] < nums2[j]) {
            i += 1;
        }
        else {
            j += 1;
        }
    }
    
    return Array.from(result);
    
};
