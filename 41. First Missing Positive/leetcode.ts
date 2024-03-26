function firstMissingPositive(nums: number[]): number {
    const size = nums.length; 
    for (let currentIndex = 0; currentIndex < size; currentIndex++) {
        let targetIndex = nums[currentIndex] - 1;
        while (
            nums[currentIndex] > 0 &&
            nums[currentIndex] <= size &&
            nums[currentIndex] !== nums[targetIndex] &&
            currentIndex !== targetIndex
        ) {
            [nums[currentIndex], nums[targetIndex]] = [nums[targetIndex], nums[currentIndex]];
            targetIndex = nums[currentIndex] - 1;
        }
    }
    for (let index = 0; index < size; index++) {
        if (nums[index] !== index + 1) {
            return index + 1; 
        }
    }
     return size + 1;
}
