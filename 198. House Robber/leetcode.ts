function rob(nums: number[]): number {
  let [robPrevious, robCurrent] = [0, 0];

  for (const currentHouseValue of nums) {
      [robPrevious, robCurrent] = [Math.max(robPrevious, robCurrent), robPrevious + currentHouseValue];
  }
  return Math.max(robPrevious, robCurrent);
}