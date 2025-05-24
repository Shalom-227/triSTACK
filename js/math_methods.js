//printing math object PI
console.log(Math.PI);

//Math methods

//Math.trunc() method returns the integer portion of a float
console.log(Math.trunc(Math.PI));

//Math.round() method returns the number rounded to the nearest integer.
console.log(Math.round(Math.PI));

let myFloat = 22.70; // declares a mutable variable
console.log(Math.round(myFloat));  //rounds up to 23

//Math.ceil() method aka ceiling method rounds a number UP no matter the decimal
console.log(Math.ceil(Math.PI));
console.log(Math.ceil(myFloat));

//Math.floor() method aka floor method rounds a number DOWN no matter the decimal
console.log(Math.floor(Math.PI));
console.log(Math.floor(myFloat));

//Math.pow() takes two arguments; base number and exponent
console.log(Math.pow(2,5));
console.log(Math.round(Math.PI, 10));
console.log(Math.round(myFloat, 5));


//Math.min() returns the smallest number from 0 or more numbers that are comma-separated
console.log(Math.min(Math.PI, myFloat, 2));

//Math.max() returns the largest number from 0 or more numbers that are comma-separed
console.log(Math.max(Math.PI, myFloat, 2));

//Math.random() method provies a pseudo-random number between 0 to 1 but doesn't include 1
console.log(Math.random());


//Printing random numbers between 0 and 10
console.log(Math.ceil(Math.random() * 10));
//Printing random numbers between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);  //using floor ensures 1 is certain to be generated, addding 1 ensures 10 is included.
