class Solution {
    public boolean isValid(String s) {
        String VALID_CHARACTERS = "({[]})";
        Map<String, String> MAPPING = new HashMap<String, String>();
        MAPPING.put("(", ")");
        MAPPING.put("{", "}");
        MAPPING.put("[", "]");

        // base case(s)
        if(s.length() == 0) return true;
        if(s.length() == 1) return false;
    
        List<String> stack = new ArrayList<>();

        for(int i = 0; i < s.length(); i++) {
            String x = s.substring(i, i + 1);
            if(!VALID_CHARACTERS.contains(x)) return false;
            if(MAPPING.containsKey(x)) {
                stack.add(x);
            }
            else {
                if(stack.size() == 0) return  false;
                String left = stack.get(stack.size() - 1);
                if(!MAPPING.get(left).equals(x)) {
                    return false;
                }
                stack.remove(stack.size() - 1);
            }
        }
        return stack.size() == 0;
    }
}
