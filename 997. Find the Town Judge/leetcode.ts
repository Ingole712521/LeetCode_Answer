function findJudge(n: number, trust: number[][]): number {
    const trustCounts: number[] = new Array(n + 1).fill(0);
    const trustedByCount: number[] = new Array(n + 1).fill(0);
    for (const [truster, trusted] of trust) {
        trustCounts[truster]++;
        trustedByCount[trusted]++;
    }
    for (let i = 1; i <= n; i++) {
        if (trustedByCount[i] === n - 1 && trustCounts[i] === 0) {
            return i; 
        }
    }
    return -1;
}
