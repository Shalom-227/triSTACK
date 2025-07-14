/* a program that counts from 0 to 100;
 * prints "Fizz" for numbers divisible by 3.
 * prints "Buzz" for numbers divisible by 5.
 * prints "FizzBuzz" for numbers divisible by both 3 and 5.
 * prints "contains 7" for every number that contains 7 except digit 7
 * Otherwise, just print the number
 */


let num = 0;
let result;

while (num < 100){
	if (num % 3 === 0 && num % 5 === 0){  //checks if number is divisibe by 3 and 5
		result = "FizzBuzz";
	}else if(num % 5 === 0){ // checks if number is divisible by 5 only
		result = "Buzz";
	}else if (num % 3 === 0){ // checks if number is divisible ny 3 only
		result = "Fizz";
	}else {
		result = num; // print other numbers that doesn't satisfy the if ... else..if conditions
	}
	if (num !== 7){  // making an exception for the number 7
		let tempV = num;
		let found = false;

		while (tempV > 0){
			let  digit = tempV % 10; //checks if unit of number is 7
			if (digit === 7){
				found = true;
				break;
			}
			tempV = Math.floor(tempV /10);
		}
		if (found){  // executes if number contains 7
			console.log(`${num} contains 7`); // prints a number that contains 7 
		}else {
			console.log(result); // 
		} 
	}
	num++;
	else{
		console.log("This is number 7"); //executes if number is 7 
	}
