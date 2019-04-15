// Arrays

// An is a data type that can store a set of elements.

// How to create our list of movies in the form of a table.

let movies = ["PS I Love You", "Titanic", "What men want"];

// Create a table with a pair of square brackets: []. Everything within the brackets makes up the array.

// Since an array contains multiple things, its's good to name the array using a plural (for example, movies).

// Identify an array's size

// The number of elements stored in a table is called its size. How to access it.

console.log(movies.length);

// Access an element in an array

// Each item in an array is identified by an number called an(it's) index. We can represent an array as a set of boxes, each storing a specfic value and associated with an index. Here is how one might represent the films array:

// " " "" ""

console.log(movies[0]); //will be "PS I Love You"

console.log(movies[1]); // will be "Titanic"

console.log(movies[2]); // will be "What Men Want"

console.log(movies[3]); //will be undefined


// That's exactly the way you accessed characters in a string! The same golden rules apply:

// The index of the first element of an array is 0, not 1.

// The highest index number is array's length minus 1

// Using an invalid index to access a JavaScript array element returns the value undefined.


// Add an element to an array

// Let's say you just watched Captain Marvel and you want to add it to the list. Here's how you'd do so:

movies.push("Captain Marvel");

console.log(movies[3]); //will show "Captain Marvel"



