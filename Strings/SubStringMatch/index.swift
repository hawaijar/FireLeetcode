func smallestSubstringContaining(_ bigString: String, _ smallString: String) -> String {
    // capture first the characters and their frequencies of the smaller string
    var hash:[Character: Int] = [:]
    for char in smallString {
        hash[char] = (hash[char] ?? 0) + 1
    }
    // capture the total keys of the smallerString
    var count = hash.count

    // take two pointers (left, right) on the biggerString
    var (left, right) = (0, 0)
    var result: String = ""

    let startIndex = bigString.startIndex

    while right < bigString.count {
        let rightIndex = bigString.index(startIndex, offsetBy: right)
        let characterUnderRightPointer = bigString[rightIndex]
        if hash.keys.contains(characterUnderRightPointer) {
            hash[characterUnderRightPointer]! -= 1
            if hash[characterUnderRightPointer] == 0 {
                count -= 1
            }
            if count == 0 {
                // squeeze the window by moving left pointer
                while count == 0 {
                    let leftIndex = bigString.index(startIndex, offsetBy: left)
                    let characterUnderLeftPointer = bigString[leftIndex]
                    if hash.keys.contains(characterUnderLeftPointer) {
                        hash[characterUnderLeftPointer]! += 1
                        if hash[characterUnderLeftPointer]! > 0 {
                            count += 1
                        }
                    }
                    left += 1
                }
                // found a matching substring
                let lIndex = bigString.index(startIndex, offsetBy: left - 1)
                let rIndex = bigString.index(startIndex, offsetBy: right)
                let subString = String(bigString[lIndex...rIndex])

                if result == "" || subString.count < result.count {
                    result = subString
                }
            }
        }
        right += 1
    }
    return result
}
