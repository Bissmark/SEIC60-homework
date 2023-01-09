// Section 1
let age = 1;
function lifeCycle(age_arg) {
    if (age_arg <= 19) {
        console.log("You're still a teenager!")
        return "You're still a teenager!";
    } else {
        console.log("Congrats you are over 19")
        return "You're older than 19 (an adult is most places)";
    }
}

// Try DOM attempt later
// function findAge() { 
//     x = document.querySelector('age-field').value;
//     document.getElementById("yourAge").innerHTML = x;
//     lifeCycle(x);
//     return x;
// }

lifeCycle(age)

// Section 2 - % 0 is even and 1 is odd (old divided by 2 trick to determine even/odd)
const a = 20 % 2
if (a === 0) {
    console.log("After running our calculations, the result is even")
} else {
    console.log("After running our calculations, the result is odd")
}

// Section 3 
const b = 4
if (b <= 25) {
    console.log('bottom quartile')
} else if (b >= 25 && b <= 50) {
    console.log('lower quartile')
} else if (b >= 50 && b <= 75) {
    console.log('upper quartile')
} else if (b >= 75 && b <= 100) {
    console.log('top quartile')
} // doesn't seem to need: else {}

// Section 4

// Find out how to use array
// foodOptions = {
//     veganFoods: 'Fruit salad, Tofurkey',
//     notVegan: 'Steak, Pork Chops',
// }

veganFoods = ['Fruit salad', 'Tofurkey']
nonVeganFoods = ['Steak', 'Pork Chops']

c;let foodChoice = prompt(`What would you choose from ${veganFoods} & ${nonVeganFoods}? (type options exactly as shown)`);

if (foodChoice === 'Fruit salad' || foodChoice === 'Tofurkey') { // maybe a for loop to use the array?
    console.log("This cuisine is vegan friendly")
} else if (foodChoice === 'Steak' || foodChoice === 'Pork Chops') {
    console.log("Vegans beware!")
} else {
    console.log(`You must choose between: ${veganFoods} and ${nonVeganFoods}`)
}

console.log(foodChoice)

// Section 5


const movement = true
let shouldMove = true
console.log("Does it move?")
if (movement === true) {
    //console.log('Should it move?')
}  if (shouldMove === true && movement === true) {
    console.log('No Problem')
}  if (shouldMove === false && movement === true) {
    console.log("Duct tape")
} 


if (movement === false) {
    //console.log("Should it move?")
}  if (shouldMove === true && movement === false) {
    console.log("WD-40")
}  if (shouldMove === false && movement === false) {
    console.log("No problem")
}