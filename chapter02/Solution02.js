/* 
The problem is that JavaScript's automatic semicolon insertion mechanism (ASI) 
does not insert a semicolon before else, because else is not a "forbidden" continuation of an expression. 
As a result, the parser tries to read it as a single invalid expression and throws a syntax error. 
The solution is to put a ; after the first console.log.
*/
let x = 0;
if (x === 0) console.log('zero'); else console.log('nonzero')