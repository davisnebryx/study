function rob(nums: number[]): number {
  let prevTwo = 0;
  let prevOne = 0;

  for (const amount of nums) {
    const current = Math.max(prevOne, prevTwo + amount);
    prevTwo = prevOne;
    prevOne = current;
  }

  return prevOne;
}