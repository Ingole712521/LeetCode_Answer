const numSubarraysWithSum = (nums: number[], goal: number): number => {
    let leftIndexForStrict = 0,
        leftIndexForLoose = 0, 
        strictSum = 0, 
        looseSum = 0, 
        rightIndex = 0, 
        count = 0;
    const length = nums.length;
    while (rightIndex < length) {
        strictSum += nums[rightIndex];
        looseSum += nums[rightIndex];
        while (leftIndexForStrict <= rightIndex && strictSum > goal) {
            strictSum -= nums[leftIndexForStrict++];
        }
        while (leftIndexForLoose <= rightIndex && looseSum >= goal) {
            looseSum -= nums[leftIndexForLoose++];
        }
        count += leftIndexForLoose - leftIndexForStrict;
        ++rightIndex;
    }
    return count;
};
