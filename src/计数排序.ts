function countingSort(arr) {
  if (arr.length === 0) return arr;

  // 找到数组中的最大值和最小值
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  // 创建计数数组
  const range = max - min + 1;
  const count = new Array(range).fill(0);

  // 统计每个元素出现的次数
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  // 将统计结果还原到原数组
  let index = 0;
  for (let i = 0; i < range; i++) {
    while (count[i] > 0) {
      arr[index++] = i + min;
      count[i]--;
    }
  }

  return arr;
}

var list = [9, 5, 6, 3, 5, 4, 12];
countingSort(list);
console.log(list);
