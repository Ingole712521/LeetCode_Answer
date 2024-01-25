function longestCommonSubsequence(text1: string, text2: string): number {
  const text1Length = text1.length; 
  const text2Length = text2.length; 
  const dp: number[][] = Array.from({ length: text1Length + 1 }, () => Array(text2Length + 1).fill(0));
  for (let i = 1; i <= text1Length; i++) {
      for (let j = 1; j <= text2Length; j++) {
          if (text1[i - 1] === text2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1] + 1;
          } else {
              dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
          }
      }
  }
  return dp[text1Length][text2Length];
}