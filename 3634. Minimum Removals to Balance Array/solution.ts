function minRemoval(nums: number[], k: number): number {
    nums.sort((a: number, b: number) => a - b);
  
    const arrayLength: number = nums.length;
    let maxValidSubarraySize: number = 0;
    for (let leftIndex: number = 0; leftIndex < arrayLength; ++leftIndex) {
        let rightBoundIndex: number = arrayLength;
        if (nums[leftIndex] * k <= nums[arrayLength - 1]) {
            const threshold: number = nums[leftIndex] * k + 1;
            rightBoundIndex = binarySearchUpperBound(nums, threshold);
        }
      
        maxValidSubarraySize = Math.max(maxValidSubarraySize, rightBoundIndex - leftIndex);
    }
  
    return arrayLength - maxValidSubarraySize;
}

function binarySearchUpperBound(sortedArray: number[], target: number): number {
    let left: number = 0;
    let right: number = sortedArray.length;
  
    while (left < right) {
        const mid: number = Math.floor((left + right) / 2);
        if (sortedArray[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
  
    return left;
}
