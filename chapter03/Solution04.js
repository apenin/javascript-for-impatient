const arr1 = [1, 3, 2, 4, 6, 5];
arr1.sort((x, y) => y - x);
console.log(arr1); // [6, 5, 4, 3, 2, 1]

const arr2 = [{ name: 'Alex', age: 32 }, { name: 'Peter', age: 20 }, { name: 'Mary', age: 15 }];
arr2.sort((x, y) => x.age - y.age);
arr2.forEach(person => console.log(person.name)); // Mary Peter Alex

const arr3 = ["333", "1", "22", "55555", "4444"];
arr3.sort((x, y) => x.length - y.length);
console.log(arr3); // ['1', '22', '333', '4444', '55555']
