// Linhas
const lineN = [`Time Square`, `34th`, `28th-N`, `23r-N`, `Union Square`, `8th-N`];
const lineL = [`8th-L`, `6th`, `Union Square`, `3rd`, `1st`];
const line6 = ['Grand Central', `33rd`, `28th-6`, `23rd-6`, `Union Square`, `Astor Place`];

function getLine(lineName) {
	if (lineName === "lineN") return lineN
	if (lineName === 'lineL') return lineL
	if (lineName === 'line6') return line6
}

function myTrip(startLine, startStop, endLine, endStop) {
	console.log('Welcome to this trip, origin from ' + startStop + ' at ' + startLine + ' line, with destiny to the ' + endStop + ' stop at the ' + endLine + ' line. ')
	console.log('')

	// Uma única linha pra viagem
	if (startLine === endLine) {
		var line = startLine // a inicial e a final são a mesma, então não importa
		doSingleLineTrip(line, startStop, endStop)
	} else {
		doCoupleLinesTrip(startLine, startStop, endLine, endStop)
	}

	console.log('')
	console.log('')
	console.log('')
}

function doSingleLineTrip(line, startStop, endStop) {

	var fullLine = getLine(line)
	console.log('Doing this trip only at this line: ' + line)
	var startIndex = fullLine.indexOf(startStop)
	var endIndex = fullLine.indexOf(endStop)
	console.log('start index: ' + startIndex)
	console.log('end index : ' + endIndex)

	var stepsCount = 0 // contando o número de passos pra chegar lá
	var stopsWeAreGoingThrough = [] // começa vazio, mas ela vai ganhar mais estações conforme a gente andar

	//Hora de correr o array na direção correta. Se o start for antes do end, é pra frente: start -> end
	// Se o start for depois do end, é pra trás: start <- end
	if (startIndex <= endIndex) {
		for (let i = startIndex; i <= endIndex; i++) { //começando pelo startIndex até o endIndex
			stepsCount++
			stopsWeAreGoingThrough.push(fullLine[i])
		}

		console.log('final trip:' + stopsWeAreGoingThrough)
		console.log(stepsCount + ' stops in total.')

	} else {
		for (let i = startIndex; i >= endIndex; i--) { //começando pelo startIndex até o endIndex, mas andando de ré

			stepsCount++
			stopsWeAreGoingThrough.push(fullLine[i])
		}

		console.log('final trip:' + stopsWeAreGoingThrough)
		console.log(stepsCount + ' stops in total.')
	}

}

function doCoupleLinesTrip(startLine, startStop, endLine, endStop) {


	var fullStartLine = getLine(startLine)
	var fullEndLine = getLine(endLine)
	console.log('Doing this trip on those two lines: ')
	console.log('Start line: ' + fullStartLine)
	console.log('End line: ' + fullEndLine)

	// Union Square como endStop da primeira e startStop da segunda
	var firstPartOfTheTrip = getSingleLineTripSteps(startLine, startStop, 'Union Square') // da primeira parada até a Union Square na primeira linha
	// baldeação
	var secondPartOfTheTrip = getSingleLineTripSteps(endLine, 'Union Square', endStop) // da union square até a última parada na segunda linha

	console.log('First part of the trip: ' + firstPartOfTheTrip)
	console.log('Second part of the trip: ' + secondPartOfTheTrip)
	let stepsCount = firstPartOfTheTrip.length + secondPartOfTheTrip.length
	console.log(stepsCount + ' steps in total.')

}

// Igual a doSingleLineTrip, mas ela não imprime nada, ela retorna o array pra eu imprimir em outro lugar ou somar com outro array e imprimir mais coisas
function getSingleLineTripSteps(line, startStop, endStop) {

	var fullLine = getLine(line)
	var startIndex = fullLine.indexOf(startStop)
	var endIndex = fullLine.indexOf(endStop)
	var stopsWeAreGoingThrough = [] // começa vazio, mas ela vai ganhar mais estações conforme andar

	if (startIndex <= endIndex) {
		for (let i = startIndex; i <= endIndex; i++) { //começando pelo startIndex até o endIndex
			stopsWeAreGoingThrough.push(fullLine[i])
		}
	} else {
		for (let i = startIndex; i >= endIndex; i--) { //começando pelo startIndex até o endIndex, mas andando de ré
			stopsWeAreGoingThrough.push(fullLine[i])
		}
	}
	return stopsWeAreGoingThrough

}

console.log(' Start! ')

myTrip('lineN', 'Time Square', 'lineN', 'Union Square') // Unica linha
myTrip('lineN', 'Union Square', 'lineN', 'Time Square') // Uma linha, indo ao contrário
myTrip('lineN', 'Time Square', 'lineL', '8th-L') // Duas linhas, indo ao contrário na segunda