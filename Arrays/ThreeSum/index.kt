class ThreeNumberSum(private var array: MutableList<Int>, private val targetSum: Int) {
	fun solution(): List<List<Int>> {
		// base case(s)
		if(array.size < 3) {
			return listOf();
		}
		val result: MutableList<List<Int>> = mutableListOf();
		// sort the array first
		array.sort();
		var i = 0;
		while(i < array.size - 2) {
			val a = array[i]
			var j = i + 1;
			var k =  array.size - 1
			while (j < k) {
				val b = array[j]
				val c = array[k]

				if(a + b + c == targetSum) {
					result.add(listOf(a,b,c))
				}
				if(a + b + c < targetSum) {
					j += 1;
				}
				else {
					k -= 1;
				}
			}
			i += 1;
		}
		return result;
	}
}

fun main(args: Array<String>) {
  val array = listOf(12, 3, 1, 2, -6, 5, -8, 6);
	val o = ThreeNumberSum(array as MutableList<Int>, targetSum);
	println(o.solution())
}
