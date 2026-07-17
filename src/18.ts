function myAtoi(s: string): number {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  let index = 0;
  const length = s.length;

  while (index < length && s[index] === " ") {
    index++;
  }

  let sign = 1;

  if (index < length && (s[index] === "+" || s[index] === "-")) {
    sign = s[index] === "-" ? -1 : 1;
    index++;
  }

  while (index < length && s[index] === "0") {
    index++;
  }

  let result = 0;

  while (index < length) {
    const charCode = s.charCodeAt(index);

    if (charCode < 48 || charCode > 57) {
      break;
    }

    const digit = charCode - 48;

    if (sign === 1) {
      if (result > Math.floor((INT_MAX - digit) / 10)) {
        return INT_MAX;
      }
    } else {
      if (result > Math.floor((Math.abs(INT_MIN) - digit) / 10)) {
        return INT_MIN;
      }
    }

    result = result * 10 + digit;
    index++;
  }

  return sign * result;
}
