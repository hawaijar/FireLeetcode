class ZigZagTraversal(private val array: List<List<Int>>){
	fun solution(): List<Int> {
		// base case
		if(array.isEmpty()) {
			return listOf();
		}
		val ROW = array.size;
		val COL = array[0].size

		// create diagonals
		val diagonals: MutableList<MutableList<Int>> = MutableList(ROW + COL - 1){_ -> mutableListOf<Int>() }
		val result: MutableList<Int> = mutableListOf();

		for(i in 0 until ROW) {
			for(j in 0 until COL) {
				val sum = i + j;
				val num = array[i][j]
				if(sum % 2 == 0) {
					// FIFO order
					diagonals[sum].add(num);
				}
				else {
					// FILO order
					diagonals[sum].add(0, num);
				}
			}
		}
		for(diagonal in diagonals) {
			for(num in diagonal) {
				result.add(num);
			}
		}
		return result;
	}
}


/* --- testing. -----

fun main(args: Array<String>) {
	val array: List<List<Int>> = listOf(listOf(1, 3, 4, 10), listOf(2, 5, 9, 11), listOf(6, 8, 12, 15), listOf(7, 13, 14, 16))
	val o = ZigZagTraversal(array);
	println(o.solution())
}
*/
