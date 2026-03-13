function grayCode(n: number): number[] {
  const total = 1 << n;
  const result: number[] = [];

  for (let i = 0; i < total; i++) {
    result.push(i ^ (i >> 1));
  }

  return result;
}
