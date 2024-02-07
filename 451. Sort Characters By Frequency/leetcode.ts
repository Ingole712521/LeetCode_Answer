function frequencySort(s: string): string {
    const charFrequencyMap: Map<string, number> = new Map();
    for (const char of s) {
        charFrequencyMap.set(char, (charFrequencyMap.get(char) || 0) + 1);
    }
    const sortedCharacters = Array.from(charFrequencyMap.keys()).sort(
        (charA, charB) => charFrequencyMap.get(charB)! - charFrequencyMap.get(charA)!
    );
    const sortedArray: string[] = [];
    for (const char of sortedCharacters) {
        sortedArray.push(char.repeat(charFrequencyMap.get(char)!));
    }
    return sortedArray.join('');
}
