const minSteps = (stringOne: string, stringTwo: string): number => {
  const charCount = new Array(26).fill(0);
  for (const char of stringOne) {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      charCount[index]++;
  }
  let steps = 0;
  for (const char of stringTwo) {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      steps += --charCount[index] < 0 ? 1 : 0;
  }
  return steps;
};