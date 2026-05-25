function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // 在更短的数组上二分，保证复杂度为 O(log(min(m, n)))
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;
  const totalLeft = Math.floor((m + n + 1) / 2);

  let left = 0;
  let right = m;

  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    const j = totalLeft - i;

    const nums1LeftMax = i === 0 ? -Infinity : nums1[i - 1];
    const nums1RightMin = i === m ? Infinity : nums1[i];
    const nums2LeftMax = j === 0 ? -Infinity : nums2[j - 1];
    const nums2RightMin = j === n ? Infinity : nums2[j];

    if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
      if ((m + n) % 2 === 1) {
        return Math.max(nums1LeftMax, nums2LeftMax);
      }

      return (
        (Math.max(nums1LeftMax, nums2LeftMax) +
          Math.min(nums1RightMin, nums2RightMin)) /
        2
      );
    }

    if (nums1LeftMax > nums2RightMin) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }

  return 0;
}