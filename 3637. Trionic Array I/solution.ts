function isTrionic(nums: number[]): boolean {
    const arrayLength: number = nums.length;
    let currentIndex : number = 0;

    while(currentIndex < arrayLength -2 && nums[currentIndex] < nums[currentIndex + 1]){
        currentIndex++;
    }
    

    if(currentIndex === 0){
        return false;
    }

    let peakIndex: number = currentIndex;
    while(peakIndex < arrayLength - 1 && nums[peakIndex] > nums[peakIndex + 1] ){
        peakIndex++;
    }

    if (peakIndex === currentIndex || peakIndex === arrayLength - 1) {
        return false;
    }
     while (peakIndex < arrayLength - 1 && nums[peakIndex] < nums[peakIndex + 1]) {
        peakIndex++;
    }
    return peakIndex === arrayLength - 1;
};
