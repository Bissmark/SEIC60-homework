// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr, index=0, num=0){
    // This function returns the largest number in a given array.
    if (index === arr.length) {
        return num;
    }else{
        if(arr[index] >= num){
            num = arr[index];
            return findMax(arr, index+1, num);
        }
    } return num;

}

function factorial(num){
    // This function returns the factorial of a given number.
    if(num===1){
        return num;
    } else{
        return num*(factorial(num-1))
    }

}

function fibonacci(num){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    if(num===1) return 1;
    if(num===2) return 1;
    return fibonacci(num-1) + fibonacci(num-2)
}

function coinFlips(n){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    if(n===1){
        return ['H','T']
    } else{
        const result = []
        const init = ['H','T']
        for(let i=0; i < coinFlips(n-1).length; i++){
            for(let j=0; j < init.length; j++){
                result.push(init[j] + coinFlips(n-1)[i])
            }
        }
        return result
    }
}

function letterCombinations(arrIn, arrOut, index){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]




}

module.exports = {
    findMax,
    factorial,
    coinFlips,
    letterCombinations
}