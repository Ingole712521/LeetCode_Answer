impl Solution {
    pub fn reverse_bits(n: i32) -> i32 {
        let mut result: i32 = 0;
        let mut n = n;
        
        for i in 0..32 {
            result |= (n & 1) << (31 - i);
            n >>= 1;
        }
        
        result
    }
}
