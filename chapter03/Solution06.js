function f(a = 1, b = 2) {
    console.log(`a=${a}, b=${b}`);
}

// Arguments are always passed by value. However, calling `f(a = 5)` in strict mode results in an error: `ReferenceError: a is not defined`,
// because the variable `a` has not been declared beforehand. In non-strict mode, however, this code works,
// because in such a “by name” call, global variables `a` and `b` are created, and the result of such an assignment
// in the function call are the values that are assigned by position to the arguments `a` and `b` inside the function `f`.

// Default argument values are used
f(); // a=1, b=2

// `a` is passed by position, and the default value is used for `b`
f(a = 5); // a=5, b=2

// `a` and `b` are passed by position
f(a = 7, b = 10); // a=7, b=10

// The values of `a` and `b` are passed by position, and it does not matter that the variable names are used in the call
f(b = 10, a = 7); // a=10, b=7