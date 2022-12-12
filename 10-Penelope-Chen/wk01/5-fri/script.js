// MTA 
planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

// -- Start here ->
// Identified 3 subway lines & their stops (including differentiated ones)
const planTrip = function () {
    const nLine = ["Times Square", "34th", "28thN", "23rdN", "Union Square", "8thN"]
    const lLine = ["8thL", "6th", "Union Square", "3rd", "1st"]
    const sixLine = ["Grand Central", "33rd", "28th6", "23rd6", "Union Square", "Astor Place"]
}
// Need to find the (array method(s)?) to help choose any combo of stops

// Logging the sentences the MTA user would see.
console.log(planTrip(`You must travel through the following stops on the ${nLine || lLine || sixLine}.`)) // Don't think this works but wut about RNG?
console.log(planTrip(`Change at ${""}.`)) // need to find an array method that randomises?
console.log(planTrip(`Your journey continues through the following stops: ${""}.`))
console.log(planTrip(`${""} stops in total.`)) // placeholding for a number
// planTrip("", "", "", "")