/*
Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells,
where adjacent cells are horizontally or vertically neighboring.
The same letter cell may not be used more than once in a word.

Input: board =
	[
		["o","a","a","n"],
		["e","t","a","e"],
		["i","h","k","r"],
		["i","f","l","v"]
	], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
 */

class Trie {
  constructor() {
    this.prefixes = {};
    this.words = {};
  }
  addPrefix(word) {
    for (let i = 0; i <= word.length; i++) {
      this.prefixes[word.slice(0, i)] = true;
    }
  }
  addWord(word) {
    this.words[word] = true;
  }
  searchPrefix(prefix) {
    return prefix in this.prefixes;
  }
  searchWord(word) {
    return word in this.words;
  }
}

function findWords(board, words) {
  const trie = new Trie();
  let result = new Set();
  // base case
  if (!board) return [];
  // initialize the trie instance
  for (let word of words) {
    trie.addPrefix(word);
    trie.addWord(word);
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      dfs(board, i, j, "", trie, result);
    }
  }
  return Array.from(result);
}

const VISITED = 1;

function dfs(board, row, col, path, trie, result) {
  // check the invalid directions
  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[row].length ||
    board[row][col] === VISITED
  ) {
    return;
  }

  if (!trie.searchPrefix(path)) {
    return;
  }

  path += board[row][col];

  if (trie.searchWord(path)) {
    result.add(path);
  }

  const temp = board[row][col];

  board[row][col] = VISITED;

  // go north direction
  dfs(board, row - 1, col, path, trie, result);
  // go south direction
  dfs(board, row + 1, col, path, trie, result);
  // go east direction
  dfs(board, row, col + 1, path, trie, result);
  // go west direction
  dfs(board, row, col - 1, path, trie, result);

  board[row][col] = temp;

  path = path.slice(0, path.length - 1);
}

const board = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"],
];
const words = ["oath", "pea", "eat", "rain"];

console.log(findWords(board, words));
