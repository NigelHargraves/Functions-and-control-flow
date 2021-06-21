//function to calculate percentage
function calcPercent(number, percent) {
    return (number / 100) * percent;
}

const result = calcPercent(135, 30); //declare variable and call function

document.write(result, '<br>'); //write result

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
    return `you have ordered a ${size} drink of ${drinkType}.`;
}
//variables
var drinkSize = 'large',
    drinkType = 'lemon';

document.write(drinkOrder(drinkSize, drinkType)); //call function and pass parameters and write result