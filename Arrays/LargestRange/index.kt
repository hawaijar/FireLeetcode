class LargestRange(private val array: List<Int>){
	fun solution(): Pair<Int, Int> {
		// base case(s)
		if(this.array.isEmpty()) {
			return Pair(0,0)
		}
		// create a hash structure to store all array elements
		val hash:MutableMap<Int, Boolean> = mutableMapOf();
		for(num in array) {
			hash[num] = false; // Make 'visited' as false initially
		}
		var largestRange = 0
		var result:Pair<Int, Int> = Pair(-1,-1)
		// traverse the array
		for(i in array) {
			var num = i;
			if(hash[num] == true) { // already visited?
				continue;
			}
			val endIndex = num;
			var startIndex = num;

			while(hash.containsKey(num)) {
				hash[num] = true; // make 'visited' true
				val range = (endIndex - startIndex) + 1
				if(range > largestRange) {
					largestRange = range;
					result = Pair(startIndex, endIndex)
				}
				num -= 1;
				startIndex -= 1;
			}
		}
		return result;
	}
}

// Testing

// fun main(args: Array<String>) {
//   val array = listOf<Int>(-1,1,2,3)
// 	val o = LargestRange(array);
// 	println(o.solution())
// }
