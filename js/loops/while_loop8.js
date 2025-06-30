// a program that counts the number of loops and returns the number of times okay button was selected 



//declaration and intialisation
let isOver = false;
let counter = 0;
let isOkay = 0;

//
while (!isOver){
    //receives user input/selection (okay || cancel)
    let continueLoop = confirm(`[${counter}] Loop continues.` );
    let selection = continueLoop;
    counter++;
   
    //checks if user selects okay
    if (selection){
        isOkay++;
    }
    // exits loop is user selects cancel
    if (!continueLoop){
        isOver = true;
        console.log(`Loop ends at ${counter}`);
    }
}
console.log(`Number of okay selected is ${isOkay}`);





