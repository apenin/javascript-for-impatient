let i = 0;
let j = 0;
let found = false;

while (!found && i < arr.length) {
    while (!found && j < arr[i].length) {
        if (arr[i][j] < 0)
            found = true;
        else
            j++;
    }

    if (!found) {
        i++;
        j = 0;
    }
} 