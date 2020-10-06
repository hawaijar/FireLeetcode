import java.util.*;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        // base case
        if(s.length() == 0) {
            return 0;
        }
        int longest = 0;

        for(int i = 0; i < s.length(); i++) {
            int count = 0;
            HashMap<Character, Boolean> hash = new HashMap<Character, Boolean>();
            for(int j = i; j < s.length(); j++ ) {
                if(hash.get(s.charAt(j)) == null) {
                    count += 1;
                    hash.put(s.charAt(j), true);
                    longest = longest > count? longest: count;
                }
                else {
                    break;
                }
            }
        }
        return longest;
    }
}
