function shellSort(arr) {
  const n = arr.length;

  // 初始化间隔为数组长度的一半，然后逐渐减小间隔
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 对每个间隔进行插入排序
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;

      // 在间隔为 gap 的子数组中进行插入排序
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }
  }

  return arr;
}
