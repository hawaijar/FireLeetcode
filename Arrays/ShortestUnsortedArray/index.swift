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
    
    // scanning approach
    func solution2(array: [Int]) -> [Int] {
        // base case(s)
        if array.count == 0 || array.count < 2 {
            return [-1,-1]
        }
        // Step1: find all the unsorted elements
        var unsorted: [Int] = []
        
        for (i, _) in array.enumerated() {
            let current = array[i]
            if i == 0 {
                if current > array[i + 1] {
                    unsorted.append(current)
                }
            }
            else if i == array.count - 1 {
                if current < array[i - 1] {
                    unsorted.append(current)
                }
            }
            else {
                let previous = array[i - 1]
                let next = array[i + 1]
                
                if current < previous || current > next {
                    unsorted.append(current)
                }
            }
        }
        
        // Step2: find the smallest and largest from the unsorted array
        
        var smallest = Int.max
        var largest = Int.min
        
        for num in unsorted {
            smallest = min(smallest, num)
            largest = max(largest, num)
        }
        
        // Step3: Find the positions (i, j) of smallest and largest in the the array
        
        var result: [Int] = [-1, -1]
        
        for (i, num) in array.enumerated() {
            if smallest < num {
                result[0] = i
                break
            }
        }
        
        var j = array.count - 1
        
        while j >= 0 {
            if largest > array[j] {
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
