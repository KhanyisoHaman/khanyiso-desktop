// Constructor Functions

// To create an object using constructor functions, we simply write a standalone function containing the "init" functionlity that we want for our object. Instead of calling it init, this function will have the name of our object's "class"

// let Pastry = {
//     init: function (type,flavor,levels,price,occasion) {
        
//     }
// }






// It will now be like this

function Pastry(type,flavor,levels,price,occasion) {
    this.type = type;
    this.flavor = flavor;
    this.levels = levels;
    this.price = price;
    this.occasion = occasion;
}

// Now, to instantiate it, instead of calling and then an init function, we'll simply do

// new Pastry(type,flavor,levels,price,occasion);

// What about the other function that was defined by our Pastry object, though? Remember that our pastries had a "describe" function:

// This is where the Prototype comes in again.

// Remember that the Pastry object in the previous example served as the prototype for all the pastries we've created. All the functions, like init and describe, that we had defined on the Pastry object, were automatically avaible on all the pastries because we passed Pastry in to Object.create() when we created them.

// Using the constructor function is slightly different, though. We canlt just add properties to our Pastry construtor function, and expect them to be present on the instantiated instances of our class, because constructors aren't the same thing as the prototype of the objects they create.

// Now that we're using a constructor function, we'll assign our describe function to the Pastry prototype like this:

function Pastry(type,flavor,levels,price,occasion) {
    this.type = type;
    this.flavor = flavor;
    this.levels = levels;
    this.price = price;
    this.occasion = occasion;
}

Pastry.prototype.describe = function() {
    var decsription = "The " + this.type + " has a " + this.flavor + " and contains " + this.levels + " layer with an inexpensive price of " + this.price + ", which is meant for  " + this.occasion + " occasion";
    return decsription;
}

// Prevously







// Now, using constructor functions, we can instantiate our objects on just

var muffin = new   Pastry("muffin", "blueberry", 1, "R20", "breakfast");
var cake = new   Pastry( "cake", "vanilla", 3,  "R600" + "birthday");
var bunnychow = new Pastry( "bunnychow", "curry", 1, "R50" + "guys night out" );

console.log(muffin.describe());
console.log(cake.describe());
console.log(bunnychow.describe());


function Intern(company,salary, pctype, duration, workingHRS) {
    this.company = company;
    this.salary = salary;
    this.pctype = pctype;
    this.duration = duration;
    this.workingHRS = workingHRS;
}

Intern.prototype.internship = function () {
    var description = "Hi Emma K, I hope you doing well. We at " + this.company + " have a internship opportunity for 6 of your prospective students. The internship will run for" + this.duration + " their montly stipend will be" + this.salary + ". They'll be using a " + this.pctype + ", and their weekly working hours will be " + this.workingHRS;
    return description;
}

var deloitte = new Intern("deloitte", "R12 000", "Macbook", "12 months", "40 Hours");

// console.log(deloitte.describe());


// Task

function Jobs(vacancy,salary,duration,workingHrs,company) {
    this.vacancy = vacancy;
    this.salary = salary;
    this.duration = duration;
    this.workingHrs = workingHrs;
    this.company = company;
}

Jobs.prototype.describe = function() {
    var description = "Greetings, People of Delft  we are from " + this.company + " we have 5 spots for " + this.vacancy + " the monthly salary is between " + this.salary + " depending on their skills, it is for " + this.duration + " and the working hours is about " + this.workingHrs + " If anyone is interested, email jamie on jamie@" + this.company + ".com";
    return description;
}

var github = new Jobs("web developer", "R18 000 - R23 000", " 3 years", "35 hours", "github");
var slack = new Jobs("reception", "R5 000 - R9 000", "2 years", "45 hours", "slack");
var ava = new Jobs("Project Manager", "R15 000 - R19 000", "1 year", "45 hours", "AVA");

console.log(github.describe());
console.log(slack.describe());
console.log(ava.describe());

