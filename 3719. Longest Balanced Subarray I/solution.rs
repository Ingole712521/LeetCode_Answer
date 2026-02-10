impl Solution {
    pub fn longest_balanced(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let mut max_len = 0;
        
        for start in 0..n {
            let mut distinct_evens = std::collections::HashSet::new();
            let mut distinct_odds = std::collections::HashSet::new();
            
            for end in start..n {
                if nums[end] % 2 == 0 {
                    distinct_evens.insert(nums[end]);
                } else {
                    distinct_odds.insert(nums[end]);
                }
                
                if distinct_evens.len() == distinct_odds.len() {
                    max_len = max_len.max((end - start + 1) as i32);
                }
            }
        }
        
        max_len
    }
}
