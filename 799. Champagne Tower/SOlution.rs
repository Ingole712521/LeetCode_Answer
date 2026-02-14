impl Solution {
    pub fn champagne_tower(poured: i32, query_row: i32, query_glass: i32) -> f64 {
        let qr = query_row as usize;
        let qg = query_glass as usize;

        let mut dp = vec![0.0_f64; qr + 1];
        dp[0] = poured as f64;

        for i in 0..qr {
            let mut new_dp = vec![0.0_f64; qr + 1];

            for j in 0..=i {
                if dp[j] > 1.0 {
                    let overflow = (dp[j] - 1.0) / 2.0;
                    new_dp[j] += overflow;
                    new_dp[j + 1] += overflow;
                }
            }

            dp = new_dp;
        }

        dp[qg].min(1.0)
    }
}
