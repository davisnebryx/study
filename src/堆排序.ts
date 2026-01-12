function heapSort(arr) {
  const n = arr.length;

  // 构建最大堆（从最后一个非叶子节点开始）
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // 一个个从堆顶取出元素
  for (let i = n - 1; i > 0; i--) {
    // 将当前堆顶（最大值）移到数组末尾
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // 对剩余元素重新调整为最大堆
    heapify(arr, i, 0);
  }

  return arr;
}

/**
 * 调整堆，使以 i 为根的子树满足最大堆性质
 * @param arr - 数组
 * @param n - 堆的大小
 * @param i - 当前节点索引
 */
function heapify(arr, n, i) {
  let largest = i; // 初始化最大值为根节点
  const left = 2 * i + 1; // 左子节点
  const right = 2 * i + 2; // 右子节点

  // 如果左子节点大于根节点
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // 如果右子节点大于当前最大值
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // 如果最大值不是根节点，则交换并递归调整
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

// 测试
const testArr = [64, 34, 25, 12, 22, 11, 90];
console.log("排序前:", testArr);
console.log("排序后:", heapSort([...testArr]));
