// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);

}

// Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));

const defaultResult = 0;
let currentResult = defaultResult;

currentResult += (0 + 10) * 3 / 2 - 1;

let calculationDescription = `(${currentResult}) * 3 / 2 - 1`;

console.log(calculationDescription + '\n\n\t\t' + currentResult);