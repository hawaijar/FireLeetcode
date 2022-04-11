//
//  moveElementsEnd.swift
//  AlgoPractice
//
//  Created by Sushil Mayengbam on 11/04/22.
//

import Foundation

func moveElementToEnd(_ array: inout [Int], _ toMove: Int) -> [Int] {
    // base case
    if array.count == 0 || array.count == 1 {
        return array
    }
    // if 'toMove' is not available, return the array
    if !array.contains(toMove) {
        return array
    }

    var rearPointerIndex = 0
    var endPointerIndex = array.count - 1


    while rearPointerIndex < endPointerIndex {
        while array[rearPointerIndex] != toMove && rearPointerIndex < endPointerIndex {
            rearPointerIndex += 1
        }
        if rearPointerIndex == endPointerIndex {
            break
        }
        while array[endPointerIndex] == toMove && rearPointerIndex < endPointerIndex {
            endPointerIndex -= 1
        }
        if rearPointerIndex == endPointerIndex {
            break
        }

        array.swapAt(rearPointerIndex, endPointerIndex)

    }
    return array
}
/* Testing code */
var array:[Int] = [5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12]

print(moveElementToEnd(&array, 5))
