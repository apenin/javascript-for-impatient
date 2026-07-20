// 1. Comparing with <

// undefined -> NaN, null -> 0
console.log(undefined < null); // false

// undefined -> NaN
console.log(undefined < 0); // false

// undefined -> NaN, '' -> 0 
console.log(undefined < ''); // false

// null -> 0
console.log(null < 0); // false

// null -> 0, '' -> 0
console.log(null < ''); // false

// '' -> 0
console.log(0 < ''); // false

// 2. Comparing with <=

// undefined -> NaN, null -> 0
console.log(undefined <= null); // false

// undefined -> NaN
console.log(undefined <= 0); // false

// undefined -> NaN, '' -> 0 
console.log(undefined <= ''); // false

// null -> 0
console.log(null <= 0); // true

// null -> 0, '' -> 0
console.log(null <= ''); // true

// '' -> 0
console.log(0 <= ''); // true

// 3. Comparing with ==

// undefined and null are loosely equal to each other and nothing else
console.log(undefined == null); // true

// undefined and null are loosely equal to each other and nothing else
console.log(undefined == 0); // false

// undefined and null are loosely equal to each other and nothing else 
console.log(undefined == ''); // false

// undefined and null are loosely equal to each other and nothing else
console.log(null == 0); // false

// undefined and null are loosely equal to each other and nothing else
console.log(null == ''); // false

// '' -> 0
console.log(0 == ''); // true