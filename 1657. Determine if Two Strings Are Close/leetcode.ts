function closeStrings(word1: string, word2: string): boolean {
  const charCount1: number[] = new Array(26).fill(0);
  const charCount2: number[] = new Array(26).fill(0);
  for (let char of word1) {
      charCount1[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  for (let char of word2) {
      charCount2[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  for (let i = 0; i < 26; ++i) {
      let charPresentWord1 = charCount1[i] > 0;
      let charPresentWord2 = charCount2[i] > 0;
      if (charPresentWord1 !== charPresentWord2) {
          return false;
      }
  }
  charCount1.sort((a, b) => a - b);
  charCount2.sort((a, b) => a - b);
  for (let i = 0; i < 26; ++i) {
      if (charCount1[i] !== charCount2[i]) {
          return false;
      }
  }
  return true;
}