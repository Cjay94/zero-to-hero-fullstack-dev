let firstName = "Adam";
let lastName = "Webster";
let fullName = firstName + lastName;
console.log(fullName) // AdamWebster

//************ STRING MANIPULATION **********

//1. CONCATENATION
// let fullName = firstName + " " + lastName // Adam Webster
// let fullName = firstName.concat(lastName); // Adam Webster

//2. APPEND
// firstName += " something else"  // Adam something else

//3. LENGTH
// console.log(firstName.length); // 4

//4. CASES
// console.log(firstName.toUpperCase()); // ADAM
// console.log(firstName.toLowerCase()); // adam

//5. SLICE
// console.log(fullName.slice(0, 3)); // Ada

//6. SPLIT & JOIN
// console.log(fullName.split("").join("-")); // A-d-a-m-W-e-b-s-t-e-r

//7. INCLUDES
// console.log(fullName.includes("Power")); // false
// console.log(fullName.includes("Adam")); // true

//8. TRIM
//console.log(fullName.trim()); //AdamWebster


// Q1. Create variable name (favActorFirstName) & store your fav Actor name.
// Q2. Create variable name (favActorLastName) & store the last name of (FA).
// Q3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
// Q4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// Q5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// Q6. Now append this message to the (message variable) `his best show is Silicon Valley`.
// Q7. Now Log your Message.

// A1
let favActorFirstName = "Robert"
// A2
let favActorLastName = "Downey"
// A3
const actorFullNamev1 = favActorFirstName.concat(favActorLastName) // RobertDowney
const actorFullNamev2 = favActorFirstName + " " + favActorLastName // Robert Downey

// A4
const uppercase = actorFullNamev2.toUpperCase() //ROBERT DOWNEY
// A5
let message = `My favorite actor is ${actorFullName}` // My favorite actor is Robert Downey
// A6
message += ' Im so glad he won an Oscar.'

// A7
console.log(message) // My favorite actor is Robert Downey Im so glad he won an Oscar.
