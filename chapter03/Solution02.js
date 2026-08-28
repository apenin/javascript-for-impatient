function indexOf(arr, value) {
    let found = -1;
    for (let i in arr) {
        if (arr[i] === value) {
            found = i;
            break;
        }
    }

    return found;
}

console.log(indexOf([1, 2, 3, 4, 5], 3)); // 2
console.log(indexOf([1, 2, 3, 4, 5], 10)); // -1
