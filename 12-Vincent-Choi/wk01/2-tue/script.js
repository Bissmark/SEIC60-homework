//Section 1
const age = 21
if (age <= 19) {
    console.log("You'res still a teenage!")
}
//Section 2
const a = 10
if (a % 2 === 0) {
    console.log("After running our calculations, the result is even")
} else {
    console.log("After running our calculations, the result is odd")
}
//Section 3
const b = 7
if (b <= 25) {
    console.log("bottom quartile")
} else if (b >25 && b <=50) {
    console.log("lower quartile")
} else if (b >50 && b <=75) {
    console.log("upper quartile")
} else if (b >75 && b <=100) {
    console.log("top quartile")
}
//Section 4
const menuTonight = prompt ("On the menu tonight: Steak, fruit salad, tofurkey and pork chops.")
if (menuTonight === "Tofurkey") {
    console.log("This cuisine is vegan friendly.")
} else if (menuTonight === "fruit salad") {
    console.log ("This cuisine is vegan friendly.")
} else if (menuTonight === "Steak") {
    console.log("Vegans Beware!")
} else if (menuTonight === "pork chop") {
    console.log ("Vegans Beware!")
}
// //Section 5 
const Options = prompt ("Does it move?")
if (Options === "yes") {
    const Option2 = prompt ("Should it?")
    if (Option2 === "yes") {
        console.log("No problem")
    } else 
        console.log("Duck Tape")
}
if (Options === "no") {
    const Option3 = prompt ("Should it?")
    if (Option3 === "yes") {
        console.log("WD-40")
    } else 
        console.log("No problem")
}