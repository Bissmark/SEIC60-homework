const subwayLines = {

    Nline: ['Times Square', '34th', '28th_N', '23rd', 'Union Square_N', '8th'],

    Lline: ['8th', '6th', 'Union Square_L', '3rd', '1st'],

    Sixline: ['Grand Central', '33rd', '28th_L', '23rd', 'Union Square_S', 'Astor Place'],

}

const subwaySystem = function (lineStart, start, lineEnd, end) {

    const lineStops = subwayLines.Nline.join(', ')

    for (i=0; i<lineStart.length;i++){

        return console.log(`You must travel through the following stops on the ${lineStart} Line: ${lineStops}.`);
        }
}

subwaySystem ('N', 'Times Square', '6', '33rd')


