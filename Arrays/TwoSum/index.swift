import Foundation

class TwoNumberSum {
  // using hash structure
  func solution1(_ array: inout [Int], _ targetSum: Int) -> [Int] {
    var hash: [Int: Bool] = [:]
    
    for num in array {
        let a = num
        let diff = targetSum - a
        if let _ = hash[a] {
            return [a, diff]
        }
        else {
            hash[diff] = true
        }
    }
    
    return []
  }
  func solution2(_ array: inout [Int], _ targetSum: Int) -> [Int] {
    var hash: [Int: Bool] = [:]
    
    for num in array {
        let x = num
        let y = targetSum - a
        if let _ = hash[y] {
            return [a, y]
        }
        else {
            hash[x] = true
        }
    }
    
    return []
  }
    
  // 2-pointers approach
  func solution2(_ array: inout [Int], _ targetSum: Int) -> [Int] {
      // base case(s)
      if array.count < 2 {
          return []
      }
      // sort the array first
      array.sort()
      var i = 0, j = array.count - 1
      
      while i < j {
          let a: Int = array[i]
          let b: Int = array[j]
          
          if(a + b == targetSum) {
              return [a, b]
          }
          if(a + b < targetSum) {
              i += 1
          }
          else {
              j -= 1
          }
      }
      
      return []
    }
  }
