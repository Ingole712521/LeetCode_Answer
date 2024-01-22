function findErrorNums(nums: number[]): number[] {
  const length = nums.length;
  let xorSum = 0;
  for (let index = 1; index <= length; ++index) {
      xorSum ^= index ^ nums[index - 1];
  }
  const rightmostSetBit = xorSum & -xorSum;
  let oneNumber = 0;
  for (let index = 1; index <= length; ++index) {
      if (index & rightmostSetBit) {
          oneNumber ^= index;
      }
      if (nums[index - 1] & rightmostSetBit) {
          oneNumber ^= nums[index - 1];
      }
  }
  const otherNumber = xorSum ^ oneNumber;
  return nums.includes(oneNumber) ? [oneNumber, otherNumber] : [otherNumber, oneNumber];
}