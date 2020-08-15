class Solution:
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    def convert(self, n, result):
        #base case
        if(n < 27):
            result.append(self.alphabet[n - 1]);
            return result;
        x = n;
        if(n % 26 == 0):
            x = x - 1;
        quotient = self.convert((x // 26), result); 
        if(n % 26 == 0):
            remainder = self.convert((x % 26) + 1, result);
        else:
            remainder = self.convert(x % 26, result);
        return result;
    
    def convertToTitle(self, n: int) -> str:
        result = [];
        return ''.join(self.convert(n, result))
