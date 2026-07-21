let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

/*
The for...in loop iterates over the properties of an object.
Arrays in JavaScript are objects, and their properties are the string values of the element indices: '0', '1', '2', and so on.
Therefore, the expression i + 1 inside the if performs concatenation of i (a string) and the number 1,
resulting in strings like '01', '11', '21', etc.
Naturally, when strictly compared with 10 inside the if, this condition never evaluates to true.
That is precisely why this loop prints nothing.
Additionally, inside console.log(), you need to use arr, not a.
*/
for (i in arr) { if (i + 1 === 10) console.log(a[i]) }

/*
To fix the situation, you need to convert i to a number inside the if statement;
then i + 1 will perform numeric addition, and the comparison with 10 will work correctly.
Additionally, inside console.log(), you need to use arr, not a.
*/
for (i in arr) { if (Number(i) + 1 === 10) console.log(arr[i]) }