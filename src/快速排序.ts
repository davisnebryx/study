function quickSort(arr, left, right) {
  if (left >= right) return;

  let i = left,
    j = right;
  const pivot = arr[left];

  while (i < j) {
    while (i < j && arr[j] >= pivot) j--;
    while (i < j && arr[i] <= pivot) i++;
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[left], arr[i]] = [arr[i], arr[left]];

  quickSort(arr, left, i - 1);
  quickSort(arr, i + 1, right);
}

var list = [9, 5, 6, 3, 5, 4, 12];
quickSort(list, 0, 6);
console.log(list);
