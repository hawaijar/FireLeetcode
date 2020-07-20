import re

class Solution:
  def lengthOfLastWord(self, s: str) -> int:
    x = re.findall('\w+',s)
    if len(x) == 0: return 0
    return len(x[-1])
        
