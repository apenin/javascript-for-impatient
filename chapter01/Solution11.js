const harry = { name: 'Harry Smith', age: 40, friends: [] };
const sally = { name: 'Sally Down', age: 37, friends: [] };
harry.friends.push(sally);
sally.friends.push(harry);

console.log(harry); // {name: 'Harry Smith', age: 40, friends: Array(1)}
console.log(sally); // {name: 'Sally Down', age: 37, friends: Array(1)}


// Uncaught TypeError: Converting circular structure to JSON
console.log(JSON.stringify(harry));
console.log(JSON.stringify(sally));
