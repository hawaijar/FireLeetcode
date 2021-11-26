class SubArraySort {
    // Brute force (using sorting)
    func solution1(array: [Int]) -> [Int] {
        // base case(s)
        if array.count < 2 {
            return [-1, -1]
        }
        // create a new sorted array
        let sortedArray = array.sorted()
        var result: [Int] = [-1, -1]
        
        var i = 0
        var j =  array.count - 1
        
        while i < j {
            if array[i] != sortedArray[i] {
                result[0] = i
                break
            }
            i += 1
        }
        while j > i {
            if array[j] != sortedArray[j] {
                result[1] = j
                break
            }
            j -= 1
        }
        return result
    }
}

// let array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
// let o = SubArraySort()

// print(o.solution1(array: array))
