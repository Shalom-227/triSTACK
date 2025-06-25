// a program that counts the number of iteration until user cancels the confirm dialogue button

let isOver = false;
let counter = 1;
while (!isOver) {
    let continueLoop = confirm(`[${counter}] Continue the loop?`);
    isOver = !continueLoop;
    counter = counter + 1;
}
