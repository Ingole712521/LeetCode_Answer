function numberOfArithmeticSlices(nums: number[]): number {
  const length = nums.length;
  const arithmeticMap: Map<number, number>[] = new Array(length).fill(0).map(() => new Map());
  let totalCount = 0;
  for (let i = 0; i < length; ++i) {
      for (let j = 0; j < i; ++j) {
          const difference = nums[i] - nums[j];
          const count = arithmeticMap[j].get(difference) || 0;
          totalCount += count;
          arithmeticMap[i].set(difference, (arithmeticMap[i].get(difference) || 0) + count + 1);
      }
  }
  return totalCount;
}