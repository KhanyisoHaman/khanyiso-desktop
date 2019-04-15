

// let number = Number(prompt ('Enter a number:'));
// if (number > 0) {
//     console.log (number + " is postive");
// } else if (number < 0) {
//     console.log (number + " is negative");
// } else {
//     console.log(number + " is zero");
// }

// "And operator"

// Suppose you want to check if a number is between 0 and 100. You're essentially checking if it's "greater than or eqaul to 0" and "less than or equal to 100."

// if (number >= 0 && number <= 100 ) {
//     console. log (number + " is between 0 and 100, both included");
// }


// The && operator ("and") can apply to both types of boolean values. true will only be the result of the statement if both conditions are true.

// Write a program that helps people decide what wear based on the weather using if/else

// Sunnny- (Shorts, Flip Flops, Sunglasses and Golf T-shirt)
// Windy-  (Long Trouser, T-shirt, Jersey and takkies)
// Raining- (Boots, Jean Trousers, T-shirt, Jacket and have an umbrella



// let weather_condition = prompt ("What's the weather like today?");
// if (weather_condition === "sunny" ) {
//     console.log ( "Since its sunny today let's wear a : Short, golf T-shirt, flip flops and sunglasses" );
//     alert ( "Since its sunny today let's wear a : Short, golf T-shirt, flip flops and sunglasses" );
// }

// else if ( weather_condition === "windy" ) {
//     console.log ( "Since its windy today let's wear some : trousers, T-shirt, takkies and a jersey" );
//     alert ( "Since its windy today let's wear some : trousers, T-shirt, takkies and a jersey" );
// }

// else if ( weather_condition === "rainy") {
//     console.log ( "Since its rainy today let's wear a : trouser,T-shirt, boots and a jacket" );
//     alert ( "Since its rainy today let's wear a : trouser,T-shirt, boots and a jacket" );
// }

// else {
//     console.log ('ERROR 404');
//     alert ('Invalid weather condition');
// }

// Do the same but with  a switch and a break statement

var weather = prompt ('What is the weather like?');

switch (weather) {
    case 'sunny':
    console.log ( "Since its sunny today let's wear a : Short, golf T-shirt, flip flops and sunglasses" );
    alert ( "Since its sunny today let's wear a : Short, golf T-shirt, flip flops and sunglasses" );
        break;
    
    case 'windy': 
    console.log ( "Since its windy today let's wear some : trousers, T-shirt, takkies and a jersey" );
    alert ( "Since its windy today let's wear some : trousers, T-shirt, takkies and a jersey" );
        break;

    case 'rainy': 
    console.log ( "Since its rainy today let's wear a : trouser,T-shirt, boots and a jacket" );
    alert ( "Since its rainy today let's wear a : trouser,T-shirt, boots and a jacket" );
        break;


    default:
    console.log ('ERROR 404');
    alert ('Invalid weather condition');
        break;
}
