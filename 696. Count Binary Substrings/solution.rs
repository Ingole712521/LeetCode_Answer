impl Solution {
    pub fn count_binary_substrings(s: String) -> i32 {
        let s = s.as_bytes(); 
        let mut ans = 0;
        let mut prev_equals = 0;
        let mut curr_equals = 1;
        
        for i in 0..s.len()-1 {
            if s[i] == s[i + 1] {
                curr_equals += 1;
            } else {
                ans += std::cmp::min(prev_equals, curr_equals);
                prev_equals = curr_equals;
                curr_equals = 1;
            }
        }
        
        ans + std::cmp::min(prev_equals, curr_equals)
    }
}
