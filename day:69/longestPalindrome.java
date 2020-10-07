class Solution {
    int[][] buildPTable(String str) {
        int[][] matrix = new int[str.length()][str.length()];
        // all characters are palindrome themselves
        for(int i = 0; i < str.length(); i++) {
            matrix[i][i] = 1;
        }
        for(int col = 1; col < str.length(); col++) {
            for(int row = 0; row < col; row++) {
                // for substrings of length=2, check whether the outermost characters are identical
                // if they are, they're palindromes themselves
                var b = str.charAt(row) == str.charAt(col);
                if(row + 1 == col) {
                    if(b) {
                        matrix[row][col] = 1;
                    }
                }
                else {
                    // for substrings of length > 2 check the outermost characters to be identical,
                    // if they're, check whether the inner substring is palindrome
                    if(b) {
                        if(matrix[row + 1][col - 1] == 1) {
                            matrix[row][col] = 1;
                        }
                    }
                }
            }
        }
        return matrix;
    }
    public String longestPalindrome(String s) {
         // base case
        if(s.length() <= 1) {
            return s;
        }
        int[][] matrix = buildPTable(s);
        String longest = "";
        for(int i = 0; i < s.length(); i++) {
            for(int j = 0; j < s.length(); j++) {
                if(i > j) {
                    continue;
                }
                if(matrix[i][j] == 1) {
                    String word = s.substring(i, j + 1);
                    if(word.length() > longest.length()) {
                        longest = word;
                    }
                }
            }
        }
        return longest;
    }
        
}
