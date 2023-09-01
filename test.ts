let a = 101;
let b = 100;
console.log(a > b);
console.log(a < b);
console.log(a != b);
console.log(a == b);
//Tests using "and" and "or" operators
let num1 = 34;
let num2 = 23;
// IN AND OPERATOR BOTH CONDITION MUST BE TRUE SO THEN IT WILL GIVE TRUE
console.log(num1 > num2 && num2 < num1);
console.log(num1 > num2 && num2 > num1);
// IF ONE OF THE CONDION IS TRUE SO IT WILL GIVE TRUE
console.log(num1 > num2 || num2 > num1);
console.log(num1 < num2 || num2 > num1);
let cars = ["HONDA", "CIVIC", "VITZ", "AQUA"];
// Test whether an item is in a array
console.log(cars.includes("VITZ"));
// Test whether an item is not in a array
console.log(cars.includes("BUGHATI"));