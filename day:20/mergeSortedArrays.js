function addToNums1(nums1, x) {
    nums1.push(x);
    for(let i = nums1.length - 1; i >= 0; i--) {
        if(i === 0) break;
        if(nums1[i] < nums1[i - 1]) {
            [nums1[i], nums1[i-1]] = [nums1[i-1],nums1[i]];
            continue;
        }
        else {
            break;
        }
    }
}
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    while(nums1.length > m) {
        nums1.pop();
    }
    while(nums2.length > n) {
        nums2.pop();
    }
    // base case
    if(nums2[0] >= nums1[nums1.length - 1]) {
        for(let x of nums2) {
            nums1.push(x);
        }
        return nums1;
    }

    for(let x of nums2) {
        addToNums1(nums1, x);
    }
    return nums1;
};
