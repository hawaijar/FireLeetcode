class ApartmentHunting {
	fun apartmentHunting(blocks: List<MutableMap<String, Boolean>>, reqs: List<String>): Int {
		// base case
		if(blocks.size <= 1) {
			return 0;
		}
		val mBlocks:List<MutableMap<String, Int>> = MutableList(blocks.size) { _ -> mutableMapOf<String, Int>()}
		// initialize mBlocks (facility of false to Infinity and true to 0
		for((i, block) in blocks.withIndex()) {
			for((facility, value) in block) {
				if(reqs.contains(facility)) {
					if(value) {
						mBlocks[i][facility] = 0
					}
					else {
						mBlocks[i][facility] = Int.MAX_VALUE
					}
				}
			}
		}
		// left scan
		var i = 1
		while(i < mBlocks.size) {
			val block = mBlocks[i]
			val previousBlock = mBlocks[i-1]
			for((facility, value) in block) {
				if(value == 0) {
					if(previousBlock[facility] != 0) {
						mBlocks[i-1][facility] = 1
					}
				}
				else {
						if(previousBlock[facility]!! < value) {
							mBlocks[i][facility] = previousBlock[facility]!! + 1
						}
					}
				}
				i += 1
			}
		// right scan
		i = mBlocks.size - 1
		while(i >= 0) {
			val currentBlock = mBlocks[i]
			for((facility, value) in currentBlock) {
				if(i == 0) {
					if(value != 0) {
						val nextBlock = mBlocks[i+1]
						if(nextBlock[facility]!! < value) {
							mBlocks[i][facility] = nextBlock[facility]!! + 1
						}
					}
				}
				else if(i == mBlocks.size - 1) {
					val previousBlock = mBlocks[i-1]
					if(value != 0) {
						if(previousBlock[facility]!! < value) {
							mBlocks[i][facility] = previousBlock[facility]!! + 1
						}
					}
					else {
						if(previousBlock[facility]!! != 0) {
							mBlocks[i-1][facility] = 1
						}
					}
				}
				else {
					val previousBlock = mBlocks[i-1]
					val nextBlock = mBlocks[i+1]
					if(value == 0) {
						if(previousBlock[facility]!! != 0) {
							mBlocks[i-1][facility] = 1
						}
						if(nextBlock[facility]!! != 0) {
							mBlocks[i+1][facility] = 1
						}
					}
					else {
						val t = minOf(previousBlock[facility]!!,nextBlock[facility]!! );
						if(t < value) {
							mBlocks[i][facility] = t + 1
						}
					}
				}
			}
			i -= 1
		}

		// find the maximum distance of each block (with the given requirements)
		val maxDistanceOfEachBlocks:MutableList<Int> = MutableList(mBlocks.size){_ -> 0}
		for((k, block) in mBlocks.withIndex()) {
			var max: Int = 0
			for((_, value) in block) {
				if(value > max) {
					max = value
				}
			}
			maxDistanceOfEachBlocks[k] = max
		}
		// find the index that contains the minimum distance
		var result = 0;
		var min = Int.MAX_VALUE
		for((index, distance) in maxDistanceOfEachBlocks.withIndex()) {
			if(distance < min) {
				min = distance
				result = index;
			}
		}

		return result;
	}
}


// Testing
fun main(args: Array<String>) {
  val m1 = mutableMapOf("gym" to false,"school" to true, "store" to false)
	val m2 = mutableMapOf("gym" to true,"school" to false, "store" to false)
	val m3 = mutableMapOf("gym" to true,"school" to true, "store" to false)
	val m4 = mutableMapOf("gym" to false,"school" to true, "store" to false)
	val m5 = mutableMapOf("gym" to false,"school" to true, "store" to true)

	val requirements = listOf("gym", "school", "store")

	val blocks = listOf(m1, m2, m3, m4, m5)
	val o = ApartmentHunting()
	println(o.apartmentHunting(blocks, requirements)) // prints 3
  
}
