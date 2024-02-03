function maxSumAfterPartitioning(arr: number[], k: number): number {
    const n: number = arr.length; 
    const dp: number[] = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; ++i) {
        let maxElement: number = 0; 
        for (let j = i; j > Math.max(0, i - k); --j) {
            maxElement = Math.max(maxElement, arr[j - 1]);
            dp[i] = Math.max(dp[i], dp[j - 1] + maxElement * (i - j + 1));
        }
    }
    return dp[n];
}
