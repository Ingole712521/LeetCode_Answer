let maxRowCount: number;
let maxColCount: number;
const MOD: number = 1e9 + 7;
let memo: number[][][] = [];
const directions: number[] = [-1, 0, 1, 0, -1];
function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
    memo = [...Array(51)].map(() => [...Array(51)].map(() => Array(51).fill(-1)));
    maxRowCount = m;
    maxColCount = n;
    return dfs(startRow, startColumn, maxMove);
}

function dfs(row: number, col: number, remainingMoves: number): number {
    if (row < 0 || row >= maxRowCount || col < 0 || col >= maxColCount) return 1;
    if (memo[row][col][remainingMoves] !== -1) return memo[row][col][remainingMoves];
    if (remainingMoves === 0) return 0;
    let pathCount: number = 0;
    for (let i = 0; i < 4; i++) {
        let nextRow = row + directions[i];
        let nextCol = col + directions[i + 1];
        pathCount += dfs(nextRow, nextCol, remainingMoves - 1);
        pathCount %= MOD;
    }
    memo[row][col][remainingMoves] = pathCount;
    return pathCount;
}
