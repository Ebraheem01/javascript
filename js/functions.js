// functions braaaaaaaaaaaaaaaaa

// functions are a group of instructions that performs a particular task

function sayHello() {
    console.log("Hello!");
}

console.log("Start of program");
sayHello();                                             //calling the function
console.log("End of program");

// Declaring a Function

// Creating a function is called a declaration

/* ===

// declaring a function called myFunction
function myFunction() {
    function actions
}
=== */

// The keyword return indicates that a return value will be given, which is specified immediately after the word.

// function sayHello() {
//     return "Hello!";
// }

// console.log("Start of program");
// let result = sayHello();
// console.log(result);
// console.log("End of program");

/* ===
// Declare myFunction 
function myFunction() {
    calculate return value
    // ...
    return returnValue
}

// Get return value from myFunction
var value = myFunction();
// ...

=== */

// function message() {
//     return "Good Morning!"
// }

// let result = message();
// console.log(result);


/* ===

if you try to retrieve the return value of a function that does not actually have one, you get the JavaScript value undefined. This isn't necessarily an error; it just means the function may perform certain operations without actually outputting anything specifically at the end

=== */

/* ===
function myFunction() {
    // no value returned in this function
}

var result = myFunction();

console.log(result); // Will be undefined

=== */

// A function that returns no value is sometimes called a procedure

// function sayHello(name) {
//     var message = "Hello" + name + "!";
//     return message;
// } 

// console.log(sayHello(" Groot"));

function sayHello(firstName, lastName) {
    var message = "Hello" + firstName + lastName + "!";
    return message
}

console.log(sayHello(" Thor", " Odinson"));

// strings are a sequence of characters with in quotations marks

console.log("Hello" + " there,\n" + "JavaScript is not Java!" .length);

let animal = "lion";
console.log(animal === "lion");

let upperCaseWord = animal.toUpperCase();
console.log(upperCaseWord);

let lowerCaseWord = "CAT".toLowerCase();
console.log(lowerCaseWord);

console.log(animal[2]);


