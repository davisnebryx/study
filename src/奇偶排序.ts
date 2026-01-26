/**
 * 奇偶排序 (Odd-Even Sort / Brick Sort)
 * 
 * 算法思想：
 * 奇偶排序是冒泡排序的一个变种，通过分别比较奇数位和偶数位，
 * 然后交替进行来提高排序效率，特别是在并行计算中效果显著。
 * 
 * 时间复杂度：O(n²)
 * 空间复杂度：O(1)
 * 稳定性：稳定
 */

/**
 * 奇偶排序实现
 * @param arr 待排序数组
 * @returns 排序后的数组
 */
export function oddEvenSort(arr: number[]): number[] {
  const n = arr.length;
  let sorted = false;

  while (!sorted) {
    sorted = true;

    // 奇数阶段：比较 (1,2), (3,4), (5,6), ...
    for (let i = 1; i < n - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }

    // 偶数阶段：比较 (0,1), (2,3), (4,5), ...
    for (let i = 0; i < n - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }

  return arr;
}

/**
 * 奇偶排序（降序）
 * @param arr 待排序数组
 * @returns 降序排序后的数组
 */
export function oddEvenSortDesc(arr: number[]): number[] {
  const n = arr.length;
  let sorted = false;

  while (!sorted) {
    sorted = true;

    // 奇数阶段：比较 (1,2), (3,4), (5,6), ...
    for (let i = 1; i < n - 1; i += 2) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }

    // 偶数阶段：比较 (0,1), (2,3), (4,5), ...
    for (let i = 0; i < n - 1; i += 2) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }

  return arr;
}

// 测试示例
if (require.main === module) {
  const testArray = [64, 25, 12, 22, 11, 90, 88];
  console.log('原始数组:', testArray);

  const sorted = oddEvenSort([...testArray]);
  console.log('升序排序:', sorted);

  const sortedDesc = oddEvenSortDesc([...testArray]);
  console.log('降序排序:', sortedDesc);
}
