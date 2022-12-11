const subways = {
    N:[
        "Times Square",
        "34th",
        "28th",
        "23rd",
        "Union Square",
        "8th"
    ],
    L:[
        "8th",
        "6th",
        "Union Square",
        "3rd",
        "1st"
    ],
    6:[
        "Grand Central",
        "33rd",
        "28th",
        "23rd",
        "Union Square",
        "Astor Place"
    ]
}



// function to check the relative position of a 'stop' to 'Union Square'
const relativePosition = function (arr, stopName){
    const interSection = 'Union Square';
    let x = arr.indexOf(stopName);
    let y = arr.indexOf(interSection);
    if ( x < y ){
        return arr.slice(x, y + 1);
    } else{
        return arr.slice(y, x + 1);
    }

}

// function to check the direction of the connecting service
const connectTrainDirection = function(relativeArr){
    if (relativeArr[0] === "Union Square"){
        return relativeArr.slice(1);
    } else{
        return relativeArr.reverse().slice(1);
    }
}


const planTrip = function (service1, start, service2, destination) {

    let firstTrain = relativePosition(subways[service1] , start);
    let secondTrain = relativePosition(subways[service2], destination);
    secondTrain = connectTrainDirection(secondTrain);
    console.log(`Your must travel through the following stops on the ${service1} line: ${firstTrain.slice(1).join()}.`)
    console.log("Change at Union Square.")
    console.log(`Your journey continues through the following stops: ${secondTrain.join()}.`)
    console.log(`${firstTrain.length - 1 + secondTrain.length} stops in total.`)
}


// let result = relativePosition(subways.N, 'Times Square');
// console.log(result);
//
// const A = [ 'Times Square', '34th', '28th', '23rd', 'Union Square' ]
// const B = connectTrainDirection(A)
// console.log(B);

// planTrip('N', 'Times Square', '6', '33rd')
// console.log(stopPrint([ '23rd', '28th', '33rd' ]))

let service1 = prompt("Which service do you want to take? ");
let start = prompt("Which stop do you hop on? ");
let service2 = prompt("Which service do you change to? ");
let stop = prompt("Which stop is your destination? ");
planTrip(service1, start, service2, stop);
