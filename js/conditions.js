// javascript conditions
// if (condition) {
    // statements executed when the condition is true
// }

// the condition is always placed in paranthesis

// conditions

// a condition is an expression that evaluates whether something is true or false. When the value of a condition is true, we say that condition is satisfied.

// alternative conditions 
// you'll often want to have your code execute 

// operators
// == 	equal to 		 	
// === 	equal value and equal  		
// != 	not equal  	
// !== 	not equal value or not equal 			
// > 	greater than 	
// < 	less than	
// >= 	greater than or equal to 	
// <= 	less than or equal to 

// boolean values 
// true false
// yes no
// 1 0


// var number = prompt("Enter a number");
// if (number > 0) {
//     console.log(number + " is positive");
// } else if (number < 0) {
//     console.log(number + " is negative");
// } else {
//     console.log(number + " is zero");
// }

// "And" operator

// suppose you want to check if a number is between 0 and 100. You're essentially checking if it's greater than or equal to 0 and less thaan or equal tp 100.

// if (number >= 0 && number <= 100) {
//     console.log(number + " is between 0 and 100, both included");
// }

// The && operator("and") can apply to both types of boolean values. True will only be the result of the statement if both conditions are true.

// write a program that helps people decide what to wear based on the weather using if/else

// var weather = prompt("What's the weather like today?"); 
//     if (weather == "sunny") {
//         console.log("If it is " + weather + " outside shorts , vest and flip flops would be appropriate for this type of weather." ); 
// }   else if (weather == "windy") {
//         console.log("If it is " + weather + " outside a long trousers or a track suit pants, a pair of boots or sneakers and a long sleeved top would be perfect for this type of weather and always carry a jacket along just in case.");
// }   else if (weather == "rainy") {
//         console.log("If it is " + weather + " outside wear a full track suit with a pair of boots and always carry an extra jacket");
// }   else {
//         console.log("Not a valid weather condition");
// }

let weather = prompt("What's the weather like today? Sunny, Windy, Cloudy, Rainy, Stormy or Snowy?");
    switch (weather) {
        case "Sunny": 
            console.log("Shorts, vest and flip flops.");
        break;
            
        case "Windy", "Cloudy":
            console.log("Windbreaker, long Trousers and sneakers.");
        break;
    
        case "Rainy" , "Stormy":
            console.log("Track suit and boots.");
        break;
            
        case "Snowy":
            console.log("Netflix and chill.");
        break;
            
        default:
            console.log("Not a valid weather condition");
            alert("Try Again");
        break;
    }
