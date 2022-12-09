///////////////////////////DELETE
const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
const lineL = ['8th', '6th', 'Union Square', '3rd', '1st']
const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']



onLine = 'n'
onStop = 'times square'
offLine = '6'
offStop = '33rd'
//////////////////////////DELETE

const stopName1 = onStop.split(' ')
if (stopName1.length > 1){
    for (let i = 0; i < stopName1.length; i++) {
        stopName1[i] = stopName1[i][0].toUpperCase() + stopName1[i].substr(1);
    }
    onStop = stopName1.join(" ");
}
const stopName2 = offStop.split(' ')
if (stopName2.length > 1){
    for (let i = 0; i < stopName2.length; i++) {
        stopName2[i] = stopName2[i][0].toUpperCase() + stopName2[i].substr(1);
    }
    offStop = stopName2.join(" ");
}

console.log(offStop)

if (onLine === 'n') {journ1 = lineN}
if (onLine === 'l') {journ1 = lineL}
if (onLine === '6') {journ1 = line6}
if (offLine === 'n') {journ2 = lineN}
if (offLine === 'l') {journ2 = lineL}
if (offLine === '6') {journ2 = line6}


if (journ1 != journ2 & onStop === 'Union Square' && offStop === 'Union Square'){
    alert("All 3 subway lines intersect at Union Square,so you don't need to take the train!")
}



trip1 = []
trip2 = []
//Same lines
if (journ1 === journ2){
    if (journ2.indexOf(offStop) === journ1.indexOf(onStop)){
        alert("Your start and end are the same stop from the same line!")
    }

    if (journ2.indexOf(offStop) > journ1.indexOf(onStop)){
        trip1 = journ1.slice(journ1.indexOf(onStop) + 1, journ2.indexOf(offStop) + 1)
        console.log(`Your must travel through the following stops on the ${offLine.toUpperCase()} line: ${trip1.join(", ")}`)
        console.log(`${trip1.length} stops in total.`)
    }

    if (journ2.indexOf(offStop) < journ1.indexOf(onStop)){
        for (let i = journ1.indexOf(onStop) - 1 ; i > journ2.indexOf(offStop) - 1; i--){
            trip1.push(journ1[i])
        }
        console.log(`Your must travel through the following stops on the ${offLine.toUpperCase()} line: ${trip1.join(", ")}`)
        console.log(`${trip1.length} stops in total.`)
    }

    
}

//Get on at Union Square
if (journ1 != journ2 && onStop === 'Union Square'){
    if (journ2.indexOf(offStop) > journ2.indexOf('Union Square')){
        trip1 = journ2.slice(journ2.indexOf('Union Square') + 1, journ2.indexOf(offStop) + 1)
    }

    if (journ2.indexOf(offStop) < journ2.indexOf('Union Square')){
        for (let i = journ2.indexOf('Union Square') - 1 ; i > journ2.indexOf(offStop) - 1; i--){
            trip1.push(journ2[i])
        }
    }


    console.log(`Your must travel through the following stops on the ${offLine.toUpperCase()} line: ${trip1.join(", ")}`)
    console.log(`${trip1.length} stops in total.`)


}




if (journ1 != journ2 && onStop != 'Union Square'){
    if (journ1.indexOf('Union Square') > journ1.indexOf(onStop)){
        trip1 = journ1.slice(journ1.indexOf(onStop) + 1, journ1.indexOf('Union Square') + 1)
    }

    if (journ1.indexOf('Union Square') < journ1.indexOf(onStop)){
        for (let i = journ1.indexOf(onStop) - 1 ; i > journ1.indexOf('Union Square') - 1; i--){
            trip1.push(journ1[i])
        }
    }

    console.log(`Your must travel through the following stops on the ${onLine.toUpperCase()} line: ${trip1.join(", ")}`)
    console.log(`Change at Union Square.`)

    if (journ2.indexOf(offStop) > journ2.indexOf('Union Square')){
        trip2 = journ2.slice(journ2.indexOf('Union Square') + 1, journ2.indexOf(offStop) + 1)
    }

    if (journ2.indexOf(offStop) < journ2.indexOf('Union Square')){
        for (let i = journ2.indexOf('Union Square') - 1 ; i > journ2.indexOf(offStop) - 1; i--){
            trip2.push(journ2[i])
        }
    }

    console.log(`Your journey continues through the following stops on the ${offLine.toUpperCase()} line: ${trip2.join(", ")}`)
    console.log(`${trip1.length + trip2.length} stops in total.`)

}

