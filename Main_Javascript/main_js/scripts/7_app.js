/this is Chapter-7 Objects in javascript./

// #objects help in grouping mutiple values together.
// objects has many property value pairs which are sepreated by comma.

const product = {
  Name : 'molest',
  price : 50,
  'state': 'Mp'
};
console.log(product)

// this is how we access objects using dot notation.
console.log(product.Name)
console.log(product.price)

// another way to access objects is using square bracket notation.
// this is used when dot notation doesn't work.
console.log(product['Name'],product['price']);

// this how we change values in object.
product.Name = 'pepsi'
product.price = 150
console.log(product)
console.log(product.Name);
console.log(product.price);

// this is how we add value to an object.
product.new_property = true
console.log(product)

// deletion in objects.
delete product.new_property;
console.log(product)


// use of nested objects in js.
const product2 = {
  id : 32,
  Name2 : 'colgate',
  tag : 'veg',
  rating : {
    stars : 4.5,
    count : 87
  }
}

// this is how we access nested objects.
console.log(product2.rating.count);
console.log(product2)

// we can also add functions in an object.
const product3 = {
  id : 32,
  Name2 : 'colgate',
  tag : 'veg',
  rating : {
    stars : 4.5,
    count : 87
  },
  fun: function function1(){
    console.log('this is an function.')
  }
}

product3.fun();
// ---------------------------------------------------------------------------------------------
// OTHER type of objects.
// 1.built-in objects are:-

  // 1.console.log
  // console properties
  // this is also known as auto-boxing.as js wraps strings in an special object automatically.
  console.log('Akshat_Sharma'.length);
  console.log('Akshat_Sharma'.toUpperCase());
  // 2.Math.random

// 2. more built-in objects are:-
/*
  1.JSON.
  2.Local Stoarage.
*/

// #JSON - it helps in working with json it stands for (javascript object notation)
// it is similar to js object but with less features it is mostly understanded with all programming languages.
// we use this to send data between computers using diffrent programming languages.
// we also use this to store data.

// json objects help in converting js object in json object.
// the result json gives is actually a string.

// this is how we use json for converting js object in json object.
console.log(JSON.stringify(product3));
console.log(typeof JSON.stringify(product3) )

// for converting json object back to js object we use parse method.
console.log(JSON.parse(JSON.stringify(product3)))

// simple way
const string = JSON.stringify(product3);
console.log(JSON.parse(string))
// ---------------------------------------------------------------------------------------------

// 2.Local Stoarage.
// Local Stoarage. - it is used in js as variables are lost when we refresh page if we store our values
// in local stoarage we  can access them any time wheather we refresh the page or not.
// localStorage.setItem()
// localStorage.getItem()

// Refrence in objects.
// this is called copy by refrence.as objects are actually refrences.
const object1 = {
  message:'hello',
  pride :789
}
const  object2 = object1;

// destructuring shortcut for objects.
const {message,pride} = object1;
console.log(message)
console.log(pride)

// objects exercises.
//1.
const amazon_pd = {
  pd_name : 'Basketball',
  pr_price : 2095
}
console.log(amazon_pd)
console.log(amazon_pd.pr_price = 3100)
console.log(amazon_pd.pr_price)
console.log(amazon_pd['delivery-time'] = '3 days')
console.log(amazon_pd)
// --------------------------- 


// 2.
const pr1 = {
  pr1_name: 'ak',
  pr_price: 2000 // Changed property name to pr_price for consistency
};
const pr2 = {
  pr2_name: 'ck',
  pr_price: 2000 // Changed property name to pr_price for consistency
};

// it returns the product that is less expensive
function compare_pd(product1, product2) {
  if (product1.pr_price < product2.pr_price) { // Fixed comparison logic and syntax error
    console.log(product1.pr_price);
  } else {
    console.log(product2.pr_price);
  }
}
compare_pd(pr1,pr2);

// it returns true if product prices are same and false otherwise.
function compare_pd_2(product1, product2) {
  if (product1.pr_price === product2.pr_price) { // Fixed comparison logic and syntax error
    console.log(true);
  } else {
    console.log(false);
  }
}
compare_pd_2(pr1,pr2);
// --------------------------- 

// 3.
console.log('GOOD MORNING'.toLowerCase())

console.log('test'.repeat(2))