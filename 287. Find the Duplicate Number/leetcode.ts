function findDuplicate(nums: number[]): number {
    let left = 1;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2); 
        let count = 0;
        for (const value of nums) {
            if (value <= mid) {
                count++;
            }
        }
        if (count > mid) {
            right = mid; 
        } else {
            left = mid + 1; 
        }
    }
    return left;
}
