/this is Chapter-10 Advanced Functions in javascript./;
// advanced functions represent functions are also values.

// note - Hoisting :- it means calling the function before we create it.

// functions can also be stored in variables.
const function1 = function greet(){
  console.log('hello')
}

function1();

// anonymous functions or functions without names
const function2 = function(){
  console.log('hello')
}

function2();

// functions can also be accessed using objects.
const objf = {
  name: 'ak',
  age: 20,
  fun: function name(){
    console.log('hii');
  }
};

objf.fun();


// the most important Advanced Functions in js are:-
// 1. SetTimeOut :- it allow us to run a function into future or after some time.
// it takes two parameters SetTimeOut(function,time in milliseconds)or how long to wait after running this function.
// 1000 milliseconds = 1 second.

// this code is also an example of asyncronous code where 
// computer does not wait for settimeout and immediately print next line of code.
setTimeout(function(){
  console.log('hii timed out')
  console.log('504')
},4000);

console.log('404')
// synchronous code :-this is an default running principle 
// where computer will wait for one line before going to the next line.
// ...................................................................................................................



// 2. SetInterval():-it allow us to run a function into future every time after the time interval is complete again and again.
// it takes two parameters SetInterval(function,time in milliseconds)or how long to wait after running this function again and again.
// 1000 milliseconds = 1 second
// it is also an asynchronous code.
// setInterval(function(){
//   console.log('times up')
//   console.log('808')
// },154000);

// console.log('404')
// // to stop set interval as set interval returns a number we can use this id to stop it.
// // to stop the interval we use clear the interval.
// clearInterval();
// ...................................................................................................................



// use of For Each method in place of a complex for loop we can use this function it is easier to read.
// it takes two parameter and return them which are(value,index) of an array it is mostly prefered in looping.
Array = 
['make dinner','make coffee',
  'make cum'].forEach((value,index) =>{
    console.log(index);
    console.log(value);  })

// ...................................................................................................................



//1.
const add = function(){
  console.log(5+3);
}

add();
add();
// ...................................................................................................................



// Arrow Functions :- they are similar to regular functions but are easier to write.
const ArrowFunction = () =>{
  console.log('hello world.')
}
ArrowFunction();

// when arrow functions have one parameter these round brackets are not needed.
const OneParameter = param => {
  console.log(param);
}
console.log('hello')

// these arrow functions are also used in forming one line functions.
// one they are on same line curly brackets are optional.
const oneAdd = () => 5+3;
console.log(oneAdd());

// Arrow functions are mostly used when passing a function into another function.
// saving function in an object we should only use regular functions not arrow functions.


// use of addEventListners in our js  they are used in place of onclick='' attribute.

// extra functions maps and filter

// console.log([1,2,3]).map((value,index) => {
//   return value*2;
// });


// ADvanced Functions exercises.

// 1.
const multiply = (a,b) =>{
  console.log(a*b)
};
multiply(5,5);

const multiply1 = (a,b) => console.log(a*b);
multiply1(5,4);
// -------------------------------------------

// 2.
function countPositive(array) {
  let count = 0; // Initialize count as a number
  array.forEach((value) => {
    if (value >= 0) { // Use the correct comparison operator
      count++;
    }
  });
  console.log(count);
}

countPositive([1, -3, 5]); // Output should be 2
// -------------------------------------------


// 3.
function addNum(array1, num) {
  const result = array1.map((value) => value + num);
  console.log(result);
}

addNum([1, 2, 3], 2); // Output: [3, 4, 5]
// -------------------------------------------


// 4.
function removeEggs(arr) {
  const res = arr.filter((value) => value !== 'egg');
  console.log(res);
}
removeEggs(['egg', 'apple', 'egg', 'egg', 'ham']); // Output: ['apple', 'ham']

// 5.
function removeEggs2(arr) {
  let count = 0;
  const res = arr.filter((value) => {
    if (value === 'egg') {
      count++;
      return count > 2; // Filter out after the first two 'egg' occurrences
    }
    return true; // Include all other values
  });
  console.log(res);
}

removeEggs2(['egg', 'apple', 'egg', 'egg', 'ham']); // Output: ['egg', 'apple', 'egg', 'ham']


