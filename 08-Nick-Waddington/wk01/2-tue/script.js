//age

const age = (29)

if (age <= 19) {
    console.log("You're still a teenager!");
}

//decimal check

const a = (5)

if (a%2 === 0){
    console.log("After running our calculations, the result is even");
}else {
    console.log("After running our calculations, the result is odd");
}

//ranking

const b = (90)

if (b <= 25) {
    console.log("bottom quartile");
} else if (b > 225 && b <= 50){
    console.log("lower quartile");
} else if (b > 50 && b <= 75){
    console.log("upper quartile");
} else {
    console.log("top quartile");
}

//food choice

const menuChoice = prompt ("What is your choice of steak, fruit salad, tofurkey or pork chops?")

if (menuChoice.includes("fruit salad" || "tofurkey")) {
    console.log("This cuisine is vegan friendly.");
} else {
    console.log("Vegans beware!");
}

//laboratory

const doesItMove = (true)
const shouldItMove = (true)

if (doesItMove === true){
    if (shouldItMove === true){
        console.log("No problem.");
    } else {
        console.log("Use duct tape.");
    }
} else {
    if (shouldItMove === true){
        console.log("Use WD-40");
    } else {
        console.log("No problem!");
    }
}
