// using the node module prompt sync to access user's input in the console
const prompt = require("prompt-sync")({ sigint: true });


let userInputArray = [];
let stack = [];
let userInput;
let isMultipleDecimal;
let howManyNumbers = 0;
let howManyOperations = 0;
let isContinue = true;
let playAgain = true;
let isValid = false;
// const regex = /^[0-9.]+$/;

while (playAgain)
{
// --------- getting first number------------------
do {
    userInput = prompt("Enter a number: ");
    //split the user input into an array to count how many times they inputted '.'
    let userCharArray = userInput.split('');
    let counter = 0;
    isMultipleDecimal = false;
    for (let i = 0; i < userCharArray.length; i++) {
        if (userCharArray[i] == '.') {
            counter++;
        }
        if (counter > 1) {
            isMultipleDecimal = true;
        }
        // console.log(isMultipleDecimal);
        // console.log(counter);
    }

    // if the user's input isn't a number, has multiple decimal or is '.'
} while (isNaN(parseFloat(userInput)) || isMultipleDecimal == true || userInput.length == 1 && userInput.includes('.'));

userInputArray.push(parseFloat(userInput));

// --------- getting second number------------------

do {
    userInput = prompt("Enter a number: ");
    //split the user input into an array to count how many times they inputted '.'
    let userCharArray = userInput.split('');
    let counter = 0;
    isMultipleDecimal = false;
    for (let i = 0; i < userCharArray.length; i++) {
        if (userCharArray[i] == '.') {
            counter++;
        }
        if (counter > 1) {
            isMultipleDecimal = true;
        }
        // console.log(isMultipleDecimal);
        // console.log(counter);
    }

    // if the user's input isn't a number, has multiple decimal or is '.'
} while (isNaN(parseFloat(userInput)) || isMultipleDecimal == true || userInput.length == 1 && userInput.includes('.'));

userInputArray.push(parseFloat(userInput));


// --------- getting another number or operator------------------

do {


    do {
        userInput = prompt("Enter in another number or operator: ")
        userInputArray.push(userInput);
        console.log(userInputArray);
        howManyNumbers = userInputArray.filter(idx => !isNaN(idx)).length;
        console.log(howManyNumbers);
        howManyOperations = userInputArray.filter(idx => isNaN(idx)).length;
        console.log(howManyOperations);
    } while (howManyNumbers - 1 != howManyOperations)









    // pop method removes the last element from an array and returns that element. This method changes the length of the array.

    // going to take the user input array and iterate through it
    for (let i = 0; i < userInputArray.length; i++) {
        // if the index of the userInputArray is not a number, we are going to push it into our new array
        if (!isNaN(parseFloat(userInputArray[i]))) {
            stack.push(parseFloat(userInputArray[i])); // this should push all of the numbers into stack array, next thing to do is go through the operations
        } else if (userInputArray[i] == "+") {
            let num2 = stack.pop(); // takes out the last index of the array and return it into num2
            let num1 = stack.pop(); // takes out the 'new' last index of the array and return it into num1
            stack.push(num1 + num2); // we add them together and put it back into the array
        } else if (userInputArray[i] == "-") {
            let num2 = stack.pop();
            let num1 = stack.pop();
            stack.push(num1 - num2);
        } else if (userInputArray[i] == "*") {
            let num2 = stack.pop();
            let num1 = stack.pop();
            stack.push(num1 * num2);
        } else if (userInputArray[i] == "/") {
            let num2 = stack.pop();
            let num1 = stack.pop();
            stack.push(num1 / num2);
        }
        console.log(stack);
    }

    console.log(`your answer is ${stack[0]}`);

    // handling the restart, quit or continue section 
    
    do {

        userInput = prompt('Type "q" to end, "c" to continue, "r" to restart : ').toLowerCase();
        if (userInput == 'c') {
            isContinue = true;
            isValid = true;
            userInputArray = [stack[0]];
            stack = [];
        } else if (userInput == 'r' || userInput == 'q') {
            isContinue = false;
            isValid = true;
            userInputArray = [];
            stack = [];
        } else {
            console.log('Please enter in a valid input.')
            isValid = false;
        }
    }while(!isValid)

} while (isContinue)

    if(userInput == 'q')
    {
        playAgain = false;
    }
}