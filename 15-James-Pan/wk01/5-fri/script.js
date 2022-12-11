// Activity
// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
//
//
//
//Memo: still fix spaces and commas.
const stationNetwork = [
  {
    lineName: "N Line",
    stationNames: [
      "Time Square",
      "34th",
      "28th",
      "23rd",
      "Union Square",
      "8th",
    ],
  },
  {
    lineName: "L line",
    stationNames: ["8th", "6th", "Union Square", "3rd", "1st"],
  },
  {
    lineName: "6 Line",
    stationNames: [
      "Grand Central",
      "33rd",
      "28th",
      "23rd",
      "Union Square",
      "Astor Place",
    ],
  },
];

const startingLine = prompt(`Dear passenger, please enter your starting line.`);
const startingStation = prompt(`please enter your starting station.`);
const destinationLine = prompt(
  `please enter your destination line (can be the same as the starting line)`
);
const destinationStation = prompt(`please enter your destination station`);

const test1 = function (
  startingLine,
  startingStation,
  destinationLine,
  destinationStation
) {
  if (startingLine === destinationLine) {
    if (
      startingLine === "N Line" &&
      stationNetwork[0].stationNames.indexOf(startingStation) <
        stationNetwork[0].stationNames.indexOf(destinationStation)
    ) {
      const singleLineTravel = stationNetwork[0].stationNames.slice(
        stationNetwork[0].stationNames.indexOf(startingStation) + 1,
        stationNetwork[0].stationNames.indexOf(destinationStation)
      );
      if (singleLineTravel.length >= 1) {
        return `Your must travel through the following stops on the ${startingLine}:${singleLineTravel},${destinationStation}.\n${
          singleLineTravel.length + 1
        } stops in total.`;
      } else {
        return `Your must travel through the following stop on the ${startingLine}:${destinationStation}.\n${
          singleLineTravel.length + 1
        } stop in total.`;
      }
    }
    if (
      startingLine === "N Line" &&
      stationNetwork[0].stationNames.indexOf(startingStation) >
        stationNetwork[0].stationNames.indexOf(destinationStation)
    ) {
      const copyArr = stationNetwork[0].stationNames.slice();
      const reverseArr = copyArr.reverse();
      const singleLineTravel = reverseArr.slice(
        reverseArr.indexOf(startingStation) + 1,
        reverseArr.indexOf(destinationStation)
      );
      if (singleLineTravel.length >= 1) {
        return `Your must travel through the following stops on the ${startingLine}:${singleLineTravel},${destinationStation}.\n${
          singleLineTravel.length + 1
        } stops in total.`;
      } else {
        return `Your must travel through the following stop on the ${startingLine}:${destinationStation}.\n${
          singleLineTravel.length + 1
        } stop in total.`;
      }
    }
    if (
      startingLine === "L Line" &&
      stationNetwork[1].stationNames.indexOf(startingStation) <
        stationNetwork[1].stationNames.indexOf(destinationStation)
    ) {
      const singleLineTravel = stationNetwork[1].stationNames.slice(
        stationNetwork[1].stationNames.indexOf(startingStation) + 1,
        stationNetwork[1].stationNames.indexOf(destinationStation)
      );
      if (singleLineTravel.length >= 1) {
        return `Your must travel through the following stops on the ${startingLine}:${singleLineTravel},${destinationStation}.\n${
          singleLineTravel.length + 1
        } stops in total.`;
      } else {
        return `Your must travel through the following stop on the ${startingLine}:${destinationStation}.\n${
          singleLineTravel.length + 1
        } stop in total.`;
      }
    }
    if (
      startingLine === "L Line" &&
      stationNetwork[1].stationNames.indexOf(startingStation) >
        stationNetwork[1].stationNames.indexOf(destinationStation)
    ) {
      const copyArr = stationNetwork[1].stationNames.slice();
      const reverseArr = copyArr.reverse();
      const singleLineTravel = reverseArr.slice(
        reverseArr.indexOf(startingStation) + 1,
        reverseArr.indexOf(destinationStation)
      );
      if (singleLineTravel.length >= 1) {
        return `Your must travel through the following stops on the ${startingLine}:${singleLineTravel},${destinationStation}.\n${
          singleLineTravel.length + 1
        } stops in total.`;
      } else {
        return `Your must travel through the following stop on the ${startingLine}:${destinationStation}.\n${
          singleLineTravel.length + 1
        } stop in total.`;
      }
    }
    if (
      startingLine === "6 Line" &&
      stationNetwork[2].stationNames.indexOf(startingStation) <
        stationNetwork[2].stationNames.indexOf(destinationStation)
    ) {
      const singleLineTravel = stationNetwork[2].stationNames.slice(
        stationNetwork[2].stationNames.indexOf(startingStation) + 1,
        stationNetwork[2].stationNames.indexOf(destinationStation)
      );
      if (singleLineTravel.length >= 1) {
        return `Your must travel through the following stops on the ${startingLine}:${singleLineTravel},${destinationStation}.\n${
          singleLineTravel.length + 1
        } stops in total.`;
      } else {
        return `Your must travel through the following stop on the ${startingLine}:${destinationStation}.\n${
          singleLineTravel.length + 1
        } stop in total.`;
      }
    }
    if (
      startingLine === "6 Line" &&
      stationNetwork[2].stationNames.indexOf(startingStation) >
        stationNetwork[2].stationNames.indexOf(destinationStation)
    ) {
      const copyArr = stationNetwork[2].stationNames.slice();
      const reverseArr = copyArr.reverse();
      const singleLineTravel = reverseArr.slice(
        reverseArr.indexOf(startingStation) + 1,
        reverseArr.indexOf(destinationStation)
      );
      if (singleLineTravel.length >= 1) {
        return `Your must travel through the following stops on the ${startingLine}:${singleLineTravel},${destinationStation}.\n${
          singleLineTravel.length + 1
        } stops in total.`;
      } else {
        return `Your must travel through the following stop on the ${startingLine}:${destinationStation}.\n${
          singleLineTravel.length + 1
        } stop in total.`;
      }
    }
  }
  if (startingLine !== destinationLine) {
    const intersectionNline = stationNetwork[0].stationNames[4];
    const intersectionLline = stationNetwork[1].stationNames[2];
    const intersection6line = stationNetwork[2].stationNames[4];
    if (startingLine === "N Line" && destinationLine === "L Line") {
      if (
        stationNetwork[0].stationNames.indexOf(startingStation) <
          stationNetwork[0].stationNames.indexOf(intersectionNline) &&
        stationNetwork[1].stationNames.indexOf(intersectionLline) >
          stationNetwork[1].stationNames.indexOf(destinationStation) &&
        stationNetwork[1].stationNames.indexOf(destinationStation) <= 1
      ) {
        const startingLineStops = stationNetwork[0].stationNames.slice(
          stationNetwork[0].stationNames.indexOf(startingStation) + 1,
          stationNetwork[0].stationNames.indexOf(intersectionNline)
        );
        const copyArr = stationNetwork[1].stationNames.slice();
        const reverseArr = copyArr.reverse();
        const destinationLineStops = reverseArr.slice(
          reverseArr.indexOf(intersectionLline) + 1,
          reverseArr.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${startingLineStops},${intersectionNline}.\nChange at ${intersectionLline}.\nYour journey continues through the following stops:${destinationLineStops},${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }

      if (
        stationNetwork[0].stationNames.indexOf(startingStation) <
          stationNetwork[0].stationNames.indexOf(intersectionNline) &&
        stationNetwork[1].stationNames.indexOf(intersectionLline) <
          stationNetwork[1].stationNames.indexOf(destinationStation) &&
        stationNetwork[1].stationNames.indexOf(destinationStation) > 2
      ) {
        const startingLineStops = stationNetwork[0].stationNames.slice(
          stationNetwork[0].stationNames.indexOf(startingStation) + 1,
          stationNetwork[0].stationNames.indexOf(intersectionNline)
        );

        const destinationLineStops = stationNetwork[1].stationNames.slice(
          stationNetwork[1].stationNames.indexOf(intersectionLline) + 1,
          stationNetwork[1].stationNames.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${startingLineStops},${intersectionNline}.\nChange at ${intersectionLline}.\nYour journey continues through the following stops:${destinationLineStops},${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[0].stationNames.indexOf(startingStation) >
          stationNetwork[0].stationNames.indexOf(intersectionNline) &&
        stationNetwork[1].stationNames.indexOf(intersectionLline) >
          stationNetwork[1].stationNames.indexOf(destinationStation) &&
        stationNetwork[1].stationNames.indexOf(destinationStation) <= 1
      ) {
        const copyArr = stationNetwork[0].stationNames.slice();
        const reverseArr = copyArr.reverse();
        const startingLineStops = reverseArr.slice(
          reverseArr.indexOf(startingStation) + 1,
          reverseArr.indexOf(intersectionNline)
        );

        const copyArr1 = stationNetwork[1].stationNames.slice();
        const reverseArr1 = copyArr1.reverse();
        const destinationLineStops = reverseArr1.slice(
          reverseArr1.indexOf(intersectionLline) + 1,
          reverseArr1.indexOf(destinationStation)
        );

        return `Your must travel through the following stops on the ${startingLine}:${intersectionNline}.\nChange at ${intersectionNline}.\nYour journey continues through the following stops:${destinationLineStops},${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[0].stationNames.indexOf(startingStation) >
          stationNetwork[0].stationNames.indexOf(intersectionNline) &&
        stationNetwork[1].stationNames.indexOf(intersectionLline) <
          stationNetwork[1].stationNames.indexOf(destinationStation) &&
        stationNetwork[1].stationNames.indexOf(destinationStation) > 2
      ) {
        const copyArr = stationNetwork[0].stationNames.slice();
        const reverseArr = copyArr.reverse();
        const startingLineStops = reverseArr.slice(
          reverseArr.indexOf(startingStation) + 1,
          reverseArr.indexOf(intersectionNline)
        );
        const destinationLineStops = stationNetwork[1].stationNames.slice(
          stationNetwork[1].stationNames.indexOf(intersectionLline) + 1,
          stationNetwork[1].stationNames.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${intersectionNline}.\nChange at ${intersectionLline}.\nYour journey continues through the following stops:${destinationLineStops},${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
    }
    if ((startingLine === "N Line") & (destinationLine === "6 Line")) {
      if (
        stationNetwork[0].stationNames.indexOf(startingStation) <
          stationNetwork[0].stationNames.indexOf(intersectionNline) &&
        stationNetwork[2].stationNames.indexOf(intersection6line) <
          stationNetwork[2].stationNames.indexOf(destinationStation) &&
        stationNetwork[2].stationNames.indexOf(destinationStation) > 4
      ) {
        const startingLineStops = stationNetwork[0].stationNames.slice(
          stationNetwork[0].stationNames.indexOf(startingStation) + 1,
          stationNetwork[0].stationNames.indexOf(intersectionNline)
        );

        const destinationLineStops = stationNetwork[2].stationNames.slice(
          stationNetwork[2].stationNames.indexOf(intersection6line) + 1,
          stationNetwork[2].stationNames.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${startingLineStops},${intersectionNline}.\nChange at ${intersection6line}.\nYour journey continues through the following stops:${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[0].stationNames.indexOf(startingStation) <
          stationNetwork[0].stationNames.indexOf(intersectionNline) &&
        stationNetwork[2].stationNames.indexOf(intersection6line) >
          stationNetwork[2].stationNames.indexOf(destinationStation) &&
        stationNetwork[2].stationNames.indexOf(destinationStation) < 4
      ) {
        const startingLineStops = stationNetwork[0].stationNames.slice(
          stationNetwork[0].stationNames.indexOf(startingStation) + 1,
          stationNetwork[0].stationNames.indexOf(intersectionNline)
        );
        const copyArr1 = stationNetwork[2].stationNames.slice();
        const reverseArr1 = copyArr1.reverse();
        const destinationLineStops = reverseArr1.slice(
          reverseArr1.indexOf(intersection6line) + 1,
          reverseArr1.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${startingLineStops},${intersectionNline}.\nChange at ${intersection6line}.\nYour journey continues through the following stops:${destinationLineStops},${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[0].stationNames.indexOf(startingStation) >
          stationNetwork[0].stationNames.indexOf(intersectionNline) &&
        stationNetwork[2].stationNames.indexOf(intersection6line) <
          stationNetwork[2].stationNames.indexOf(destinationStation) &&
        stationNetwork[2].stationNames.indexOf(destinationStation) > 4
      ) {
        const copyArr = stationNetwork[0].stationNames.slice();
        const reverseArr = copyArr.reverse();
        const startingLineStops = reverseArr.slice(
          reverseArr.indexOf(startingStation) + 1,
          reverseArr.indexOf(intersectionNline)
        );
        const destinationLineStops = stationNetwork[2].stationNames.slice(
          stationNetwork[2].stationNames.indexOf(intersection6line) + 1,
          stationNetwork[2].stationNames.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${intersectionNline}.\nChange at ${intersection6line}.\nYour journey continues through the following stops:${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[0].stationNames.indexOf(startingStation) >
          stationNetwork[0].stationNames.indexOf(intersectionNline) &&
        stationNetwork[2].stationNames.indexOf(intersection6line) >
          stationNetwork[2].stationNames.indexOf(destinationStation) &&
        stationNetwork[2].stationNames.indexOf(destinationStation) < 4
      ) {
        const copyArr = stationNetwork[0].stationNames.slice();
        const reverseArr = copyArr.reverse();
        const startingLineStops = reverseArr.slice(
          reverseArr.indexOf(startingStation) + 1,
          reverseArr.indexOf(intersectionNline)
        );
        const copyArr1 = stationNetwork[2].stationNames.slice();
        const reverseArr1 = copyArr1.reverse();
        const destinationLineStops = reverseArr1.slice(
          reverseArr1.indexOf(intersectionLline) + 1,
          reverseArr1.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${intersectionNline}.\nChange at ${intersection6line}.\nYour journey continues through the following stops:${destinationLineStops},${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
    }
    if (startingLine === "L Line" && destinationLine === "N Line") {
      if (
        stationNetwork[1].stationNames.indexOf(startingStation) <
          stationNetwork[1].stationNames.indexOf(intersectionLline) &&
        stationNetwork[0].stationNames.indexOf(intersectionNline) >
          stationNetwork[0].stationNames.indexOf(destinationStation) &&
        stationNetwork[0].stationNames.indexOf(destinationStation) < 4
      ) {
        const startingLineStops = stationNetwork[1].stationNames.slice(
          stationNetwork[1].stationNames.indexOf(startingStation) + 1,
          stationNetwork[1].stationNames.indexOf(intersectionLline)
        );
        const copyArr = stationNetwork[0].stationNames.slice();
        const reverseArr = copyArr.reverse();
        const destinationLineStops = reverseArr.slice(
          reverseArr.indexOf(intersectionNline) + 1,
          reverseArr.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${startingLineStops},${intersectionLline}.\nChange at ${intersectionLline}.\nYour journey continues through the following stops:${destinationLineStops},${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[1].stationNames.indexOf(startingStation) <
          stationNetwork[1].stationNames.indexOf(intersectionLline) &&
        stationNetwork[0].stationNames.indexOf(intersectionNline) <
          stationNetwork[0].stationNames.indexOf(destinationStation) &&
        stationNetwork[0].stationNames.indexOf(destinationStation) > 4
      ) {
        const startingLineStops = stationNetwork[1].stationNames.slice(
          stationNetwork[1].stationNames.indexOf(startingStation) + 1,
          stationNetwork[1].stationNames.indexOf(intersectionLline)
        );
        const destinationLineStops = stationNetwork[0].stationNames.slice(
          stationNetwork[0].stationNames.indexOf(intersectionNline) + 1,
          stationNetwork[0].stationNames.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${intersectionLline}.\nChange at ${intersectionLline}.\nYour journey continues through the following stops:${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[1].stationNames.indexOf(startingStation) >
          stationNetwork[1].stationNames.indexOf(intersectionLline) &&
        stationNetwork[0].stationNames.indexOf(intersectionNline) >
          stationNetwork[0].stationNames.indexOf(destinationStation) &&
        stationNetwork[0].stationNames.indexOf(destinationStation) < 4
      ) {
        const copyArr = stationNetwork[1].stationNames.slice();
        const reverseArr = copyArr.reverse();
        const startingLineStops = reverseArr.slice(
          reverseArr.indexOf(startingStation) + 1,
          reverseArr.indexOf(intersectionLline)
        );
        const copyArr1 = stationNetwork[0].stationNames.slice();
        const reverseArr1 = copyArr1.reverse();
        const destinationLineStops = reverseArr1.slice(
          reverseArr1.indexOf(intersectionNline) + 1,
          reverseArr1.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${startingLineStops},${intersectionLline}.\nChange at ${intersectionNline}.\nYour journey continues through the following stops:${destinationLineStops},${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[1].stationNames.indexOf(startingStation) >
          stationNetwork[1].stationNames.indexOf(intersectionLline) &&
        stationNetwork[0].stationNames.indexOf(intersectionNline) <
          stationNetwork[0].stationNames.indexOf(destinationStation) &&
        stationNetwork[0].stationNames.indexOf(destinationStation) > 4
      ) {
        const copyArr = stationNetwork[1].stationNames.slice();
        const reverseArr = copyArr.reverse();
        const startingLineStops = reverseArr.slice(
          reverseArr.indexOf(startingStation) + 1,
          reverseArr.indexOf(intersectionLline)
        );
        const destinationLineStops = stationNetwork[0].stationNames.slice(
          stationNetwork[0].stationNames.indexOf(intersectionNline) + 1,
          stationNetwork[0].stationNames.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${intersectionLline}.\nChange at ${intersectionLline}.\nYour journey continues through the following stops:${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
    }
    if (startingLine === "L Line" && destinationLine === "6 Line") {
      if (
        stationNetwork[1].stationNames.indexOf(startingStation) <
          stationNetwork[1].stationNames.indexOf(intersectionLline) &&
        stationNetwork[2].stationNames.indexOf(intersection6line) >
          stationNetwork[2].stationNames.indexOf(destinationStation) &&
        stationNetwork[2].stationNames.indexOf(destinationStation) < 4
      ) {
        const startingLineStops = stationNetwork[1].stationNames.slice(
          stationNetwork[1].stationNames.indexOf(startingStation) + 1,
          stationNetwork[1].stationNames.indexOf(intersectionLline)
        );
        const copyArr = stationNetwork[2].stationNames.slice();
        const reverseArr = copyArr.reverse();
        const destinationLineStops = reverseArr.slice(
          reverseArr.indexOf(intersection6line) + 1,
          reverseArr.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${startingLineStops},${intersectionLline}.\nChange at ${intersectionLline}.\nYour journey continues through the following stops:${destinationLineStops},${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[1].stationNames.indexOf(startingStation) <
          stationNetwork[1].stationNames.indexOf(intersectionLline) &&
        stationNetwork[2].stationNames.indexOf(intersection6line) <
          stationNetwork[2].stationNames.indexOf(destinationStation) &&
        stationNetwork[2].stationNames.indexOf(destinationStation) > 4
      ) {
        const startingLineStops = stationNetwork[1].stationNames.slice(
          stationNetwork[1].stationNames.indexOf(startingStation) + 1,
          stationNetwork[1].stationNames.indexOf(intersectionLline)
        );
        const destinationLineStops = stationNetwork[2].stationNames.slice(
          stationNetwork[2].stationNames.indexOf(intersection6line) + 1,
          stationNetwork[2].stationNames.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${intersectionLline}.\nChange at ${intersectionLline}.\nYour journey continues through the following stops:${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[1].stationNames.indexOf(startingStation) >
          stationNetwork[1].stationNames.indexOf(intersectionLline) &&
        stationNetwork[2].stationNames.indexOf(intersection6line) >
          stationNetwork[2].stationNames.indexOf(destinationStation) &&
        stationNetwork[2].stationNames.indexOf(destinationStation) < 4
      ) {
        const copyArr = stationNetwork[1].stationNames.slice();
        const reverseArr = copyArr.reverse();
        const startingLineStops = reverseArr.slice(
          reverseArr.indexOf(startingStation) + 1,
          reverseArr.indexOf(intersectionLline)
        );
        const copyArr1 = stationNetwork[2].stationNames.slice();
        const reverseArr1 = copyArr1.reverse();
        const destinationLineStops = reverseArr1.slice(
          reverseArr1.indexOf(intersection6line) + 1,
          reverseArr1.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${startingLineStops},${intersectionLline}.\nChange at ${intersectionNline}.\nYour journey continues through the following stops:${destinationLineStops},${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[1].stationNames.indexOf(startingStation) >
          stationNetwork[1].stationNames.indexOf(intersectionLline) &&
        stationNetwork[2].stationNames.indexOf(intersection6line) <
          stationNetwork[2].stationNames.indexOf(destinationStation) &&
        stationNetwork[2].stationNames.indexOf(destinationStation) > 4
      ) {
        const copyArr = stationNetwork[1].stationNames.slice();
        const reverseArr = copyArr.reverse();
        const startingLineStops = reverseArr.slice(
          reverseArr.indexOf(startingStation) + 1,
          reverseArr.indexOf(intersectionLline)
        );
        const destinationLineStops = stationNetwork[2].stationNames.slice(
          stationNetwork[2].stationNames.indexOf(intersection6line) + 1,
          stationNetwork[2].stationNames.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${startingLineStops},${intersectionLline}.\nChange at ${intersectionLline}.\nYour journey continues through the following stops:${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
    }
    if (startingLine === "6 Line" && destinationLine === "N Line") {
      if (
        stationNetwork[2].stationNames.indexOf(startingStation) <
          stationNetwork[2].stationNames.indexOf(intersection6line) &&
        stationNetwork[0].stationNames.indexOf(intersectionNline) >
          stationNetwork[0].stationNames.indexOf(destinationStation) &&
        stationNetwork[0].stationNames.indexOf(destinationStation) < 4
      ) {
        const startingLineStops = stationNetwork[2].stationNames.slice(
          stationNetwork[2].stationNames.indexOf(startingStation) + 1,
          stationNetwork[2].stationNames.indexOf(intersection6line)
        );
        const copyArr = stationNetwork[0].stationNames.slice();
        const reverseArr = copyArr.reverse();
        const destinationLineStops = reverseArr.slice(
          reverseArr.indexOf(intersectionNline) + 1,
          reverseArr.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${startingLineStops},${intersection6line}.\nChange at ${intersection6line}.\nYour journey continues through the following stops:${destinationLineStops},${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[2].stationNames.indexOf(startingStation) <
          stationNetwork[2].stationNames.indexOf(intersection6line) &&
        stationNetwork[0].stationNames.indexOf(intersectionNline) <
          stationNetwork[0].stationNames.indexOf(destinationStation) &&
        stationNetwork[0].stationNames.indexOf(destinationStation) > 4
      ) {
        const startingLineStops = stationNetwork[2].stationNames.slice(
          stationNetwork[2].stationNames.indexOf(startingStation) + 1,
          stationNetwork[2].stationNames.indexOf(intersection6line)
        );
        const destinationLineStops = stationNetwork[0].stationNames.slice(
          stationNetwork[0].stationNames.indexOf(intersectionNline) + 1,
          stationNetwork[0].stationNames.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${intersection6line}.\nChange at ${intersection6line}.\nYour journey continues through the following stops:${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[2].stationNames.indexOf(startingStation) >
          stationNetwork[2].stationNames.indexOf(intersection6line) &&
        stationNetwork[0].stationNames.indexOf(intersectionNline) >
          stationNetwork[0].stationNames.indexOf(destinationStation) &&
        stationNetwork[0].stationNames.indexOf(destinationStation) < 4
      ) {
        const copyArr = stationNetwork[2].stationNames.slice();
        const reverseArr = copyArr.reverse();
        const startingLineStops = reverseArr.slice(
          reverseArr.indexOf(intersection6line) + 1,
          reverseArr.indexOf(destinationStation)
        );
        const destinationLineStops = stationNetwork[0].stationNames.slice(
          stationNetwork[0].stationNames.indexOf(intersectionNline) + 1,
          stationNetwork[0].stationNames.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${intersection6line}.\nChange at ${intersection6line}.\nYour journey continues through the following stops:${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[2].stationNames.indexOf(startingStation) >
          stationNetwork[2].stationNames.indexOf(intersection6line) &&
        stationNetwork[0].stationNames.indexOf(intersectionNline) <
          stationNetwork[0].stationNames.indexOf(destinationStation) &&
        stationNetwork[0].stationNames.indexOf(destinationStation) > 4
      ) {
        const startingLineStops = stationNetwork[2].stationNames.slice(
          stationNetwork[2].stationNames.indexOf(startingStation) + 1,
          stationNetwork[2].stationNames.indexOf(intersection6line)
        );
        const destinationLineStops = stationNetwork[0].stationNames.slice(
          stationNetwork[0].stationNames.indexOf(intersectionNline) + 1,
          stationNetwork[0].stationNames.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${intersection6line}.\nChange at ${intersection6line}.\nYour journey continues through the following stops:${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
    }
    if (startingLine === "6 Line" && destinationLine === "L Line") {
      if (
        stationNetwork[2].stationNames.indexOf(startingStation) <
          stationNetwork[2].stationNames.indexOf(intersection6line) &&
        stationNetwork[1].stationNames.indexOf(intersectionLline) >
          stationNetwork[1].stationNames.indexOf(destinationStation) &&
        stationNetwork[1].stationNames.indexOf(destinationStation) < 2
      ) {
        const startingLineStops = stationNetwork[2].stationNames.slice(
          stationNetwork[2].stationNames.indexOf(startingStation) + 1,
          stationNetwork[2].stationNames.indexOf(intersection6line)
        );
        const copyArr = stationNetwork[1].stationNames.slice();
        const reverseArr = copyArr.reverse();
        const destinationLineStops = reverseArr.slice(
          reverseArr.indexOf(intersectionLline) + 1,
          reverseArr.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${startingLineStops},${intersection6line}.\nChange at ${intersection6line}.\nYour journey continues through the following stops:${destinationLineStops},${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[2].stationNames.indexOf(startingStation) <
          stationNetwork[2].stationNames.indexOf(intersection6line) &&
        stationNetwork[1].stationNames.indexOf(intersectionLline) <
          stationNetwork[1].stationNames.indexOf(destinationStation) &&
        stationNetwork[1].stationNames.indexOf(destinationStation) > 2
      ) {
        const startingLineStops = stationNetwork[2].stationNames.slice(
          stationNetwork[2].stationNames.indexOf(startingStation) + 1,
          stationNetwork[2].stationNames.indexOf(intersection6line)
        );
        const destinationLineStops = stationNetwork[1].stationNames.slice(
          stationNetwork[1].stationNames.indexOf(intersectionLline) + 1,
          stationNetwork[1].stationNames.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${startingLineStops},${intersection6line}.\nChange at ${intersection6line}.\nYour journey continues through the following stops:${destinationLineStops},${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[2].stationNames.indexOf(startingStation) >
          stationNetwork[2].stationNames.indexOf(intersection6line) &&
        stationNetwork[1].stationNames.indexOf(intersectionLline) >
          stationNetwork[1].stationNames.indexOf(destinationStation) &&
        stationNetwork[1].stationNames.indexOf(destinationStation) < 2
      ) {
        const copyArr = stationNetwork[2].stationNames.slice();
        const reverseArr = copyArr.reverse();
        const startingLineStops = reverseArr.slice(
          reverseArr.indexOf(startingStation) + 1,
          reverseArr.indexOf(intersection6line)
        );
        const copyArr1 = stationNetwork[1].stationNames.slice();
        const reverseArr1 = copyArr1.reverse();
        const destinationLineStops = reverseArr1.slice(
          reverseArr1.indexOf(intersectionLline) + 1,
          reverseArr1.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${intersection6line}.\nChange at ${intersection6line}.\nYour journey continues through the following stops:${destinationLineStops},${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
      if (
        stationNetwork[2].stationNames.indexOf(startingStation) >
          stationNetwork[2].stationNames.indexOf(intersection6line) &&
        stationNetwork[1].stationNames.indexOf(intersectionLline) <
          stationNetwork[1].stationNames.indexOf(destinationStation) &&
        stationNetwork[1].stationNames.indexOf(destinationStation) > 2
      ) {
        const copyArr = stationNetwork[2].stationNames.slice();
        const reverseArr = copyArr.reverse();
        const startingLineStops = reverseArr.slice(
          reverseArr.indexOf(startingStation) + 1,
          reverseArr.indexOf(intersection6line)
        );
        const destinationLineStops = stationNetwork[1].stationNames.slice(
          stationNetwork[1].stationNames.indexOf(intersectionLline) + 1,
          stationNetwork[1].stationNames.indexOf(destinationStation)
        );
        return `Your must travel through the following stops on the ${startingLine}:${intersection6line}.\nChange at ${intersection6line}.\nYour journey continues through the following stops:${destinationLineStops},${destinationStation}.\n${
          startingLineStops.length + destinationLineStops.length + 2
        } stops in total.`;
      }
    }
  }
};

console.log(
  test1(startingLine, startingStation, destinationLine, destinationStation)
);

//
//
//
//Testing Logs
// console.log(test1("6 Line", "Grand Central", "N Line", "Time Square"));
// console.log(test1("6 Line", "33rd", "N Line", "8th"));
// console.log(test1("6 Line", "Astor Place", "N Line", "28th"));
// console.log(test1("6 Line", "Astor Place", "N Line", "8th"));
// console.log(test1("6 Line", "28th", "L Line", "8th"));
// console.log(test1("6 Line", "33rd", "L Line", "1st"));
// console.log(test1("6 Line", "Astor Place", "L Line", "8th"));
// console.log(test1("6 Line", "Astor Place", "L Line", "1st"));

// console.log(test1("L Line", "8th", "N Line", "Time Square"));
// console.log(test1("L Line", "6th", "N Line", "8th"));
// console.log(test1("L Line", "1st", "N Line", "34th"));
// console.log(test1("L Line", "3rd", "N Line", "8th"));
// console.log(test1("L Line", "8th", "6 Line", "Grand Central"));
// console.log(test1("L Line", "6th", "6 Line", "Astor Place"));
// console.log(test1("L Line", "1st", "6 Line", "34th"));
// console.log(test1("L Line", "1st", "6 Line", "Astor Place"));

// console.log(test1("N Line", "Time Square", "L Line", "8th"));
// console.log(test1("N Line", "34th", "L Line", "1st"));
// console.log(test1("N Line", "8th", "L Line", "8th"));
// console.log(test1("N Line", "8th", "L Line", "1st"));
// console.log(test1("N Line", "Time Square", "6 Line", "Astor Place"));
// console.log(test1("N Line", "28th", "6 Line", "Grand Central"));
// console.log(test1("N Line", "8th", "6 Line", "Astor Place"));
// console.log(test1("N Line", "8th", "6 Line", "Grand Central"));

// console.log(test1("N Line", "34th", "N Line", "8th"));
// console.log(test1("N Line", "8th", "N Line", "34th"));
// console.log(test1("N Line", "28th", "N Line", "8th"));
// console.log(test1("N Line", "8th", "N Line", "28th"));
// console.log(test1("N Line", "Union Square", "N Line", "8th"));
// console.log(test1("N Line", "8th", "N Line", "Union Square"));
// console.log(test1("N Line", "34th", "N Line", "28th"));
// console.log(test1("N Line", "28th", "N Line", "34th"));

// console.log(test1("N Line", "28th", "N Line", "Union Square"));
// console.log(test1("N Line", "Union Square", "N Line", "28th"));

// console.log(test1("N Line", "Union Square", "N Line", "34th"));
// console.log(test1("N Line", "34th", "N Line", "Union Square"));

// console.log(test1("L Line", "1st", "L Line", "Union Square"));
// console.log(test1("L Line", "Union Square", "L Line", "1st"));

// console.log(test1("L Line", "8th", "L Line", "3rd"));
// console.log(test1("L Line", "3rd", "L Line", "8th"));

// console.log(test1("6 Line", "Astor Place", "6 Line", "33rd"));
// console.log(test1("6 Line", "33rd", "6 Line", "Astor Place"));

// console.log(test1("6 Line", "Union Square", "6 Line", "28th"));
// console.log(test1("6 Line", "28th", "6 Line", "Union Square"));
// console.log(test1("6 Line", "Grand Central", "6 Line", "33rd"));
// console.log(test1("6 Line", "33rd", "6 Line", "Grand Central"));

// console.log(test1("N Line", "Time Square", "6 Line", "33rd"));

//////

//
//
//1. Hard code minimum version
// const stationNetwork = [
//     {
//       lineName: "N Line",
//       stationNames: [
//         " Time Square",
//         " 34th",
//         " 28th",
//         " 23rd",
//         " Union Square",
//         " 8th",
//       ],
//     },
//     {
//       lineName: "L line",
//       stationNames: [" 8th", " 6th", " Union Square", " 3rd", " 1st"],
//     },
//     {
//       lineName: "6 Line",
//       stationNames: [
//         " Grand Central",
//         " 33rd",
//         " 28th",
//         " 23rd",
//         " Union Square",
//         " Astor Place",
//       ],
//     },
//   ];

//   const test1 = function (
//     startingLine,
//     startingStation,
//     destinationLine,
//     destinationStation
//   ) {
//     const intersectionNline = stationNetwork[0].stationNames[4];
//     const intersectionLline = stationNetwork[1].stationNames[2];
//     const intersection6line = stationNetwork[2].stationNames[4];

//     const startingLineStops = stationNetwork[0].stationNames.slice(
//       stationNetwork[0].stationNames.indexOf(startingStation) + 2,
//       stationNetwork[0].stationNames.indexOf(intersectionNline)
//     );
//     const copyArr = stationNetwork[2].stationNames.slice();
//     const reverseArr = copyArr.reverse();
//     const destinationLineStops = stationNetwork[2].stationNames.slice(
//       reverseArr.indexOf(intersection6line),
//       reverseArr.indexOf(destinationStation) - 1
//     );
//     return `Your must travel through the following stops on the ${startingLine}:${startingLineStops},${intersectionNline}.\nChange at${intersectionNline}.\nYour journey continues through the following stops:${destinationLineStops.reverse()}.\n${
//       startingLineStops.length + destinationLineStops.length + 1
//     } stops in total.`;
//   };

//   console.log(test1("N Line", "Time Square", "6 Line", "33rd"));

////
//
///
//
//
// Figured out how slice really works yes!
// const haha1 = [1, 2, 3, 4, 5, 6];

// const arrCheck = haha1.slice();
// const reversehaha1 = arrCheck.reverse();

// console.log(haha1);
// console.log(reversehaha1);

// const t1 = haha1.slice(0 + 1, 4);
// const t2 = reversehaha1.slice(0 + 1, 4);

// console.log(t1);
// console.log(t2);
// console.log(t2.reverse());
//
//
//
//
//

//2. Single lines version
// const stationNetwork = [
//     {
//       lineName: "N Line",
//       stationNames: [
//         "Time Square",
//         "34th",
//         "28th",
//         "23rd",
//         "Union Square",
//         "8th",
//       ],
//     },
//     {
//       lineName: "L line",
//       stationNames: ["8th", "6th", "Union Square", "3rd", "1st"],
//     },
//     {
//       lineName: "6 Line",
//       stationNames: [
//         "Grand Central",
//         "33rd",
//         "28th",
//         "23rd",
//         "Union Square",
//         "Astor Place",
//       ],
//     },
//   ];

//   const test1 = function (
//     startingLine,
//     startingStation,
//     destinationLine,
//     destinationStation
//   ) {
//     if (startingLine === destinationLine) {
//       if (
//         startingLine === "N Line" &&
//         stationNetwork[0].stationNames.indexOf(startingStation) <
//           stationNetwork[0].stationNames.indexOf(destinationStation)
//       ) {
//         const singleLineTravel = stationNetwork[0].stationNames.slice(
//           stationNetwork[0].stationNames.indexOf(startingStation) + 1,
//           stationNetwork[0].stationNames.indexOf(destinationStation)
//         );
//         if (singleLineTravel.length >= 1) {
//           return `Your must travel through the following stops on the ${startingLine}:${singleLineTravel},${destinationStation}.\n${
//             singleLineTravel.length + 1
//           } stops in total.`;
//         } else {
//           return `Your must travel through the following stop on the ${startingLine}:${destinationStation}.\n${
//             singleLineTravel.length + 1
//           } stop in total.`;
//         }
//       }
//       if (
//         startingLine === "N Line" &&
//         stationNetwork[0].stationNames.indexOf(startingStation) >
//           stationNetwork[0].stationNames.indexOf(destinationStation)
//       ) {
//         const copyArr = stationNetwork[0].stationNames.slice();
//         const reverseArr = copyArr.reverse();
//         const singleLineTravel = reverseArr.slice(
//           reverseArr.indexOf(startingStation) + 1,
//           reverseArr.indexOf(destinationStation)
//         );
//         if (singleLineTravel.length >= 1) {
//           return `Your must travel through the following stops on the ${startingLine}:${singleLineTravel},${destinationStation}.\n${
//             singleLineTravel.length + 1
//           } stops in total.`;
//         } else {
//           return `Your must travel through the following stop on the ${startingLine}:${destinationStation}.\n${
//             singleLineTravel.length + 1
//           } stop in total.`;
//         }
//       }
//       if (
//         startingLine === "L Line" &&
//         stationNetwork[1].stationNames.indexOf(startingStation) <
//           stationNetwork[1].stationNames.indexOf(destinationStation)
//       ) {
//         const singleLineTravel = stationNetwork[1].stationNames.slice(
//           stationNetwork[1].stationNames.indexOf(startingStation) + 1,
//           stationNetwork[1].stationNames.indexOf(destinationStation)
//         );
//         if (singleLineTravel.length >= 1) {
//           return `Your must travel through the following stops on the ${startingLine}:${singleLineTravel},${destinationStation}.\n${
//             singleLineTravel.length + 1
//           } stops in total.`;
//         } else {
//           return `Your must travel through the following stop on the ${startingLine}:${destinationStation}.\n${
//             singleLineTravel.length + 1
//           } stop in total.`;
//         }
//       }
//       if (
//         startingLine === "L Line" &&
//         stationNetwork[1].stationNames.indexOf(startingStation) >
//           stationNetwork[1].stationNames.indexOf(destinationStation)
//       ) {
//         const copyArr = stationNetwork[1].stationNames.slice();
//         const reverseArr = copyArr.reverse();
//         const singleLineTravel = reverseArr.slice(
//           reverseArr.indexOf(startingStation) + 1,
//           reverseArr.indexOf(destinationStation)
//         );
//         if (singleLineTravel.length >= 1) {
//           return `Your must travel through the following stops on the ${startingLine}:${singleLineTravel},${destinationStation}.\n${
//             singleLineTravel.length + 1
//           } stops in total.`;
//         } else {
//           return `Your must travel through the following stop on the ${startingLine}:${destinationStation}.\n${
//             singleLineTravel.length + 1
//           } stop in total.`;
//         }
//       }
//       if (
//         startingLine === "6 Line" &&
//         stationNetwork[2].stationNames.indexOf(startingStation) <
//           stationNetwork[2].stationNames.indexOf(destinationStation)
//       ) {
//         const singleLineTravel = stationNetwork[2].stationNames.slice(
//           stationNetwork[2].stationNames.indexOf(startingStation) + 1,
//           stationNetwork[2].stationNames.indexOf(destinationStation)
//         );
//         if (singleLineTravel.length >= 1) {
//           return `Your must travel through the following stops on the ${startingLine}:${singleLineTravel},${destinationStation}.\n${
//             singleLineTravel.length + 1
//           } stops in total.`;
//         } else {
//           return `Your must travel through the following stop on the ${startingLine}:${destinationStation}.\n${
//             singleLineTravel.length + 1
//           } stop in total.`;
//         }
//       }
//       if (
//         startingLine === "6 Line" &&
//         stationNetwork[2].stationNames.indexOf(startingStation) >
//           stationNetwork[2].stationNames.indexOf(destinationStation)
//       ) {
//         const copyArr = stationNetwork[2].stationNames.slice();
//         const reverseArr = copyArr.reverse();
//         const singleLineTravel = reverseArr.slice(
//           reverseArr.indexOf(startingStation) + 1,
//           reverseArr.indexOf(destinationStation)
//         );
//         if (singleLineTravel.length >= 1) {
//           return `Your must travel through the following stops on the ${startingLine}:${singleLineTravel},${destinationStation}.\n${
//             singleLineTravel.length + 1
//           } stops in total.`;
//         } else {
//           return `Your must travel through the following stop on the ${startingLine}:${destinationStation}.\n${
//             singleLineTravel.length + 1
//           } stop in total.`;
//         }
//       }
//     }
//   };
//
//
//Testing Logs
// console.log(test1("N Line", "34th", "N Line", "8th"));
// console.log(test1("N Line", "8th", "N Line", "34th"));
// console.log(test1("N Line", "28th", "N Line", "8th"));
// console.log(test1("N Line", "8th", "N Line", "28th"));
// console.log(test1("N Line", "Union Square", "N Line", "8th"));
// console.log(test1("N Line", "8th", "N Line", "Union Square"));
// console.log(test1("N Line", "34th", "N Line", "28th"));
// console.log(test1("N Line", "28th", "N Line", "34th"));

// console.log(test1("N Line", "28th", "N Line", "Union Square"));
// console.log(test1("N Line", "Union Square", "N Line", "28th"));

// console.log(test1("N Line", "Union Square", "N Line", "34th"));
// console.log(test1("N Line", "34th", "N Line", "Union Square"));

// console.log(test1("L Line", "1st", "L Line", "Union Square"));
// console.log(test1("L Line", "Union Square", "L Line", "1st"));

// console.log(test1("L Line", "8th", "L Line", "3rd"));
// console.log(test1("L Line", "3rd", "L Line", "8th"));

// console.log(test1("6 Line", "Astor Place", "6 Line", "33rd"));
// console.log(test1("6 Line", "33rd", "6 Line", "Astor Place"));

// console.log(test1("6 Line", "Union Square", "6 Line", "28th"));
// console.log(test1("6 Line", "28th", "6 Line", "Union Square"));
// console.log(test1("6 Line", "Grand Central", "6 Line", "33rd"));
// console.log(test1("6 Line", "33rd", "6 Line", "Grand Central"));

//
//
//
//
