//Problem: Check if a Number is a Palindrome

/* Write a function 
 * that uses a while loop to check whether a given positive integer reads the same backward as forward.
 */

let testNum = parseInt(prompt("Enter a number:", 0));
let originalNum = testNum;
let reverse = 0;

while (testNum > 0){
	let lastDigit = testNum % 10;
	reverse = reverse * 10 + lastDigit;
	testNum = Math.floor(testNum / 10);
}
console.log(reverse);
if (originalNum === reverse){
	console.log(!!1);
}else{
		console.log(!!0);
	}

