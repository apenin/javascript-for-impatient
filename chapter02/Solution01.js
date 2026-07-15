// expression statement
// Node.js: 42, then undefined
// Browser console: undefined
console.log(6 * 7);

// variable declaration
// Node.js: undefined
// Browser console: undefined
let number = 42;

// a block statement containing at least one inner statement
// Node.js: undefined
// Browser console: undefined
{
    let number = 42;
}

// an empty block statement
// Node.js: {}
// Browser console: {}
{}

// a while, do, or for loop whose body executes at least once
// Node.js: 0 1 2 3 4 4
// Browser console: 4
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Node.js: 0 1 2 3 4 4
// Browser console: 4
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// Node.js: 0 1 2 3 4
// Browser console: undefined
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// a loop whose body is never executed
// Node.js: undefined
// Browser console: undefined
let k = 0;
while (k < 0) {
    console.log(k);
    k++;
}

// an if statement
// Node.js: Success undefined
// Browser console: undefined
let str = "Hello";
if (str === "Hello") {
    console.log("Success");
}

// a try statement that completes normally
// Node.js: 5 undefined
// Browser console: undefined
try {
    console.log(10 / 2);
} catch {
    console.log("Error!!!");
}

// a try statement in which the catch clause is executed
// Node.js: Error!!! undefined
// Browser console: undefined
try {
    console.log(unknownVariable);
} catch {
    console.log("Error!!!");
}