//
//  spiralTraverse.swift
//  AlgoInSwift
//
//  Created by Sushil Mayengbam on 21/04/22.
//

import Foundation

func checkBoundary(rowStartIndex: Int, rowEndIndex: Int,colStartIndex: Int, colEndIndex: Int ) -> Bool {
    if rowStartIndex <= rowEndIndex, colStartIndex <= colEndIndex {
        return true
    }
    return false
}

func spiralTraverse(array: [[Int]]) -> [Int] {
    // base case
    if array.count == 0 || array.count == 1 {
        return array[0]
    }

    let ROWS = array.count
    let COLS = array[0].count

    var (rowStartIndex, rowEndIndex) = (0, ROWS - 1)
    var (colStartIndex, colEndIndex) = (0, COLS - 1)

    var result:[Int] = []

    while rowStartIndex <= rowEndIndex, colStartIndex <= colEndIndex {
        // print top row
        for index in colStartIndex...colEndIndex {
            result.append(array[rowStartIndex][index])
        }
        rowStartIndex += 1
        if !checkBoundary(rowStartIndex: rowStartIndex, rowEndIndex: rowEndIndex, colStartIndex: colStartIndex, colEndIndex: colEndIndex) {
            break;
        }
        // print right column
        for index in rowStartIndex...rowEndIndex {
            result.append(array[index][colEndIndex])
        }
        colEndIndex -= 1
        if !checkBoundary(rowStartIndex: rowStartIndex, rowEndIndex: rowEndIndex, colStartIndex: colStartIndex, colEndIndex: colEndIndex) {
            break;
        }
        // print bottom row
        for index in stride(from: colEndIndex, through:colStartIndex, by: -1) {
            result.append(array[rowEndIndex][index])
        }
        rowEndIndex -= 1
        if !checkBoundary(rowStartIndex: rowStartIndex, rowEndIndex: rowEndIndex, colStartIndex: colStartIndex, colEndIndex: colEndIndex) {
            break;
        }
        // print left column
        for index in stride(from: rowEndIndex, through:rowStartIndex, by: -1) {
            result.append(array[index][colStartIndex])
        }
        colStartIndex += 1
        if !checkBoundary(rowStartIndex: rowStartIndex, rowEndIndex: rowEndIndex, colStartIndex: colStartIndex, colEndIndex: colEndIndex) {
            break;
        }
    }

    return result
}
