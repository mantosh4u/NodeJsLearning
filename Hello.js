// Below is the way to similar to import/include in C#/C++ programming 
// languages. the variable 'os' now can be used to access all functionality
// implemented in the "os" module. Now we need to refer modules documentation
// to understand how to access the functionality.
var os = require('os');

// Hello World on the console.
console.log("Hello World Of NodeJs!!!");

// type() method is available in the "os" module as per the documentation.
// This is to fetch the type of "os" where this script is running.
var ostype = os.type()
console.log("OS Type: " + ostype);

// hostname() method is available in the "os" module to fetch the computer
// name.
var computerName = os.hostname()
console.log("Computer Name: " + computerName);
