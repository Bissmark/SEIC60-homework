//Section 1
let age = 19
if (age <= 19) {
    console.log("You're still a teenager!")
}

//Section 2
let a = 51
if (a%2 === 0) {
    console.log("After running our calculations, the result is even")
} else {
    console.log("After running our calculations, the result is odd")
}

//Section 3
let b = 76
if (b <= 25) {
    console.log("bottom quartile")
} else if (b <= 50) {
    console.log("lower quartile")
} else if (b <= 75) {
    console.log("upper quartile")
} else {
    console.log("top quartile")
}

// Section 4
let choice = prompt("On the menu tonight: Steak, fruit salad, tofurkey, and pork chops. What would you like to have?", "Steak/fruit salad/tofurkey/pork chops")
if (choice.toLowerCase() === "tofurkey" || choice.toLowerCase() === "fruit salad") {
    console.log("This cuisine is vegan friendly.")
} else {
    console.log("Vegans beware!")
}

//Section 5
if (confirm("Does it move? OK if yes; Cancel if no")) {
    if (confirm("Should it? OK if yes; Cancel if no")) {
        console.log("No problem")
    } else {
        console.log("Apply Duct Tape")
    }
} else {
    if (confirm("Should it? OK if yes; Cancel if no")) {
        console.log("Apply WD-40")
    } else {
        console.log("No problem")
    }
}
