/**
 * 插入排序
 * 时间复杂度：O(n²)
 * 空间复杂度：O(1)
 * 稳定性：稳定
 */

/**
 * 插入排序函数
 * @param arr 待排序的数组
 * @returns 排序后的数组
 */
export function insertionSort(arr: number[]): number[] {
  const result = [...arr];
  const n = result.length;

  // 从第二个元素开始，逐个插入到已排序的序列中
  for (let i = 1; i < n; i++) {
    const key = result[i];
    let j = i - 1;

    // 将大于 key 的元素向后移动
    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j];
      j--;
    }

    // 插入 key 到正确的位置
    result[j + 1] = key;
  }

  return result;
}

// 测试示例
if (require.main === module) {
  const testArray = [64, 34, 25, 12, 22, 11, 90];
  console.log('原始数组:', testArray);
  console.log('排序后:', insertionSort(testArray));

  const testArray2 = [5, 2, 4, 6, 1, 3];
  console.log('\n原始数组:', testArray2);
  console.log('排序后:', insertionSort(testArray2));
}
