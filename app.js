// using the node module prompt sync to access user's input in the console
const prompt = require("prompt-sync")({ sigint: true });


let userInputArray = [2.2, '4', 5, 0, "+", "+", "*"];
let stack = [];


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