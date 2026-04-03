function searchRange(nums: number[], target: number): number[] {
  const left = lowerBound(nums, target);

  if (left === nums.length || nums[left] !== target) {
    return [-1, -1];
  }

  const right = lowerBound(nums, target + 1) - 1;
  return [left, right];
}

function lowerBound(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
