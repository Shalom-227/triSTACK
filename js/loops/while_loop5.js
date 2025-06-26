/* Write a JavaScript function that takes a positive integer and
 * returns its reverse (e.g 1234 becomes 4321) using a while loop
**/

let numBer = parseInt(prompt("Enter number", 0));
let flip = 0;

while(numBer > 0){
	let lastNumBer = numBer % 10;  // gets the last digit of the number
	flip = flip * 10 + lastNumBer;   // reverse the digits
	numBer = Math.floor(numBer / 10); // gets the floor of number after division
}
console.log(`The reverse is ${flip}`);
