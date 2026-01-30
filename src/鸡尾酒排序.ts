function cocktailSort(arr) {
  const n = arr.length;
  let left = 0;
  let right = n - 1;
  let swapped = true;

  while (left < right && swapped) {
    swapped = false;

    // 从左向右冒泡，将最大值移到右端
    for (let i = left; i < right; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    right--;

    // 如果没有发生交换，说明已经有序
    if (!swapped) break;

    swapped = false;

    // 从右向左冒泡，将最小值移到左端
    for (let i = right; i > left; i--) {
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        swapped = true;
      }
    }
    left++;
  }

  return arr;
}

// 测试
const testArr = [64, 34, 25, 12, 22, 11, 90];
console.log("排序前:", testArr);
console.log("排序后:", cocktailSort([...testArr]));
