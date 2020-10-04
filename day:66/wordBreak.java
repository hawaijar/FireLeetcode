class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        // base case
        if(s.length() == 1) {
        if(wordDict.contains(s)) {
            return true;
        }
        else {
            return false;
        }
    }
    Queue<Integer> queue = new LinkedList<>();
    int[] visited = new int[s.length()];
    queue.add(0);
        
    while(!queue.isEmpty()) {
        int start = queue.remove();
        if(visited[start] == 0) {
           for(int end = start; end < s.length(); end++) {
                String word = s.substring(start, end + 1);
                if(wordDict.contains(word)) {
                    if(end == s.length() - 1) {
                        return true;
                    }
                    queue.add(end + 1);
                }
            } 
        }
        visited[start] = 1;
        
    }
    return false;
    }
}
