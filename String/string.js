let promise = "I am promising that I will be a Computer Programmer one day."
// string.prototype.indexOf() gives the index of the searchvalue. 
// if there is no value -1 is returned. 

// console.log(promise.indexOf("Computer"));

// string.prototype.split() divides a string into ordered list of substrings and put the substrings into an array.

// console.log(promise.split(' '));

// string.prototype.toUpperCase() converts the string value to uppercase
// string.prototype.toLowerCase() converts the string value to lowercase

// String.prototype.replace() returns a new string after replacing the matched string. 
let str = "Twas was the night before Xmas";
let regex = /Xmas/gi;
let newStr = str.replace(regex, 'Christmas');
console.log(newStr);