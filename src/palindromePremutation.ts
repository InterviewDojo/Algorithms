export const isPermutePalindrome = (s: string): boolean => {
  const characters = new Set();

  for (let char of s) {
    if (characters.has(char)) {
      characters.delete(char);
    } else {
      characters.add(char);
    }
  }

  return characters.size <= 1;
};
