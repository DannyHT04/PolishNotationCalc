# command-line reverse polish notation (RPN) calculator in JavaScript
A Reverse Polish Notation (RPN) calculator works by taking a postfix expression as input and evaluating it using a stack-based approach

## Specifications
1. The calculator should use standard input and standard output
2. It should implement the four standard arithmetic operators
3. The calculator should handle errors and recover gracefully
4. The calculator should exit when it receives a q command or an end of input indicator (EOF / Ctrl+D)
## How To Run
1. Clone the repository 
2. Open your terminal and CD into the root folder
3. Run the command 'npm install' in your terminal. 
4. Next run the command 'node app.js' 
## Description
Since I decided to go with JavaScript, I need to import a node module to get the user's input. 
``const prompt = require("prompt-sync")({ sigint: true });`` This line of code allows us to get user's input and allows the quit option (ctrl + c).



``` javascript 
  do {
        userInput = prompt("Enter the first number: ");
       
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
        }

      

        // if the user's input isn't a number, has multiple decimal or is '.'
    } while (isNaN(parseFloat(userInput)) || isMultipleDecimal == true);

    userInputArray.push(parseFloat(userInput));
    console.log(`your current numbers and operators are ${userInputArray}`);
    console.log('---------------------------------------');
    // --------- getting second number------------------
    
 
    
```
This code above is the same for the first number and second number. A do while is used because it would automatically reset the variables when the user replays the program. I split the user input to check for data validation. To check if the user added multiple decimals. Since a reverse polish notation calculator needs 2 numbers to start, we do not have to worry about operators. Once the user input is a number then we can break out of the loop. We can then parse and push the value of the user's input into our array. The console logs are there to show the user their current numbers and operators. 

``` javascript
 do {

            do {
                userInput = prompt("Enter in another number or operator: ")

                let userCharArray = userInput.split('');
                let counter = 0;
                let operationsCounter = 0;
                isMultipleDecimal = false;
                isMultipleOperations = false;
            
                for (let i = 0; i < userCharArray.length; i++) {
                    if (userCharArray[i] == '.') {
                        counter++;
                    }
                    if (counter > 1) {
                        isMultipleDecimal = true;
                    }
                    if(regexWithOperators.test(userCharArray[i])){
                        operationsCounter++;
                    }
                    if(operationsCounter > 1){
                        isMultipleOperations = true;
                    }
                }
              
                if(!isNaN(parseFloat(userInput)))
                {
                    isValidInput = true;
                }else if (!regexWithOperators.test(userInput) && userInput.length != 1 || isMultipleDecimal == true || userInput == '.' || isMultipleOperations == true || parseFloat(userInput)  ) {
                    isValidInput = false;
                    console.log("Please enter in a valid number or operator");
                    console.log('---------------------------------------');
                } else {
                    isValidInput = true;
                }
            } while (!isValidInput)
            if(!regexWithOperators.test(userInput)){

                userInputArray.push(parseFloat(userInput));
            }else{

                userInputArray.push(userInput);
            }
            console.log(`your current numbers and operators are ${userInputArray}`)
            howManyNumbers = userInputArray.filter(idx => !isNaN(idx)).length;
       
            howManyOperations = userInputArray.filter(idx => isNaN(idx)).length;
            
            console.log(`you need ${(howManyNumbers -1) - howManyOperations} more operators to start the equation`);
            console.log('---------------------------------------');
        } while (howManyNumbers - 1 != howManyOperations)



```

In the code block above, the parent Do While loop is for getting more numbers or operations as the user desire. Once it meets the condition of having the right amount of operations, it will fire the logic of the RPN calculator. The nested Do while is for data validation. We need to check if the user inputted a valid answer. A valid answer can only be a number or a operator.

```javascript
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
            // console.log(stack);
        }

        console.log(`your answer is ${stack[0]}`);
```
The code above is the pure logic of the calculator. We first iterate through our userInputArray, if the index of the array is a number then we will add it to our 'stack' array. After it goes through all of our numbers, we can do the operations. We use a .pop method to take out the last index of our stack array and return it into a variable. Then we get the result with the operations and push it back into our stack array. It repeats until we have a total of 1 index in our stack array. 


```javascript
while (playAgain) {
   do {

            userInput = prompt('Type "q" to end, "c" to continue, "r" to restart : ').toLowerCase();
            if (userInput == 'c') {
                isContinue = true;
                isValid = true;
                userInputArray = [stack[0]];
                stack = [];
                console.clear();
                console.log(`your current numbers and operators are ${userInputArray}`);
            } else if (userInput == 'r' || userInput == 'q') {
                isContinue = false;
                isValid = true;
                userInputArray = [];
                stack = [];
                console.clear();
            } else {
                console.log('Please enter in a valid input.')
                isValid = false;
            }
        } while (!isValid)

    } while (isContinue)

    if (userInput == 'q') {
        playAgain = false;
    }
  
```
The last part of the code is the reset, continue or the quit feature. If the user types q, it will break out of both loops and end the program. if the user types in c, it will continue on the second number because we already a first number because we save the result of our previous stack into our userInputArray. Typing q, c ,r also reset our booleans to its default values.



## Trade-offs and future updates
I would like to clean up the code and use functions for the repeated code. I would also want to revisit the data validation to write it more clean and efficient. For example, the user can type in 12abc and the code will still accept the input as 12. I would like it to say "Please enter in a valid number"  