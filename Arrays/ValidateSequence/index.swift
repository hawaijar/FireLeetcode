func isValidSubsequence(_ array: [Int], _ sequence: [Int]) -> Bool {
    // base case
    if sequence.count == 0 || array.count == 0 {
        return false
    }
    var i = 0
    var j = 0

    while i < array.count {
        if(array[i] == sequence[j]) {
            j += 1
            i += 1
            if j == sequence.count {
                return true
            }
        }
        else {
            i += 1
        }
    }
    return false
}
