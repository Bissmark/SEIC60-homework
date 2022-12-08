//--------------------------------------------
// CALCULATE

const calculate = function(num1, num2, operation) {
    if (operation === "add") {
        return num1 + num2
    } else if (operation === "sub") {
        return num1 - num2
    } else if (operation === "mult") {
        return num1 * num2
    } else if (operation === "div") {
        return num1 / num2
    } else if (operation === "exp") {
        return num1 ** num2
    }
}

// function call (test)
console.log(calculate(4, 2, 'add')) // -> 6
console.log(calculate(4, 2, 'sub')) // -> 2
console.log(calculate(4, 2, 'mult')) // -> 8
console.log(calculate(4, 2, 'div'))  // -> 2
console.log(calculate(4, 2, 'exp')) // -> 16

//--------------------------------------------
// HELLOIN

const helloIn = function(language) {
    if (language === "English") {
        return "Hello"
    } else if (language === "German") {
        return "Hallo"
    } else if (language === "Portuguese") {
        return "Olá"
    } else if (language === "French") {
        return "Bonjour"
    } else if (language === "Dog") {
        return "Woof"
    } else {
        return `Sorry, I don't speak ${language}.`
    }
}

// function call (test)
console.log(helloIn('English'))    // -> "Hello"
console.log(helloIn('German'))     // -> "Hallo"
console.log(helloIn('Portuguese')) // -> "Olá"
console.log(helloIn('French'))     // -> "Bonjour"
console.log(helloIn('Dog'))        // -> "Woof"
console.log(helloIn('Latin')) // -> "Sorry, I don't speak Latin."

//--------------------------------------------
// LEAPYEARS

const leapYears = function() {
    // 1922 to 2022 is 100 years
    for (let i = 1922; i <= 2022; i++) {
        if (i % 4 === 0) {
            console.log(i)
        }
    }
}

// function call (test)
leapYears()