const a = ['d', 'e', 'a', 'b', 'c'];
const b = ['a', 'b', 'c'];

let result1 = undefined;
// break and continue with label
outer: for (let i = 0; i <= a.length - b.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i + j] != b[j]) continue outer;
    }
    result1 = i;
    break outer;
}
console.log(result1);

// without break and continue
let done = false;
let result2 = undefined;
for (let i = 0; !done && i <= a.length - b.length; i++) {
    let match = true;
    for (let j = 0; match && j < b.length; j++) {
        if (a[i + j] != b[j]) match = false;
    }

    if (match) {
        result2 = i;
        done = true;
    }          
}
console.log(result2);