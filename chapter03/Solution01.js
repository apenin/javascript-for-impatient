/*
If an array is passed to the `indexOf` function, it returns the index of the first element of that array whose value matches `value`, 
or -1 if there is no such value in the array.

If an object is passed to the `indexOf` function, it returns the first key of the object that has the value `value`, 
or -1 if there is no such key.
*/
function indexOf(arr, value) {
    for (let i in arr) {
        if (arr[i] === value) return i;
    }
    return -1;
}

console.log(indexOf([1, 2, 3, 4, 5], 3)); // 2
console.log(indexOf([1, 2, 3, 4, 5], 10)); // -1

console.log(indexOf({ a: 1, b: 2, c: 3, d: 4, e: 5 }, 3)); // c
console.log(indexOf({ a: 1, b: 2, c: 3, d: 4, e: 5 }, 10)); // -1
