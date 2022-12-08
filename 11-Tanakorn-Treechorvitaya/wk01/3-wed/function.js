// calculate
// console.log(calculate(4, 2, 'add')) // -> 6
// console.log(calculate(4, 2, 'sub')) // -> 2
// console.log(calculate(4, 2, 'mult)) // -> 8
// console.log(calculate(4, 2, 'div))  // -> 2
// console.log(calculate(4, 2, 'exp')) // -> 16

const calculate = function(n1,n2,op){
    if (op === 'add'){
        return n1+n2
    } else if (op ==='sub'){
        return n1-n2
    } else if (op ==='multi'){
        return n1*n2
    } else if (op === 'div'){
        return n1/n2
    } else if (op === 'exp'){
        return n1**n2
    } else {
        console.log('no operator found')
    }
}
console.log(calculate(12,5,'div'))

// helloIn
// helloIn('English')    // -> "Hello"
// helloIn('German')     // -> "Hallo"
// helloIn('Portuguese') // -> "Olá"
// helloIn('French')     // -> "Bonjour"
// helloIn('Dog')        // -> "Woof"

const helloIn = function(hello){
    if (hello === 'English'){
        return 'Hello'
    } else if (hello === 'German'){
        return 'Hallo'
    } else if (hello === 'Portuguese'){
        return "Olá"
    } else if (hello === 'French'){
        return "Bonjour"
    } else if (hello === 'Dog'){
        return "Woof"
    } else {
        console.log(`Sorry, I don\'t speak ${hello}.`)
    }
}
console.log(helloIn('Portuguese'))
console.log(helloIn('Thai'))

// leapYears
const leapYears = 2022

for(let i = leapYears; i>=leapYears-100;i--){
    if(i%4 === 0){
        console.log(`${i} is a leap year`)
    }
}