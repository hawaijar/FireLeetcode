package me.hawaijar;

import java.util.HashMap;
import java.util.Map;

public class Day12 {
    public void increment(Map h, int i) {
        String index = String.valueOf(i);
        int x = Integer.parseInt((String)h.get(index)) + 1;
        h.remove(index);
        h.put(index, String.valueOf(x));
    }
    public void reset(Map h, char c) {
        String index = String.valueOf(c);
        h.remove(index);
        h.put(index, "0");
    }
    public String getValue(Map h, char c) {
        String index = String.valueOf(c);
        String value = (String)h.get(index);
        return value + index;

    }
    public String evaluate(String nums) {
        Map hash = new HashMap<String, String>();
        for (int i = 0; i < 10; i++) {
            hash.put(String.valueOf(i), "0");
        }
        String result = "";
        char current = nums.charAt(0);
        int i = 0;
        while(i < nums.length()) {
            if(nums.charAt(i) == current) {
                increment(hash, Character.getNumericValue(current) );
            }
            else {
                result += getValue(hash, current);
                reset(hash, current);
                current = nums.charAt(i);
                increment(hash, Character.getNumericValue(current) );
            }
            i += 1;
        }
        result += getValue(hash, current);
        return result;
    }
    public String countAndSay(int n) {
        // base case
        if(n == 1) return "1";
        if(n == 2) return "11";
        if(n == 3) return "21";

        int i = 3;
        String result = "21";
        while( i != n) {
            result = evaluate(result);
            i += 1;
        }
        return result;
    }
}
