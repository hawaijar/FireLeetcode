import java.util.*;

class Solution {
    private Map ROMAN_MAPPING;
    private Map OTHERS;
    public Solution() {
        ROMAN_MAPPING = new HashMap<String, Integer>();
        ROMAN_MAPPING.put("I", 1);
        ROMAN_MAPPING.put("V", 5);
        ROMAN_MAPPING.put("X", 10);
        ROMAN_MAPPING.put("L", 50);
        ROMAN_MAPPING.put("C", 100);
        ROMAN_MAPPING.put("D", 500);
        ROMAN_MAPPING.put("M", 1000);

        OTHERS = new HashMap<String, Integer>();
        OTHERS.put("IV", 4);
        OTHERS.put("IX", 9);
        OTHERS.put("XL", 40);
        OTHERS.put("XC", 90);
        OTHERS.put("CD", 400);
        OTHERS.put("CM", 900);
    }
    public int romanToInt(String s) {
        if (s.length() == 1 && ROMAN_MAPPING.containsKey(s)) {
            return (int)ROMAN_MAPPING.get(s);
        }
        if (s.length() == 2 && OTHERS.containsKey(s)) {
            return (int)OTHERS.get(s);
        }

        int result = 0;
        int i = 0;
        while(i < s.length()) {
            String x = s.substring(i, i + 1);
            if(i == s.length() - 1) {
                result += (int)this.ROMAN_MAPPING.get(x);
                break;
            }
            int current = (int)this.ROMAN_MAPPING.get(x);
            int next = (int)this.ROMAN_MAPPING.get(s.substring(i + 1, i + 2));
            if(current >= next) {
                result += current;
                i += 1;
            }
            else {
                result += (next - current);
                i += 2;
            }

        }
        return result;
    }
}
