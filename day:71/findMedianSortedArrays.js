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
var findMedianSortedArrays_bruteforce = function(nums1, nums2) {
    let result = merge_sorted_arrays(nums1, nums2);
    return median(result);
};
const findMedianSortedArrays = (nums1, nums2) => {
    // 1. Find the shorter array of the two lists and make it nums1
    // 2. Find a pivot point in nums1 (using binary search)
    // 3. pX + pY = (x + y + 1)/2, where x = len(nums1) and y = len(nums2)
    if(nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    let [x, y] = [nums1.length, nums2.length];
    let [low, high] = [0, x];

    while (low <= high) {
        let pX = Math.floor((low + high)/2);
        let pY = Math.floor((x + y + 1)/2) - pX;

        let maxLeftX = (pX === 0)? -Infinity: nums1[pX - 1];
        let minRightX = (pX === x)? Infinity: nums1[pX];
        let maxLeftY = (pY === 0)? -Infinity: nums2[pY - 1];
        let minRightY = (pY === y)? Infinity: nums2[pY];
        
        // Found the required condition
        if(maxLeftX <= minRightY && maxLeftY <= minRightX ) {
            let maxLeft = Math.max(maxLeftX, maxLeftY);
            let minRight = Math.min(minRightX, minRightY);
           // for even length
            if((x + y) % 2 === 0) {
                return (maxLeft + minRight)/2.0;
            }
           // for odd length
            else {
                return maxLeft;
            }
        }
        else if(maxLeftX > minRightY) {
            high = pX - 1;
        }
        else {
            low = pX + 1
        }
    }
}
