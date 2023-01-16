/* A training execrise for GA - Lapis, Papyrus, Scalpellus
This game emulates the clasic rock paper scisors by allowing the player to have a choice against the computers radomly generated option
*/

const player = {
    currentChoice: null,
}
const computer = {
    currentChoice: null,
}

const options = ['Lapis/rock', 'Papyrus/paper', 'Scallpellus/scisors']; // lapis (rock) = 0 | papyrus (paper) = 1 | scallpellus (scissors) = 2

const RandomChoice = Math.floor(Math.random() * options.length);

console.log("DEBUG: START");

computer.currentChoice = options[RandomChoice];
player.currentChoice = options[1];
// console.log("Computers choice is: " + computer.currentChoice);
// console.log("The players choice is: " + player.currentChoice) // player choice set to Papyrus
console.log("DEBUG: The computer chose: " + computer.currentChoice + " & the player chose: " + player.currentChoice);
console.log("The player wins! The computer chose: " + computer.currentChoice + " & the player chose: " + player.currentChoice);
console.log("The computer wins! " + computer.currentChoice + " & the player chose: " + player.currentChoice);

if (computer.currentChoice === player.currentChoice) {
    console.log("draw both player and computer chose Lapis");
    if (computer.currentChoice === options[0] && player.currentChoice === options[1]) {
        console.log("The player wins! The computer chose: " + computer.currentChoice + " & the player chose: " + player.currentChoice);
    }
    else if (computer.currentChoice === options[0] && player.currentChoice === options[2]) {
        console.log("The player wins! The computer chose: " + computer.currentChoice + " & the player chose: " + player.currentChoice);
    }
}

if (computer.currentChoice[1] && player.currentChoice[0]) {
    console.log("The computer wins! " + computer.currentChoice + " & the player chose: " + player.currentChoice);

    if (computer.currentChoice === options[1] && player.currentChoice === options[2]) {
        console.log("The player wins! The computer chose: " + computer.currentChoice + " & the player chose: " + player.currentChoice);
    }
}

if (computer.currentChoice[2] && player.currentChoice[0]) {
    console.log("The player wins! The computer chose: " + computer.currentChoice + " & the player chose: " + player.currentChoice);

    if (computer.currentChoice === options[2] && player.currentChoice === options[1]) {
        console.log("The player wins! The computer chose: " + computer.currentChoice + " & the player chose: " + player.currentChoice);
    }
}
console.log("DEBUG: FIN");
