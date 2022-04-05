//
//  4Sum.swift
//  AlgoPractice
//
//  Created by Sushil Mayengbam on 05/04/22.
//

import Foundation

func fourNumberSum(array: inout [Int], targetSum: Int) -> [[Int]] {
    // base case
    if array.count < 3 {
        return []
    }
    var result:[[Int]]  = []

    var i = 0

    // sort the array
    array.sort()

    while i < array.count - 3 {
        var j = i + 1

		// below is 3-sum problem
        while j < array.count - 2 {
            var k =  j + 1
            var l = array.count - 1

            while k < l {
                let a = array[i]
                let b = array[j]
                let c = array[k]
                let d = array[l]

                let sum = a + b + c + d

                if sum == targetSum {
                    result.append([a,b,c,d])
                    k += 1
                    l -= 1
                }
                else if sum < targetSum {
                    k += 1
                }
                else {
                    l -= 1
                }
            }
            j += 1
        }
        i += 1
    }

    return result

  }
