// CALCUALTE

// const calculate = function (num1, num2, operation) {
//     if (operation === "add") {
//         return (num1 + num2)
//     }
//     if (operation === "sub") {
//         return (num1 - num2)
//     }
// }
// console.log(calculate(30, 20, "sub"))

// helloIn

// const helloIn = function (language) {
//     if (language === "English") {
//         return "Hello"
//     } 
//     if (language === "German") {
//         return "Hallo"
//     }
//     if (language === "Portugese") {
//         return "Ola"
//     }
//     if (language === "French") {
//         return "Bonjour"
//     }
//     if (language === "Dog") {
//         return "Woof"
//     }
// }

// console.log(helloIn("English"))
// console.log(helloIn("German"))
// console.log(helloIn("Portugese"))
// console.log(helloIn("French"))
// console.log(helloIn("Dog"))

// leapYears

// Needs to be divisable by 4.
// Starts at 1922
// Will be <2022

const leapYears = function() {
    for (let i = 1922; i <2022; i++)
    if (i % 4 === 0) {
        console.log(i)
    }
}
leapYears()