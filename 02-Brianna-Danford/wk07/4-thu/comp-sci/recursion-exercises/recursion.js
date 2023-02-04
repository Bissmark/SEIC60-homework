// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr, largest = arr[0], index  = 1){
    // This function returns the largest number in a given array.
    if(index === arr.length){
        return largest;
    }
    if(arr[index] > largest){
        largest = arr[index];
    }
    return findMax(arr, largest ,index + 1)
};

function factorial(n){
    // This function returns the factorial of a given number.
    if(n === 0 || n === 1) 
    return 1;
    return n * factorial(n - 1);
}

function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
} 

function coinFlips(n){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    let outcomes = [];
    function generateOutcomes(outcome, n) {
        if (n === 0) {
            outcomes.push(outcome);
            return;
        }
        generateOutcomes(outcome + "H", n - 1);
        generateOutcomes(outcome + "T", n - 1);
    }
    generateOutcomes("", n);
    return outcomes;
}

function letterCombinations(letters) {
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
    let combinations = ['a', 'b', 'c', 'd', 'e', 'f'];
    function generateCombinations (combination, letters) {
        if (!letters.length) {
            combinations.push(combination);
            return;
        }
        for (let i = 0; i < letters.length; i++) {
            let newLetters = letters.slice(0, i).concat(letters.slice(i + 1));
            generateCombinations(combination + letters[i], newLetters);
        }
    }
    generateCombinations("", letters);
    return combinations;
}



module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
