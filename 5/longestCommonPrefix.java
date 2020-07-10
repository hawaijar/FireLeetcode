class Solution {
    public String longestCommonPrefix(String[] strs) {
        if(strs.length == 0) return "";
        int count = strs.length;
        int smallest = strs[0].length();

        for(int i = 1; i < count; i++) {
            if(strs[i].length() < smallest) {
                smallest = strs[i].length();
            }
        }
        int i = 0;
        for(i = 0; i< smallest; i++) {
            char x = strs[0].charAt(i);
            boolean equal = true;
            for(int j = 1; j < count; j++) {
                if(strs[j].charAt(i) == x) {
                    continue;
                }
                else {
                    equal = false;
                    break;
                }
            }
            if(!equal) {
                break;
            }
        }
        
        if(i == 0) {
            return "";
        }
        else {
            return strs[0].substring(0, i);
        } 
    }
}
