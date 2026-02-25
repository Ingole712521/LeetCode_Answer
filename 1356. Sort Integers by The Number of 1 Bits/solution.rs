impl Solution {
    pub fn sort_by_bits(mut arr: Vec<i32>) -> Vec<i32> {
        arr.sort_by_key(|&a| {
            let bit_count = a.count_ones();
            (bit_count, a)
        });
        arr
    }
}
