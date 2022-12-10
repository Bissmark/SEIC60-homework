const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
const lineL = ['8th', '6th', 'Union Square', '3rd', '1st']
const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']



const planTrip = function() {
    onLine = ""; onStop = ""; offLine = ""; offStop = ""
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
            onStop != '23rd' && onStop != 'union square' && onStop != '8th' && onStop != 'ts' && onStop != 'us') {
            alert('GET ON GET ON GET ON GET ON GET ON GET ON \n\nIncorrect stop!')
            onStop = prompt('GET ON GET ON GET ON GET ON GET ON GET ON \n\nThe N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th.\n\nPlease enter the stop you would like to get on.')
            if (onStop != null) {onStop = onStop.toLowerCase()}
        }
        if (onLine === 'n' && (onStop === 'times square' || onStop === '34th' || onStop === '28th' ||
        onStop === '23rd' || onStop === 'union square' || onStop === '8th' || onStop === 'ts' || 
        onStop === 'us')){
            break
        }

        if (onLine === 'l' && onStop != '8th' && onStop != '6th' && onStop != 'union square' &&
            onStop != '3rd' && onStop != '1st' && onStop != 'us') {
            alert('GET ON GET ON GET ON GET ON GET ON GET ON \n\nIncorrect stop!')
            onStop = prompt('GET ON GET ON GET ON GET ON GET ON GET ON \n\nThe L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st.\n\nPlease enter the stop you would like to get on.')
            if (onStop != null) {onStop = onStop.toLowerCase()}
        }
        if (onLine === 'l' && (onStop === '8th' || onStop === '6th' || onStop === 'union square' ||
        onStop === '3rd' || onStop === '1st' || onStop === 'us')){
            break
        }  

        if (onLine === '6' && onStop != 'grand central' && onStop != '33rd' && onStop != '28th' &&
            onStop != '23rd' && onStop != 'union square' && onStop != 'astor place' && onStop != 'gc' && 
            onStop != 'us' && onStop != 'ap') {
            alert('GET ON GET ON GET ON GET ON GET ON GET ON \n\nIncorrect stop!')
            onStop = prompt('GET ON GET ON GET ON GET ON GET ON GET ON \n\nThe 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.\n\nPlease enter the stop you would like to get on.')
            if (onStop != null) {onStop = onStop.toLowerCase()}
        }
        if (onLine === '6' && (onStop === 'grand central' || onStop === '33rd' || onStop === '28th' ||
        onStop === '23rd' || onStop === 'union square' || onStop === 'astor place' || onStop === 'gc' || 
        onStop === 'us' || onStop === 'ap')){
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
            offStop != '23rd' && offStop != 'union square' && offStop != '8th' && offStop != 'ts' && 
            offStop != 'us') {
            alert('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nIncorrect stop!')
            offStop = prompt('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nThe N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th.\n\nPlease enter the stop you would like to get on.')
            if (offStop != null) {offStop = offStop.toLowerCase()}
        }
        if (offLine === 'n' && (offStop === 'times square' || offStop === '34th' || offStop === '28th' ||
        offStop === '23rd' || offStop === 'union square' || offStop === '8th' || offStop === 'ts' || 
        offStop === 'us')){
            break
        }

        if (offLine === 'l' && offStop != '8th' && offStop != '6th' && offStop != 'union square' &&
            offStop != '3rd' && offStop != '1st' && offStop != 'us') {
            alert('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nIncorrect stop!')
            offStop = prompt('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nThe L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st.\n\nPlease enter the stop you would like to get on.')
            if (offStop != null) {offStop = offStop.toLowerCase()}
        }
        if (offLine === 'l' && (offStop === '8th' || offStop === '6th' || offStop === 'union square' ||
        offStop === '3rd' || offStop === '1st' || offStop === 'us')){
            break
        }  

        if (offLine === '6' && offStop != 'grand central' && offStop != '33rd' && offStop != '28th' &&
            offStop != '23rd' && offStop != 'union square' && offStop != 'astor place' && 
            offStop != 'gc' && offStop != 'us' && offStop != 'ap') {
            alert('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nIncorrect stop!')
            offStop = prompt('GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF \n\nThe 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.\n\nPlease enter the stop you would like to get on.')
            if (onStop != null) {onStop = onStop.toLowerCase()}
        }
        if (offLine === '6' && (offStop === 'grand central' || offStop === '33rd' || offStop === '28th' ||
        offStop === '23rd' || offStop === 'union square' || offStop === 'astor place' || 
        offStop === 'gc' || offStop === 'us' || offStop === 'ap')){
            break
        }  
    }

    //Abbreviations
    if (onStop === 'ap') {onStop = 'astor place'}
    if (offStop === 'ap') {offStop = 'astor place'}
    if (onStop === 'gc') {onStop = 'grand central'}
    if (offStop === 'gc') {offStop = 'grand central'}
    if (onStop === 'ts') {onStop = 'times square'}
    if (offStop === 'ts') {offStop = 'times square'}
    if (onStop === 'us') {onStop = 'union square'}
    if (offStop === 'us') {offStop = 'union square'}

    
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
    if (journ1 != journ2 && onStop === 'Union Square' && offStop === 'Union Square'){
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



//////Some visual information!


//Color arrays

//Default colors
colorN = []; for (let i = 0; i < lineN.length; i++){ colorN.push('black')}
colorL = []; for (let i = 0; i < lineL.length; i++) {colorL.push('black')}
color6 = []; for (let i = 0; i < line6.length; i++) {color6.push('black')}

//Red as the stop getting on
if (onLine === 'n') {colorN[lineN.indexOf(onStop)] = 'red'}
if (onLine === 'l') {colorL[lineL.indexOf(onStop)] = 'red'}
if (onLine === '6') {color6[line6.indexOf(onStop)] = 'red'}



//Union Square as the stop getting on
if (onStop === 'Union Square' && offLine === 'n' && onLine != offLine) {
    colorN[lineN.indexOf('Union Square')] = 'red'
    for (let i = 0; i < trip1.length - 1; i++){
    colorN[lineN.indexOf(trip1[i])] = 'yellow'}
}
if (onStop === 'Union Square' && offLine === 'l' && onLine != offLine) {
    colorL[lineL.indexOf('Union Square')] = 'red'
    for (let i = 0; i < trip1.length - 1; i++){
    colorL[lineL.indexOf(trip1[i])] = 'yellow'}
}
if (onStop === 'Union Square' && offLine === '6' && onLine != offLine) {
    color6[line6.indexOf('Union Square')] = 'red'
    for (let i = 0; i < trip1.length - 1; i++){
    color6[line6.indexOf(trip1[i])] = 'yellow'}
}



//Yellow as the stops travelling through
if (onLine === 'n' && onStop != 'Union Square') {
    for (let i = 0; i < trip1.length - 1; i++){
        colorN[lineN.indexOf(trip1[i])] = 'yellow'}}
if (onLine === 'l' && onStop != 'Union Square') {
    for (let i = 0; i < trip1.length - 1; i++){
        colorL[lineL.indexOf(trip1[i])] = 'yellow' }}
if (onLine === '6' && onStop != 'Union Square') {
    for (let i = 0; i < trip1.length - 1; i++){
        color6[line6.indexOf(trip1[i])] = 'yellow'}}





//Union Square is yellow as it is an interchange station
if (onLine === 'n' && (offLine === 'l' || offLine === '6') && onStop != 'Union Square') {
    colorN[lineN.indexOf('Union Square')] = 'orange'}
if (onLine === 'l' && (offLine === 'n' || offLine === '6') && onStop != 'Union Square') {
    colorL[lineL.indexOf('Union Square')] = 'orange'}
if (onLine === '6' && (offLine === 'n' || offLine === 'l') && onStop != 'Union Square') {
    color6[line6.indexOf('Union Square')] = 'orange'}

if (offLine === 'n') {
    for (let i = 0; i < trip2.length - 1; i++){
        colorN[lineN.indexOf(trip2[i])] = 'yellow'
        colorN[lineN.indexOf('Union Square')] = 'orange'}}
if (offLine === 'l') {
    for (let i = 0; i < trip2.length - 1; i++){
        colorL[lineL.indexOf(trip2[i])] = 'yellow'
        colorL[lineL.indexOf('Union Square')] = 'orange'}}
if (offLine === '6') {
    for (let i = 0; i < trip2.length - 1; i++){
        color6[line6.indexOf(trip2[i])] = 'yellow'
        color6[line6.indexOf('Union Square')] = 'orange'}}
   
//Green as the stop getting off
if (offLine === 'n') {colorN[lineN.indexOf(offStop)] = 'green'}
if (offLine === 'l') {colorL[lineL.indexOf(offStop)] = 'green'}
if (offLine === '6') {color6[line6.indexOf(offStop)] = 'green'}

//Union Square as the stop getting off
if (onLine === 'n' && offStop === 'Union Square') {colorN[lineN.indexOf('Union Square')] = 'green'}
if (onLine === 'l' && offStop === 'Union Square') {colorL[lineL.indexOf('Union Square')] = 'green'}
if (onLine === '6' && offStop === 'Union Square') {color6[line6.indexOf('Union Square')] = 'green'}

    




const spanColor = function(stop, index) {
    return `<span style='color:${index}'>'${stop}'</span>`
}


textN = `N Line: [${spanColor('Times Square', colorN[0])}, 
        ${spanColor('34th', colorN[1])}, ${spanColor('28th', colorN[2])}, 
        ${spanColor('23rd', colorN[3])}, ${spanColor('Union Square', colorN[4])}, 
        ${spanColor('8th', colorN[5])}]`


textL = `L Line: [${spanColor('8th', colorL[0])}, 
        ${spanColor('6th', colorL[1])}, ${spanColor('Union Square', colorL[2])}, 
        ${spanColor('3rd', colorL[3])}, ${spanColor('1st', colorL[4])}]`


text6 = `6 Line: [${spanColor('Grand Central', color6[0])}, 
        ${spanColor('33rd', color6[1])}, ${spanColor('28th', color6[2])}, 
        ${spanColor('23rd', color6[3])}, ${spanColor('Union Square', color6[4])}, 
        ${spanColor('Astor Place', color6[5])}]`


textTot = ""
if (trip1.length + trip2.length > 0){
    textTot = `From ${onStop} on the ${onLine.toUpperCase()} Line to ${offStop} on the ${offLine.toUpperCase()} Line:  
    <font size= "7px">${trip1.length + trip2.length} stops</font> in total.`
}



document.getElementById("lineN").innerHTML = textN
document.getElementById("lineL").innerHTML = textL
document.getElementById("line6").innerHTML = text6
document.getElementById("total").innerHTML = textTot






