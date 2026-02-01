function minimumCost(nums: number[]): number {
    let firstElement : number = nums[0];
    let smalletValue : number = 100;
    let secondSmallestValue : number = 100;

    for(const currentValue of nums.slice(1)){
        if(currentValue < smalletValue){
            secondSmallestValue = smalletValue;
            smalletValue = currentValue;
        }
        else if(currentValue < secondSmallestValue){
            secondSmallestValue = currentValue;
        }
    }

return firstElement + smalletValue + secondSmallestValue;
    
};
