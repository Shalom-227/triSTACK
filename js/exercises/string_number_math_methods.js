//Program that returns a random letter from your name


// Breakdown

// Define a variable that saves name
const myName = "Shalom"

//To return a letter of any name at any position/index use charAT() method
myName.charAt()
//To return a number between 0 and 1 call Math.random() method
myName.charAt(Math.random());

//To ensure that the number starts generating at the floor
myName.charAt(Math.floor(Math.random()));

//To determine the length of any given name use length property and multiply to random number to determines to possible values to be generated at random within the character
myName.charAt(Math.floor(Math.random() * myName.length));

//prints random letters of given name to console
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));





