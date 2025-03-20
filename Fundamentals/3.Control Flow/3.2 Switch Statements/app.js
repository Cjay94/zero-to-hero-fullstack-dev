switch (expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
    // code block
}

let x = "0";

switch (x) {
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}

// -------------------------------------------------

let day = "monday";

switch (day) {
    case "monday":
        console.log("Today is monday");
        break;
    case "tuesday":
        console.log("Today is tuesday");
        break;
    case "wednesday":
        console.log("Today is wednesday");
        break;
    case "tuesday":
        console.log("Today is thursday");
        break;
    case "friday":
        console.log("Today is friday");
        break;
    case "saturday":
        console.log("Today is saturday");
        break;
    case "sunday":
        console.log("Today is sunday");
        break;
    default:
        console.log("Don't know what day is today!");
}

// -------------------------------------------------

// Q1. Create variable name (fruit) & store "banana".
// Q2. If case is "Banana" print "Banana is good!"
// Q3. If case is "Orange" print "I am not a fan of orange."
// Q4. If case is "Apple" print "How you like them apples?"
// Q5. default "I  have never heard of that fruit."


// A1
let fruit = "Banana"

// A2
switch (fruit) {
    case "Banana":
        console.log("Banana is so good");
        break;
    // A3
    case "Orange":
        console.log("I am not a fan of orange.");
        break;
    // A4
    case "Apple":
        console.log("How you like them apples?");
        break;
    // A5
    default:
        console.log("I have never heard of that fruit.");
}




