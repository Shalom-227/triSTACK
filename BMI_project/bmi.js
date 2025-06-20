// variables


let weight = parseFloat(prompt("Enter your weight (kg)"));
let height = parseFloat(prompt("Enter your height (m)"));
let gender = prompt("Enter your gender as M or F");
let bmiCategory;


// BMI calculation 
// BMI = weight in kg / (height in meter)**2
const bmi = weight /height ** 2;

/*
	Underweight: < 18.5
	Healthy: 18.5 - 25; (not including 25)
	Overweight: 25 - 30 (not including 30)
	Obese: >=30
*/

if (bmi < 18.5){
	bmiCategory = "underweight";
}else if (bmi >=18.5 && bmi < 25){
	bmiCategory = "Healthy";
}else if (bmi >=25 && bmi <30){
	bmiCategory = "Overweight";
}else {
	bmiCategory = "Obese";
}


// output
console.log(`Your bmi is ${bmi} and you are ${bmiCategory}.`);
