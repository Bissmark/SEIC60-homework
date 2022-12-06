// console.log("hi world")

// Section 1
// Create a variable called `age` and assign it to your age (or any arbitrary number). Write a conditional that matches the following conditions:
//if `age` is less than or equal 19, output `"You're still a teenager!"`
 
const age = 22
 if (age >= 19) {
    console.log("You're still a teenager!")
 }

// Section 2
// Create a variable called `a` and assign it a number. Write a conditional that matches the following conditions:
//if a % 2 is equal to 0, output `"After running our calculations, the result is even"`
//otherwise, output `"After running our calculations, the result is odd"`

const a = 10
if (a % 2 === 0) {
    console.log("After running our calculations, the result is even.")
} else {
  console.log("After running our calculations, the result is odd")  
} 


// Section 3 
// Create a variable called `b` and assign it a random number between 0 and 100. Write a conditional that matches the following conditions:
//   - if `b` is less than or equal to 25, output `"bottom quartile"`
//   - if `b` is between 25 and/or equal to 50, output `"lower quartile"`
//   - if `b` is between 50 and/or equal to 75, output `"upper quartile"`
//   - if `b` is between 75 and/or equal to 100, output `"top quartile"`

const b = 20

if (b <= 25) {
    console.log("bottom quartile")
} else if (b >= 25 && b < 50) {
    console.log("lower quartile")
} else if (b >= 50 && b < 75) {
    console.log("upper quartile")
} else if (b >= 75 && b < 100) {
    console.log("top quartile")
}

// Section 4 
// _On the menu tonight: Steak, fruit salad, tofurkey, and pork chops._
// Ask the user (use the [`prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) function) for their menu choice and assign it to a variable.  Write a conditional that matches the following conditions:
// - If a vegan can eat it, output `"This cuisine is vegan friendly."`
// - Otherwise, output `"Vegans beware!"`
// For the sake of this exercise, Tofurkey is definitely vegan friendly.
// **Hint**: Two identical strings are considered to be equal to each other.

const  menuChoice = prompt ("Meal Choice?")

if (menuChoice === "steak") {
    console.log("Vegans Beware!")
} else if (menuChoice === "fruit salad") {
    console.log("This cuisine is vegan friendly")
} else if (menuChoice === "tofurkey") {
    console.log("This cuisine is vegan friendly") 
} else if (menuChoice === "pork chops") {
    console.log("Vegans Beware!")
} else {
    console.log("drink water!")
} 

// Section 5
// - Implement the flowchart below in code.
// ![Flowchart](https://i.imgur.com/m9UJDTy.png)
// tried it, definitely going about it the wrong way, gave up :)))


// const doesItMove = "Yes"
// const shouldIt = "Yes" 

// if (doesItMove === "Yes") {
//     console.log("Should it?")
// } else if (shouldIt === "Yes") {
//     console.log("No problem.")
// }

