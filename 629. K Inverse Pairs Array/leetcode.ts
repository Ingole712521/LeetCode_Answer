function kInversePairs(n: number, k: number): number {    
    const numWays: number[] = new Array(k + 1).fill(0);
    numWays[0] = 1; 
    const prefixSums: number[] = new Array(k + 2).fill(1);
    prefixSums[0] = 0;
    const mod: number = 1e9 + 7;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            numWays[j] = (prefixSums[j + 1] - prefixSums[Math.max(0, j - (i - 1))] + mod) % mod;
        }
        for (let j = 1; j <= k + 1; j++) {
            prefixSums[j] = (prefixSums[j - 1] + numWays[j - 1]) % mod;
        }
    }
    return numWays[k];
}
