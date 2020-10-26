use std::collections::HashMap;

impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
       // base case
        if s.len() == 0 {
            return 0;
        }
        let mut longest = 0;
        let mut v_str:Vec<char> = s.chars().collect();

        for i in 0..v_str.len() {
            let mut count = 0;
            let mut hash:HashMap<char, bool> = HashMap::new();

            for j in i..v_str.len() {
                if hash.is_empty() {
                    count += 1;
                    hash.insert(v_str[j], true);
                    longest = if longest > count {longest} else {count};
                }
                else if !hash.contains_key(&v_str[j]) {
                    count += 1;
                    hash.insert(v_str[j], true);
                    longest = if longest > count {longest} else {count};
                }
                else {
                    break;
                }
            }
        }
        return longest; 
    }
}
