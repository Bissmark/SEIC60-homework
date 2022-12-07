// Calculate
// const calculate = function(num1, num2, operation) {
//     if (operation === 'add') {
//         return num1 + num2
//     }
//     else if (operation === 'sub') {
//         return num1 - num2
//     }
//     else if (operation === 'mult') {
//         return num1 * num2
//     }
//     else if (operation === 'div') {
//         return num1/num2
//     }
//     else if (operation === 'exp') {
//         return  (num1 ** num2)
//     }
// }
// console.log(calculate(4, 2, 'add'))
// console.log(calculate(4, 2, 'sub'))
// console.log(calculate(4, 2, 'mult'))
// console.log(calculate(4, 2, 'div'))
// console.log(calculate(4, 2, 'exp'))

// // helloIn
// const helloIn = function(languageName) {
//     if (languageName === 'English') {
//         return 'Hello'
//     }
//     else if (languageName === 'German') {
//         return 'Hallo'
//     }
//     else if (languageName === 'Portugese') {
//         return 'Ola'
//     }
//     else if (languageName === 'French') {
//         return 'Bonjour'
//     }
//     else if (languageName === 'Dog') {
//         return  'Woof'
//     }
//     else {
//         return `Sorry I don't speak ${languageName}` 
//     }
// }
// console.log(helloIn('Malay'))

// //Leap Year
// for (let i = 1924; i < 2024; i += 4)
// //     console.log(i)
// // }

//// Leap Year Version 2 - doesn't work
// const range = function (st_year, end_year) {   
//     for (let i = st_year; i <= end_year; i++) {
//     }
//     }
//  const leapYear = function (year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
//         return year;
//     }
// }
// console.log(range(1924,2024));

//// Leap Year version 3 (works)
// (function(startY, endY){
//     for(let i = startY; i <= endY; i++){
//     if((i % 4 === 0 && i % 100 !== 0) || (i % 100 === 0 && i % 400 === 0)){
//         console.log(i)
//     }
//     }
//     })(1924, 2020)