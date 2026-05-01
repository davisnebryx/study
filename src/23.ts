export function maxCoins(nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;

  const arr: number[] = new Array(n + 2);
  arr[0] = 1;
  for (let i = 0; i < n; i++) arr[i + 1] = nums[i];
  arr[n + 1] = 1;

  const dp: number[][] = Array.from({ length: n + 2 }, () => new Array(n + 2).fill(0));

  for (let len = 1; len <= n; len++) {
    for (let left = 1; left <= n - len + 1; left++) {
      const right = left + len - 1;
      for (let k = left; k <= right; k++) {
        const val = dp[left][k - 1] + arr[left - 1] * arr[k] * arr[right + 1] + dp[k + 1][right];
        if (val > dp[left][right]) dp[left][right] = val;
      }
    }
  }

  return dp[1][n];
}

export default maxCoins;
