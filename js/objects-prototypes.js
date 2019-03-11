// objects and prototypes

// in addition to its special properties, every Javascript project has an enternal property called a proptype. This is known as reference to another object. When trying to access a property that does not exists in an pbject Javascript tries to find this property in the prototype of this object.

var anObject = {
    a: 2
};

// Create anotherObject using anObject as a prototype

var anotherObject = Object.create(anObject);

console.log(anotherObject.a);

// if the prototype of an object does not have a desired property, then research continues in its own prototype until we get to the end of prototype chain. If the prototype was found in objects, access returns the value undefined.

console.log(anotherObject.b);

// This type of relationship between JavaScript pbjects is called delegation: an object delegates part of its operation to its prototype.

var Pastry = {
    type: "",
    flavor: "",
    layers: 0,
    price: "",
    occassion: "",

    // describe the pastry

    describe: function() {
        var description = "The " + this.type + " is a " + this.occassion + " pastry, has a " + this.layers + " layer(s), and costs " + this.price + ".";
        return description; 
    }
};

var muffin = Object.create(Pastry);
muffin.type = "muffin";
muffin.flavor = "blueberry";
muffin.layers = 1;
muffin.price = "R20";
muffin.occassion = "breakfast";

var koeksister = Object.create(Pastry);
koeksister.type = "koeksister";
koeksister.flavor = "OG old school Koeksister";
koeksister.layers = 1;
koeksister.price = "R4";
koeksister.occassion = "breakfast";

console.log(muffin.describe());
console.log(koeksister.describe());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////INITIALIZATION//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Pastry = {
    init: function(type, flavor, layers, price, occassion) {
        this.type = type;
        this.flavor = flavor;
        this.layers = layers;
        this.price = price;
        this.occassion = occassion;
    },

    // describe the pastry 
    describe: function() {
        var description = "The " + this.type + " is a " + this.occassion + " pastry, has a " + this.layers + " layer(s), and costs " + this.price + ".";
        return description; 
    },

    bake: function() {
        var baked = "The " + this.type + " is placed in an oven for 7 minutes. It's done!"
        return baked;
    },

    eat: function() {
        var eat = "The " + this.type + " can be eaten by removing the wrapper and just bloody eat the thing man!"
        return eat;
    }
};

var muffin = Object.create(Pastry);
muffin.init("muffin", "blueberry", 1, "R20", "breakfast");

var koeksister = Object.create(Pastry);
koeksister.init("koeksister", "OG old school koeksister", 1, "R4", "breakfast");

console.log(muffin.bake());
console.log(muffin.eat());
console.log(muffin.describe());
console.log(koeksister.describe());

// the method init() takes the intitial property of the pastry as parameters. the pastry creation code is therefore reduced to only 2 steps:

// the actual creation, with the pastry object as a prototype,

// the initialization of its properties, using the function init() on the Pastry Object

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





