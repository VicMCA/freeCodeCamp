// This is a comment, and this is a sample file

console.log("hi hi");
// use console.log() to print things to the terminal

/* Now this is
a multiline comment 

1st rule: In JavaScript, all statements must end with a semi-colon [ ; ]
This is more a "good practice" rule than a hard coded rule

Data types: undefined [an undefined valie], null [a value that returns
nothing], string, bool, symbol [immutable primitive unique value],
number, object [basically a python object, including dictionary] 

As in most languages, names of things are case sensitive. JavaScript
is more often used with camelCase notation. */

// creating variables

var myName = "Victor";
// creates a string variable called myName, value is "Victor"

myName = 0;
// value of myName reassigned to 0, type also changed to number

myName = "Marxi";
// value of myName changed to "Marxi"

let surname = "none";
// let is another way to declare a variable

const pi = 3.14;
// creates a variable whose value must not change

/* var variables can be used throughout the whole program
let variables have its scope limited to where you use them 
const variables must stay the same 

You may also declare the variable without assigning a value to it
and then assign that value later. It stays undefined until then */

var s;
/* variable "s" initialized without any type or value assigned to it,
so it starts as a variable of the "undefined" type. It can later change
when we assign a value to it */

console.log(typeof(s));

// typeof() function used to exhibit type of data types

console.log(`printing stuff like "${myName}"`);
// Use `to insert ${variables and stuff}` inside strings [back-ticks]

// Sums and other math opperations are simple just like in Python
var sum = 8 + 2;                // this is a sum
var sub = 8 - 2;                // this is a subtraction
var mult = 8 * 2;               // this is a multiplication
var div = 5 / 2;                // this is a division
var divround = (14 / 3) | 0;    // this is a floored division
var expo = 8 ** 2;              // this is an exponentiation
var root = 25 ** (1/2);         // this is a rooting
var mod = 15 % 4;               // this returns the modulus

console.log(`resultados: ${sum}, ${sub}, ${mult}, ${div}, \
 ${divround}, ${expo}, ${root}`)