//Number and number methods


//Integer - a whole number
const jerseyNumber = 14;

//Floating point number
const myFloat = 14.132;

// print integer and float respectively
console.log(jerseyNumber);
console.log(myFloat);

//comparing integer and float using comparison operators
console.log(jerseyNumber === myFloat);
console.log(jerseyNumber !== myFloat);

// comparing number with string give false data value
const jerseyString = "14";
console.log(jerseyNumber === jerseyString);

//adding a number to string variable combines the strings and returns to it to the console
console.log(jerseyString + 100);

//converting  a string datatype to a number datatype using Number function
console.log(Number(jerseyString + 100));

//converting to a numerical expression
console.log(Number(jerseyString) + 100);

//converting datatype values to numbers
console.log(Number(true));            //returns 1  
console.log(Number(false));           //returns 0
console.log(Number(undefined));       // returns value NaN i.e Not a Number
console.log(Number("Shalom"));        // returns NaN
console.log(Number("17"));            // integer



//Number Methods

//Number.isInteger() method determines whether a value passed to it is an integer or not
console.log(Number.isInteger(jerseyString));

//Number.parseFloat() method converts a string into a floating point number
console.log((Number.parseFloat("2423.43fd")));

//toFixed() method used to round up a floating number to the value set as the argument in this case 1
console.log((Number.parseFloat("2423.43fd")).toFixed(1));

//Number.parseInt() method converts string datatype value and floating point value to integer
console.log(Number.parseInt(myFloat));
console.log(Number.parseInt("2007"));

//Number.toString() method is used to convert a value to string datatype
console.log(typeof(jerseyNumber.toString()))

//Number.isNaN() method is used to check if a value is a number. Returns a Boolean Value. True if exactly NaN and false for other values.
console.log(Number.isNaN(jerseyNumber));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(jerseyString));

//Global isNaN() method tries to convert value before checking
console.log(isNaN(jerseyNumber));





