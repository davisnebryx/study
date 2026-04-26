function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const result: number[][] = [];
  const path: number[] = [];

  function backtrack(startIndex: number): void {
    result.push([...path]);

    for (let i = startIndex; i < nums.length; i++) {
      // 同一层递归中，跳过重复元素，避免生成重复子集
      if (i > startIndex && nums[i] === nums[i - 1]) {
        continue;
      }

      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  }

  backtrack(0);
  return result;
}
