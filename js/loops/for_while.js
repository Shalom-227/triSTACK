// a program that receives input from user and prints an array of names entered by user



//declaration and initialisation
let names = [];
let isOver = false;


while (!isOver) {
    let name = prompt("Enter another name or press cancel."); //receives input from user
    if (name != null) {  //checks if name is not null
     names.push(name);  // add input to array, names
    } else {
     isOver = true; //exit program if user presses cancel
    }
}
for (let i = 0; i < names.length; i++){
    console.log(names[i]); // prints array of names
}
