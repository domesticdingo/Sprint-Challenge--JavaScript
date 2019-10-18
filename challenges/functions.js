// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

const people = ['Tim','Tom','Tam','Tem'];

function getLength(arr,cb) {
  return cb(arr.length);
}

const callOne = getLength(people, getLength => `There are ${getLength} people.`);

console.log(callOne);


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function greeting(x, y) {
  return `Hello ${x} ${y}, nice to meet you!`;
}

function consume(x,y,cb) {
  return cb(x,y);
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: In js, the variables in a function don't just exist for the duration of the function's execution. 
// Closures create an environment that consists of any variables that are in scope at the time of creation of the closure.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
