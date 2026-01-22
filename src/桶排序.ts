/**
 * 桶排序（Bucket Sort）
 * 适用于数据分布较均匀的场景，通过分桶并在桶内使用插入排序提升效率。
 * 时间复杂度：平均 O(n + k)，最坏 O(n²)；空间复杂度：O(n + k)
 * @param arr 待排序的数字数组
 * @param bucketSize 每个桶的范围大小，默认为 5
 */
export function bucketSort(arr: number[], bucketSize = 5): number[] {
  if (arr.length <= 1) return [...arr];

  const size = bucketSize > 0 ? bucketSize : 5;
  let min = arr[0];
  let max = arr[0];

  // 找到最大值和最小值，确定桶的数量
  for (const num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  const bucketCount = Math.floor((max - min) / size) + 1;
  const buckets: number[][] = Array.from({ length: bucketCount }, () => []);

  // 将元素分配到对应的桶
  for (const num of arr) {
    const index = Math.floor((num - min) / size);
    buckets[index].push(num);
  }

  const sorted: number[] = [];

  // 对每个桶执行插入排序并收集结果
  for (const bucket of buckets) {
    if (bucket.length === 0) continue;

    for (let i = 1; i < bucket.length; i++) {
      const key = bucket[i];
      let j = i - 1;
      while (j >= 0 && bucket[j] > key) {
        bucket[j + 1] = bucket[j];
        j--;
      }
      bucket[j + 1] = key;
    }

    sorted.push(...bucket);
  }

  return sorted;
}
