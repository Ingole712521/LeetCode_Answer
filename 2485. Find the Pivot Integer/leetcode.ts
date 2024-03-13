function pivotInteger(n: number): number {
    const sumOfIntegers = Math.floor((n * (n + 1)) / 2);
    const integerRoot = Math.floor(Math.sqrt(sumOfIntegers));
    return integerRoot * integerRoot === sumOfIntegers ? integerRoot : -1;
}
