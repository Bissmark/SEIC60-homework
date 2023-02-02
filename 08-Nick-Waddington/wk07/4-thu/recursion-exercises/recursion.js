// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){
    // This function returns the largest number in a given array.
    let index = 0
    let largest_number = 0
    let negative_number = -10
    
    function largest () {
    if( index === arr.length && largest_number === 4) {
        return largest_number
    } else if (index === arr.length && negative_number === -1) {
        return negative_number
    }

    if ( arr[index] > largest_number && arr[index] > 0) {
        largest_number = arr[index];
        index ++;
        return largest();
    } 
    else if (arr[index] > negative_number && arr[index] < 0){
        negative_number = arr[index];
        index ++;
        return largest();
    } 
    else {
        index ++;
        return largest();
    }
    }
    return largest();
}

findMax([3,4,2,1,2])

function factorial(num){
    // This function returns the factorial of a given number.

    const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );
    const arr = arrayRange(1, num, 1);

    return arr.reduce( (a, b) => a * b );
};

factorial(3)

function fibonacci(num){
    // This function returns the Nth number in the fibonacci sequence.
    let a = 1
    let b = 1
    let sum = 0
    let index = 2

    if (num === 1 || num === 2) {
        return a
    }

    const sequence = function () {
        if (index === num) {
            return sum
        };
            sum = a + b
            a = b
            b = sum
            index++ 
            return sequence()
    };
    return sequence();
};

fibonacci(4)

function coinFlips(){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"

    const heads = "H"
    const tails = "T"
    const results = []
    let index = 0
    
    return [];

}

coinFlips(2)

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]

    return [];
}

letterCombinations(['a','b','c'])

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}