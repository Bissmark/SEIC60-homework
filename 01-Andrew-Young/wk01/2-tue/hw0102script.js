// SECTION 1

const age = 18
if (age < 19) {
    console.log("You're still a teenager!");
}

// SECTION 2

const a = 9
if (a % 2 === 0) {
    console.log("After running our calculations, the result is even.");
} else {
    console.log("After running our calculations, the result is odd.");
}

// SECTION 3

const b = 50
if (b <= 25) {
    console.log("bottom quartile");
} else if (b > 25 && b <= 50) {
    console.log("lower quartile");
} else if (b > 50 && b <= 75) {
    console.log("upper quartiler");
} else if (b > 75 && b <= 100) {
    console.log("top quartile");
}

// SECTION 4

const food =prompt ("What would you like to eat? steak, fruit salad, tofurkey or pork chops")

// const steak = "steak"
// const fruitSalad = "fruit salad"
// const tofurkey = "tofurkey"
// const porkChops = "pork chops"

if (food === "steak" || food === "pork chops") {
    alert("Vegans Beware");
} else if (food === "tofurkey" || food === "fruit salad") {
    alert("This cuisine is vegan friendly.")
//     }

// SECTION 5

const flowchart =prompt ("Does it move?")
if (flowchart === "yes") {
    const yesA = prompt ("Should it?");
    if (yesA === "yes") {
    alert ("No problem")
    } else {
        alert ("Use duct tape to fix your problem")
    }
} else {
    const noA = prompt ("Should it?")
    if (noA === "no") {
        alert ("No problem")
    } else {
        alert ("Use WD-40 to fix your problem")
    }
}

