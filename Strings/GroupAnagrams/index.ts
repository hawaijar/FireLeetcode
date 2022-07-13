function sort(string: string) {
  return string.split("").sort().join("");
}
class GroupAnagrams {
  solution(words: string[]) {
    // base case
    if (words.length === 0) return [];
    // create a hash where key is the sort(of each string) and values the possible anagrams of that string
    // in the given list of strings
    // basically, we're grouping all anagrams of a string (by its sorted form)
    const hash: { [key: string]: string[] } = {};
    for (let word of words) {
      const sortedWord = sort(word);
      if (hash[sortedWord]) {
        hash[sort(word)].push(word);
      } else {
        hash[sort(word)] = [word];
      }
    }
    // return all grouped anagrams.
    return Object.values(hash);
  }
}

(function () {
  // Testing
  const obj = new GroupAnagrams();
  const result = obj.solution(["abc", "acb", "cinema", "iceman"]);
  console.log(result);
})();
