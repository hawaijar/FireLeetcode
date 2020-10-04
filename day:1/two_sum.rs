use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
       let mut hash: HashMap<i32, i32> = HashMap::new();
        for i in 0..nums.len() {
           let diff = (target - nums[i]);
            match hash.get(& diff) {
              Some(value) => {
                  return vec![*value, i as i32];
              }
                None => {
                    hash.insert(nums[i], i as i32);
                }
            }
        }

        return vec![0,0]; 
        }
}
