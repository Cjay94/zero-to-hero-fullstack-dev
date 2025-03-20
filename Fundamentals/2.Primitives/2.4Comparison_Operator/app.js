// ************** RELATIONAL OPERATORS ***************
// > Greater Then
// < Less Then
// >= Greater Then or equal to
// <= Less Then or equal to

console.log(10 > 10);
console.log(10 < 10);
console.log(10 >= 10);
console.log(10 <= 10);

// ************** RELATIONAL OPERATORS ***************
// === strict equality (Type + Value)
// !== strict non-equality (Type + Value)
// == Lose equality (values)
// != Lose equality (values)

console.log(10 === 10);
console.log(10 !== 10);
console.log(10 == 10);
console.log(10 != 10);


// Q1. Create variable name (firstFavNumb) & store your favorite number.
// Q2. Create variable name (secondFavNumb) & store second fav Number.
// Q3. Check (firstFavNumb is greater then secondFavNumb)
// Q4. Check (firstFavNumb is less then secondFavNumb)
// Q5. Check (firstFavNumb is greater then & equal to secondFavNumb)
// Q6. Check (firstFavNumb is less then & equal to secondFavNumb)
// Q7. Check (firstFavNumb is equal to secondFavNumb) using strict equality operator.
// Q8. Check (firstFavNumb is equal to secondFavNumb) using loose equality operator.
// Q9. Check (firstFavNumb is not equal to secondFavNumb) using strict non-equality operator.
// Q10. Check is (firstFavNumb is not equal to secondFavNumb) using loose non-equality operator.

// A1
let firstFavNumb = 6;
// A2
const secondFavNumb = 24;
// A3
console.log(firstFavNumb > secondFavNumb) //false
// A4
console.log(firstFavNumb < secondFavNumb) //true
// A5
console.log(firstFavNumb >= secondFavNumb) //false
// A6
console.log(firstFavNumb <= secondFavNumb) //true
// A7
console.log(firstFavNumb === secondFavNumb) //false
// A8
console.log(firstFavNumb == secondFavNumb) //false
// A9
console.log(firstFavNumb !== secondFavNumb) //true
// A10
console.log(firstFavNumb != secondFavNumb) //true