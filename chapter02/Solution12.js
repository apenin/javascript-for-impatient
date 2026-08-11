let found = false;
for (let i = 0; i < arr.length && !found; i++) {
    for (let j = 0; j < arr[i].length && !found; j++) {
        if (arr[i][j] < 0) found = true;
    }
}