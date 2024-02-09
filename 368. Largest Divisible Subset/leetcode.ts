const sort = (array: number[]): number[] => array.sort((a, b) => a - b);
const max = (a: number, b: number): number => (a > b ? a : b);
function largestDivisibleSubset(nums: number[]): number[] {
    nums = sort(nums);
    const n: number = nums.length;
    const subsetSizes: number[] = new Array(n).fill(1);
    let maxSubsetIndex: number = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] % nums[j] === 0) {
                subsetSizes[i] = max(subsetSizes[i], subsetSizes[j] + 1);
            }
        }
        if (subsetSizes[maxSubsetIndex] < subsetSizes[i]) {
            maxSubsetIndex = i;
        }
    }
    let currentSize: number = subsetSizes[maxSubsetIndex];
    const largestSubset: number[] = [];

    for (let i = maxSubsetIndex; currentSize > 0; --i) {
        if (nums[maxSubsetIndex] % nums[i] === 0 && subsetSizes[i] === currentSize) {
            largestSubset.push(nums[i]);
            maxSubsetIndex = i;
            --currentSize;
        }
    }
    return largestSubset.reverse();
}
