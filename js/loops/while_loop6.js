/* Write a function that takes a string (a sentence), 
 * and counts the number of words in it. 
 * Assume words are separated by spaces. Don’t use .split()
 */

let sentence = prompt("Enter a sentence:");
let count = 0;
let index = 0;

// Skip any leading spaces
while (index < sentence.length && sentence[index] === ' ') {
    index++;
}

while (index < sentence.length) {
    // Start of a word
    count++;

    // Move to the end of the word
    while (index < sentence.length && sentence[index] !== ' ') {
        index++;
    }

    // Skip spaces between words
    while (index < sentence.length && sentence[index] === ' ') {
        indexwhile (i < sentence.length && sentence[i] === ' ') {
    i++;
}++;
    }
}

console.log("Word count:", count);




