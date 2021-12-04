//
//  main.swift
//  AlgoSwift
//
//  Created by Sushil Mayengbam on 12/11/21.
//

import Foundation


class Program {
    func largestRange(array: [Int]) -> [Int] {
        // base case(s)
        if array.count == 0 {
            return []
        }
        // create a hash and add all the array elements
        var hash: [Int: Bool] = [:]
        
        for num in array {
            hash[num] = false // visited 'false' by default
        }
        
        var largestRange = 0
        var result: [Int] = [0,0]
        
        // traverse the array
        for (i, (var num)) in array.enumerated() {
            if hash[num] == true { // already visited
                continue
            }
            let endIndex = num
            var startIndex = num
            while array.contains(num) {
                hash[num] = true
                num -= 1
                startIndex -= 1
            }
            startIndex += 1
            
            let range = (endIndex - startIndex) + 1
            
            if(range > largestRange) {
                result[0] = startIndex
                result[1] = endIndex
                largestRange = range
            }
        }
        
        return result
    }
}

// Testing

// let o = Program()
// let array = [4,2,1,3]
// print(o.largestRange(array: array))


