function twoSum(nums: number[], target: number): number[] {
  const indexMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;

    if (indexMap.has(complement)) {
      return [indexMap.get(complement) as number, i];
    }

    indexMap.set(current, i);
  }

  return [];
}
