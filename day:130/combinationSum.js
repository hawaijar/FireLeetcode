function combinationSum(candidates, originalTarget) {
	const final = [];
	const hash = {}
	function findSum(candidates, target, memo = {}, r = []) {
		// base cases
		if (target === 0) {
			const result = r.sort((a,b) => a - b);
			if(!(result.toString() in hash)) {
				final.push(result);
				hash[result.toString()] = 1;
			}
			return [];
		}
		if (target < 0) return null;
		let results = [];
		for (let candidate of candidates) {
			let result = findSum(candidates, target - candidate, memo, [...r, candidate]);
			if (result !== null) {
				if (result.length === 0) {
					results = [candidate];
				} else {
					if(Array.isArray(result[0])) {
						for(let array of result) {
							array = [...array, candidate];
							results = [...result, array];
						}
					}
					else {
						results = [...result, candidate];
					}
				}
			}
		}
		if (results.length > 0) {
			memo[target] = results;
		} else {
			memo[target] = null;
		}
		return memo[target];
	}
	findSum(candidates, originalTarget);
	return final;
}

console.log(combinationSum([2,3,6,7], 7));
