impl Solution {
    pub fn has_alternating_bits(n: i32) -> bool {
        let a = n ^ (n >> 2);
        (a & (a - 1)) == 0
    }
}
