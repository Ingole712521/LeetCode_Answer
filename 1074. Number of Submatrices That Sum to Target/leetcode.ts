function numSubmatrixSumTarget(matrix: number[][], target: number): number {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let count = 0;
    for (let startRow = 0; startRow < numRows; ++startRow) {
        const columnSum: number[] = new Array(numCols).fill(0);
        for (let endRow = startRow; endRow < numRows; ++endRow) {
            for (let col = 0; col < numCols; ++col) {
                columnSum[col] += matrix[endRow][col];
            }
            count += countSubarraysWithSum(columnSum, target);
        }
    }
    return count;
}
function countSubarraysWithSum(nums: number[], target: number): number {
    const sumOccurrences: Map<number, number> = new Map();
    sumOccurrences.set(0, 1); 
    let count = 0;
    let currentSum = 0;
    for (const num of nums) {
        currentSum += num;
        if (sumOccurrences.has(currentSum - target)) {
            count += sumOccurrences.get(currentSum - target)!;
        }
        sumOccurrences.set(currentSum, (sumOccurrences.get(currentSum) || 0) + 1);
    }
    return count;
}
