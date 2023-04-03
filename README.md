# command-line reverse polish notation (RPN) calculator in JavaScript

## Specifications
1. The calculator should use standard input and standard output
2. It should implement the four standard arithmetic operators
3. The calculator should handle errors and recover gracefully
4. The calculator should exit when it receives a q command or an end of input indicator (EOF / Ctrl+D)

## Description
Since I decided to go with JavaScript, I need to import a node module to get the user's input. 
``const prompt = require("prompt-sync")({ sigint: true });`` This code allows us to get user's input and allows the quit option (ctrl + c).



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
This code is the same for the first number and second number. A do while is used because it would automatically reset the variables when the user replays the program. I split the user input to check for data validation. To check if the user added multiple decimals. Since a reverse polish notation calculator needs 2 numbers to start, we do not have to worry about operators. Once the user input is a number then we can break out of the loop. We can then parse and push the value of the user's input into our array. The console logs are there to show the user their current numbers and operators. 
