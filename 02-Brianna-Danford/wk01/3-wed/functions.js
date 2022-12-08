// console.log('hi')


// Calculate
// 
const calculate = function (num1, num2, operation) {
    let result 
    if (operation === `add`) {
        result = num1 + num2 
    } else if (operation === `mult`) {
        result = num1 * num2 
    } else if (operation === `div`) {
        result = num1 / num2 
    } else if (operation === 'sub') {
        result = num1 - num2
    }
    return result

} 
console.log(calculate(4, 2, `add`)) // 6 
console.log(calculate(4, 2, `mult`)) // 8
console.log(calculate(4, 2, `div`)) // 2
console.log(calculate(4, 2, `sub`)) // 2


// helloIn
// 
const helloIn = function (language) {
    let response 

    if (language === `German`) { 
        response = `Hallo`
    } else if (language === `Portugese`) {
        response = `Ola`
    } else if (language === `French`) {
        response = 'Bonjour'
    } else if (language === `English`) {
        response = `Hello`
    } else if ( language === `Dog`) {
        response = `Woof`
    } else {
        response = `Sorry, I don't speak ${language}`
    }
    return response
}
console.log(helloIn(`German`)) //Hallo
console.log(helloIn(`Portugese`)) //Ola
console.log(helloIn(`French`)) //Ola
console.log(helloIn(`English`)) //Ola
console.log(helloIn(`Dog`)) //Ola
console.log(helloIn(`Cat`)) //Ola

















// leapYears
// 
const leapYear = function () {
    for (let i = 1920; i < 2023; i++) {
    if (i % 4 === 0) {
        console.log(`${i} is a leap year`)
    } 
} 
}
leapYear()


