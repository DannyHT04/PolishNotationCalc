# command-line reverse polish notation (RPN) calculator in JavaScript

## Specifications
1. The calculator should use standard input and standard output
2. It should implement the four standard arithmetic operators
3. The calculator should handle errors and recover gracefully
4. The calculator should exit when it receives a q command or an end of input indicator (EOF / Ctrl+D)

## Description
Since I decided to go with JavaScript, I need to import a node module to get the user's input. 
``const prompt = require("prompt-sync")({ sigint: true });`` This code allows us to get user's input and allows the quit option (ctrl + c)