class Node {
    constructor(character) {
        this.char = character;
        this.isWordTerminal = false;
        this.children = {};
    }
}

var Trie = function() {
    // root contains a character(s) other than the 26 alphabets.
    this.root = new Node('\0');
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current = this.root;
    for(const char of word) {
        if(!current.children[char]) {
            current.children[char] = new Node(char);
        }
        current = current.children[char];
    }
    current.isWordTerminal = true;
};
/**
 * Get node corresponding to a word
 * @param {string} word
 * @return {Node} the last Node of the word, if found; else null
 */

Trie.prototype.getNode = function (word) {
    let current = this.root;
    for(let char of word) {
        if(current.children[char]) {
            current = current.children[char];
        }
        else {
            return null;
        }
    }
    return current;
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const node = this.getNode(word);
    if(node && node.isWordTerminal) {
        return true;
    }
    else {
        return false;
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.getNode(prefix) !== null;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// var obj = new Trie();
// obj.insert("Trie");
// obj.insert("search");
// console.log(obj.search("a"));

