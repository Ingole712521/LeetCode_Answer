impl Solution {
    pub fn count_prime_set_bits(left: i32, right: i32) -> i32 {
        const MAGIC: i32 = 665772;
        let mut ans = 0;
        
        for num in left..=right {
            if (MAGIC >> num.count_ones() as i32) & 1 == 1 {
                ans += 1;
            }
        }
        
        ans
    }
}
