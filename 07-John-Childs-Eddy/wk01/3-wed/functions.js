//Excercise (1)

const calculate = function(num1, num2, operation) {
    if (operation === `add`) {
        return num1 + num2;
    }
    if (operation === `sub`) {
        return num1 - num2;
    }
    if (operation === `multi`) {
        return num1 * num2;
    }
    if (operation === `div`) {
        return num1 / num2;
    }
    if (operation === `exp`) {
        return num1 ** num2;
    }
}

console.log(calculate(4, 2, `add`))
console.log(calculate(4, 2, `sub`))
console.log(calculate(4, 2, `multi`))
console.log(calculate(4, 2, `div`))
console.log(calculate(4, 2, `exp`))

//Excercise (2)

const helloIn = function(language) {
    if (language === `English`) {
        return `Hello`;
    } 
        else if (language === `German`) {
            return `Hallo`;
        }
        else if (language === `Portugese`) {
            return `Ola`;
        }
        else if (language === `French`) {
            return `Bonjour`;
        }
        else if (language === `Dog`) {
            return `Woof`;
        }
}
console.log(helloIn(`Dog`));

//Excercise (3)



const eachYear = function(year) {
    for (let year = 1922; year < 2023; year++) {
    if (leapYears(year))
        console.log(year);
}
}

const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return year;
    }
        else if (year % 100 === 0 && year % 400 === 0) {
            return year;
        }
}

eachYear()

