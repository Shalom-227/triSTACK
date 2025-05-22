// Strings and String methods

const favoriteColor = "butterblue";

//Using the length property
console.log(favoriteColor.length);

//StringMethods
//charAT returns the second index u
console.log(favoriteColor.charAt(2));

//indexOf method returns the first occurence of a character in a string.
//Returns -1 if not found
console.log(favoriteColor.indexOf("eu"));

//lastIndexOf method returns the index of the last occurence of a repeating character in a string
console.log(favoriteColor.lastIndexOf("e"));

//slice method accepts to parameter that returns the first parameter and last parameter exclusive
console.log(favoriteColor.slice(2, 7));

//toUpperCase and toLowerCase methods each returns a string of uppercase and lowercase respectively. It does not take a parameter
console.log(favoriteColor.toUpperCase());
console.log(favoriteColor.toLowerCase());

//include method returns a boolean data. It returns true if character is inside string and false if otherwise.
console.log(favoriteColor.includes("bt"));
console.log(favoriteColor.includes("blue"));

// split method splits the string wherever the character we provide occurs and returns a string of array.
console.log(favoriteColor.split("e"));
// using split method with an empty quotes as split character returns each character as a string of array
console.log(favoriteColor.split(""));
//using split method with a variable that is a comma-separated value returns a character as its own string in the resulting array when splitted using a comma
console.log("Love, Sacrifice, Selflessness".split(","));
// using splot method with a variable that is a sentence returns each word as its own string in the resulting array when spliiting using space
console.log("Love is patient and is kind".split(" "));


