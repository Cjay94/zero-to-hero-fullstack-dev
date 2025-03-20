let amount = "320";
let money = 900;
let floatValue = "199.5";

// - Convert string to number
amount = parseInt(amount); // 320
amount = +amount; // 320
amount = Number(amount) // 320

// - Convert number to string
money = money.toString(); // "900"
money = String(money); // "900"

// - Change string to decimal
floatValue = parseFloat(floatValue); //199.5

console.log(floatValue);