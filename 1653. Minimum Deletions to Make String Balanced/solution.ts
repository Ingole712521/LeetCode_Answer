function minimumDeletions(s: string): number {
    const stringLength: number = s.length;
    const dp: number[] = new Array(stringLength + 1).fill(0);
    let bCount: number = 0;
    for (let i = 1; i <= stringLength; ++i) {
        if (s[i - 1] === 'b') {
            dp[i] = dp[i - 1];
            ++bCount;
        } else {
            dp[i] = Math.min(dp[i - 1] + 1, bCount);
        }
    }
  
    return dp[stringLength];
}
