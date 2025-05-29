//JavaScript arrays and array methods

let africanFruits = ["mango", "plantain", "boaobab-fruit", "horned-melon", "sour-plum"];

//declaring an array using Array constructor 
let americanTrucks = new Array(["Ford_F-1500", "Ford_F-250_Super_Duty"], "Ram-1500", "Chevrolet_Silverado-1500", "GMC_Sierra-1500");

let germanTrucks = new Array("MAN_TGX", "DAF_FX", "Volvo_FH", "IVECO_Daily", "Scania_R-series");

//adding an element to an array using push() method;
americanTrucks.push("Kenworth_T270");
console.log(americanTrucks);

//adding two arrays using concat() method
let truckModels = americanTrucks.concat(...germanTrucks);
console.log(truckModels);

truckModels = americanTrucks.push(germanTrucks);
console.log(truckModels);     //returns the length of the array only
console.log(americanTrucks); //returns nested array

//accessing the length of items in index 0 of americanTrucks variable
console.log(americanTrucks[0].length);

//JavaScript Arrays can take mixed datatype values
let mixedArray = [1, true, "blue"];

//splice() method
//removing two items from the list of array starting with index 4
let removedItems = africanFruits.splice(4, 2);

// printing removed items from fruit array
console.log(removedItems);
console.log(africanFruits);

//adding removed items to fruit array and using splice() method and  spread ... operator which helps to expand the added array
//africanFruits.splice(3, 0, removedItems);
//console.log(africanFruits);
africanFruits.splice(3, 0, ...removedItems);
console.log(africanFruits);

//replace a particular item with an item in the list of array
africanFruits.splice(4, 1, "banana");
console.log(africanFruits);

//suing pop() method which is used to remove and store the last element from an array

let poppedTruck = americanTrucks.pop();
console.log(poppedTruck); //return second part of concatenated array
console.log(americanTrucks); // returns first part of concatenated array

//unshift() method adds an element to the beginning of an array
poppedTruck.unshift("Peugeot");
console.log(poppedTruck);

//shift() method removes an element from the beginning of an array
poppedTruck.shift("Peugeot");
console.log(poppedTruck);


//reverse() method reverse the order of elements in an array
console.log(poppedTruck.reverse());


//sort() mehtod arranges elements in an array in dictionary order
console.log(mixedArray.sort());

//sorting numbers with sort() method
let numbers = [40, 20, 50, 30, 10, 5, 25, 14, 78, 37, 43, 2, 16];
console.log(numbers.sort((a,b) => a - b)); //ascending order 
console.log(numbers.sort((a,b) => b - a)); //descending order

//join() method returns a string string representaion of an array
console.log(numbers.join('i, ')) //converts real numbers to string representation of imaginary numbers

//map() method returns a new array after applying a a function to an array

let squaredNumbers = numbers.map(x => x ** 2);
console.log(squaredNumbers.sort((a,b) => a - b));

//filter() method returns an array of elements that passes a test
console.log(squaredNumbers.filter(x => x % 2 ===0))  //retrun even numbers only

//reduce() method applies a function to each element of an array and returns a single value
console.log(squaredNumbers.reduce((a,b) => a+b)); //returns sum of allelements in the array

//some() method checks if at least one element passes a test
console.log(squaredNumbers.some(x => x !==0)); //checks if array contains an odd number


