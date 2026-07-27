let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 3;
let k = 2;

switch (n) {
    case 7: arr[k + 6] = 0;
    case 6: arr[k + 5] = 0;
    case 5: arr[k + 4] = 0;
    case 4: arr[k + 3] = 0;
    case 3: arr[k + 2] = 0;
    case 2: arr[k + 1] = 0;
    case 1: arr[k] = 0;
    case 0: break;
    default: console.log('Invalid n value (must be 0–7)');
}

console.log(arr); // [1, 2, 0, 0, 0, 6, 7, 8, 9, 10]