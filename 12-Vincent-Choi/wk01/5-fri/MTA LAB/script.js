//MTA LAB: Subway System

// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


//Prompts
// const startingLine = prompt("Which line are you on?")
// const startingStation = prompt("You're starting station is on:")
// const stopLine = prompt("Which line are you stopping on?")
// const stopStation = prompt("You will be stopping at:")

const subwaySystem = {
    lineN : ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    lineL : ["8th", "6th", "Union Square", "3rd", "1st"],
    line6 : ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
   }

// Model a subway system

//store each object of line (represented by its line name) and 
//its stops as an element of the subway system array
const subwaySystem = [
    {
        lineName: 'n',
        stops: ['time square', '34th', '28th', '23rd', 'union square', '8th']
    },
    {
        lineName: 'l',
        stops: ['8th', '6th', 'union square', '3rd', '1st'],
    },
    {
        lineName: '6',
        stops: ['grand central', '33rd', '28th', '23rd', 'union square', 'astor place']
    }
];

//the intersection stop
const interStop = 'union square';

const getDirection = function (startLine, startStop, endLine, endStop) {
    let instruction = ``;

    //indices of interStop in each line
    const interStopIndices = subwaySystem.map((line) => {
        return line.stops.indexOf(interStop);
    })
    //console.log(interStopIndices)

    //get all lines (line name only) in the system 
    const lines = subwaySystem.map((line) => {
        return line.lineName;
    })
    //console.log(lines);

    //the index of the start line in the subwaySystem array.
    const startLineIndex = lines.indexOf(startLine);
    //all stops of the start line
    const allStopsOfStartLine = subwaySystem[startLineIndex].stops;
    //the position (index) of the stop where a rider gets on 
    const startStopIndex = allStopsOfStartLine.indexOf(startStop);
    //the position (index) of the intersection stop in the start line
    const interIndexInStartLine = interStopIndices[startLineIndex];
    //console.log(`The start line index is ${startLineIndex} where the intersection point index at ${interIndexInStartLine} and start stop index is ${startStopIndex}`);


    //the index of the end line in the subwaySystem array.
    const endLineIndex = lines.indexOf(endLine);
    // all the stops of the end line
    const allStopsOfEndLine = subwaySystem[endLineIndex].stops;
    // the index of the end stop where a rider gets off.
    const endStopIndex = allStopsOfEndLine.indexOf(endStop);
    // the index of the instersection stop in the end line
    const interIndexInEndLine = interStopIndices[endLineIndex]
    //console.log(`The end line index is ${endLineIndex} where the intersection point index at ${interIndexInEndLine} and end stop index is ${endStopIndex}`);

    // the array of all stops in the start line that a rider will go through.
    let startLineStopPasses = [];
    // the array of all stops in the end line that a rider have to go through to reach their end stop.
    let endLineStopPasses = [];

    let firstInstruction;
    let secondInstruction;
    if (startStopIndex === interIndexInStartLine) {
        firstInstruction = `You change to the line ${endLine} to start.`
    } else {
        if (startStopIndex < interIndexInStartLine) {
            for (let i = startStopIndex; i <= interIndexInStartLine; i++) {
                startLineStopPasses.push(allStopsOfStartLine[i]);
            }
        } else {
            for (let i = startStopIndex; i >= interIndexInStartLine; i--) {
                startLineStopPasses.push(allStopsOfStartLine[i])
            }
        }
        firstInstruction = `You must travel through the following stops on the ${startLine} line: ${startLineStopPasses.join(', ')}. \nChange at ${interStop}.`
    }

    if (endStopIndex === interIndexInEndLine) {
        secondInstruction = `You reach the end stop.`
    } else {
        if (endStopIndex < interIndexInEndLine) {
            for (let i = endStopIndex; i < interIndexInEndLine; i++) {
                endLineStopPasses.unshift(allStopsOfEndLine[i])
            }
        } else {
            for (let i = endStopIndex; i > interIndexInEndLine; i--) {
                endLineStopPasses.unshift(allStopsOfEndLine[i])
            }
        }
        secondInstruction = `Your journey continues through the following stops: ${endLineStopPasses.join(', ')}.`
    }
    
    // total number of stops that a rider goes through
    const totalStops = startLineStopPasses.length + endLineStopPasses.length;
    //console.log(totalStops)

    // combine all instruction together
    instruction = `${firstInstruction} \n${secondInstruction} \nTotal stops: ${totalStops}.`;

    // console.log(startLineStopPasses);
    // console.log(endLineStopPasses);
    console.log(instruction)

    return instruction;
}

// test cases
getDirection('l', '8th', '6', 'grand central');
getDirection('n', '8th', '6', 'astor place');
getDirection('n', '8th', '6', 'grand central');
getDirection('l', 'union square', '6', 'grand central');
getDirection('n', 'time square', 'l', 'union square');