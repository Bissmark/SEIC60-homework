// Excercise 1
const age = 12

if (age <= 19) {
    console.log("You're still a teenager!")
}

// Excercise 2
let a = 14

if (a % 0) {
    console.log("After running our calculations, the result is even")
} else {console.log("After running our calculations, the result is odd")}

// Excercise 3
let b = Math.floor(Math.random() * 100);

if (b <= 25) {
    console.log("Bottom quartile")
} else if (b > 25 || b <= 50) {
        console.log("lower quartile")
} else if (b > 50 || b <= 75) {
    console.log("Upper  quartile")
} else {console.log("top quartile")}

// Excercise 4
const steak = "notVega"
const fruitSalad = "vegan" 
const tofurkey = "vegan"
const porkChops = "notVegan"

let choice = prompt("What's your menu choice?");

if (choice === "vegan") {
    alert("This cuisine is vegan friendly!")
} else {console.log("Vegans beware!")}

// Excercise 5
let itMoves = true
let itShouldMove = false

if (itMoves === true) {
    if(itShouldMove === true) {
        console.log("No problem!")
    } else {console.log("Duct Tape!")}
} else if (itMoves === false) {
    if(itShouldMove === true) {
        console.log("WD-40!")
    } else {console.log("No problem!")}
}