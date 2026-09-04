function average(...args) {
    let sum = 0.0;
    for (const value of args) {
        sum += value;
    }
    return (args.length !== 0) ? sum / args.length : undefined;
}

console.log(average()); // undefined
console.log(average(1)); // 1
console.log(average(1, 2)); // 1.5
console.log(average(1, 2, 3)); // 2