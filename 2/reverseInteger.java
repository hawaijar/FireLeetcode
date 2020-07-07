class Solution {
    public int reverse(int x) {
        int sign = (x < 0)? -1: 1;
        String toStr = String.valueOf(x);
        if(toStr.charAt(0) == '-') {
            toStr = toStr.substring(1);
        }
        long value = 0;
        for(int i = 0; i < toStr.length(); i++) {
            char digit = toStr.charAt(i);
            if(digit == '0' || digit == '-') {
                continue;
            }
            value +=  Math.pow(10, i) * Character.getNumericValue(digit);
            if(value > Integer.MAX_VALUE) {
                return 0;
            }
        }
        value = sign * value;
        return (int)value;
    }
}
