let a = 4;
let b = 5;

// using temp
let temp;

temp = a;
a = b;
b = temp;

console.log("Value of a", a)
console.log("Value of b", b)

// without using temp

// object destructuring

let x = 5;
let y = 10;

[x, y] = [y, x]

console.log(`value of x: ${x}, value of y: ${y}`)