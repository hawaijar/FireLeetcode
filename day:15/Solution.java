class Solution {
    public int[] plusOne(int[] digits) {
        List result = new ArrayList<Integer>();
        int carry = 0;
        for(int i = digits.length - 1; i >= 0; i--) {
            if(i == digits.length - 1) {
                int temp = digits[i] + 1;
                if(temp > 9) {
                    result.add(0, 10 - temp);
                    carry = 1;
                }
                else {
                    result.add(0, temp);
                    carry = 0;
                }
            }
            else {
                int temp = digits[i] + carry;
                if(temp > 9) {
                    result.add(0, 10 - temp);
                    carry = 1;
                }
                else {
                    result.add(0, temp);
                    carry = 0;
                }
            }
        }
        if(carry == 1) {
            result.add(0, 1);
        }

        int[] r = new int[result.size()];

        for(int i = 0; i < r.length; i++) {
            r[i] = (Integer)result.get(i);
        }
        return r;
    }
}
