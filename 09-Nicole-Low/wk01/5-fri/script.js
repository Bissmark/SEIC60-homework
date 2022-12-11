//----------------------------------------------
// SUBWAY SYSTEM

const planTrip = function() {

    // getting user input for more of an interactive system
    const onLine = prompt("Which line are you starting at:")
    const onStop = prompt("Which stop are you starting at:")
    const offLine = prompt("Which line are you stopping at:")
    const offStop = prompt("Which stop are you stopping at:")

    // the 3 subway lines
    const lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
    const lineL = ["8th", "6th", "Union Square", "3rd", "1st"]
    const line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

    // initialise the global variables required
    // will always be Union Square because all of the lines only intersect here
    const changeStop = "Union Square"
    let numStops = 0;
    let allOnLineStops = []
    let lineOn = []
    let lineOff = []
    let arrayIndexOn = 0
    let arrayIndexOff = 0
    let lineOnOutput = ""

    // duplicate the on and off lines into different variables based on the user input
    if (onLine === "N") {
        lineOn = lineN
    } else if(onLine === "L") {
        lineOn = lineL
    } else if (onLine === "6"){
        lineOn = line6
    }

    if (offLine === "N") {
        lineOff = lineN
    } else if(offLine === "L") {
        lineOff = lineL
    } else if (offLine === "6"){
        lineOff = line6
    }

    //----------------------------------------------------
    // if on is in the same line as off
    if (onLine === offLine) {
        arrayIndexOn = lineOn.indexOf(onStop)
        arrayIndexOff = lineOn.indexOf(offStop)

        // if the off stop index is lower than the on stop index, a negative value will be returned from the minus operation 
        // absolute value turns a negative number into positive and a positive number into positive
        numStops = Math.abs(arrayIndexOff - arrayIndexOn)

        if (arrayIndexOff > arrayIndexOn) {
            for (let i = arrayIndexOn + 1; i <= arrayIndexOff; i++) {
                allOnLineStops.push(lineOn[i])
            }
        } else {
            for (let i = arrayIndexOn - 1; i >= arrayIndexOff; i--) {
                allOnLineStops.push(lineOn[i])
            }
        }

        allOnLineStops.forEach(function(stop) {
            lineOnOutput += `${stop}, `
        })

        return "You must travel through the following stops on the " + onLine + " line: " + lineOnOutput.slice(0, -2) + ".\n" +
        numStops + " stops in total."
    }

    //----------------------------------------------------
    // if on is not in the same line as off
    let allOffLineStops = []
    let lineOffOutput = ""

    if (onLine !== offLine) {
        arrayIndexOn = lineOn.indexOf(onStop)
        arrayIndexOff = lineOff.indexOf(offStop)
        const arrayIndexOnIntersection = lineOn.indexOf(changeStop)
        const arrayIndexOffIntersection = lineOff.indexOf(changeStop)

        numStops += Math.abs(arrayIndexOn - arrayIndexOnIntersection)

        // first line
        if (arrayIndexOnIntersection > arrayIndexOn) {
            for (let i = arrayIndexOn + 1; i <= arrayIndexOnIntersection; i++) {
                allOnLineStops.push(lineOn[i])
            }
        } else {
            for (let i = arrayIndexOn - 1; i >= arrayIndexOnIntersection; i--) {
                allOnLineStops.push(lineOn[i])
            }
        }

        numStops += Math.abs(arrayIndexOff - arrayIndexOffIntersection)

        // second line
        if (arrayIndexOffIntersection > arrayIndexOff) {
            for (let i = arrayIndexOffIntersection - 1; i >= arrayIndexOff; i--) {
                allOffLineStops.push(lineOff[i])
            }
        } else {
            for (let i = arrayIndexOffIntersection + 1; i <= arrayIndexOff; i++) {
                allOffLineStops.push(lineOff[i])
            }
        }   
        
        allOnLineStops.forEach(function(stop) {
            lineOnOutput += `${stop}, `
        })

        allOffLineStops.forEach(function(stop) {
            lineOffOutput += `${stop}, `
        })

        return "You must travel through the following stops on the " + onLine + " line: " + lineOnOutput.slice(0, -2) + ".\n" +
        "Change at " + changeStop + ".\n" +
        "Your journey continues through the following stops: " + lineOffOutput.slice(0, -2) + ".\n" + 
        numStops + " stops in total."

    }
}

// function call (testing)
console.log(planTrip())
