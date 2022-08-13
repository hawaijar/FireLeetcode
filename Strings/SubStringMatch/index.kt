fun minWindow(bigString: String, smallString: String): String {
    // create a hash from the smallString
    val hash = mutableMapOf<Char, Int>()
    for (char in smallString) {
        hash[char] = (hash[char] ?: 0) + 1
    }
    var (left, right) = Pair(0, 0)
    var count = hash.size
    var result = ""
    while(right < bigString.length) {
        val characterUnderRightPointer = bigString[right++]
        if(hash.containsKey(characterUnderRightPointer)) {
            hash[characterUnderRightPointer] = hash[characterUnderRightPointer]!! - 1
            if(hash[characterUnderRightPointer] == 0) {
                count -= 1
                if(count == 0) {
                    // squeeze the window using the left pointer
                    while(count == 0) {
                        val characterUnderLeftPointer = bigString[left++]
                        if(hash.containsKey(characterUnderLeftPointer)) {
                            hash[characterUnderLeftPointer] = hash[characterUnderLeftPointer]!! + 1
                            if(hash[characterUnderLeftPointer]!! > 0) {
                                count += 1
                            }
                        }
                    }
                    // get the substring
                    val subString = bigString.substring(left-1, right)
                    if(result == "" || subString.length < result.length) {
                        result = subString
                    }
                }
            }
        }
    }
    return result;
}
