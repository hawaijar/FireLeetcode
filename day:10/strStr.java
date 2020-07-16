class Solution {
    public int strStr(String haystack, String needle) {
        // base case
        if(needle.length() == 0) return 0;
        if(haystack.equals(needle)) return 0;

        int sliceLength = needle.length();

        for(int i = 0; i < haystack.length(); i++) {
            int window = (i + sliceLength);
            if(window <= haystack.length()) {
                if(haystack.substring(i, window).equals(needle)) {
                    return i;
                }
            }
            else {
                return -1;
            }
        }
        return -1;
        }
}
