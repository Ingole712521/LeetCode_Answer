function sequentialDigits(low: number, high: number): number[] {
    let result: number[] = [];
    for (let startDigit = 1; startDigit < 9; ++startDigit) {
        let num = startDigit;
        for (let nextDigit = startDigit + 1; nextDigit < 10; ++nextDigit) {
            num = num * 10 + nextDigit;
            if (num >= low && num <= high) {
                result.push(num);
            }
        }
    }
    result.sort((a, b) => a - b);
    return result;
}
