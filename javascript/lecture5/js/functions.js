// ===== functions ===== //

//  A function is a group of instructions that performs a particular task.

function sayHello() {
    console.log('Hello');
 }
 
 console.log('start of program');
 sayHello();  //calling the function
 console.log('End of program');
 
 // declaring a function
 
 // creating a function is called declaring
 
 // the keyword return indicates that a return value will be given, which is specified immediately after the word.
 
 // function sayHello() {
 //     return 'hello';
 // }
 
 // console.log('Start program');
 // let result = sayHello();
 // console.log(result);
 // console.log('End of program');
 
 
 // function message() {
 //     return 'Good Morning';
 // }
 
 // console.log('greetings');
 // let result = message();
 // console.log(result);
 // console.log('BYE BYE');
 
 //  ======
 // declare myFunction
 // function myfunction() {
 // calculate return value
 // ..
 // return returnValue;
 // }
 
 // task //
 // create a function with function name sayHello and parameter name
 // declare a variable inside the funtion the variable name to be message
 // the function should display Hello, name of the person.
 
 //  parameter --- sayHello(name)
 let lastname = 'Davids';
 
 function sayHello(name) {
    var message = 'Hello, ' + name + '!';
    return message;
 }
 
 console.log(sayHello('Taylor ' + lastname ));
 
 //  ===== string ===== //
 
 let message = 'Hello there ';
 let name = 'Taylor';
 console.log(message + name);
 // break line
 console.log('java \nis not javascript' .length);
 
 // uppercase //
 let animal = 'Tiger ' + 'lion';
 console.log(animal === 'Tiger ' + 'lion');
    uppercase = animal.toUpperCase(); //uppercase // .toLowerCase -- lowercase
 console.log(animal.toUpperCase()[3]); //which letter of anmial