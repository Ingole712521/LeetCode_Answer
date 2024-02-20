function missingNumber(nums: number[]): number {
    const arrayLength = nums.length;
    let result = arrayLength;
    for(let i = 0 ; i< arrayLength; ++i){

        result ^=i ^ nums[i];
    }
    return result;
    
};
