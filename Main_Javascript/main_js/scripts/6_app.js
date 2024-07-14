/this is Chapter-6 Functions in javascript./

// Corrected functions implementation in js.
function factorial(n) {
  // Fixed the base case condition
  if (n === 0 || n === 1) {
    return 1; // The factorial of 0 or 1 is 1
  } else {
    return n * factorial(n - 1); // Correctly implemented the recursive call
  }
}

console.log(factorial(6)); // Added console.log to display the result

//use of return statemnet it helps in getting the value out of the function.
function avg(a,b){
  return a+b/2;
}
console.log(avg(4,2));

//use of parameters in js a parameter helps to put a value into the function.
function CalculateTax(parameter1){
  console.log(parameter1*0.1)
}
CalculateTax(2000)
CalculateTax(5000)

console.log(50*1.6)
console.log(32/1.6)