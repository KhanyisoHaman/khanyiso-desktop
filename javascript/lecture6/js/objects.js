// Objects

// Think about objects in non-programming sense, like pen. A pen can have different ink colors, be manufactured by different people, have a different tip, and many other properties.

// JavaScript & Objects

// Like many other languages, JavaScript involves programming objects, so we can say it's an object-oriented language. It provides a number of predefined objects while  also letting you create your own.

// Create an Object


// let pen = {
//     type: "ballpoint",
//     color: "blue",
//     brand: "Bic"
// };

// After creating the object, you can access the value of its properties using dot notation such as myObject.myProperty

// console.log(pen.type); 
// console.log(pen.color);
// console.log(pen.brand);

// Create an sentence or paragrph saying what pen you using what type,color or brand


// prompt("I like using a " + pen.brand + " pen  that is " + pen.color +  pen.brand + (' type'));


// Create a cake in JavaScript that has several properties:

//  Flavor, vanilla, chocolate, ,etc
// price in madibas
// Layers


// let cake = {
//     flavor : "Chocolate Chip with vanilla icing",
//     price : "R950",
//     layers : "5",
//     occasions : "Reunion"
// };

// cake.occasions = "Funeral";
// cake.layers = 5 + 3;

// alert("Good Morning, Mr West. I have completed your order which is a: " + cake.occasions + " cake, " + cake.flavor + " that has " + cake.layers  + " layers which will cost you " + cake.price ); 

// console.log("Good Morning, Mr West. I have completed your order which is a: " + cake.occasions + " cake, " + cake.flavor + " that has " + cake.layers  + " layers which will cost you " + cake.price ); 


// Methods on Objectx

// We had to write lengthy console.log statements each time to show the cake description. There's a cleaner way to accomplish this.

// Adding a method to an object

// Describe a cake


// function describe(cake) {
//     var description = "The " + cake.occasions + " cake has a " + cake.flavor + " flavor, " + cake.layers + " layers, and costs " + cake.price + ".";
//     return description;
// }

// console.log(describe(cake));

// Now for an alternative approach: creaing a describe property that houses  a method

let cake = {
    flavor : "Chocolate Chip with vanilla icing",
    price : "R950",
    layers : "5",
    occasions : "Reunion",


describe: function (flavor,price, layers, occasions) {
    var description = "The " + this.occasions + " cake has a " + this.flavor + " flavor, " + this.layers + " layers, and costs " + this.price + ".";
    return description;
    }
};

cake.flavor = "fried chips";

// console.log(cake.describe());



let intern = {
    instuition : "Life Choices Academy",
    postion: "Full stack intern",
    duration: "2 years",
    salary: "R7 500.60",

describe: function () {
    var internship = "Greetings, Emma K. We running internship, we would like a student from " + this.instuition + " who would be a " + this.postion + " for " + this.duration + " their monthly salary will be" + this.salary + " I will hear from you soon.";
    return internship;
    }

};

console.log(intern.describe());