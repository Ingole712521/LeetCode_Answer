impl Solution {
    pub fn min_operations(s: String) -> i32 {
        let cost10 = s
            .chars()
            .enumerate()
            .filter(|(i, c)| c.to_digit(10).unwrap() as usize == i % 2)
            .count() as i32;
        
        std::cmp::min(cost10, s.len() as i32 - cost10)
    }
}
