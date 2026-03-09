impl Solution {
    pub fn number_of_stable_arrays(zero: i32, one: i32, limit: i32) -> i32 {
        let k_mod: i64 = 1_000_000_007;

        let zero = zero as usize;
        let one = one as usize;
        let limit = limit as usize;

        let mut dp = vec![vec![vec![0i64; 2]; one + 1]; zero + 1];

        for i in 0..=zero.min(limit) {
            dp[i][0][0] = 1;
        }

        for j in 0..=one.min(limit) {
            dp[0][j][1] = 1;
        }

        for i in 1..=zero {
            for j in 1..=one {
                let subtract = if i > limit { dp[i - limit - 1][j][1] } else { 0 };

                dp[i][j][0] =
                    (dp[i - 1][j][0] + dp[i - 1][j][1] - subtract + k_mod) % k_mod;

                let subtract = if j > limit { dp[i][j - limit - 1][0] } else { 0 };

                dp[i][j][1] =
                    (dp[i][j - 1][0] + dp[i][j - 1][1] - subtract + k_mod) % k_mod;
            }
        }

        ((dp[zero][one][0] + dp[zero][one][1]) % k_mod) as i32
    }
}
