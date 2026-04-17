function lengthOfLongestSubstring(s: string): number {
  const lastSeenIndex = new Map<string, number>();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const previousIndex = lastSeenIndex.get(currentChar);

    if (previousIndex !== undefined && previousIndex >= left) {
      left = previousIndex + 1;
    }

    lastSeenIndex.set(currentChar, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

export { lengthOfLongestSubstring };
