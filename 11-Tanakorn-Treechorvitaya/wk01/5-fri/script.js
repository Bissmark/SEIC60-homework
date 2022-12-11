// MTA Lab

// results
/*
1. first route 
2. interchange
3. second route after interchange
4. total stops
*/

// Store array
    // Route
    const LineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]; // Union Square 4
    const LineL = ["8th", "6th", "Union Square", "3rd", "1st"]; // Union Square 2
    const Line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]; // Union Square 4
    const Lines = [LineN,LineL,Line6]
    const seekLines = ["N","L","6"]
    // Numbers
    let countStop = 0;

    // Text to print
    const printFirstRoute = "Your must travel through the following stops on the ";
    const printInterchange = "Change at Union Square.";
    const printSecoindRoute = "Your journey continues through the following stops: ";

    let print1 = "";
    let print2 = "";

// Function
    // (1) function for route
    const runRoute = function(line,start, end){
        let sentence = "";
        let starti = line.indexOf(start);
        let endj = line.indexOf(end);
        if( starti<endj){
            for (let i =starti+1;i<=endj;i++){
                if (i===endj){
                    sentence += line[i]+"."
                } else {
                    sentence += line[i]+ ", "
                }
                countStop++
            }
        } else if (starti>endj){
            for (let i =starti-1;i>=endj;i--){
                if (i===endj){
                    sentence += line[i]+"."
                } else {
                    sentence += line[i]+ ", "
                }
                countStop++
            }
        } else if (starti === endj){
            sentence = "same station"
        }
        return sentence
    }

    // (2) function for planTrip('N', 'Times Square', '6', '33rd')
    const planTrip = function(start, stationStart, end, stationEnd){
        // same line case
        if( start === end){
            stringToLine1 = Lines[seekLines.indexOf(start)];
            print1 = printFirstRoute +start +" line: "+ runRoute(stringToLine1,stationStart,stationEnd);
            // print only 
            console.log(print1)
        } else if (stationStart === 'Union Square' && stationEnd === 'Union Square'){
            print1 = printFirstRoute + "same station"
            console.log(print1)
        } else {
        // different line case
            let stringToLine1 = [];
            let stringToLine2 = [];

            // seekLines
            stringToLine1 = Lines[seekLines.indexOf(start)];
            stringToLine2 = Lines[seekLines.indexOf(end)];

            // start route
            print1 = printFirstRoute +start +" line: "+ runRoute(stringToLine1,stationStart,"Union Square");
            // end route
            print2 = printSecoindRoute + runRoute(stringToLine2,"Union Square",stationEnd);
            // print only
            console.log(print1);
            console.log(printInterchange);
            console.log(print2);
        }
        // print count
        console.log(countStop);
        countStop = 0;
        print1 = "";
        print2 = "";
    };

// Call function to test
    // regular test 
        // normal test go forth route
        planTrip('N', 'Times Square', 'L', '1st');
        // normal test go back route
        planTrip('N', 'Times Square', '6', '33rd');

    // special test
        // same route
        planTrip("L","8th","L","Union Square")
        // double Union Square
        planTrip('L', 'Union Square', 'N', 'Union Square');

// Example results
    // console.log() shows output similar to this:
    // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
    // "Change at Union Square."
    // "Your journey continues through the following stops: 23rd, 28th, 33rd."
    // "7 stops in total."