/this is Chapter-3 Strings in javascript./

// string representaion in single and double couts.
console.log('hello world!')
console.log("Good morning.")

// string concatenation.
console.log('some' + 'where')
console.log('some' + 'where' + 'inworld')

//to detect type of data in js.
console.log(typeof 'hello world!')
console.log(typeof 5)
console.log(typeof 5.36)

//string concat problem in js.
console.log('$' + 20.75 + 7.99)

//this is how we deal with string concat problem.
console.log('$' + (20.75 + 7.99))//this creates new problem.

//2nd way to deal with concat problem in js.
console.log('$' + ((2075 + 799)/100))

console.log('items ('+(1+1)+'): $' + ((2075 + 799)/100))

// Escape characters in js.
// 1.(\') it is called single character escape quot.
console.log("I\'m learning javascript.")
// 2.(\n) it is called new line escape quot.
console.log("I\'m learning \n javascript.")

// use of backtik( ` ` ) in js it also known as template string used to form string.
// it is method which is used to perform interpolation in the string/.
// it is used to deal with string concat problem.
console.log(`hello world`)

// without interpolation.
console.log('items ('+(1+1)+'): $' + ((2075 + 799)/100))

// after using interpolation.
console.log(`items (${1+1}): $${(2075 + 799)/100}`)

// using template string to create  multi line string.
console.log(`hello
  world this where we were born.`)

//exercises based on javascript Strings..
//1.
console.log('My name is:')
console.log('Akshat')
// ---------------------------

//3.
console.log('My name is: ' + 'Akshat')
// --------------------------- 

//4.
let total = 5+3
console.log(`total cost: $${total}`)
// console.log(alert('hello'))
// --------------------------- 

//5.
let total1 = (599 + 295)/100 
console.log(`total cost: $${total1}`)
console.log('Thanku come again!')