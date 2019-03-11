// creat a game that has characters, players and enemies

// a player can attack an opponent vice versa

// if attacked a character sees their life life points decreased from the force of the attack 

// if a characters number of points reaches the zero the game ends an eliminates the oppponent

// XP points when you win

// firstly create a prototype being the character

// parameters name, health, force 

// attack 

// use everything we learnt

// THE MAIN PLAYER

var mainPlayer = prompt("Welcome, Please state your name.");
    message = ("Welcome to Infinity War " + mainPlayer + ". The fate of the world lies in your hands will you be able to defeat the mighty Thanos!");

console.log(message);

    weapons = {
    init: function(type, power, hitPoints, finisher) {
        this.type = type;
        this.power = power;
        this.hitPoints = hitPoints;
        this.finisher = finisher;
    },

    describe: function() {
        var description = "The " + this.type + " is a " + this.occassion + " pastry, has a " + this.layers + " layer(s), and costs " + this.price + ".";
        return description; 
    }
