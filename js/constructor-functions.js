// // constuctor functions 

// // To create an object using constructor functions, we simply write a standalone function containing the init functionality that we want from our object. Instead of calling it init, this function will have the name of our object's "class."



// function Pastry(type, flavor, levels, price, occasion) {
//     this.type = type;
//     this.flavor = flavor;
//     this.levels = levels;
//     this.price = price;
//     this.occasion = occasion;

    
// }

// // instead of calling and the an init function, we'll simply do.

// // new Pastry(type, flavor, levels, price, occasion);

// // what about the other function that was defined by our pastry object though ? 
// // remember that our pastries had a "describe" function:

// // this is where the Prototype comes in again 

// // remember that the pastry object in the previous example served as the prototype for all the pastries we've crreated. All the functions, like init and describe, that we had defined on the pastry object, were automatically available on all pastries because we passed Pastry in to Object.create when we created them.

// // Using the constructor function is slightly different, though. We can't just add properties to our Pastry function, and expect them to be present on the instansiated instances of our class, because constructors aren't the same thing as the prototype of the objects they create.

// // Now that we're using a constructor function, we'll assign our describe function to the pastry prototype like this:

// Pastry.prototype.describe = function () {
//     var description = "The " + this.type + " is a " + this.flavor + " pastry, has a " + this.levels + " layer(s), and costs " + this.price + ", it is for " + this.occasion + ".";
//     return description; 
// }

// // Now, using constructor functions, we can intantiate our objects on just one line and have the same result:

// let muffin = new Pastry("muffin", "blueberry", 1, "R20", "breakfast");
// let koeksister = new Pastry("koeksister", "OG old school koeksister", 1, "R4", "breakfast");

// console.log(muffin.describe());
// console.log(koeksister.describe());

// var Intern = {
//     function(salary, duration, laptop) {
//         this.salary = salary;
//         this.duration = duration;
//         this.laptop = laptop; 
//         }
//     }

// Intern.prototype.describe = function() {
//     var description = "The salary for the internship would be " + this.salary + ". It is a " + this.duration + " internship." + "and we will be provided with a " + this.laptop + ".";
//     return description; 
// };

// var Intern = new Intern("R8000", "6 months", "Dell");
// console.log(Intern.describe());

function Takkies(type, brand, price, size, color){
    this.type = type;
    this.brand = brand;
    this.price = price;
    this.size = size;
    this.color = color;
}

Takkies.prototype.describe = function() {
    var description = "This is a" + this.brand + this.type + ". It goes for" + this.price + ". It is a size " + this.size + " and the color of the" + this.type + " is" + this.color + ".";
    return description;
}

var newBalance = new Takkies(" takkie", " New Balance", " R1200", 8, " red");
var adidas = new Takkies(" takkie", "n Adidas", " R1500", 7, " white" );

console.log(newBalance.describe());
console.log(adidas.describe());