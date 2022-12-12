const subwaySystem = [
    {line: 'N', stops: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']},
    {line: 'L', stops: ['8th', '6th', 'Union Square', '3rd', '1st']},
    {line: '6', stops: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']}
]



const lineVal = subwaySystem.map(function(l) {return l.line})

const planTrip = function() {
    trip1 = []; trip2 = []
    onLine = ""; onStop = ""; offLine = ""; offStop = ""
    let lineInfo1 = ""
    for (let i = -1; i< lineVal.length; i++) {
        if (i === -1) {lineInfo1 = `Enter `}
        if (i === 0 && lineVal.length === 1) {lineInfo1 + `${lineVal[i]} for ${lineVal[i]} line.`}
        if (i >= 0 && i != lineVal.length - 1) {
            lineInfo1 = lineInfo1 + `${lineVal[i]} for ${lineVal[i]} line, `}
        if (i === lineVal.length - 1) {
            lineInfo1 = lineInfo1 + `and ${lineVal[i]} for ${lineVal[i]} line.`}
    }
    let lineInfo2 = ""
    for (let i = 0; i< lineVal.length; i++) {
        if (i === 0 && lineVal.length === 1) {`${lineVal[i]} line.`}
        if (i >= 0 && i != lineVal.length - 1) {
            lineInfo2 = lineInfo2 + `${lineVal[i]} line, `}
        if (i === lineVal.length - 1) {
            lineInfo2 = lineInfo2 + `and ${lineVal[i]} line.`
        }
    }

    let tobeVerb = ""; if (lineVal.length === 1) {tobeVerb = 'is'} else {tobeVerb = 'are'}
    let lineOrlines = ""; if (lineVal.length === 1) {lineOrlines = 'line'} else {lineOrlines = 'lines'}

    const GetOnSignal = 'GET ON GET ON GET ON GET ON GET ON GET ON'
    const onlineQuestion =`${GetOnSignal} \n\nWhich line would you like to get on? \n\n${lineInfo1}`

    onLine = prompt(onlineQuestion)
    
    if (onLine != null) {onLine = onLine.toUpperCase()}
    while (lineVal.indexOf(onLine) < 0 && onLine != null){
        alert(`${GetOnSignal} \n\nThere ${tobeVerb} ${lineVal.length} subway ${lineOrlines} only: ${lineInfo2} Please choose the correct line!`)
        onLine = prompt(onlineQuestion)
        if (onLine != null) {onLine = onLine.toUpperCase()}  
    }
    if (onLine === null) {alert('Come again when you\'ve made up your mind to travel somewhere!'); return}
    
    const onStopsInfo = `The ${onLine} line has the following ${subwaySystem[lineVal.indexOf(onLine)].stops.length} stops: \n` + 
    `${subwaySystem[lineVal.indexOf(onLine)].stops.join(', ')}\n\n` + 
    `Please enter the stop you would like to get on.`

    onStop = prompt(`${GetOnSignal} \n\n` + onStopsInfo)
        
    if (onStop != null) {onStop = onStop.toLowerCase()}
    
    const onStopsAbbre = subwaySystem[lineVal.indexOf(onLine)].stops.map(function(stop) {
        if (stop.indexOf(' ') > 0) {
            return stop.split(' ').map(word => word[0].toLowerCase()).join("") }})


    while (true){
        if (onStop === null) {alert('Come again when you\'ve made up your mind to travel somewhere!'); 
            return
        }
        if (subwaySystem[lineVal.indexOf(onLine)].stops.map(stop => stop.toLowerCase()).indexOf(onStop) < 0 && 
        onStopsAbbre.indexOf(onStop) < 0) {
            alert(`${GetOnSignal} \n\nIncorrect stop!`)
            onStop = prompt(`${GetOnSignal} \n\n` + onStopsInfo)
            if (onStop != null) {onStop = onStop.toLowerCase()}
        }
        if (subwaySystem[lineVal.indexOf(onLine)].stops.map(stop => stop.toLowerCase()).indexOf(onStop) >= 0 || 
        onStopsAbbre.indexOf(onStop) >= 0) {
            break
        }
    }

    const GetOffSignal = 'GET OFF GET OFF GET OFF GET OFF GET OFF GET OFF'
    const offlineQuestion =`${GetOffSignal} \n\nWhich line would you like to get off? \n\n${lineInfo1}`

    offLine = prompt(offlineQuestion)

    if (offLine != null) {offLine = offLine.toUpperCase()}

    while (lineVal.indexOf(offLine) < 0 && offLine != null){
        alert(`${GetOnSignal} \n\nThere ${tobeVerb} ${lineVal.length} subway ${lineOrlines} only: ${lineInfo2} Please choose the correct line!`)
        offLine = prompt(offlineQuestion)
        if (offLine != null) {offLine = offLine.toUpperCase()}  
    }

    if (offLine === null) {alert('Come again when you\'ve made up your mind to travel somewhere!'); return}
    
    const offStopsInfo = `The ${offLine} line has the following ${subwaySystem[lineVal.indexOf(offLine)].stops.length} stops: \n` + 
    `${subwaySystem[lineVal.indexOf(offLine)].stops.join(', ')}\n\n` + 
    `Please enter the stop you would like to get off.`

    offStop = prompt(`${GetOffSignal} \n\n` + offStopsInfo)
        
    if (offStop != null) {offStop = offStop.toLowerCase()}
    
    const offStopsAbbre = subwaySystem[lineVal.indexOf(offLine)].stops.map(function(stop) {
        if (stop.indexOf(' ') > 0) {
            return stop.split(' ').map(word => word[0].toLowerCase()).join("") }})

    while (true){
        if (offStop === null) {alert('Come again when you\'ve made up your mind to travel somewhere!'); 
            return
        }
        if (subwaySystem[lineVal.indexOf(offLine)].stops.map(stop => stop.toLowerCase()).indexOf(offStop) < 0 && 
        offStopsAbbre.indexOf(offStop) < 0) {
            alert(`${GetOffSignal} \n\nIncorrect stop! testing`)
            offStop = prompt(`${GetOffSignal} \n\n` + offStopsInfo)
            if (offStop != null) {offStop = offStop.toLowerCase()}
        }
        if (subwaySystem[lineVal.indexOf(offLine)].stops.map(stop => stop.toLowerCase()).indexOf(offStop) >= 0 || 
        offStopsAbbre.indexOf(offStop) >= 0) {
            break
        }
    }

    //Turning Abbreviations to Proper Noun
    const stopsFullFormList = []
    for (let i in subwaySystem){    
        for (let j of subwaySystem[i].stops){
                if (j.includes(' ') && stopsFullFormList.indexOf(j) < 0) {stopsFullFormList.push(j)}
            }   
    }
    stopsFullFormList.sort()

    const stopsAbbreList = stopsFullFormList.map(stop => stop.split(' ').map(word => word[0].toLowerCase()).join(""))

    if (stopsAbbreList.indexOf(onStop) >= 0) {onStop = stopsFullFormList[stopsAbbreList.indexOf(onStop)]}
    if (stopsAbbreList.indexOf(offStop) >= 0) {offStop = stopsFullFormList[stopsAbbreList.indexOf(offStop)]}

    //Logging where you get on and off
    console.log(`Get on at ${onStop} on the ${onLine} line`)
    console.log(`Get off at ${offStop} on the ${offLine} line`)
       
    //journ1 = first half of the journey
    //journ2 = second half of the journey
    journ1 = []; journ2 = []
    journ1 = subwaySystem[lineVal.indexOf(onLine)].stops
    journ2 = subwaySystem[lineVal.indexOf(offLine)].stops

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
            console.log(`Your must travel through the following stops on the ${offLine} line: ${trip1.join(", ")}`)
             console.log(`${trip1.length} stops in total.`)
        }

        if (journ2.indexOf(offStop) < journ1.indexOf(onStop)){
            for (let i = journ1.indexOf(onStop) - 1 ; i > journ2.indexOf(offStop) - 1; i--){
                trip1.push(journ1[i])
            }
            console.log(`Your must travel through the following stops on the ${offLine} line: ${trip1.join(", ")}`)
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
        console.log(`Your must travel through the following stops on the ${offLine} line: ${trip1.join(", ")}`)
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

        console.log(`Your must travel through the following stops on the ${onLine} line: ${trip1.join(", ")}`)
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

        console.log(`Your must travel through the following stops on the ${onLine} line: ${trip1.join(", ")}`)
        console.log(`Change at Union Square.`)

        if (journ2.indexOf(offStop) > journ2.indexOf('Union Square')){
            trip2 = journ2.slice(journ2.indexOf('Union Square') + 1, journ2.indexOf(offStop) + 1)
        }

        if (journ2.indexOf(offStop) < journ2.indexOf('Union Square')){
            for (let i = journ2.indexOf('Union Square') - 1 ; i > journ2.indexOf(offStop) - 1; i--){
                 trip2.push(journ2[i])
            }
        }

        console.log(`Your journey continues through the following stops on the ${offLine} line: ${trip2.join(", ")}.`)
        console.log(`${trip1.length + trip2.length} stops in total.`)
    }     
}


planTrip()


//////Some visual information!

//Color arrays

//Default colors
let stopsColor = subwaySystem.map(item => ({line: item.line, color: item.stops}))
for (let i in stopsColor) {
    stopsColor[i].color = stopsColor[i].color.map(item => item = "black")
}

if (offStop != null){

    //Red as the stop getting on
    stopsColor[lineVal.indexOf(onLine)].color[subwaySystem[lineVal.indexOf(onLine)].stops.indexOf(onStop)] = 'red'

    //Union Square as the stop getting on
    if (onStop === 'Union Square') {
        stopsColor[lineVal.indexOf(offLine)].color[subwaySystem[lineVal.indexOf(offLine)].stops.indexOf(onStop)] = 'red'
        for (let i = 0; i < trip1.length - 1; i++){
            stopsColor[lineVal.indexOf(offLine)].color[subwaySystem[lineVal.indexOf(offLine)].stops.indexOf(trip1[i])] = 'yellow'
        }
    }

    //Yellow as the stops travelling through
    if (onStop != 'Union Square') {
        for (let i = 0; i < trip1.length - 1; i++){
            stopsColor[lineVal.indexOf(onLine)].color[subwaySystem[lineVal.indexOf(onLine)].stops.indexOf(trip1[i])] = 'yellow'
        }}

    //Union Square is orange as it is an interchange station
    if (onLine != offLine && onStop != 'Union Square') {
        stopsColor[lineVal.indexOf(onLine)].color[subwaySystem[lineVal.indexOf(onLine)].stops.indexOf('Union Square')] = 'orange'
        stopsColor[lineVal.indexOf(offLine)].color[subwaySystem[lineVal.indexOf(offLine)].stops.indexOf('Union Square')] = 'orange'
    }
    for (let i = 0; i < trip2.length - 1; i++){
        stopsColor[lineVal.indexOf(offLine)].color[subwaySystem[lineVal.indexOf(offLine)].stops.indexOf(trip2[i])] = 'yellow'
    }

    //Green as the stop getting off
    stopsColor[lineVal.indexOf(offLine)].color[subwaySystem[lineVal.indexOf(offLine)].stops.indexOf(offStop)] = 'green'
  
    //Union Square as the stop getting off
    if (offStop === 'Union Square'){
        stopsColor[lineVal.indexOf(onLine)].color[subwaySystem[lineVal.indexOf(onLine)].stops.indexOf('Union Square')] = 'green'
    }
}

const spanColor = function(stop, index) {
    return `<span style='color:${index}'>'${stop}'</span>`
}

const colorFn = function(lineIndex, colorIndex) {
    return stopsColor[lineIndex].color[colorIndex]
}

textS = ""
for (let i in subwaySystem) {
    for (let j in subwaySystem[i].stops) {
        if (+j === 0) {
            textS = textS + `${lineVal[i]} Line: [${spanColor(subwaySystem[i].stops[j], colorFn(i,j))}, `
        }
        else if (+j > 0 && j != subwaySystem[i].stops.length - 1 ){
            textS = textS + `${spanColor(subwaySystem[i].stops[j], colorFn(i,j))}, `
        }
        else if (+j === subwaySystem[i].stops.length - 1){
            textS = textS + `${spanColor(subwaySystem[i].stops[j], colorFn(i,j))}]<br><br>`
        }
    }
}


textJourn = ""
if (trip1.length + trip2.length > 0){
    //Same lines Different stops
    if (journ1 === journ2){
        if (journ2.indexOf(offStop) > journ1.indexOf(onStop)){
            textJourn = `Your must travel through the following stops on the ${offLine.toUpperCase()} line: ${trip1.join(", ")}`
        }
        if (journ2.indexOf(offStop) < journ1.indexOf(onStop)){
            textJourn = `Your must travel through the following stops on the ${offLine.toUpperCase()} line: ${trip1.join(", ")}`
        }    
    }
    //Get on at Union Square
    if (journ1 != journ2 && onStop === 'Union Square'){
        textJourn = `You are at Union Square, which is a interchange station.<br><br>
        Your must travel through the following stops on the ${offLine.toUpperCase()} line: ${trip1.join(", ")}`
    }
    //Get off at Union Square
    if (journ1 != journ2 && offStop === 'Union Square'){
        textJourn = `Your must travel through the following stops on the ${onLine.toUpperCase()} line: ${trip1.join(", ")}<br><br>
        You are at Union Square, which is a interchange station.`
    }     
    //Different lines and different stops
    if (journ1 != journ2 && onStop != 'Union Square' && offStop != 'Union Square'){
        textJourn = `Your must travel through the following stops on the ${onLine.toUpperCase()} line: ${trip1.join(", ")}<br><br>
        Change at Union Square.<br><br>
        Your journey continues through the following stops on the ${offLine.toUpperCase()} line: ${trip2.join(", ")}.`
    }     
}

textTot = ""
if (trip1.length + trip2.length > 0){
    textTot = `From ${onStop} on the ${onLine.toUpperCase()} Line to ${offStop} on the ${offLine.toUpperCase()} Line:  
    <font size= "7px">${trip1.length + trip2.length} stops</font> in total.`
    }



try{
    document.getElementById("lineS").innerHTML = textS
    document.getElementById("journey").innerHTML = textJourn
    document.getElementById("total").innerHTML = textTot
}
catch{
    alert('The script should be used together with the html I made!')
}