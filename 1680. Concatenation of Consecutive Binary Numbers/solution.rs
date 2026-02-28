impl Solution {
    pub fn concatenated_binary(n: i32) -> i32 {
        const MOD: i64 = 1_000_000_007;
        let mut result: i64 = 0;
        
        for i in 1..=n as i64 {
            let bit_length = 64 - i.leading_zeros() as i64;
            result = ((result << bit_length) | i) % MOD;
        }
        
        result as i32
    }
}
