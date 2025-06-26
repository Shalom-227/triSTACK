/* Write a function that takes a string (a sentence), 
 * and counts the number of words in it. 
 * Assume words are separated by spaces. Don’t use .split()
*/

let sentence = prompt("Enter a sentence:");
let wordCount = 0;
let index = 0;

// Skip any leading spaces
while (index < sentence.length && sentence[index] === ' ') {
    index++;
}

while (index < sentence.length) {
    // Start of a word
    wordCount++;

    // Move to the end of the word
    while (index < sentence.length && sentence[index] !== ' ') {
        index++;
    }

    // Skip spaces between words
    while (index < sentence.length && sentence[index] === ' ') {
        index++;
    }
}

console.log("Word count:", wordCount);




