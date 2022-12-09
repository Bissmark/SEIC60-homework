const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
const lineL = ['8th', '6th', 'Union Square', '3rd', '1st']
const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']


const planTrip = function() {
    onLine = prompt('GET ON GET ON GET ON GET ON GET ON GET ON \n\nWhich line would you like to get on? \n\nEnter N for N line, L for L line and 6 for 6 line.')
    while (onLine != 'n' && onLine != 'l'  && onLine != '6' && onLine != null){
        onStop = ""
        alert('GET ON GET ON GET ON GET ON GET ON GET ON \n\nThere are 3 subway lines only: N line, L line and 6 line. Please choose the correct line!')
        onLine = prompt('GET ON GET ON GET ON GET ON GET ON GET ON \n\nWhich line would you like to get on? \n\nEnter N for N line, L for L line and 6 for 6 line.')
        if (onLine != null) {onLine = onLine.toLowerCase()}  
    }
    if (onLine === null){
        alert('Come again when you\'ve made up your mind to travel somewhere!'); return
    }
    if (onLine != null) {onLine = onLine.toLowerCase()}
    if (onLine === 'n') {
        onStop = prompt('GET ON GET ON GET ON GET ON GET ON GET ON \n\nThe N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th.\n\nPlease enter the stop you would like to get on.')
        if (onStop != null) {onStop = onStop.toLowerCase()}
    }
    if (onLine === 'l') {
        onStop = prompt('GET ON GET ON GET ON GET ON GET ON GET ON \n\nThe L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st.\n\nPlease enter the stop you would like to get on.')
        if (onStop != null) {onStop = onStop.toLowerCase()}
    }
    if (onLine === '6') {
        onStop = prompt('GET ON GET ON GET ON GET ON GET ON GET ON \n\nThe 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.\n\nPlease enter the stop you would like to get on.')
        if (onStop != null) {onStop = onStop.toLowerCase()}
    }
    

 
    while (true){
        if (onStop === null) {alert('Come again when you\'ve made up your mind to travel somewhere!'); return}

        if (onLine === 'n' && onStop != 'times square' && onStop != '34th' && onStop != '28th' &&
            onStop != '23rd' && onStop != 'union square' && onStop != '8th') {
            alert('GET ON GET ON GET ON GET ON GET ON GET ON \n\nIncorrect stop!')
            onStop = prompt('GET ON GET ON GET ON GET ON GET ON GET ON \n\nThe N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th.\n\nPlease enter the stop you would like to get on.')
            if (onStop != null) {onStop = onStop.toLowerCase()}
        }
        if (onLine === 'n' && (onStop === 'times square' || onStop === '34th' || onStop === '28th' ||
        onStop === '23rd' || onStop === 'union square' || onStop === '8th')){
            break
        }

        if (onLine === 'l' && onStop != '8th' && onStop != '6th' && onStop != 'union square' &&
            onStop != '3rd' && onStop != '1st') {
            alert('GET ON GET ON GET ON GET ON GET ON GET ON \n\nIncorrect stop!')
            onStop = prompt('GET ON GET ON GET ON GET ON GET ON GET ON \n\nThe L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st.\n\nPlease enter the stop you would like to get on.')
            if (onStop != null) {onStop = onStop.toLowerCase()}
        }
        if (onLine === 'l' && (onStop === '8th' || onStop === '6th' || onStop === 'union square' ||
        onStop === '3rd' || onStop === '1st')){
            break
        }  

        if (onLine === '6' && onStop != 'grand central' && onStop != '33rd' && onStop != '28th' &&
            onStop != '23rd' && onStop != 'union square' && onStop != 'astor place') {
            alert('GET ON GET ON GET ON GET ON GET ON GET ON \n\nIncorrect stop!')
            onStop = prompt('GET ON GET ON GET ON GET ON GET ON GET ON \n\nThe 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.\n\nPlease enter the stop you would like to get on.')
            if (onStop != null) {onStop = onStop.toLowerCase()}
        }
        if (onLine === '6' && (onStop === 'grand central' || onStop === '33rd' || onStop === '28th' ||
        onStop === '23rd' || onStop === 'union square' || onStop === 'astor place')){
            break
        }  
    }




    







    offLine = prompt('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nWhich line would you like to get off? \n\nEnter N for N line, L for L line and 6 for 6 line.')
    while (offLine != 'n' && offLine != 'l'  && offLine != '6' && offLine != null){
        offStop = ""
        alert('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nThere are 3 subway lines only: N line, L line and 6 line. Please choose the correct line!')
        offLine = prompt('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nWhich line would you like to get off? \n\nEnter N for N line, L for L line and 6 for 6 line.')
        if (offLine != null) {offLine = offLine.toLowerCase()}  
    }
    if (offLine === null){
        alert('Come again when you\'ve made up your mind to travel somewhere!'); return
    }
    if (offLine != null) {offLine = offLine.toLowerCase()}
    if (offLine === 'n') {
        offStop = prompt('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nThe N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th.\n\nPlease enter the stop you would like to get on.')
        if (offStop != null) {offStop = offStop.toLowerCase()}
    }
    if (offLine === 'l') {
        offStop = prompt('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nThe L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st.\n\nPlease enter the stop you would like to get on.')
        if (offStop != null) {offStop = offStop.toLowerCase()}
    }
    if (offLine === '6') {
        offStop = prompt('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nThe 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.\n\nPlease enter the stop you would like to get on.')
        if (offStop != null) {offStop = offStop.toLowerCase()}
    }

 
    while (true){
        if (offLine === null && offStop === "") {break}
        if (offStop === null) {alert('Come again when you\'ve made up your mind to travel somewhere!'); return}

        if (offLine === 'n' && offStop != 'times square' && offStop != '34th' && offStop != '28th' &&
            offStop != '23rd' && offStop != 'union square' && offStop != '8th') {
            alert('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nIncorrect stop!')
            offStop = prompt('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nThe N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th.\n\nPlease enter the stop you would like to get on.')
            if (offStop != null) {offStop = offStop.toLowerCase()}
        }
        if (offLine === 'n' && (offStop === 'times square' || offStop === '34th' || offStop === '28th' ||
        offStop === '23rd' || offStop === 'union square' || offStop === '8th')){
            break
        }

        if (offLine === 'l' && offStop != '8th' && offStop != '6th' && offStop != 'union square' &&
            offStop != '3rd' && offStop != '1st') {
            alert('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nIncorrect stop!')
            offStop = prompt('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nThe L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st.\n\nPlease enter the stop you would like to get on.')
            if (offStop != null) {offStop = offStop.toLowerCase()}
        }
        if (offLine === 'l' && (offStop === '8th' || offStop === '6th' || offStop === 'union square' ||
        offStop === '3rd' || offStop === '1st')){
            break
        }  

        if (offLine === '6' && offStop != 'grand central' && offStop != '33rd' && offStop != '28th' &&
            offStop != '23rd' && offStop != 'union square' && offStop != 'astor place') {
            alert('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nIncorrect stop!')
            offStop = prompt('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nThe 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.\n\nPlease enter the stop you would like to get on.')
            if (onStop != null) {onStop = onStop.toLowerCase()}
        }
        if (offLine === '6' && (offStop === 'grand central' || offStop === '33rd' || offStop === '28th' ||
        offStop === '23rd' || offStop === 'union square' || offStop === 'astor place')){
            break
        }  
    }

 
    
    //Return the station names into proper noun
    const stopName1 = onStop.split(' ')
    if (stopName1.length > 1){
        for (let i = 0; i < stopName1.length; i++) {
            stopName1[i] = stopName1[i][0].toUpperCase() + stopName1[i].substr(1);
        }
        onStop = stopName1.join(' ');
    }
    const stopName2 = offStop.split(' ')
    if (stopName2.length > 1){
        for (let i = 0; i < stopName2.length; i++) {
            stopName2[i] = stopName2[i][0].toUpperCase() + stopName2[i].substr(1);
        }
        offStop = stopName2.join(' ');
    }



    //Logging where you get on and off
    console.log(`Get on at ${onStop} on the ${onLine.toUpperCase()} line`)
    console.log(`Get off at ${offStop} on the ${offLine.toUpperCase()} line`)
       



    //journ1 = first half of the journey
    //journ2 = second half of the journey
    journ1 = []; journ2 = []

    if (onLine === 'n') {journ1 = lineN}
    if (onLine === 'l') {journ1 = lineL}
    if (onLine === '6') {journ1 = line6}
    if (offLine === 'n') {journ2 = lineN}
    if (offLine === 'l') {journ2 = lineL}
    if (offLine === '6') {journ2 = line6}



    //Get on and off at Union Square but from different lines
    if (journ1 != journ2 & onStop === 'Union Square' && offStop === 'Union Square'){
        alert("All 3 subway lines intersect at Union Square,so you don't need to take the subway!")
        return
    }


    //Record the stations that will travel through
    trip1 = []
    trip2 = []

    
    //Same lines
    if (journ1 === journ2){
        //Same stop
        if (journ2.indexOf(offStop) === journ1.indexOf(onStop)){
            alert("Your start and end are the same stop from the same line!")
        }
        //Different stops
        if (journ2.indexOf(offStop) > journ1.indexOf(onStop)){
            trip1 = journ1.slice(journ1.indexOf(onStop) + 1, journ2.indexOf(offStop) + 1)
            console.log(`Your must travel through the following stops on the ${offLine.toUpperCase()} line: ${trip1.join(", ")}`)
             console.log(`${trip1.length} stops in total.`)
        }

        if (journ2.indexOf(offStop) < journ1.indexOf(onStop)){
            for (let i = journ1.indexOf(onStop) - 1 ; i > journ2.indexOf(offStop) - 1; i--){
                trip1.push(journ1[i])
            }
            console.log(`Your must travel through the following stops on the ${offLine.toUpperCase()} line: ${trip1.join(", ")}`)
            console.log(`${trip1.length} stops in total.`)
        }    
    }


    //Get on at Union Square
    if (journ1 != journ2 && onStop === 'Union Square'){
        if (journ2.indexOf(offStop) > journ2.indexOf('Union Square')){
             trip1 = journ2.slice(journ2.indexOf('Union Square') + 1, journ2.indexOf(offStop) + 1)
        }

        if (journ2.indexOf(offStop) < journ2.indexOf('Union Square')){
            for (let i = journ2.indexOf('Union Square') - 1 ; i > journ2.indexOf(offStop) - 1; i--){
               trip1.push(journ2[i])
            }
        }

        console.log(`You are at Union Square, which is a interchange station.`)
        console.log(`Your must travel through the following stops on the ${offLine.toUpperCase()} line: ${trip1.join(", ")}`)
        console.log(`${trip1.length} stops in total.`)
    }


    //Get off at Union Square
    if (journ1 != journ2 && offStop === 'Union Square'){
        if (journ1.indexOf('Union Square') > journ1.indexOf(onStop)){
             trip1 = journ1.slice(journ1.indexOf(onStop) + 1, journ1.indexOf('Union Square') + 1)
        }
        if (journ1.indexOf('Union Square') < journ1.indexOf(onStop)){
            for (let i = journ1.indexOf(onStop) - 1 ; i > journ1.indexOf('Union Square') - 1; i--){
                 trip1.push(journ1[i])
            }
        }

        console.log(`Your must travel through the following stops on the ${onLine.toUpperCase()} line: ${trip1.join(", ")}`)
        console.log(`You are at Union Square, which is a interchange station.`)
        console.log(`${trip1.length} stops in total.`)
    }

        
    //Different lines and different stops
    if (journ1 != journ2 && onStop != 'Union Square' && offStop != 'Union Square'){
        if (journ1.indexOf('Union Square') > journ1.indexOf(onStop)){
             trip1 = journ1.slice(journ1.indexOf(onStop) + 1, journ1.indexOf('Union Square') + 1)
        }

        if (journ1.indexOf('Union Square') < journ1.indexOf(onStop)){
            for (let i = journ1.indexOf(onStop) - 1 ; i > journ1.indexOf('Union Square') - 1; i--){
                 trip1.push(journ1[i])
            }
        }

        console.log(`Your must travel through the following stops on the ${onLine.toUpperCase()} line: ${trip1.join(", ")}`)
        console.log(`Change at Union Square.`)

        if (journ2.indexOf(offStop) > journ2.indexOf('Union Square')){
            trip2 = journ2.slice(journ2.indexOf('Union Square') + 1, journ2.indexOf(offStop) + 1)
        }

        if (journ2.indexOf(offStop) < journ2.indexOf('Union Square')){
            for (let i = journ2.indexOf('Union Square') - 1 ; i > journ2.indexOf(offStop) - 1; i--){
                 trip2.push(journ2[i])
            }
        }

        console.log(`Your journey continues through the following stops on the ${offLine.toUpperCase()} line: ${trip2.join(", ")}`)
        console.log(`${trip1.length + trip2.length} stops in total.`)
    }     
}



planTrip()






