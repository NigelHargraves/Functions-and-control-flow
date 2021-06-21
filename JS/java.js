//function to calculate percentage
function calcPercent(number, percent) {
    return (number / 100) * percent;
}

const result = calcPercent(135, 30); //declare variable and call function

console.log(result); //write result

//function to switch drinkType
function drinkOrder(size, type) {
    switch (type) {
        case "cola":
            drinkType = 'Cola';
            break;
        case "lemon":
            drinkType = 'Lemonade';
            break;
        case "orange":
            drinkType = 'Orangeade';
    }
    return `you have ordered a ${size} drink of ${drinkType}.`; //return result
}
//variables
var drinkSize = 'large',
    drinkType = 'lemon';

console.log(drinkOrder(drinkSize, drinkType)); //call function and pass parameters and write result

//function to calculate 2 numbers
function calculator(number1, number2, operator) {
    switch (operator) {
        case "+":
            value = number1 + number2;
            break;
        case "-":
            value = number1 - number2;
            break;
        case "*":
            value = number1 * number2;
            break;
        case "/":
            value = number1 / number2;
            break;
        case "%":
            value = number1 % number2;
    }
    return `${number1} ${operator} ${number2} = ${value}.`; //return result
}

//call function and pass parameters and write result
console.log(calculator(4, 3, "+"));
console.log(calculator(4, 3, "-"));
console.log(calculator(4, 3, "*"));
console.log(calculator(4, 3, "/"));
console.log(calculator(4, 3, "%"));
console.log(calculator(4, 2, "%"));