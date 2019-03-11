// Think about an object in non-programming sense, Like a pen. A pen can have different ink colors, be manufacturing by different people, have a different type and many other properties.

// Similarly, an object in programming is an entity that has properties. Each property defines a characteristic of the object. A property can be information associated with the object(the color of the pen) or action(the pen's ability to write).

// JavaScript and objects

// Like many other languages, JavaScript involves programming objects, so we can say its an object orientated languages. It provides a number of predefined objects while also letter you create your own.

// Creating an object

let pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};
console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);

// getting a value

// After creating the object, you can access the value of its properties using dot notation such as myObject.myProperty.

console.log("This is a " + pen.brand + " pen" + " the color of it's ink is " + pen.color + " and it is a " + pen.type + " pen." );

// let cake = {
//     flavor: "Red Velvet",
//     price: "R350",
//     layers: 1,
//     occassion: "For Russ's Birthday"
// };

// console.log(cake);
// console.log( cake.occassion + " I made him a " + cake.layers + " layered " + cake.flavor + " cake " + "at the price of " + cake.price + ".");


//     cake.occassion = "A wedding cake for Russ,";
//     cake.layers = 1 + 4;
// console.log(cake.occassion + " I made him a " + cake.layers + " layered " + cake.flavor + " cake " + "at the price of " + cake.price + ".");
     
// // Methods on Objects

// // we had to write lengthy console.log statements each time to show the cake description. There's a cleaner way to accomplish this.

// // Adding a method to an object

// // Describe a cake

// function describe(cake) {
//     var description = cake.occassion + " I made him a " + cake.layers + " layered " + cake.flavor + " cake " + "at the price of " + cake.price + ".";
//     return description;
// }

// console.log(describe(cake));

// Now for an alternative approach: creating a describe property that houses a method.

let cake = {
    flavor: "Red Velvet",
    price: "R350",
    layers: 1,
    occassion: "For Russ's Birthday",
    describe: function() {
        var description =  this.occassion + " I made him a " + this.layers + " layered " + this.flavor + " cake " + "at the price of " + this.price + ".";
        return description;
    }
};
console.log(cake.describe());

cake.occassion = "A wedding cake for Tabile, (he's actually single looking for a bride) but hey he has the cake ready,";
console.log(cake.describe());

// Example 1 

let party = {
    occassion: " Tabile's celebration of his single anniversary",
    venue: " Mavericks",
    theme: " All the single men",
    date: " 23 May 2019",
    time: " 20:00pm till late",
    describe: function() {
        var description = "Yo Guys I have arranged a party for." + this.occassion + " He has been single for some time now and we decided to throw him a party. The party will be at" + this.venue + ", the theme is" + this.theme + " at this date" + this. date + ", the party will start at" + this.time + ".";
        return description;
    }
};
console.log(party.describe());


