const lineN = ['Times Square of N', '34th of N', '28th of N', '23rd of N', 'Union Square', '8th of N']
const lineL = ['8th of L', '6th of L', 'Union Square', '3rd of L', '1st of L']
const line6 = ['Grand Central of 6', '33rd of 6', '28th of 6', '23rd of 6', 'Union Square', 'Astor Place of 6']


const planTrip = function(onLine, onStop, offLine, offStop) {
    while (true){
        if (onLine === 'N') {onLine = lineN; break}
        else if (onLine === 'L'){ onLine = lineL; break}
        else if (onLine === '6') {onLine = line6; break}
        else if (onLine === null){alert('Come again when you\'ve made up your mind to travel somewhere!');break}
        else {alert('There are 3 subway lines only: N line, L line and 6 line. Please choose the correct line!')}
        onLine = prompt('Which line would you like to get on? \n\nEnter N for N line, L for L line and 6 for 6 line.')
    }
    while (true){
        if (onLine === lineN && (onStop != 'times square' || onStop != '34th' || onStop != '28th' ||
            onStop != '23rd' || onStop != 'union square' || onStop != '8th')){
            alert('Incorrect stop!')
            onStop = prompt('The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th\n\nPlease enter the stop you would like to get on.')
            if (onStop != null) {onStop.toLowerCase()}
        }
        if (onLine === lineN && (onStop === 'times square' || onStop === '34th' || onStop === '28th' ||
        onStop === '23rd' || onStop === 'union square' || onStop === '8th')){
            break
        }
        

    }
        
        
        
        
    }

        
    // }
   
    

// console.log(lineN.indexOf('Union Square'))

let Q1 = prompt('Which line would you like to get on? \n\nEnter N for N line, L for L line and 6 for 6 line.')
if (Q1 != null) {A1 = Q1.toUpperCase()}
if (A1 === 'N') {
    Q2 = prompt('The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th\n\nPlease enter the stop you would like to get on.')
    if (Q2 != null) {Q2.toLowerCase()}
}
if (Q1 != 'N'){
    Q2 = ""
}

planTrip(A1, Q2, 't', 't')
