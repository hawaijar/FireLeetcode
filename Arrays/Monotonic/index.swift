func isMonotonic(array: [Int]) -> Bool {
    // base case
    if array.count == 0 || array.count == 1 {
        return true
    }

    // check whether the array is possibly increasing or decreasing order

    var isAscending: Bool {
        if array[0] < array[array.count - 1] {
            return true
        }
        return false
    }

    for arrayIndex in 0..<array.count {
        if arrayIndex != array.count - 1 {
            if isAscending {
                if array[arrayIndex] > array[arrayIndex + 1] {
                    return false
                }
            }
            else {
                if array[arrayIndex] < array[arrayIndex + 1] {
                    return false
                }
            }
        }
    }

    return true
}
