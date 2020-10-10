class Node:
    def __init__(self, ch):
        self.ch = ch
        self.children = {}
        self.isWordTerminal = False


class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = Node('\0')

    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """
        current = self.root
        for ch in word:
            if ch not in current.children:
                current.children[ch] = Node(ch)
            current = current.children[ch]
        current.isWordTerminal = True

    def get_node(self, word: str):
        current = self.root
        for ch in word:
            if ch in current.children:
                current = current.children[ch]
            else:
                return None
        return current

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """
        node = self.get_node(word)
        if node is not None:
            if node.isWordTerminal:
                return True

        return False

    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        return self.get_node(prefix) is not None

# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
