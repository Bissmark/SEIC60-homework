
// Objectives:
// Create a program that models a simple subway system.
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total 
// number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, 
// this means the 28th stop on the N line is different than the 28th street stop on the 6 line, 
// so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later 
// to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to 
// be differentiated)

// when the function is called I need to loop through all the stations between the startstop, start line to end stop, end line.
// along the way i need to call out all stops that are passed through.


let planTrip = function printPlannedTrip(startStation, startLine, endStation, endLine) 
{
// create nLine
  const nLine = ['Times Square', '34th', '28th Street', '23rd Street', 'Union Square', '8th Street'];
// create lLine
  const lLine = ['8th', '6th', 'Union Square', '3rd', '1st'];
//  create 6th line
  const sixthLine = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];
  const trainLines = [nLine, lLine, sixthLine];
  const findLine = ['N', 'L', '6'];

    
    //1. find index of the starting train station
    let indexOfStartStation = nLine.indexOf(startStationName); //indexOfStartingStation = 1;
    
    const transitionStation = "Union Square";
    let passedStation = "N line: ";

    //2. loop to get 'Union Square'
    // starting index
    // condition to loop (index is smaller than 4)
    // increase index by 1 for each loop
    for(let index = indexOfStartingStation; index < nLine.length -1;  index++)
    {
        let stationName = nLine[index]; // '34th',
        
        if(stationName === transitionStation)
        {
            break;
        }

        passedStation.append(stationName + ',').Trim(',');
    }

    //3. find index of 'Union Square' of the sixthLine  
    let indexOfTransitionStation = sixthLine.indexOf(transitionStation); //indexOfStartingStation = 4;
    let indexOfDestinationStation = sixthLine.indexOf(destinationStationName); //indexOfStartingStation = 2;

    // if destination and transition station is same 
    if(indexOfTransitionStation = indexOfDestinationStation)
    {
        // do nothing
    }
    else if(indexOfTransitionStation < indexOfDestinationStation)
    {
       // normal loop, go left to right
    }
    else
    {
        // loop, go right to left
        // indexOfTransitionStation 3, 2 ,1 ,0
        for(let index = indexOfTransitionStation -1; index >= 0 ;  index--)
        {
            let station = sixthLine[index];

            passedStation.push(station);

            if(station === destinationStationName)
            {
               break;
            } 
        }
    }

    // planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
    // console.log() shows output similar to this:
    // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
    // "Change at Union Square."
    // "Your journey continues through the following stops: 23rd, 28th, 33rd."
    // "7 stops in total."
    //5. Printout the all the station
    for(let i = 0 ; i < passedStation.length -1; i++)
    {
      console.log("You must travel through the following stops on the" + passedStation);
    }
}

printTrainFunction('nLine', '34th', '33rd');

