// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr, index =0, max = 0){
    // This function returns the largest number in a given array.
  if ( index === arr.length){
    return max;
  }
  if (arr[0] < 0) {
    max = arr[0]
  }
  if (max < arr[index]){
    max = arr[index];
  }
  return findMax(arr, index+1, max);
}

function factorial(num, fac = 1){
    // This function returns the factorial of a given number.
  if (num === 0) {
    return fac;
  }
  fac = fac * num
  return factorial(num-1, fac)
}

function fibonacci(num, show = 0){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
  if (num === 0){
    return show;
  }
  if (num == 1 || num == 2){
    return 1;
  }
  show = fibonacci(num-1, show) + fibonacci(num-2, show)
  return show;
}

function coinFlips(n){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    if (n <= 0){
      return [''];
    } else {
      return coinFlips(n - 1).flatMap (r => [r + 'H', r + 'T']);
    }
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