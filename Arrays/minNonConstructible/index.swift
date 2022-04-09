import Foundation

func nonConstructableChange(_ coins: inout [Int]) -> Int {
    // base case
    if coins.count == 0 {
        return 1
    }
    // sort the array
    coins.sort()

    if coins[0] != 1 {
        return 1
    }

    var maxConstructableChange = 0

    for coin in coins {
        if (maxConstructableChange + 1) >= coin {
            maxConstructableChange += coin
        }
        else {
            return maxConstructableChange + 1
        }
    }
    return maxConstructableChange + 1
}
