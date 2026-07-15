/*
Tokens that can be a valid continuation of the given statement will prevent automatic semicolon insertion. 
These include, for example, the left parenthesis ( (interpreted as a possible function call a()), 
the left square bracket [ (interpreted as possible array element access on a). 
The dot operator . can also produce a similar effect, since it can be seen as property access or a method call on a. 
Arithmetic operators and comparison operators cause ASI not to trigger. All of these can occur in real programs.
*/
let x = a