// MTA Lab

//////////////////////////////////////////////////////////// 

// const nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
//     if (nLine.indexOf(pointB) === -1) {
//         nLine.indexOf(pointB);
//         console.log(`Get on at ${pointB}.`);
//     } else {
//         console.log(`${nLine} is your starting destination.`);
//     } 
// // const nLine = ['Times Square', '34th', '28th', '23rd']; 
// station('nLine', 'Times Square', 'nLine', '28th'); 
    


const nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']; 
    if (stop === `Times Square`) {
       console.log(`Get on at this stop.`)
    } else if (stop === `Union Square`) {
        console.log(`You have arrived at you're destination.`)
    } else {
        console.log(`Continue on this train.`)
    }
// output - Continue on this train

///
// let subway = {
//     N: ["Times Square", "34th St", "28th St", "23rd St", "Union Square", "8th"],
//     L: ["8th", "6th", "Union Square", "3rd", "1st"],
//     Six: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
//   };
//   /* The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console: */
//   let planTrip = function(startLine, startStation, endLine, endStation) {
//     let startIndex = subway[startLine].indexOf(startStation);
//     let endIndex = subway[endLine].indexOf(endStation);
//     let numStops = Math.abs(startIndex - endIndex);
//     let trip = [];
//     if (startLine === endLine) {
//       if (startIndex < endIndex) {
//         for (let i = startIndex; i <= endIndex; i++) {
//           trip.push(subway[startLine][i]);
//         }
//       } else {
//         for (let i = startIndex; i >= endIndex; i--) {
//           trip.push(subway[startLine][i]);
//         }
//       }
//     } else {
//       let parkIndex = subway[startLine].indexOf('Park Street');
//       let parkIndex2 = subway[endLine].indexOf('Park Street');
//       if (startIndex < parkIndex) {
//         for (let i = startIndex; i <= parkIndex; i++) {
//           trip.push(subway[startLine][i]);
//         }
//       } else {
//         for (let i = startIndex; i >= parkIndex; i--) {
//           trip.push(subway[startLine][i]);
//         }
//       }
//       if (parkIndex2 < endIndex) {
//         for (let i = parkIndex2; i <= endIndex; i++) {
//           trip.push(subway[endLine][i]);
//         }
//       } else {
//         for (let i = parkIndex2; i >= endIndex; i--) {
//           trip.push(subway[endLine][i]);
//         }
//       }
//     }
//     console.log('You must travel through the following stops on the ' + startLine + ' line: ' + trip.join(', '));
//     console.log(numStops + ' stops in total.');
//   };
// planTrip("L", "6th", "Six", "Astor PLace");
// planTrip('Six', 'Grand Central', 'Six', 'Astor Place');
// planTrip('N', 'Times Square', 'Six', '33rd');


