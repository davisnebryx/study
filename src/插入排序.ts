function insertionSort(arr: number[]): number[] {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    // 将大于 key 的元素向后移动一位
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // 插入 key 到正确的位置
    arr[j + 1] = key;
  }

  return arr;
}

// 测试示例
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log("排序前:", testArray);
const sortedArray = insertionSort([...testArray]);
console.log("排序后:", sortedArray);
export { insertionSort };
