// loops are repeated programs
// while and for loops

// while loop - are repeated code 

// console.log("start programme")
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);


console.log("start program");
let number = 1;
    while (number <= 100) {
        console.log(number);
        number ++;
    }
console.log("end program");

// for loop

console.log("start program");
for (var counter = 1; counter <= 5; counter++) {
    console.log(counter);
}
console.log("end program");

// ===== which loop should I use? ======= //

let letter = "";
while(letter !=="X") {
    letter = prompt("Type any letter or X to exit");
    console.log(letter);
}
