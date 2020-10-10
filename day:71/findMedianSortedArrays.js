function merge_sorted_arrays(nums1, nums2) {
    /* --- Brute force method ------------------------- */
    let result = [];
    let [i, j, k] = [0 , 0, 0];

    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] <= nums2[j]) {
            result[k] = nums1[i];
            i += 1;
            k += 1;
        }
        else {
            result[k] = nums2[j];
            j += 1;
            k += 1;
        }
    }
    if(i < nums1.length) {
        for(let j = i; j < nums1.length; j++) {
            result[k] = nums1[j];
            k += 1;
        }
    }
    if(j < nums2.length) {
        for(let i = j; i < nums2.length; i++) {
            result[k] = nums2[i];
            k += 1;
        }
    }

    return result;
}
function median(num) {
    // odd length
    if(num.length % 2 === 1) {
        return num[Math.floor(num.length/2)];
    }
    else {
        // even length
        let mid = Math.floor(num.length/2);
        return (num[mid - 1] + num[mid]) /2 ;
    }
}
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let result = merge_sorted_arrays(nums1, nums2);
    return median(result);
};
