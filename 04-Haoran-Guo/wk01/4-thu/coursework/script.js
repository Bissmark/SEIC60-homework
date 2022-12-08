// // count to 9 
let i = 0; 
while (i <10){
    console.log(i);
        i++;
}

// every 2 
for (let i = 0; i < 10; i++){
    if (i % 2 !== 0) { continue; }
    console.log(i);
}

// guess the number 
const answer = Math.floor(Math.random() * 10); 
let number = parseInt(prompt("Guess a number"));

while(answer !== number) {
    console.log(answer);
    if( number > answer ) {
        number = parseInt(prompt("Wrong, guess lower!\n Guess a number"))
        
    } else{
        number = parseInt(prompt("Wrong, guess higher!\n Guess a number"));
    }
    
}
console.log("Congratulations! You guessed " + number + "!");