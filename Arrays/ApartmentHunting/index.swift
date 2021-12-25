class Program {
    func apartmentHunting(_ blocks: [[String: Bool]], _ requirements: [String]) -> Int {
        // base case(s)
        if blocks.count <= 1 {
            return 0;
        }
        
        // initialize to Int.max for those unavailable facilities
        // also remove thos facilities that do not belong to requirements
        var mBlocks:[[String: Int]] = []
        
        for block in blocks {
            var temp:[String: Int] = [:]
            for (facility, value) in block {
                if requirements.contains(facility) {
                    if value == true {
                        temp[facility] = 0
                    }
                    else {
                        temp[facility] = Int.max
                    }
                }
            }
            mBlocks.append(temp)
        }
        
        // left scan
        var i = 1
        while i < mBlocks.count {
            let currentBlock = mBlocks[i]
            let previousBlock = mBlocks[i-1]
            for (facility,value) in currentBlock {
                if let y  = previousBlock[facility] {
                    if value == 0 {
                        if y != 0 {
                            mBlocks[i-1][facility] = 1
                        }
                    }
                    else {
                        if y < value {
                            mBlocks[i][facility] = y + 1
                        }
                    }
                }
            }
            i += 1
        }
        
        // right scan
        i = mBlocks.count - 1
        while i >= 0 {
            let currentBlock = mBlocks[i]
            for (facility, value) in currentBlock {
                if i == 0 {
                    if value != 0 {
                        let nextBlock = mBlocks[i + 1]
                        if let y = nextBlock[facility] {
                            if y < value {
                                mBlocks[i][facility] = y + 1
                            }
                        }
                    }
                }
                else if i == mBlocks.count - 1 {
                    let previousBlock = mBlocks[i - 1]
                    if value != 0 {
                        if let y = previousBlock[facility] {
                            if y < value {
                                mBlocks[i][facility] = y + 1
                            }
                        }
                    }
                }
                else {
                    if value != 0 {
                        let nextBlock = mBlocks[i + 1]
                        let previousBlock = mBlocks[i - 1]
                        
                        if let y = nextBlock[facility] {
                            if let z = previousBlock[facility] {
                                let t = min(y,z)
                                if t < value {
                                    mBlocks[i][facility] = t + 1
                                }
                            }
                        }
                    }
                    
                }
            }
            i -= 1
        }
        
        // find the maximum distance of each block (with the given requirements)
        var maxDistanceOfEachBlocks: [Int] = [Int](repeating: 0, count: mBlocks.count)
        for (i, block) in mBlocks.enumerated() {
            var max: Int = 0
            for (_, value) in block {
                if value > max {
                    max = value
                }
            }
            maxDistanceOfEachBlocks[i] = max
        }
        
        // find the index that contains the minimum distance
        var min:Int = Int.max
        var result = 0
        for (i, distance) in maxDistanceOfEachBlocks.enumerated() {
            if distance < min {
                min = distance
                result = i
            }
        }
        
        return result
    }
}


// Testing

let blocks: [[String: Bool]] = [
    [
        "gym": false,
        "school": true,
        "store": false,
    ],
    [
        "gym": true,
        "school": false,
        "store": false,
    ],
    [
        "gym": true,
        "school": true,
        "store": false,
    ],
    [
        "gym": false,
        "school": true,
        "store": false,
    ],
    [
        "gym": false,
        "school": true,
        "store": true,
    ]
]
let requirements: [String] = ["gym", "school", "store"]

let solution = Program()

let result = solution.apartmentHunting(blocks, requirements)
print(result) // prints 3
