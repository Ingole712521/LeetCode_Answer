function firstUniqChar(s: string): number {
    const charFrequency = new Array(26).fill(0);
    for (const character of s) {
        charFrequency[character.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let index = 0; index < s.length; index++) {
        if (charFrequency[s.charCodeAt(index) - 'a'.charCodeAt(0)] === 1) {
            return index;
        }
    }
    return -1;
}
