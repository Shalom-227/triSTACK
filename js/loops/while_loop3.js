/* Write a function that counts from 1 to 100 using a while loop, but with a twist:
	- For numbers divisible by 3, print "Fizz".
	- For numbers divisible by 5, print "Buzz".
	- For numbers divisible by both 3 and 5, print "FizzBuzz".
	- Otherwise, just print the number.
	- Modify the function so it stops when it reaches the first number that contains the digit 7
*/

let nuM = 1;
while (nuM <= 100){
	if (nuM % 3 === 0 && nuM % 5 === 0){
		console.log("FizzBuzz");
	}else if (nuM % 3 === 0){
		console.log("Fizz");
	}else if (nuM % 5 === 0){
		console.log("Buzz");
	}else if (nuM === 7 || nuM % 10 === 7) {
		// for a broader scope we for digits that contain 7
		// we use nuM.toString().includes("7") methods
		console.log(`Stopped at [${nuM}]`);
		break;
	} else{
		console.log(nuM);
	}
	nuM++;
}
