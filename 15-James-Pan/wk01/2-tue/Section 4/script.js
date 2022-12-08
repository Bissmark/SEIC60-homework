let menuChoice = prompt('please enter your order')
if (menuChoice === "fruit salad" || menuChoice === "tofurkey") {
    console.log("This cuisine is vegan friendly.")
} else if (menuChoice === "Steak" || menuChoice === "pork chops") {
    console.log("Vegans beware!")
} else {
    console.log("N/A")
}