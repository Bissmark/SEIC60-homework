// // calculate
// const calculate = function (num1, num2, operation) {
//     let result;
//     switch(operation) {
//         case 'add':
//             result = num1 + num2;
//             break;
//         case 'sub':
//             result = num1 - num2;
//             break;
//         case 'mult': 
//             result = num1 * num2;
//             break;
//         case 'div':
//             result = num1 / num2;
//             break;
//         case 'exp':
//             result = num1**num2;
//         default:
//             result = 'unrecognised operation'
//     }


//     return result;
// }

// console.log(calculate(4, 2, 'ex'));


// // helloIn
// const helloIn = function (language) {
//     let result;
//     switch (language.toLowerCase()) {
//         case 'bahasa':
//             result = 'Selamat';
//             break;
//         case 'khmer':
//             result = 'Suostei';
//             break;
//         case 'korean':
//             result = 'annyeonghaseyo';
//             break;
//         case 'hindi':
//             result = 'namaste';
//             break;
//         default:
//             result = `Sorry, I don't speack ${language}.`
//     }
//     return result;
// }

// console.log(helloIn('Korean'));

// leapYears
// const leapYears = function () {
//     let result = ``;
//     for (let year = 2022; year >= 1922; year--) {
//         if (year % 4 === 0) {
//             if (year % 100 === 0) {
//                 if (year % 400 === 0) {
//                     result += `${year}\n`
//                 }
//             } else {
//                 result += `${year}\n`
//             }
//         }
//     }
//     return result;
// };

// console.log(leapYears());

const leapYears = function () {
    let result = ``;
    for (let year = 2022; year >= 1922; year--) {
        if ((year % 4 === 0 && year % 100 !==0) || year % 400 === 0) {
            result += `${year}\n`
        }
    }
    return result;
};
console.log(leapYears());