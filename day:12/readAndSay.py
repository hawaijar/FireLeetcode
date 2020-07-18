class Solution:
    def evaluate(self, nums):
        hash = {};
        for i in range(10):
            hash[i] = 0
        result = ''
        current = int(nums[0])
        i = 0;
        while(i < len(nums)):
            if(int(nums[i]) == current):
                hash[current] += 1;
            else:
                result += str(hash[current]) + str(current)
                hash[current] = 0;
                current = int(nums[i]);
                hash[current] += 1;
            i += 1;
        result += str(hash[current]) + str(current)
        return result;
    
    def countAndSay(self, n: int) -> str:
        #base case
        if(n == 1): return '1';
        if(n == 2): return '11';
        if(n == 3): return '21';

        i = 3;
        result = '21';
        while( i != n):
            result = self.evaluate(result);
            i += 1;
        return result;
        
