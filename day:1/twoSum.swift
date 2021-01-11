class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var hash = [Int:Int]()
        for (index, element) in nums.enumerated() {
            let diff = target - nums[index]
            if let j = hash[diff] {
                return [index, j]
            }
            hash[nums[index]] = index
        }
        return []
    }
}
