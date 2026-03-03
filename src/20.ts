function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      continue;
    }

    if (stack.length === 0 || stack.pop() !== pairs[char]) {
      return false;
    }
  }

  return stack.length === 0;
}
