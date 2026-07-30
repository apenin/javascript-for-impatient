// 1
for (let i = 1; i <= 10; i++)
    console.log(i);

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 2
for (let i = a.length - 1; i >= 0; i--)
    console.log(a[i]);

let i = a.length - 1;
while (i >= 0) {
    console.log(a[i]);
    i--;
}

// 3
for (let i = 0, j = a.length - 1; i < j; i++, j--) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

let i = 0;
let j = a.length - 1;
while (i < j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    i++;
    j--;
}

// 4
let arr = [, 2, , 4];
arr[9] = 100;
for (const element of arr)
    console.log(element);

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// 5
let greeting = 'Hello 🌐';
for (const c of greeting)
    console.log(c);

let i = 0;
while (i < greeting.length) {
    const codePoint = greeting.codePointAt(i);
    const ch = String.fromCodePoint(codePoint);
    console.log(ch);
    i += codePoint > 0xFFFF ? 2 : 1;
}

// 6
let obj = { name: 'Harry Smith', age: 42 };
for (const key in obj)
    console.log(`${key}: ${obj[key]}`);

const keys = Object.keys(obj);
let i = 0;
while (i < keys.length) {
    const key = keys[i];
    const value = obj[key];
    console.log(`${key}: ${value}`);
    i++;
}

// 7
let numbers = [1, 2, , 4];
numbers[99] = 100;
for (const i in numbers)
    console.log(`${i}: ${numbers[i]}`);

const indices = Object.keys(numbers);
let idx = 0;
while (idx < indices.length) {
    const i = indices[idx];
    console.log(`${i}: ${numbers[i]}`);
    idx++;
}