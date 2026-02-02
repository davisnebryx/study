function combSort(arr) {
  const n = arr.length;
  let gap = n;
  const shrink = 1.3;
  let swapped = true;

  while (gap > 1 || swapped) {
    gap = Math.floor(gap / shrink);
    if (gap < 1) gap = 1;

    swapped = false;
    for (let i = 0; i + gap < n; i++) {
      if (arr[i] > arr[i + gap]) {
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
        swapped = true;
      }
    }
  }

  return arr;
}

// 测试
const testArr = [64, 34, 25, 12, 22, 11, 90];
console.log("排序前:", testArr);
console.log("排序后:", combSort([...testArr]));
