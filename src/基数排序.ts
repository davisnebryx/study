function radixSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  // 获取最大值以确定最大位数
  const max = Math.max(...arr);
  
  // 获取最大值的位数
  let maxDigit = 0;
  let temp = max;
  while (temp > 0) {
    maxDigit++;
    temp = Math.floor(temp / 10);
  }

  // 从个位开始，对每一位进行计数排序
  let mod = 10;
  let dev = 1;
  
  for (let i = 0; i < maxDigit; i++) {
    // 创建10个桶（0-9）
    const buckets: number[][] = Array.from({ length: 10 }, () => []);
    
    // 将数字放入对应的桶中
    for (let j = 0; j < arr.length; j++) {
      const bucketIndex = Math.floor((arr[j] % mod) / dev);
      buckets[bucketIndex].push(arr[j]);
    }
    
    // 从桶中取出数字
    let pos = 0;
    for (let j = 0; j < buckets.length; j++) {
      for (let k = 0; k < buckets[j].length; k++) {
        arr[pos++] = buckets[j][k];
      }
    }
    
    mod *= 10;
    dev *= 10;
  }
  
  return arr;
}

var list = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("排序前:", list);
radixSort(list);
console.log("排序后:", list);
