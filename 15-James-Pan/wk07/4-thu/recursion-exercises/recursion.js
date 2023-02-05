// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr) {
  // This function returns the largest number in a given array.
  if (!arr) {
    return "Please check input";
  }
  let maxNum = -Infinity;
  function getMax() {
    if (arr.length === 0) return maxNum;
    if (maxNum < arr[0]) {
      maxNum = arr[0];
    }
    arr.shift();
    return getMax();
  }
  return getMax();
}

function factorial(n) {
  // This function returns the factorial of a given number.
  let product = 1;
  function result() {
    if (n === 1) return product;
    product *= n;
    n--;
    return result();
  }
  return result();
}

function fibonacci(n) {
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
  let arr = [1, 1];
  function result() {
    if (arr[n - 1] !== undefined) return arr[n - 1];
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return result();
  }
  return result();
}

function coinFlips(n, combo = "") {
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
  if (n === 0) {
    return [combo];
  }
  return [...coinFlips(n - 1, combo + "H"), ...coinFlips(n - 1, combo + "T")];
}

function letterCombinations() {
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
  letterCombinations,
};
