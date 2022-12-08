// calculate

const calculate = function (num1, num2, operation) {
    if (operation === 'add') {
        console.log(num1 + num2)
    } else if (operation === 'sub') {
        console.log(num1 - num2)
    } else if (operation === 'multi') {
        console.log(num1 * num2)
    } else if (operation === 'div') {
        console.log(num1 / num2)
    } else if (operation === 'exp') {
        console.log(num1 ^ num2)
    }
}

console.log(calculate(4,10,'sub'))

// helloIn
const helloEng = 'Hello'
const helloGerman = 'Hallo'
const helloPortuguese = 'Ola'
const helloFrench = 'Bonjour'
const helloDog = 'Woof'

const helloIn = function (language) {
    if (language === 'English')
        console.log(helloEng)
    else if (language === 'German') {
        console.log(helloGerman)
    } else if (language === 'Portuguese') {
        console.log(helloPortuguese)
    } else if (language === 'French') {
        console.log(helloFrench)
    }
    else if (language === 'Dog') {
        console.log(helloDog)
    }
    else {
        console.log(` Sorry, I don't speak ${language}`)
    }
}

helloIn('English')    // -> "Hello"
helloIn('German')     // -> "Hallo"
helloIn('Portuguese') // -> "Olá"
helloIn('French')     // -> "Bonjour"
helloIn('Dog')        // -> "Woof"

// leapYears 
// Provided by fung: 
// Definition of leap years = Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, and 1900 are not leap years, but the years 1600 and 2000 are.It is fun to know that 1900 is not a leap year!

const leapYears = function (year) {
    //if divisible by 4 || not divisible by 100
    if (year % 2 === 0) {
        console.log('posible a leap year in ' + year)
        if (year % 100 !== 0) {
            console.log('not a leap year ' + year)
        } else if (year % 100 === 0) {
            console.log('still a leap year ' + year)
        }
    }
}
leapYears(1944)