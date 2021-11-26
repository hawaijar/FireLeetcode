class ShortestUnsortedArray(private val array:List<Int>) {
	fun solutions1(): List<Int> {
		// base case(s)
		if(array.size < 2) {
			return listOf(-1,-1);
		}
		// create a new sorted array (from the given array)
		val sortedArray:List<Int> = array.sorted();
		val result:MutableList<Int> = mutableListOf(-1,-1);
		var i = 0; var j = array.size - 1;

		while(i < j) {
			if(array[i] != sortedArray[i]) {
				result[0] = i;
				break;
			}
			i += 1;
		}
		while(j > i) {
			if(array[j] != sortedArray[j]) {
				result[1] = j;
				break;
			}
			j -= 1;
		}
		return result;
	}
}
// ----- Testing ----------------------
// fun main(args: Array<String>) {
// 	val array: List<Int> = listOf(1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19);
// 	val o = ShortestUnsortedArray(array)
// 	println(o.solutions1())
// }
