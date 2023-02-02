// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){
    // This function returns the largest number in a given array.
    let max = -Infinity
    for (let i = 0; i < arr.length; i++ ){
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

function factorial(num){
    // This function returns the factorial of a given number.
    if (num < 0) {return NaN}
    if (num === 0) {return 1}
    else {
        let n = 1
        let arr = []
        while (n<=num) {
            arr.push(n)
            n++
        }
        let total = 1
        for (let i = 0; i < arr.length; i++) {
          total = total * arr[i] 
        }
        return total
    }
  }

  function fibonacci(num){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    if (num <= 0) {return NaN}
    if (num === 1 || num === 2) {return 1}
    else {
      let n = 3
      let sum = 2
      let pre1 = 1
      let pre2 = 1
      while (n < num) {
        pre1 = sum
        sum = pre2 + sum
        pre2 = pre1
        n++
      }
      return sum
    }
  }

  function coinFlips(time){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
  }

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}