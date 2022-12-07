//calculate
const calculate = function (num1, num2, operation) { 
    if (operation === 'add') {
        return num1 + num2 
    } else if (operation === 'sub') {
        return num1 - num2
    } else if (operation === 'mult') {
        return num1 * num2
    } else if (operation === 'div') {
        return num1 / num2
    } else if (operation === 'exp') {
        return num1 ** num2
    } else {
        console.log ("CHECK IT AGAIN!")
    }
}

console.log(calculate(4, 2, 'add')) // -> 6
console.log(calculate(4, 2, 'sub')) // -> 2
console.log(calculate(4, 2, 'mult')) // -> 8
console.log(calculate(4, 2, 'div'))  // -> 2
console.log(calculate(4, 2, 'exp')) // -> 16

//helloIn
const helloIn = function(language) {
    if (language === `English`) {
        return `Hello`;
    } else if (language === `German`) {
            return `Hallo`;
    } else if (language === `Portugese`) {
            return `Ola`;
    } else if (language === `French`) {
            return `Bonjour`;
    } else if (language === `Dog`) {
            return `Woof`;
    } else {
        return `Pling Plong Plung`
    }
}
console.log(helloIn('English'))
console.log(helloIn('German'))
console.log(helloIn('Portuguese'))
console.log(helloIn('French'))
console.log(helloIn('Dog'))

//leap years
const leapYears = function(year) {
    for (let year = 2020; year > 2023; year = year -4) {
        console.log(year)
    }
}