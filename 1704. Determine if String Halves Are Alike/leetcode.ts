function halvesAreAlike(s: string): boolean {
  const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const halfLength = s.length >> 1; 
  let counter = 0;
  for (let i = 0; i < halfLength; i++) {
      if (vowelsSet.has(s[i])) {
          counter++;
      }
      if (vowelsSet.has(s[halfLength + i])) {
          counter--;
      }
  }
  return counter === 0;
}