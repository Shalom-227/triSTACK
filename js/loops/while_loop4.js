// Given a number num, count how many digits are in it.


let number = prompt("Enter number: ", 0); // prompts user to enter number

let count = 0; //counts each digit

while (number > 0){
	number = Math.floor(number / 10);   //returns the floor numberafter division by 10
	count++;
}
console.log(`Number of digits entered is ${count}`); //outputs number of digits
