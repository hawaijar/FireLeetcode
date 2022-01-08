class Program {
    func solution(n: Int) -> [String] {
        // base case
        if n <= 1 {
            return ["()"]
        }
        
        var result:[String] = [];
        
        func recur(prefix: String, left:Int, right: Int) {
            if prefix.count == 2*n {
                result.append(prefix)
            }
            if left < n {
                recur(prefix: prefix + "(", left: left + 1, right: right)
            }
            if right < left {
                recur(prefix: prefix + ")", left: left, right: right + 1)
            }
        }
        
        recur(prefix: "", left: 0, right: 0)
        
        return result;
    }
}
// Testing
let obj = Program()
print(obj.solution(n: 3)) // ["((()))", "(()())", "(())()", "()(())", "()()()"]
