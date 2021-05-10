/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
   const memo = {};
	function recur(s, memo) {
		// base case
		if (s.length === 0) {
			return [""];
		}
		if (memo[s]) {
			return memo[s];
		}
		const output = [];
		for (let word of wordDict) {
			if (s.indexOf(word) === 0) {
				// s starts with word
				const remaining = s.slice(word.length);
				const partialOutput = recur(remaining, memo);
				const sentence = partialOutput.map(
					(str) => word + (str.length ? " " : "") + str
				);
				output.unshift(...sentence);
			}
		}
		memo[s] = output; // memoize the value(s)
		return output; // an array of strings
	}
	return recur(s, memo);
};
