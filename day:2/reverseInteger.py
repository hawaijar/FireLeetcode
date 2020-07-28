class Solution:
    def reverse(self, x: int) -> int:
        toStr = str(x)
        sign = 1;
        
        if toStr[0] == '-':
            sign = -1
            toStr = toStr[1:]
        
        value = 0
        for i in range(len(toStr)):
            if toStr[i] == '0' or toStr[i] == '-':
                continue
            value += pow(10, i) * int(toStr[i])
        
        value = sign * value;
        if value > (-1 * pow(2, 31)) and value < (pow(2, 31) - 1):
            return value
        else:
            return 0
