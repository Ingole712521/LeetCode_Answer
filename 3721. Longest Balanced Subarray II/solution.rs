use std::collections::HashMap;

impl Solution {
    pub fn longest_balanced(nums: Vec<i32>) -> i32 {
        let n = nums.len() + 1;
        let mut st = SegmentTree::new(n);
        let mut result = 0;

        let mut lookup: HashMap<i32, usize> = HashMap::new();
        let mut curr = 0;

        for i in 1..=nums.len() {
            let x = nums[i - 1];
            let d = if x & 1 == 1 { 1 } else { -1 };

            if let Some(&prev) = lookup.get(&x) {
                st.update(prev, n - 1, -d);
                curr -= d;
            }

            curr += d;
            lookup.insert(x, i);

            st.update(i, n - 1, d);

            let l = i as i32 - st.binary_search(curr) as i32;
            if l > result {
                result = l;
            }
        }

        result
    }
}

struct SegmentTree {
    base: usize,
    lazy: Vec<i32>,
    minv: Vec<i32>,
    maxv: Vec<i32>,
}

impl SegmentTree {
    fn new(n: usize) -> Self {
        let base = if n > 1 {
            1 << ((n - 1).ilog2() + 1)
        } else {
            1
        };

        let size = if n > 1 {
            1 << ((n - 1).ilog2() + 2)
        } else {
            2
        };

        SegmentTree {
            base,
            lazy: vec![0; base],
            minv: vec![0; size],
            maxv: vec![0; size],
        }
    }

    fn apply(&mut self, x: usize, val: i32) {
        self.minv[x] += val;
        self.maxv[x] += val;
        if x < self.base {
            self.lazy[x] += val;
        }
    }

    fn pull(&mut self, mut x: usize) {
        while x > 1 {
            x >>= 1;

            let left = x << 1;
            let right = left | 1;

            self.minv[x] = self.minv[left].min(self.minv[right]);
            self.maxv[x] = self.maxv[left].max(self.maxv[right]);

            if self.lazy[x] != 0 {
                self.minv[x] += self.lazy[x];
                self.maxv[x] += self.lazy[x];
            }
        }
    }

    fn update(&mut self, mut l: usize, mut r: usize, val: i32) {
        l += self.base;
        r += self.base;

        let l0 = l;
        let r0 = r;

        while l <= r {
            if (l & 1) == 1 {
                self.apply(l, val);
                l += 1;
            }
            if (r & 1) == 0 {
                self.apply(r, val);
                if r == 0 {
                    break;
                }
                r -= 1;
            }
            l >>= 1;
            r >>= 1;
        }

        self.pull(l0);
        self.pull(r0);
    }

    fn binary_search(&mut self, x: i32) -> usize {
        let mut i = 1;

        while i < self.base {
            if self.lazy[i] != 0 {
                let val = self.lazy[i];
                self.apply(i << 1, val);
                self.apply((i << 1) | 1, val);
                self.lazy[i] = 0;
            }

            i <<= 1;

            if !(self.minv[i] <= x && x <= self.maxv[i]) {
                i |= 1;
            }
        }

        i - self.base
    }
}
