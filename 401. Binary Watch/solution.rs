impl Solution {
    pub fn read_binary_watch(turned_on: i32) -> Vec<String> {
        let mut result = Vec::new();
        
        for hour in 0..12 {
            for minute in 0..60 {
                if (hour as i32).count_ones() + (minute as i32).count_ones() == turned_on as u32 {
                    result.push(format!("{}:{:02}", hour, minute));
                }
            }
        }
        
        result
    }
}
