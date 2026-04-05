impl Solution {
    pub fn judge_circle(moves: String) -> bool {
        let mut right = 0;
        let mut up = 0;

        for move_char in moves.chars(){
            match move_char {
                'R' => right += 1,
                'L' => right -= 1,
                'U' => up +=1,
                'D' => up -=1,
                _ => {}
            }
        }
        right == 0 && up == 0
        
    }
}
