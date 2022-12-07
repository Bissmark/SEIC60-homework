let output = '';
// Section 1
// const age = 34;
// if (age <= 19) {
//    output = "You're still a teenager";
// } else {
//     output = "You're a adult"
// };

// // Section 2
// const a = 5;
// if (a % 2 === 0) {
//     output = 'After running our calculation, the result is even';
// } else {
//     output = 'After running our calculation, the result is odd';
// }

// // Section 3
// const b = 97;
// if (b < 0 || b > 100) {
//     output = "out of range. Please enter a number in between 0 and 100 (included)";
// } else if (b <= 25) {
//     output = "bottom quartile";
// } else if (b < 50) {
//     output = "lower quartile";
// } else if (b < 75) {
//     output = "upper quartile"
// } else {
//     output = "top quartile"
// }

// // Section 4
// const foodChoice = prompt(`What would you like? Our menu tonight has steak, fruit salad, tofurkey, and pork chops`).toLocaleLowerCase();
// if (foodChoice === 'fruit salad' || foodChoice === 'tofurkey') {
//     output = "This cuisine is vegan friendly";
// } else if (foodChoice === 'steak' || foodChoice === 'pork chops' || foodChoice === 'pork chop') {
//     output = "Vegan beware";
// } else {
//     output = `Sorry, we don't serve ${foodChoice}.`;
// };


// Section 5
const isMove = true;
const shouldMove = false;
if (isMove === false && shouldMove === true) {
    output = 'Use spicy gas';
} else if (isMove === true && shouldMove === false) {
    output = 'Tie it, using the tape';
} else {
    output = 'It has no problem';
} 

console.log(output);