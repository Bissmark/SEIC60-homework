const subwayLines = {

    Nline: ['Times Square', '34th', '28th_N', '23rd', 'Union Square_N', '8th'],

    Lline: ['8th', '6th', 'Union Square_L', '3rd', '1st'],

    Sixline: ['Grand Central', '33rd', '28th_L', '23rd', 'Union Square_S', 'Astor Place'],

}

const subwaySystem = function (lineStart, start, lineEnd, end) {

//Showing all the stops on the N Line

    const lineStops = subwayLines.Nline.join(', ')

    for (i=0; i<lineStart.length;i++){

        return console.log(`You must travel through the following stops on the ${lineStart} Line: ${lineStops}.`);
        }

// Testing .indexOf

    const stop = subwayLines.Nline.indexOf('Union Square_N')

    if (stop <= 4){
        console.log('less');
    } else {
        console.log('more');
    }

// Finding the number of stops

    const stop1 = subwayLines.Nline.indexOf(start)

    const stop2 = subwayLines.Nline.indexOf(end)

    console.log(`${stop2 - stop1} stops in total.`);

// Naming the stops from intial station to end station 

    for (i=stop1; i<=stop2;i++){

        console.log(subwayLines.Nline[i]);

    }

}

subwaySystem ('N', '34th', 'N', 'Union Square_N')