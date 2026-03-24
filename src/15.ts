/**
 * 给定整数数组 nums，找出所有满足 nums[i] + nums[j] + nums[k] == 0 的不重复三元组
 * LeetCode 15: 3Sum
 *
 * 时间复杂度: O(n²)
 * 空间复杂度: O(1) 不计算返回结果的空间
 *
 * 解题思路：
 * 1. 先对数组排序
 * 2. 对每个元素作为第一个数，使用双指针技术找两个数使其和等于 -nums[i]
 * 3. 通过跳过重复元素来避免结果中出现重复三元组
 */

function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  // 边界情况
  if (nums.length < 3) {
    return result;
  }

  // 1. 排序数组
  nums.sort((a, b) => a - b);

  // 2. 遍历数组，固定第一个数
  for (let i = 0; i < nums.length - 2; i++) {
    const current = nums[i];

    // 如果第一个数大于 0，则不可能找到和为 0 的三元组
    if (current > 0) {
      break;
    }

    // 跳过重复的第一个数
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // 3. 使用双指针找两个数，使得三个数之和为 0
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = current + nums[left] + nums[right];

      if (sum === 0) {
        result.push([current, nums[left], nums[right]]);

        // 跳过重复的左指针值
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        // 跳过重复的右指针值
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        // 和太小，需要增加
        left++;
      } else {
        // 和太大，需要减少
        right--;
      }
    }
  }

  return result;
}

// 测试用例
console.log("测试 1:");
const nums1 = [-1, 0, 1, 2, -1, -4];
console.log(`输入: [${nums1}]`);
console.log("输出:", threeSum(nums1));
console.log("预期: [[-1,-1,2],[-1,0,1]]");

console.log("\n测试 2:");
const nums2 = [0, 0, 0, 0];
console.log(`输入: [${nums2}]`);
console.log("输出:", threeSum(nums2));
console.log("预期: [[0,0,0]]");

console.log("\n测试 3:");
const nums3 = [-2, 0, 1, 1, 2];
console.log(`输入: [${nums3}]`);
console.log("输出:", threeSum(nums3));
console.log("预期: [[-2,0,2],[-2,1,1]]");

console.log("\n测试 4:");
const nums4 = [-1, -2, -3];
console.log(`输入: [${nums4}]`);
console.log("输出:", threeSum(nums4));
console.log("预期: []");

export { threeSum };
