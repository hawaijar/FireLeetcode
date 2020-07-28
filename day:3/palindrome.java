class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0) {
            return false;
        }
        String str = String.valueOf(x);
        if(str.length() <= 1) {
            return true;
        }
        int i = 0;
        int j =  str.length() - 1;
        while(i < j) {
            if(str.charAt(i) == str.charAt(j)) {
                i += 1;
                j -= 1;
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    }
}
