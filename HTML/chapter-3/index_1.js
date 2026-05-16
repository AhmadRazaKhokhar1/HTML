// Functions with the keyword 'function'
printCustomMessage(12*7-20/33*2+22)
/*
Expected Ans 1: 104.78
Expected Ans 2: 104.78
Expected Ans 3: 104.78
*/

/*
1. Priority (Order)
[Division,
Multiplication]

2.Priority (Order)
[Addition,
Subtraction]
*/

function printCustomMessage(message){ // arguments (args) / parameters (params)
console.log(message)
}

// Functions with callback
const printHelloWorld = (msg) => {
 console.log(msg)
}

printHelloWorld("Hello World")