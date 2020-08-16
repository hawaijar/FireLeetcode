class TwoSum:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.hash = {}

    def add(self, number: int) -> None:
        """
        Add the number to an internal data structure..
        """
        if(number in self.hash):
            self.hash[number] += 1;
        else:
            self.hash[number] = 1;

    def find(self, value: int) -> bool:
        """
        Find if there exists any pair of numbers which sum is equal to the value.
        """
        for key in self.hash.keys():
            diff = value - key;
            if(key == diff):
                if(self.hash[key] > 1):
                    return True;
            else:
                if( diff in self.hash):
                    return True;
        return False;
        


# Your TwoSum object will be instantiated and called as such:
# obj = TwoSum()
# obj.add(number)
# param_2 = obj.find(value)
