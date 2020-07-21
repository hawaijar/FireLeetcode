class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        result = [0] * len(digits)
        carry = 0;
        for i in range(len(digits) - 1, -1, -1):
            if(i == len(digits) - 1):
                temp = digits[i] + 1;
                if(temp > 9):
                    result[i] = (10 - temp);
                    carry = 1;
                else:
                    result[i] = temp;
                    carry = 0
            else:
                temp = digits[i] + carry;
                if(temp > 9):
                    result[i] = 10 - temp;
                    carry = 1;
                else:
                    result[i] = temp;
                    carry = 0;
        if(carry == 1):
            result.insert(0, 1);
        return result;
    
        
