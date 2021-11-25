class TwoNumberSum(private var array: MutableList<Int>, private var targetSum: Int) {
	// Brute/force method
	fun solution1(): List<Int> {
		val hash: HashMap<Int, Boolean> = HashMap();
		for(num in array) {
			val b = num
			val a = targetSum - b
			if(hash.containsKey(a)) {
				return listOf(a,b)
			}
			hash[b] = true
		}
		return listOf<Int>()
	}
	// Two/pointers solution
	fun solution2(): List<Int> {
		val sortedArray = array.sorted();
		var i = 0
		var j =  sortedArray.size - 1

		while(i < j) {
			val a = sortedArray[i]
			val b = sortedArray[j]

			if(a + b == targetSum) {
				return listOf(a,b)
			}
			if(a + b < targetSum) {
				i += 1
			}
			else {
				j -= 1
			}
		}
		return listOf<Int>()
	}
}
