impl Solution {
    pub fn make_largest_special(s: String) -> String {
        let mut specials = Vec::new();
        let mut count = 0;
        let chars: Vec<char> = s.chars().collect();
        let mut i = 0;
        
        for j in 0..chars.len() {
            count += if chars[j] == '1' { 1 } else { -1 };
            
            if count == 0 {
                let inner: String = chars[i + 1..j].iter().collect();
                specials.push("1".to_string() + &Self::make_largest_special(inner) + "0");
                i = j + 1;
            }
        }
        
        specials.sort_by(|a, b| b.cmp(a));
        specials.concat()
    }
}
