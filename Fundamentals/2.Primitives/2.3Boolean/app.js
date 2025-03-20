// Boolean --> true | false

//----Falsy values----
// false
// null
// undefined
// 0
// -0
// NaN
// '', "", ``, (empty strings)

let isLoggedIn = true;
let numbers = 10;
console.log(numbers + undefined);

// Q1. Create Variable name (isJsProgrammingLanguage) & store true as a value.
// Q2. Create variable name (isJsHard) & store false as a value.
// Q3. Create variable name (favNumb) & store your favorite number inside.
// Q4. Now Add favNumber with the value of undefined.

// A1
const isJsProgrammingLanguage = true;
// A2
let isJsHard = false;
// A3
const favNumb = 6;
// A4
console.log(favNumb + undefined) // NaN
