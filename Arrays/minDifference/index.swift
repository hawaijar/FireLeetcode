func smallestDifference(arrayOne: inout [Int], arrayTwo: inout [Int]) -> [Int] {
    // base case
    if arrayOne.count == 0 || arrayTwo.count == 0 {
        return []
    }
    // sort the arrays
    arrayOne.sort()
    arrayTwo.sort()

    var minimum:Int = abs(arrayOne[0] - arrayTwo[0])
    var result: [Int] = [arrayOne[0], arrayTwo[0]]

    var firstPointer:Int = 0
    var secondPointer:Int = 0

    while firstPointer < arrayOne.count && secondPointer < arrayTwo.count {
        let element1 = arrayOne[firstPointer]
        let element2 = arrayTwo[secondPointer]

        let difference = abs(element1 - element2)
        if(difference < minimum) {
            minimum = difference
            result = [element1, element2]
        }
        if element1 < element2 {
            firstPointer += 1
        }
        else {
            secondPointer += 1
        }
    }

    return result
}
