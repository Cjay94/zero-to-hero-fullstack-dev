// if (condition) {...}
// else if (condition_2) {...}
// else {...}

// ------------------------

let a = 10,
    b = 20;
if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is less than b");
} else {
    console.log("a is equal to b");
}

// ------------------------

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// ------------------------

// Q1. Create variable name (password) store nothing.
// Q2. If password is equal to 8 print "Welcome"
// Q3. If password is less then or equal to 8 print "Password is too short"
// Q4. If password is greater then or equal to 8 print "Too Long Password" & "Password should be 8 characters"
// Q5. If all fails print "Please provide a password."


// ------------------------
//A1
let password;
//A2
if (password === 8) {
    console.log("Welcome");
    //A3
} else if (password <= 8) {
    console.log("Password is too short");
    //A4
} else if (password >= 8) {
    console.log("Too long password");
    console.log("Password should be 8 characters");
    //A5
} else {
    console.log("Please provide a password");
}
// -----------------------------




