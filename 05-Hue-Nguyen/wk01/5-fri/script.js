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
    console.log(interStopIndices)

    //get all lines (line name only) in the system 
    const lines = subwaySystem.map((line) => {
        return line.lineName;
    })
    console.log(lines);

    //the index of the start line in the subwaySystem array.
    const startLineIndex = lines.indexOf(startLine);
    //all stops of the start line
    const allStopsOfStartLine = subwaySystem[startLineIndex].stops;
    //the position (index) of the stop where a rider gets on 
    const startStopIndex = allStopsOfStartLine.indexOf(startStop);
    //the position (index) of the intersection stop in the start line
    const interIndexInStartLine = interStopIndices[startLineIndex];
    console.log(`The start line index is ${startLineIndex} where the intersection point index at ${interIndexInStartLine} and start stop index is ${startStopIndex}`);


    //the index of the end line in the subwaySystem array.
    const endLineIndex = lines.indexOf(endLine);
    // all the stops of the end line
    const allStopsOfEndLine = subwaySystem[endLineIndex].stops;
    // the index of the end stop where a rider gets off.
    const endStopIndex = allStopsOfEndLine.indexOf(endStop);
    // the index of the instersection stop in the end line
    const interIndexInEndLine = interStopIndices[endLineIndex]
    console.log(`The end line index is ${endLineIndex} where the intersection point index at ${interIndexInEndLine} and end stop index is ${endStopIndex}`);

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
    console.log(totalStops)

    // combine all instruction together
    instruction = `${firstInstruction} \n${secondInstruction} \nTotal stops: ${totalStops}.`;

    console.log(startLineStopPasses);
    console.log(endLineStopPasses);
    console.log(instruction)

    return instruction;
}

// test cases
getDirection('l', '8th', '6', 'grand central');
getDirection('n', '8th', '6', 'astor place');
getDirection('n', '8th', '6', 'grand central');
getDirection('l', 'union square', '6', 'grand central');
getDirection('n', 'time square', 'l', 'union square');