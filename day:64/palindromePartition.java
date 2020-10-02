class Solution {
    List<List<String>> result = new ArrayList<List<String>>();
    public int[][] buildPTable(String s) {
        int pMatrix[][] = new int[s.length()][s.length()];
        for(int j = 0; j < s.length(); j++) {
            for(int i = 0; i < s.length(); i++) {
                pMatrix[i] = new int[s.length()];
            }
        }
        // all single char are palindrome themselves
        for(int i = 0; i < s.length(); i++) {
            pMatrix[i][i] = 1;
        }
        // check palindrome for substrings (length of 2 and above)
        for(int col = 1; col < s.length(); col++) {
            for(int row = 0; row < col; row++) {
                if(row + 1 == col) {
                    // two chars case
                    if(s.charAt(row) == s.charAt(col)) {
                        pMatrix[row][col] = 1;
                    }
                }
                else {
                    // more than two chars
                    // check if the bottom-left is 1
                    if(pMatrix[row+1][col-1] == 1) {
                        // check whether the leftmost/rightmost chars are same;
                        // substring between them is palindrome
                        if(s.charAt(row) == s.charAt(col)) {
                            pMatrix[row][col] = 1;
                        }
                    }
                }
            }
        }
        return pMatrix;
    }
    public void dfs(int start, String str, List<String> currentList, int[][] pMatrix) {
        if(start >= str.length()) {
            result.add(new ArrayList<String>(currentList));
        }
        else {
            for(int end = start; end < str.length(); end++) {
                // check the substring (start, end)
                if(pMatrix[start][end] == 1) {
                    currentList.add(str.substring(start, end + 1));
                    dfs(end + 1, str, currentList, pMatrix);
                    // backtrack it
                    currentList.remove(currentList.size() - 1);
                }
            }
        }
    }
    public List<List<String>> partition(String s) {
        int[][] matrix = buildPTable(s);
        dfs(0, s, new ArrayList<String>(), matrix);
        return result;
    }
}
