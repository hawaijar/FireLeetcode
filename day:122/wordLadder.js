function getNeighbours(word, level) {
	const list = [];
	const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
	for (let i = 0; i < word.length; i++) {
		for (let letter of alphabets) {
			if (letter !== word[i]) {
				const neighbour = word.slice(0, i) + letter + word.slice(i + 1);
				list.push({ word: neighbour, level });
			}
		}
	}
	return list;
}
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // base case
	if (beginWord === "" || endWord === "" || !wordList.includes(endWord)) {
		return 0;
	}
    // Note: Don't use Array.includes(word) to check the presence of word
    // Instead use Object (read as Hash) lookup for the same.
	const hash = {};
	for(let w of wordList) {
		hash[w] = true;
	}
	const queue = [{ word: beginWord, level: 1 }];
	const visited = [];
	while (queue.length > 0) {
		const { word, level } = queue.shift();
		if (word === endWord) {
			return word.level;
		}
		const neighbours = getNeighbours(word, level + 1);
		for (let neighbour of neighbours) {
			if (
				hash[neighbour.word] &&
				!visited.includes(neighbour.word)
			) {
				if (neighbour.word === endWord) {
					return neighbour.level;
				}
				visited.push(neighbour.word);
				queue.push(neighbour);
			}
		}
	}
	return 0;
};
