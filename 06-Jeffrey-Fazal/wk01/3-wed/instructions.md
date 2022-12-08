# Functions & Loops

### Getting Started

1. Create two files `index.html` and `functions.js`
1. Include `functions.js` in `index.html` using a `<script>` tag
1. Open `index.html` in your web browser and open the console
1. After answering each section below, `git commit` your work

---

### `calculate`

Write a function called `calculate` that:

- takes three arguments, two numbers and a string (`num1`, `num2`, and `operation`, respectively).
- if it receives the string 'add' for the operation parameter, it will return the sum of `num1` and `num2`.
- if it receives the string 'sub' for the operation parameter, it will return `num1` minus `num2`.
- **Bonus**:  Do the same thing for multiplication 'mult'; division 'div'; and exponent 'exp' (where num2 is the exponent of num1).

Example Outputs:

``` js
console.log(calculate(4, 2, 'add')) // -> 6
console.log(calculate(4, 2, 'sub')) // -> 2
console.log(calculate(4, 2, 'mult)) // -> 8
console.log(calculate(4, 2, 'div))  // -> 2
console.log(calculate(4, 2, 'exp')) // -> 16
```

---

### `helloIn`

Write a function called `helloIn` that:

- takes 1 argument which is the name of a language
- and returns how to say "Hello" in that language

``` javascript
helloIn('English')    // -> "Hello"
helloIn('German')     // -> "Hallo"
helloIn('Portuguese') // -> "Olá"
helloIn('French')     // -> "Bonjour"
helloIn('Dog')        // -> "Woof"
```

If the language isn't one of the ones it recognises, it should return "Sorry, I don't speak <language>."

For example:

``` javascript
helloIn('Latin') // -> "Sorry, I don't speak Latin."
```

Feel free to add hellos for whatever languages you like, but it should support at least 3 languages other than English.

---

### `leapYears`

Write a function called `leapYears` that prints out all the leap years in the last 100 years. Do a web search for how to check if a particular year is a leap year.

Expected output:

```text
1924
1928
1932
1936
1940
1944
1948
1952
1956
1960
1964
1968
1972
1976
1980
1984
1988
1992
1996
2000
2004
2008
2012
2016
2020
105
112
119
126
133
140
147
154
161
168
175
182
189
196
```
