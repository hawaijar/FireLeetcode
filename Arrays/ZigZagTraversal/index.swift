class Program {
    func zigZagTraverse(array: [[Int]]) -> [Int] {
        // base case
        if array.isEmpty {
            return []
        }
        
        let ROW = array.count
        let COL = array[0].count
        
        // create diagonals
        var diagonals:[[Int]] = [[Int]](repeating: [Int](), count: ROW + COL - 1)
        
        for i in 0..<ROW {
            for j in 0..<COL {
                let num = array[i][j]
                let sum = i + j
                if sum % 2 == 0 {
                    // FIFO order
                    diagonals[sum].append(num)
                }
                else {
                    // FILO order
                    diagonals[sum].insert(num, at: 0)
                }
            }
        }
        
        var result: [Int] = [Int]()
        
        diagonals.forEach { diagonal in
            
            diagonal.forEach{result.append($0)}
            
        }
        
        return result
    }
}
// Testing

/*

let o = Program()
let array = [
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16]
]

print(o.zigZagTraverse(array: array))

*/
