function groupAnagrams(strs: string[]): string[][] {
    const anagramMap: Map<string, string[]> = new Map();
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (!anagramMap.has(key)) {
            anagramMap.set(key, []);
        }
        anagramMap.get(key)!.push(str);
    }
    return Array.from(anagramMap.values());
}
