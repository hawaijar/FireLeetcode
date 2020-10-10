import java.util.HashMap;

class Node {
    char c;
    HashMap children;
    boolean isWordTerminal;
    public Node(char c) {
        this.c = c;
        this.children = new HashMap<Character, Node>();
        this.isWordTerminal = false;
    }
}
public class Trie {
    private final Node root;
    /** Initialize your data structure here. */
    public Trie() {
        this.root = new Node('\0');
    }

    /** Inserts a word into the trie. */
    public void insert(String word) {
        Node current = this.root;
        for(int i = 0;  i < word.length(); i++) {
            char ch = word.charAt(i);
            if(!current.children.containsKey(ch)) {
                current.children.put(ch, new Node(ch));
            }
            current = (Node)current.children.get(ch);
        }
        current.isWordTerminal = true;
    }
    /** Find the node corresponding to the word **/
    public Node getNode(String word) {
        Node current = this.root;
        for(int i = 0;  i < word.length(); i++) {
            char ch = word.charAt(i);
            if(!current.children.containsKey(ch)) {
                return null;
            }
            current = (Node)current.children.get(ch);
        }
        return current;
    }
    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        Node node = this.getNode(word);
        if(node != null && node.isWordTerminal) {
            return true;
        }
        return false;
    }

    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        Node node = this.getNode(prefix);
        return node != null;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */
