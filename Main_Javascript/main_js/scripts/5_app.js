/this is Chapter-5 Booleans and If statements in javascript./;

// booleans are another type of value they are (True and False.)
console.log(3 > 5);
console.log(10 > 5);

//two type of booleans.
console.log(typeof true);
console.log(typeof false);

//use of if else statements.
let age = 18;
if (age >= 18) {
  console.log("you can drive");
} else if (age == 18) {
  console.log("you are an adult you can  drive ");
} else {
  console.log("you cannot drive");
}

// logical operators in js.
// 1.(&&) AND operator it is only true when both condition are true and vice-versa.
// it is also known as guard operator.
console.log(true && true);
console.log(true && false);

// 2.(||) OR operator it is always true if a single condition is true and vice-versa.
// it is also known as default operator.
console.log(false || false);
console.log(true || false);
// 3.(!) not operator
console.log(!true);

// Truthy values and Falsy values in js.
// @Falsy values  :- 0 ,'' ,NAN,undefined
// @truthy values :- any value which is not in the falsy  list is truthy
if (5) {
  console.log("truthy");
}
if (0) {
  console.log(false);
}

// Shortcuts for if statements.
// 1.Ternary Operators (?).

// before using ternary operator.
if (true) {
  ("truthy");
} else {
  ("falsy");
}
// after using ternary operator.
true ? 'truthy': 'falsy'
// another benift of using ternary operator is that we can store whole statement in a variable.
const result = 0 ? 'truthy': 'falsy'
console.log(result)
