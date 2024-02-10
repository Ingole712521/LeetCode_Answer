function countSubstrings(str: string): number {
    let count: number = 0;
    const length: number = str.length;
    for (let center = 0; center < length * 2 - 1; ++center) {
        let left: number = center >> 1;
        let right: number = (center + 1) >> 1;
        while (left >= 0 && right < length && str[left] == str[right]) {
            ++count;
            --left;
            ++right;
        }
    }
    return count;
}
