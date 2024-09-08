//console.log(`hello`);
//window.alert("Get lost bitch");
// This is a comment.
/*
multiline
comment
bitch.
*/
//document.getElementById("myH1").textContent = 'Hello Javascript.';
//document.getElementById("myP").textContent = 'Fuck It.';

/* 
VARIABLE
*/

/*
let x = 100;
console.log(x);

let y;
y = 200;
console.log(y);
*/

// To print variables with sentence.

//console.log(`So you're the bitch number ${x}th ain't you?`);

// Data types.

/*
let age = 20;
let master = "me"
let isHuman = false;
let percentage = 92.5;
let grade = "A+"
let fullName = "Steven Smith"

console.log(typeof age);
console.log(typeof master);
console.log(typeof isHuman);
console.log(typeof percentage);
console.log(typeof grade);
console.log(typeof fullName);
*/

/*
ARITHMETIC OPERATORS (+,-,*,/,**,%)
*/

//let x = 5;
//let y = 2;

/*
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x**y); 
console.log(x%y);  
*/


/*
x = x+1;

console.log(x);

y += 2;

console.log(y);
*/

// Increment and Decrement & Operator precedence (Use bodmas rule while solving multiple operations)

/*
x++;

console.log(x);

let result = 1*2 + 7 - 2/4**2 +(5-2);

console.log(result);
*/

/*
HOW TO ACCEPT USER INPUT

1. Window Prompt.
2. HTML Textbox.
*/

/*

let username;
username = window.prompt("What's Your Name Bitch ?");
console.log(username);


let username;

document.getElementById("myText").onclick = function(){
    username = document.getElementById("userinput").value;
    console.log(username);
}

*/

// Conversion of data types

//let x = "bitch";

//console.log(x, typeof x);

/*if we change the string data type to number it will show NaN ( not a number )
if we change to boolean it will be true as long as the variable has some value
if we change a number data type to string then data will be the same just the number data type will change to string */

/*
let y = 4;

y = String(y);

console.log(y, typeof y);
*/

/*Constant variables ( making the const variable name upper case is a good practise
 but its only done for primitive data types such as number and booleans not for strings.  )*/

/*
const PI = 3.14159;
let radius;
let circumference;
let area;

radius = window.prompt("Enter the Radius of the circle in cm.");
radius = Number(radius);
circumference = 2*PI*radius;
area = PI*radius*radius;
console.log(`The circumference of the circle of radius ${radius}cm is ${circumference}cm`);
console.log(`The area of the circle of radius ${radius}cm is ${area}square cm.`);
*/


