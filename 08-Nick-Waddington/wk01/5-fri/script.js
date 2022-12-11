//MTA Lab - Subway System

const subwayLines = {

    Nline: ['Times Square', '34th', '28th_N', '23rd', 'Union Square_N', '8th'],

    Lline: ['8th', '6th', 'Union Square_L', '3rd', '1st'],

    Sixline: ['Grand Central', '33rd', '28th_L', '23rd', 'Union Square_S', 'Astor Place'],

}

const subwaySystem = function (lineStart, start, lineEnd, end) {

    const stop1 = subwayLines.Nline.indexOf(start)
    const stop2 = subwayLines.Nline.indexOf(end)
    let lineStops = []

    console.log(`You are getting on the train at ${start} on the ${lineStart} Line.`);

    for (i=stop1+1; i<stop2;i++){

        lineStops.push(subwayLines.Nline[i])

}
    console.log(`You must travel through the following stops on the ${lineStart} Line: ${lineStops.join(', ')}.`);
    console.log(`${stop2 - stop1} stops in total.`);
    console.log(`Have a good day!`);

}

subwaySystem ('N', 'Times Square', 'N', '8th')


