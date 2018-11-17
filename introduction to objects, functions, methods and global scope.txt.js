console.log("Welcome to the program.") // Code that is written within the main/global scope of a program is executed automatically
var hotel = {
    name: "CareerDevs Hotel",

    sousChef: function(param1, param2) { // this is a method, parameters are optional
    // a method is a function within an object
    // lines of javascript code
    // more lines of code
    console.log("welcome to the method") // Local scope to the method and also local to the object
    }
}

console.log("welcome to the middle of the program.")

function sousChef(param1, param2) { // this is a function
    // lines of javascript code
    // more lines of code
    console.log("welcome to the Function") // Local scope to the function
}

console.log("Welcome to the END of the program.");
