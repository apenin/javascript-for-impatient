function values(f, low, high) {
    const arr = [];
    for (let value = low; value <= high; value++) {
        arr.push(f(value));
    }
    return arr;
}

console.log(values(x => x * x, 1, 10)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
