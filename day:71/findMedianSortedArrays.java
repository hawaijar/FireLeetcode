class Solution {
    public int[] merge_sorted_arrays(int[] nums1, int[] nums2) {
        /* --- Brute force method ------------------------- */
        int[] result = new int[nums1.length + nums2.length];
        int i, j , k;
        i = j = k = 0;

        while(i < nums1.length && j < nums2.length) {
            if(nums1[i] <= nums2[j]) {
                result[k] = nums1[i];
                i += 1;
            }
            else {
                result[k] = nums2[j];
                j += 1;
            }
            k += 1;
        }
        if(i < nums1.length) {
            for(int jj = i; jj < nums1.length; jj++) {
                result[k] = nums1[jj];
                k += 1;
            }
        }
        if(j < nums2.length) {
            for(int ii = j; ii < nums2.length; ii++) {
                result[k] = nums2[ii];
                k += 1;
            }
        }

        return result;
    }
    public double median(int[] num) {
        // odd length
        if(num.length % 2 == 1) {
            return num[(int)Math.floor(num.length/2)];
        }
        else {
            // even length
            int mid = (int) Math.floor(num.length/2);
            return (num[mid - 1] + num[mid]) /2.0 ;
        }
    }
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int[] result = merge_sorted_arrays(nums1, nums2);
        return median(result);
    }
}
