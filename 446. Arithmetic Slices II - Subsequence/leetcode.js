function numberOfArithmeticSlices(nums) {
    var length = nums.length;
    var arithmeticMap = new Array(length).fill(0).map(function () { return new Map(); });
    var totalCount = 0;
    for (var i = 0; i < length; ++i) {
        for (var j = 0; j < i; ++j) {
            var difference = nums[i] - nums[j];
            var count = arithmeticMap[j].get(difference) || 0;
            totalCount += count;
            arithmeticMap[i].set(difference, (arithmeticMap[i].get(difference) || 0) + count + 1);
        }
    }
    return totalCount;
}
