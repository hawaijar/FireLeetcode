import java.util.HashMap;
import java.util.*;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        HashMap<Integer, Integer> hash = new HashMap<Integer, Integer>();
	    for(int i = 0; i < nums.length; i++) {
		int current = nums[i];
		int other = target - current;
		if(hash.containsKey(other)) {
		    result[0] = hash.get(other);
		    result[1] = i;
		    return result;
		    }
		else {
		    hash.put(nums[i],i);
		}
	    }
	    return result;
     }
}
