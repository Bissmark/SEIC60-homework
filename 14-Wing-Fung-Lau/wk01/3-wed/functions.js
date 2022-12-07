// //calculate

// const calculate = function(num1, num2, operation){
//     if (operation === "add"){
//         return num1 + num2
//     }
//     if (operation === "sub"){
//         return num1 - num2
//     }
//     if (operation === "mult"){
//         return num1 * num2
//     }
//     if (operation === "div"){
//         return num1 / num2
//     }
//     if (operation === "exp"){
//         return num1 ** num2
//     }
// }

// console.log(calculate(4, 2, 'add')) // -> 6
// console.log(calculate(4, 2, 'sub')) // -> 2
// console.log(calculate(4, 2, 'mult')) // -> 8
// console.log(calculate(4, 2, 'div')) // -> 2
// console.log(calculate(4, 2, 'exp')) // -> 16

//helloIn

const helloIn = function(lang) {
    const recognisedLang = {"english":"Hello","german":"Hallo","portuguese":"Olá",
"french":"Bonjour"}
    if (recognisedLang[lang] == undefined) {
        return "Sorry, I don't speak."
    } else {
        return recognisedLang[lang]
    }
}

console.log(helloIn(prompt().toLowerCase()))