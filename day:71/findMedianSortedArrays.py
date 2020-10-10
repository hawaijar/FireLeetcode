from math import floor

def merge_sorted_arrays(nums1, nums2):
    # * --- Brute force method - ------------------------ * /
    result = []
    [i, j] = [0, 0]

    while i < len(nums1) and j < len(nums2):
        if nums1[i] <= nums2[j]:
            result.append(nums1[i])
            i += 1
        else:
            result.append(nums2[j])
            j += 1
    if i < len(nums1):
        for jj in range(i, len(nums1)):
            result.append(nums1[jj])
    if j < len(nums2):
        for ii in range(j, len(nums2)):
            result.append(nums2[ii])
    return result


def median(num):
    # odd length
    if len(num) % 2 == 1:
        return num[floor(len(num) / 2)]
    else:
        # even length
        mid = floor(len(num) / 2)
        return (num[mid - 1] + num[mid]) / 2
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        result = merge_sorted_arrays(nums1, nums2)
        return median(result);
        
