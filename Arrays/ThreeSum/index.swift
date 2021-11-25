class ThreeNumberSum {
    func solution(array: inout [Int], targetSum: Int) -> [[Int]] {
        // base case(s)
        if(array.count < 3){
            return []
        }
        var result: [[Int]] = []
        var i = 0
        
        // sort the array
        array.sort()
        
        while i < array.count - 2 {
            let a = array[i]
            var j = i + 1;
            var k =  array.count - 1
            while j < k {
                let b = array[j]
                let c = array[k]
                        
                if a + b + c == targetSum {
                    result.append([a,b,c])
                }
                if a + b + c < targetSum {
                    j += 1
                }
                else {
                    k -= 1
                }
            }
            i += 1
        }
        return result
    }
}
// --- Testing --------------------------
//var array = [12, 3, 1, 2, -6, 5, -8, 6]
//let targetSum = 0
//
//let o = ThreeNumberSum()
//print(o.solution(array: &array, targetSum: 0))
