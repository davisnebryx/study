/**
 * 选择排序 (Selection Sort)
 * 
 * 算法思想：
 * 每次从未排序部分选择最小（或最大）的元素，放到已排序部分的末尾
 * 
 * 时间复杂度：O(n²)
 * 空间复杂度：O(1)
 * 稳定性：不稳定
 */

/**
 * 选择排序实现
 * @param arr 待排序数组
 * @returns 排序后的数组
 */
export function selectionSort(arr: number[]): number[] {
  const n = arr.length;
  
  // 遍历数组
  for (let i = 0; i < n - 1; i++) {
    // 假设当前位置为最小值
    let minIndex = i;
    
    // 在未排序部分找到最小值的索引
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    // 如果最小值不在当前位置，则交换
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}

/**
 * 选择排序（降序）
 * @param arr 待排序数组
 * @returns 降序排序后的数组
 */
export function selectionSortDesc(arr: number[]): number[] {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let maxIndex = i;
    
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    
    if (maxIndex !== i) {
      [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    }
  }
  
  return arr;
}

// 测试示例
if (require.main === module) {
  const testArray = [64, 25, 12, 22, 11];
  console.log('原始数组:', testArray);
  
  const sorted = selectionSort([...testArray]);
  console.log('升序排序:', sorted);
  
  const sortedDesc = selectionSortDesc([...testArray]);
  console.log('降序排序:', sortedDesc);
}
