/**
 * 50. Pow(x, n)
 * 实现 pow(x, n) ，即计算 x 的整数 n 次幂函数
 * 
 * 时间复杂度: O(log n)
 * 空间复杂度: O(1)
 */

function myPow(x: number, n: number): number {
    if (n === 0) return 1;
    
    // 处理负指数：x^(-n) = 1/(x^n)
    let N = n;
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }
    
    // 快速幂算法（二进制幂）
    // 使用分治思想：x^n = (x^2)^(n/2) 当 n 是偶数
    //              x^n = x * (x^2)^((n-1)/2) 当 n 是奇数
    return quickPow(x, N);
}

function quickPow(x: number, n: number): number {
    if (n === 0) return 1;
    
    // 计算 x^(n/2)
    const half = quickPow(x, Math.floor(n / 2));
    
    if (n % 2 === 0) {
        // n 是偶数：x^n = (x^(n/2))^2
        return half * half;
    } else {
        // n 是奇数：x^n = x * (x^(n/2))^2
        return half * half * x;
    }
}

// 迭代版本（避免递归）
function myPowIterative(x: number, n: number): number {
    if (n === 0) return 1;
    
    let N = n;
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }
    
    let result = 1;
    let base = x;
    
    while (N > 0) {
        // 如果 N 的最后一位是 1，将结果乘以 base
        if (N % 2 === 1) {
            result *= base;
        }
        // base 平方，N 右移一位（相当于 N = N / 2）
        base *= base;
        N = Math.floor(N / 2);
    }
    
    return result;
}

// 测试用例
console.log('递归版本:');
console.log(myPow(2, 10));      // 1024.00000
console.log(myPow(2.1, 3));     // 9.26100
console.log(myPow(2, -2));      // 0.25000
console.log(myPow(1, 2147483647)); // 1
console.log(myPow(2, 0));       // 1

console.log('\n迭代版本:');
console.log(myPowIterative(2, 10));      // 1024.00000
console.log(myPowIterative(2.1, 3));     // 9.26100
console.log(myPowIterative(2, -2));      // 0.25000
console.log(myPowIterative(1, 2147483647)); // 1
console.log(myPowIterative(2, 0));       // 1
