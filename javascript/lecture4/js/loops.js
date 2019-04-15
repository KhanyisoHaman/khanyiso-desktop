// Repeat Statements (loops)

// console.log ("Start Program");
// console.log ("1");
// console.log ("2");
// console.log ("3");
// console.log ("4");
// console.log ("5");
// console.log ("6");
// console.log ("7");
// console.log ("8");
// console.log ("9");
// console.log ("10");
// console.log ("Finsh Program");

// Dual While Loop

// While Loop
// It lets you repeat code when basic conditions are met. (is true)
// while (number); {
    // code to run while the condition is true
// }



console.log ('begin');
let number = 1;
while (number <= 10) {
    console.log(number);
    number++;
}

// console.log ('End');

// For Loop

// You'll often need to write loops with conditions that based on what happens in the loop body, like in our example. Javascript offers another loop type to account for this: for loop.

// for (initailization; condition; final - expression) {
    // code to run when condition is true
// }

// This is a little more complicated than while loop syntax:
//Inilitialization only happens once, when the code firste kicks off.

// The condition is evaluated once before the lopp runs each time. If it's true, code runs. If not, the code doesn't run.

// The expression is evalauted after the loop runs each time. It's often used to update a counter variable, as we saw in the while lop example.

// for (let counter = 1; counter <= 5; counter++) {
//     console.log(counter);  
// }

// Which loop should I use?

// let letter = "";
// while(letter !== "X") {
//     letter = prompt("Type any letter or X to exit:");
//     console.log(letter);
// }
