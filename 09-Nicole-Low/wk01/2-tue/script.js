// SECTION 1

const age = 21

if (age <= 19) {
    console.log("You're still a teenager!")
}

//--------------------------------------
// SECTION 2

const a = 24

if (a % 2 === 0) {
    console.log("After running our calculations, the result is even")
} else {
    console.log("After running our calculations, the result is odd")
}

//--------------------------------------
// SECTION 3

// assign a random number between 0 and 100 (inclusive)
const b = Math.floor(Math.random() * 101)
console.log(`The random number generated is ${b}`)

if (b <= 25) {
    console.log("bottom quartile")
} else if (b > 25 && b <= 50) {
    console.log("lower quartile")
} else if (b > 50 && b <= 75) {
    console.log("upper quartile")
} else if (b > 75 && b <= 100) {
    console.log("top quartile")
}

//--------------------------------------
// SECTION 4

const userChoice = prompt("What would you like to order?")

if (userChoice !== "steak" && userChoice !== "pork chops") {
    console.log("This cuisine is vegan friendly.")
} else if (userChoice === "steak" || userChoice ==="pork chops") {
    console.log("Vegans beware!")
}

//--------------------------------------
// SECTION 5

const canMove = true
const shoudMove = false

if (canMove) {
    if (shoudMove) {
        console.log("No problem")
    } else {
        console.log("Use some tape")
    }
} else if (canMove === false) {
    if (shoudMove) {
        console.log("Use WD-40")
    } else {
        console.log("No problem")
    }
}