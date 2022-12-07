// calculate 

const calculate = function (num1, num2, operation){
    let result = 0;
    switch (operation){
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mult':
            result = num1 * num2;
            break;
        case 'div':
            result = num1 / num2;
            break;
        case 'exp':
            result = Math.pow(num1, num2);
            break;
}
    return result;
}

// helloIn

const helloIn = function (language){
    let result ="";
    switch (language){
        case 'English':
            result = "Hello";
            break
        case 'German':
            result = "Hallo";
            break
        case 'Portugese':
            result = "Olá";
            break
        case 'French':
            result = "Bonjour";
            break
        case 'Dog':
            result = "Woof";
            break 
    }
    return result;
}

// leapYears

const leapYears = function (){
    for (i =1924; i < 2022; i++){
        if (i%4==0){
            console.log(i);
        }
    }
    
    }

leapYears()