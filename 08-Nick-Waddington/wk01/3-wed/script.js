//calculate

const calculate = function (num1, num2, operation) {
    const op = operation
    if (operation === `add`){
        console.log(`The answer is ${num1 + num2}`);
}   if (operation === `sub`){
        console.log(`The answer is ${num1 - num2}`);
}   if (operation === `mult`){
        console.log(`The answer is ${num1 * num2}`);
}   if (operation === `div`){
        console.log(`The answer is ${num1 / num2}`);
}   if (operation === `exp`){
        console.log(`The answer is ${num1 ** num2}`);
}
}
calculate (4, 2, `exp`)

//helloIn

const helloIn = function (language) {
    const hello = language
    if (language === `English`) {
        console.log(`Hello in ${language} is Hello`);
}   if (language === `French`) {
        console.log(`Hello in ${language} is Bonjour`);
}   if (language === `Morse Code`) {
        console.log(`Hello in ${language} is .... . .-.. .-.. ---`);
}   if (language === `Droidspeak`) {
        console.log(`Beep, beep boop beep beep.`);
}
}

helloIn (`Morse Code`)

//leapYear

for (let i=1922; i<2022; i++) {
    if (i%4 === 0){
        console.log(`${i}`)
    }
}
