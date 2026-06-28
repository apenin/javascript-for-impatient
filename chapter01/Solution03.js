// In JavaScript, as in Java/C++, the `%` operator returns the remainder, not the mathematical modulus. 
// The sign of the remainder always matches the sign of the dividend (the first operand). 
// This behavior differs from Python, where the sign of the remainder matches the sign of the divisor, 
// and the result is always non-negative when the divisor is positive.

console.log(11 % 2); // 1
console.log(-11 % 2); // -1
console.log(11 % -2); // 1
console.log(-11 % -2); // -1

console.log(20.2 % 2); // 0.2
console.log(-20.2 % 2); // -0.2
console.log(20.2 % -2); // 0.2
console.log(-20.2 % -2); // -0.2