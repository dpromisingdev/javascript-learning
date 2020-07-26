var number1 = 0.2; 
var number2 = 0.1; 
console.log(number1 + number2); //0.30000000000000004 - this is because rounding error problem
console.log((number1 + number2).toFixed(1)); // Prints the first decimanl number given in the function.