class Solution:
    def generate(self, s, left, right, n, output):
        if len(s) == 2 * n:
            output.append(s);
            return;
        
        if left < n:
            self.generate(s + '(', left + 1, right, n, output);
        if right < left:
            self.generate(s + ')' , left, right + 1, n, output);
            
    def generateParenthesis(self, n: int) -> List[str]:
        output = [];
    
        self.generate('', 0 ,0, n, output);
        return output;
