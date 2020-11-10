class Solution:
    def combination(self, prefix, digits, output=None, mapping=None):
        if mapping is None:
            mapping = {}
        if output is None:
            output = []
        if len(digits) == 0:
            output.append(prefix)
        else:
            for letter in mapping[digits[0]]:
                self.combination(prefix + letter, digits[1:], output, mapping)
    def letterCombinations(self, digits: str) -> List[str]:
        output = []
        # special case
        if len(digits) == 0:
            return []
        else:
            mapping = {
                '2': ['a', 'b', 'c'],
                '3': ['d', 'e', 'f'],
                '4': ['g', 'h', 'i'],
                '5': ['j', 'k', 'l'],
                '6': ['m', 'n', 'o'],
                '7': ['p', 'q', 'r', 's'],
                '8': ['t', 'u', 'v'],
                '9': ['w', 'x', 'y', 'z']
            }
            self.combination('', digits, output, mapping)
        return output
        
