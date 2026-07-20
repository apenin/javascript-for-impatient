const numbers = [-1, 2, -3, 4, -5];

let max1 = -Infinity;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max1)
        max1 = numbers[i];
}
console.log("Max1 =", max1);

let max2 = -Infinity;
for (let value of numbers) {
    if (value > max2)
        max2 = value;
}
console.log("Max2 =", max2);

let max3 = -Infinity;
for (let key in numbers) {
    if (numbers[key] > max3)
        max3 = numbers[key];
}
console.log("Max3 =", max3);
