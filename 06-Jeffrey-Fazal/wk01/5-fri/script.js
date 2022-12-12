const nline = ['Times Square','34th','28th','23rd','Union Square','8th']
const lline = ['8th', '6th', 'Union Square', '3rd', '1st']
const sixline = ['Grand Central', '33rd','28th','23rd','Union Square','Astor Place']

const interchangelines = [
	{stop: '28th', line: ['nline','sixline']},
	{stop: '23rd', line: ['nline','sixline']},
	{stop: 'Union Square', line: ['nline','sixline','lline']},
	{stop: '8th', line: ['nline','lline']}
]

// Get user input (simulated for the moment)

// Check the line the traveler is on

function lineChecker(station) {
	if(nline.includes(station)){
		console.log('You can use the N Line')
	}if (lline.includes(station)){
		console.log('You can use the L line')
	} if (sixline.includes(station)){
		console.log('You can use the 6 line')
	} else {
		console.log('The station does not exist')
		return fail
	}
}

/// Identify what stop the guys at 



// Identify the line that the traver is going to

// Compare the lines and see if its on the same one

// Check possible exchanges to exchange at

// Count the indexes between the stops (if on same line)

// count the stops betwen the interchanges

// Rely on the damn stops being on order

// finaly do stuff and show travel from x to y to z

// User Input (simulated)



// Debug (test code)

lineChecker('Union Square')







// // Ignore, part of template or figuring out stuff
// // Used to check if the JS script is properly linked
// console.log('Start of file')

// // The Start Button function

// document.getElementById("startbtn").onclick = function() {startbtn()};

// function startbtn(triggerFunction){
// 	console.log('button clicked')
// 	alert('Start button works')
// }


// // Confirms that the script has been completed
// console.log('End of file')

// const mtaNetwork = [
// 		{
// 			stop:'Times Square', 
// 			nline: true, 
// 			lline: false, 
// 			sixline: false, 
// 			interchange: false
// 		},
// 		{
// 			stop: '34th', 
// 			nline: true, 
// 			lline: false, 
// 			sixline: false, 
// 			interchange: false},
// 		{
// 			stop: '28th',
// 			nline: true,
// 			lline: false, 
// 			sixline: true, 
// 			interchange: true},
// 		{
// 			stop: '23rd', 
// 			nline: true, 
// 			lline: false, 
// 			sixline: true, 
// 			interchange: false},
// 		{
// 			stop: 'Union Square', 
// 			nline: true, lline: true, 
// 			sixline: true, interchange: true},
// 		{
// 			stop: '8th', 
// 			nline: true, 
// 			lline: true, 
// 			sixline: false},
// 		{
// 			stop: '6th', 
// 			nline: false, 
// 			lline: true, 
// 			sixline: false},
// 		{
// 			stop: '3rd', 
// 			nline: false, 
// 			lline: true, 
// 			sixline: false},
// 		{
// 			stop: '1st', 
// 			nline: false, 
// 			lline: true, 
// 			sixline: false},
// 		{
// 			stop: 'Grand Central', 
// 			nline: false, 
// 			lline: false, 
// 			sixline: true},
// 		{
// 			stop: '33rd', 
// 			nline: false, lline: 
// 			false, sixline: 
// 			true},
// 		{
// 			stop: 'Astor Place', 
// 			nline: false, 
// 			lline: false, 
// 			sixline: true}
// const interchanges = ['28th','23rd','Union Square','8th']
// Objects don't have indexes and it's too confusing 